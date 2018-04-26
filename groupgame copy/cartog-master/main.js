'use strict';

// REQUIRED: define images we want to use
const IMAGES = {
	corn: 'https://i.imgur.com/31EOPNB.jpg',
	sparse_corn: 'https://i.imgur.com/OqWfcxr.jpg',
	supersparse_corn: 'https://i.imgur.com/SQhRlHt.jpg',
	pkiller: 'https://i.imgur.com/AArYc8f.jpg',
  	cow: 'https://i.imgur.com/Mqiqycr.jpg',
	bug: 'https://i.imgur.com/EO4fXkn.jpg'
};

// REQUIRED: configure the grid
//const GRID_TYPE = 'hex'; 
const GRID_ROWS = 5;
const GRID_COLS = 10;
const GRID_CELL_SIZE = 70;
const GRID_EMPTY = [205, 244, 222];

// REQUIRED: define how our resources will be represented
const RESOURCES = {
	money: '💵',
	corn: '🌽',
	milk: '🍼'
}


// REQUIRED: define our game state.
// At minimum this must define initial values for your resources.
const STATE = {
	resources: {
		money: 100,
		corn: 0,
		milk: 0
	},

	cashPerCrop: 50,
	gmo: 0,
 	corns: 0
}











class Cow extends Item {
		get cost() {
		return {
			corn: 20
		}
	}

	get info() {
		return 'calf'
	}

	get image() {
		return 'cow'
	}

}













class Corn extends Item {

  // Initialize the Wheat with
  // 3 bushels
	init() {
		this.quantity = 3;
		this.sick = false;
	}



  // Corn costs money
	get cost() {
		return {
			money: 20,
		}
	}

  // Show a different tooltip
  // depending on how many bushels are left
	get info() {
		if (this.quantity < 2) {
			return 'This corn is almost gone!'
		} else if (this.quantity < 3) {
			return 'This corn is running low'
		} else {
			return 'This is some nice corn'
		}
    	if (this.sick) {
     	 return 'your crops are infected!';
	}
	}

  // Show a different image
  // depending on how many bushels are left
	get image() {
		if (this.quantity < 3) {
			return 'sparse_corn'
		} else if (this.quantity < 2){ 
			return 'supersparse_corn'
		} else {
			return 'corn'
		}
	}

  // When a Wheat is clicked on...
	onClick() {
    // Remove a bushel
		this.quantity -= 1;

    // Give the player money depending on the STATE.cashPerCrop variable
		STATE.resources.corn += STATE.cashPerCrop;

    // Check if any bushels remain.
    // If not, destroy this wheat and
    // let the player know
		if (this.quantity <= 0) {
			this.destroy();
			showMessage('You lost some corn!')
		}
	}

	onPlace() {
	    STATE.corns++;
	  }

	  // When a Wheat is destroyed,
	  // decrement the wheat count
	  onDestroy() {
	    STATE.corns--;
	  }
	}


	// Define a bonus
var gmoBonus = new Bonus(
  'Powerful GMO',
  'A more powerful GMO', {
		money: 50
	}, function() {
    // When purchased,
    // this bonus increases the cash per wheat
    // bushel by $100
		STATE.cashPerCrop += 100;
	});
// Initial setup of the game
function init() {
  // Create a starting wheat plot
	var corn = new Corn();
	GAME.grid.place(corn, 0, 0);
  STATE.corns += 1;

  // Setup the Menu for buying stuff
	var menu = new Menu('Farm Mall', [
		new BuyButton('Buy corn', Corn),
		new BuyButton('Buy cow', Cow),
		new BuyButton('Buy Pesticide Killer', Killer),
		new BuyButton('Upgrade GMO', gmoBonus),
		//new BuyButton('Open Roth IRA', investmentBonus)
	]);

	function main() {
	background(58, 170, 80);
}
