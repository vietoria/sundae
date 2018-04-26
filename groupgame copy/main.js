'use strict'; 

const IMAGES = [
	//wheat
	'https://i.imgur.com/K8swhvR.jpg',
	//sparse wheat 
	'https://i.imgur.com/voaoCxd.jpg'
]; 

const GRID_HEIGHT = 400; //in the unit pixels
const GRID_WIDTH = 400; 
const GRID_CELL_SIZE = 40; //try to make it divide with no remainders
const GRID_EMPTY = [244, 86, 66]; //color of the grid when it's empty


const RESOURCES = {
	money: '💰', //http://getemoji.com/
	corn: '🌽',
	milk: '🍼'

};

const STATE = {
	resources: {
		money: 100, 
		corn: 0, 
		milk: 0
	}, 
	cashPerCrop: 10, 
	investment: 0
};



class Corn extends Item { //convention in every programming language that classes are Capitalized
	init(){
		this.quantity = 3; 
	}


	get cost(){
		return {
			money: 20, 
			corn: 1, 
			milk: 0
		}
	}

	get info () {
		return `This is some nice corn ${this.quantity}`
	}

	get image () {
		if (this.quantity <3) { 
			return 'voaoCxd.jpg' //sparse wheat
		} else { 
			return 'K8swhvR.jpg' //wheat
		}
	}


	onClick () {
		this.quantity -= 1; 
		STATE.resources.money += Math.round(STATE.cashPerCrop * Math.random()); 
		if (this.quantity <= 0) {
			this.destroy (); 
			showMessage('You ran out of corn!');
		}

	}
}



var tractorBonus = new Bonus('Powerful Tractor', {
	money: 50
}, function() {
	STATE.cashPerCrop += 5; 
})



var investmentPortfolio = new Bonus('Investment Portfolio', {
	money: 100
}, function(){
	STATE.investment += 0.1; 
})



function init() {
	var corn = new Corn();
	GAME.grid.place(corn, 0, 0);

	var menu = new Menu('Farm Mall', [
		new Button('Buy Corn', tryBuy(Corn)), 
		new Button('Upgrade Tractor', tryBuy(tractorBonus)),
		new Button('Open Roth IRA', tryBuy(investmentPortfolio))
		])

	defineHarvester('trees', function() {
		return 1 * STATE.resources.money; 
	}, 2000); //milliseconds

	//investment 
	defineHarvester('money', function() {
		return Math.round(STATE.investment * STATE.resources.money); 
	}, 1000); 

	//taxes 
	defineHarvester('money', function() {
		return -Math.round(STATE.resources.money * 0.3)
	}, 10000);
	
	//random events such as frost 
	every(5000, function(){
		if (Math.random() < 0.05) {
			var frost = new Event('Early Frost', 'The frost came early and messed up your crops, that sucks', 
				[
					new Action('DEFROST', function() {
						STATE.resources.money -= 10; 
					}), 
					new Action('Do nothing', function() {
						STATE.cashPerCrop -= 5; 
						schedule(10000, function() {
							STATE.cashPerCrop += 5; 
							showMessage('Spring is Here!')

						})
					})
				])
		}
	});
}




function main() {
	background (106, 152, 221); 



}


