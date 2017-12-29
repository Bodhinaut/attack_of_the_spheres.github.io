function Flower(x, y) {
	// so it always starts in the middle of the window
	this.x = x;
	this.y = y;
	this.r = 30;
	this.toDelete = false;
	var reverse2 = 600; // for movement up and down
	var reverse3 = 0;

	this.xdir = 1; // this is for the movement of the flowers as a whole 
	this.ydir = 1;

	this.shrink = function() {
		this.r -= 2;
	
	}

	this.destroy = function() {
		// set flag to delete the drop
		this.toDelete = true;

	}

	// move y down and change direction

	this.shiftDown = function() {
		if (reverse2 >= 300) {
		this.xdir *= -1; // reverse direction
		this.y += this.r; // this.r becuz it is the objects r
		reverse2 -= 30;
	} else if (reverse2 < 300) {
		this.xdir *= -1;
		this.y = this.y - 30;
		reverse3 += 30;
		if (reverse3 === 300) { // reset counter objects to continue loop up and down
			reverse2 = 600; // this is basically a shiftUp function
			reverse3 = 0;
		}
		
	  }
	}

	this.move = function() {
		this.x = this.x + this.xdir;
	}


	this.show = function() {
		// ctr for ship object
		noStroke();
		fill(255, 0, 200, 150);
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}

	
}