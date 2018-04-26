function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
    background (255, 0, 243); 
}
   // const IMAGES = {
	//title: 'https://i.imgur.com/kaKceHC.png', 
//}; 

  //var myFont; 
  function preload() {
  //myFont = loadFont('assets/sweetpea.ttf');

 	title = loadImage('https://i.imgur.com/ZPRINDU.png');
}


function draw()  { 

//get image()
//{
//	return 'title'
//}
	image(title, innerWidth/3.4, 5, title.width * 0.5, title.height * 0.5);
	//console.log(title.width);


 //image(title, 650, 435);
	//textFont(myFont);
    //textSize(20);
    //fill(255, 255, 255);
    //text('Ice Cream Shoppe!', 650, 435); 

}