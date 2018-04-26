'use strict';

function main() {
	//showModal('WELCOME', 'test text', 'Okay');
	if (STATE.resources.milk > 1000) {
		return showModal('WINNER', 'YAY YOU HAVE ENOUGH MILK!');
	}
}

// REQUIRED: define images we want to use
const IMAGES = {
	corn: 'https://i.imgur.com/usaBR6Y.png',
	sparse_corn: 'https://i.imgur.com/QTWmerf.png',
	supersparse_corn: 'https://i.imgur.com/SQhRlHt.jpg',
	//killer: 'https://i.imgur.com/AArYc8f.jpg',
  	cow: 'https://i.imgur.com/J5bZjhm.png',
  	sparse_cow: 'https://i.imgur.com/2XvXm1J.png',
	bug: 'https://i.imgur.com/HLGXqWq.png'
};



// REQUIRED: configure the grid
//const GRID_TYPE = 'hex'; 
const GRID_ROWS = 5;
const GRID_COLS = 10;
const GRID_CELL_SIZE = 70;
const GRID_EMPTY = [33, 168, 0];
const BACKGROUND_COLOR = [119, 209, 255];

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
		milk: 0,
	},

	cashPerCrop: 50,
	milkPerCow: 50, 
	investment: 0,
	gmo: 0,
 	corns: 0,
 	win: false,
}




				// Define a Wolf "item"
class Bug extends Item {
  				// All wolves start out healthy
	init() {
		this.sick = false;
	}

  // No cost, can't buy wolves
//	get cost() {
//		return {}
//	}

  // On mouseover, let us know
  // if the wolf is sick or not
	get info() {
    if (this.sick) {
      return 'your crops are infected!';
    } 
	}

  // Show a different image for sick
  // vs healthy wolves
	get image() {
		if (this.sick) {
			return 'bug'
		}
		else {
			return 'bug'
		}
	}
}


// Define a Pig "item"
class Cow extends Item {
  // Pigs cost $5
	get cost() {
		return {
			corn: 500
		}
	}

		init() {
		this.quantity = 3;
	}

	get info() {
		return 'you bought a cow'

	}

	get image() {
		if (this.quantity < 3) {
			return 'sparse_cow'
		} else {
			return 'cow'
	}
}




  // When a Wheat is clicked on...
	onClick() {
    // Remove a bushel
		this.quantity -= 1;

    // Give the player money depending on the STATE.cashPerCrop variable
		STATE.resources.milk += STATE.milkPerCow;
		

    // Check if any bushels remain.
    // If not, destroy this wheat and
    // let the player know
		if (this.quantity <= 0) {
			this.destroy();
			showMessage('You milked the cow!')
		}
	}

  // When a new Wheat is placed,
  // increment the wheat count.
  // We'll use this to keep track
  // of water usage across the farm
  onPlace() {
    STATE.cows++;
  }

  // When a Wheat is destroyed,
  // decrement the wheat count
  onDestroy() {
    STATE.cows--;
  }

}


























// Define an Aqueduct "item"
//class Killer extends Item {
	//get cost() {
	//	return {
	//		money: 25
	//	}
	//}

	//get info() {
	//	return 'Cool killer'
	//}

	//get image() {
	//	return 'killer'
	//}

  // When the player places an Aqueduct,
  // increment the amount of Aqueducts the player
  // owns. We'll use this to figure out how much
  // water the player gets.
//  onPlace() {
  //  STATE.killers++;
  //}

  // If an Aqueduct gets destroyed,
  // reduce the number of Aqueducts the player owns.
  //onDestroy() {
    //STATE.killers--;
  //}
//}

// Define a Wheat "item"
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
			money: 30,
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
		STATE.resources.money += STATE.cashPerCrop; 

    // Check if any bushels remain.
    // If not, destroy this wheat and
    // let the player know
		if (this.quantity <= 0) {
			this.destroy();
			showMessage('You lost some corn!')
		}
	}

  // When a new Wheat is placed,
  // increment the wheat count.
  // We'll use this to keep track
  // of water usage across the farm
  onPlace() {
    STATE.corns++;
  }

  // When a Wheat is destroyed,
  // decrement the wheat count
  onDestroy() {
    STATE.corns--;
  }

// Runs every frame
	update(neighbors) {
    // Pigs expand to adjacent wheat plots
    // with 1% probability
		neighbors.forEach(function(neighbor) {
      // If the neighbor is a Wheat...
			if (neighbor.item instanceof Corn) {
        // With 1% probability...
				if (Math.random() < 0.001) {
          // Create a new Pig
					var bug = new Bug();

          // Place the Pig where the Wheat was
					GAME.grid.place(bug, neighbor.x, neighbor.y);
				}
			}
		})

    // Wolves spawn on pigs with
    // a 0.5% probability
		if (Math.random() < 0.00005) {
      // Create the Wolf
			var bug = new Bug();

      // Destroy this Pig
			this.destroy();

      // Place the Wolf where this Pig was
			GAME.grid.place(bug, this.x, this.y);
		}
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

// Define another bonus
//var investmentBonus = new Bonus(
  //'Roth IRA',
  //'Make your money work for you', {
	//	money: 100
	//}, function() {
    // Set the investment variable to 0.1
	//	STATE.investment = 0.1;
	//});


// Initial setup of the game
function init() {
  // Create a starting wheat plot
	//var corn = new Corn();
	//GAME.grid.place(corn, 0, 0);
 // STATE.corns += 1;
	showModal('MWAHAHAHAHA', 'YOU WANTED ICE CREAM WELL YOU BETTER MAKE MILK, COWS NEED TO BE FED, MAINTAIN YOUR FARM OR NO ICE CREAM FOR YOU! HAHAH!');
  // Setup the Menu for buying stuff
	var menu = new Menu('Farm Mall', [
		new BuyButton('Buy corn', Corn),
		new BuyButton('Buy cow', Cow),
		//new BuyButton('Buy Pesticide Killer', Killer),
		new BuyButton('Upgrade GMO', gmoBonus),
		//new BuyButton('Open Roth IRA', investmentBonus)
	]);

 
  // Define a harvester which
  // compounds the amount of money the player
  // has based on their investment return rate
  defineHarvester('money', function() {
    return STATE.resources.money * STATE.investment;
  }, 2000);
}


// The game's main loop.
// We're just using it to set a background color
