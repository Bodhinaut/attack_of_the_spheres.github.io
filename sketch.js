var ship;
var flowers = [];
var drops = [];
var drops2 = [];
var flowerDestroyed = 0;
var changeColor; // for background when you win
var win = false;
var lose = false;
var growthCount = 0;

function setup() {
	createCanvas(600, 600);
	ship = new Ship();
	for (var i = 0; i < 6; i ++) {
		flowers[i] = new Flower(i * 80 + 80, 60);
	}

	flower = new Flower();
alert('CONTROLS' + '\n' + 'MOVEMENT: LEFT and RIGHT directional keys \n' +
 'ACTION: Hit the SPACEBAR to shoot! \nPAUSE: If you wish to pause press BACKSPACE' );

alert('Please click OK to save the world from falling spheres!\nMove fast and shoot FASTER!');



}




// function for when you win 
function changecolors() {
    changeColor = 1;
    setInterval(change(), 4000);

}

// function for when you win 
function change() {
    if (changeColor === 1) {
        color = "#13073A";
        changeColor = 2;
    } else {
        color = "#530E53";
        changeColor = 1;
    } 
 
    background(color);
    
}




function draw() {
	background(51);
	ship.show();
	ship.move();
	shipDrops();
	alienDrops();
	dropsAndAliens();
	dropDelete();
	drop2Delete();
}

	// if 0 drops, show and move none, if 5, etc..
	function shipDrops() {
				for (var i = 0; i < drops.length; i ++) {
				drops[i].show();
				drops[i].move();
		for (var j = 0; j < flowers.length; j++) {
		if(drops[i].hits(flowers[j]) ) {
				flowers[j].shrink();
				if (flowers[j].r === 0) {
					flowers[j].destroy();
					flowerDestroyed++;
				}
			// get rid of drops after it encounters ship
					drops[i].evaporate();
				
			}

					if(flowers[j].toDelete) {
			// if this drop remove, use splice function to splice out of array
					flowers.splice(j, 1);	// splice out i, at 1
					}

		}
	}
			// artifically increased by 1 to exit increase loop
			if (flowerDestroyed === 7) {
				alert('You have saved the world from circular existence! Please refresh your browser to play again!');
				flowerDestroyed--;
				win = true;
			}
			// changes color to indicate winner 
			if (win === true) {
				//changecolors();
				background('#A40538');
				change();
				alert('YOU WIN! Please click OK, then refresh your browser champ! If you have seen this message twice please press OK!');
				
			}

			if (lose === true) {
				//changecolors();
				
				alert('YOU DIED! Please refresh your browser then press OK!');
				
			}

		
}

	function alienDrops() {
		// below is for alien/flower fire drops 2
		for (var i = 0; i < drops2.length; i ++) {
			drops2[i].show();
			drops2[i].move();
		if(drops2[i].hits(ship) ) {
			ship.shrink();
			ship.shipHit();
			drops2[i].evaporate(); // must evap after shrink
			ship.destroy();
			if (ship.toDelete) {
				delete ship.x;
				delete ship.y;
				lose = true;
			 } // above is in progress, deletes after ten hits?
			
		 }

	 }
}



	function dropsAndAliens() {
	var randomNumber; // for aliens to shoot 
	var edge = false;
	var attackSpeed = 75;
	
	// loop to show multiple flowers 
	for (var i = 0; i < flowers.length; i ++) {
		flowers[i].show();
		flowers[i].move();
		// ******************************************
 			randomNumber = Math.floor(Math.random() * (attackSpeed) );
  				if(randomNumber === 5) {
				var drop2 = new Drop2(flowers[i].x, flowers[i].y, flowers[i].r);  
				drops2.push(drop2);

				if (flowerDestroyed === 6) { // for boss to have big bullets
					drop2.r = 50;
					// find a way to increase bullet speed?
				}
  			}


  			// speed up shots if 3 are destroyed
  			if (flowerDestroyed === 3) {
  				attackSpeed = 6;
  			}else if (flowerDestroyed === 4) {
  				attackSpeed = 10;
  			} else if (flowerDestroyed === 5) {
  				attackSpeed = 5;
  				flowers[i].r += 0.50;
  				if (flowers[i].r > 300) { // specify size of last big flower
  					flowerDestroyed++;
  				}
  				if (flowerDestroyed === 6) {
  					flowers[i] = new Flower(500, 0); 
  					flowers[i].r = 250; // new flower radius size 
  					flowers[i].xdir = 4;
  					attackSpeed = 5;
  					
  				}
  			} 

		//**************** above aliens shooting 

		// below could be method, this will ensure the flowers dont 
		//go offscreen and they move 
		//makes whtever flower hits this space become the farther most
		//right flower,
		if (flowers[i].x > width || flowers[i]. x < 0 ) {
			edge = true;
		}
		// so they cant float off screen

		if (flowers[i].y > 570) { // repostion at top
			flowers[i].y = 10;
		} else if (flowers[i].y < 5) {
			flowers[i].y = 5;
		}

	}
		// so if right is true, loop thru them all again and reset x
		if (edge) {
			for (var i = 0; i < flowers.length; i ++) {
			// if any flower hits edge, all will shift down
			// and start moving to the left 
			flowers[i].shiftDown();
		}
	}



}


function dropDelete() {

	for (var i = drops.length - 1; i >= 0; i--) {
			if(drops[i].toDelete || drops[i].y === 20) {
			// if this drop remove, use splice function to splice out of array
				drops.splice(i, 1);	// splice out i, at 1
			}

		}

}

function drop2Delete() {
		for (var i = drops2.length - 1; i >= 0; i--) {
			if(drops2[i].toDelete || drops2[i].y === height || drops2[i].y > ship.y) {
			// if this drop remove, use splice function to splice out of array
				drops2.splice(i, 1);	// splice out i, at 1
			}
   		}

}


function keyReleased() {
	if (key != ' ') {
	ship.setDir(0); // when i lift the key, stop moving
	} 
}



function keyPressed() {
	// event triggered when user presses key, check keycode
	if(key === ' ') {
		var drop = new Drop(ship.x, height); // start ship x and bottom of screen 
		drops.push(drop); // when user hits space, add this event to array
		
		
	}

	if(keyCode === BACKSPACE) {
		alert('PAUSED\nPress OK to resume DAWG!');
	}


	if (flowerDestroyed === 6) {
		if(keyCode === ENTER) {
		var drop = new Drop(ship.x, height); // start ship x and bottom of screen 
		drops.push(drop); // when user hits space, add this event to array
		drop.r = 35;
		// maybe have do more damage? also stops movemnt for some reason 
		}
	}


	if (keyCode === RIGHT_ARROW) {
		// +1 move right
		ship.setDir(1);
		// keep from going off screen
	} else if (keyCode === LEFT_ARROW) {
		// -1 move left
		ship.setDir(-1);
	} // setir only when pressing key, want continuous movement 
}

