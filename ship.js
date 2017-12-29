function Ship() {
	// so it always starts in the middle of the window
	this.x = width/2;
	this.y = height - 20;
	this.xdir = 0;
	this.toDelete = false;
	this.w = 20;
	this.h = 60;
	this.shipR = this.x/this.y;

	var shipColor = '#FE9497';
	var count = 0; // counts number of hits


	this.show = function() {
		// ctr for ship object
		fill(shipColor);
		rectMode(CENTER)
		rect(this.x, this.y, this.w, this.h);
	}

	this.shrink = function() {
		this.w -= 2;
		this.h -= 2;
		count++;
	}


	this.shipHit = function() {
		if (count === 1) {
			shipColor = '#DD4649';
		} else if (count === 2) {
			shipColor = '#FC6E72';
		} else if (count === 3) {
			shipColor = '#ED3035';
		} else if (count === 4) {
			shipColor = '#DD4649';
		} else if (count === 5) {
			shipColor = '#FEBEC0';
		} else if (count === 6) {
			shipColor = '#E73034';
		} else if (count === 7) {
			shipColor = '#DD4649';
		} else if (count === 8) {
			shipColor = '#FEBEC0';
		} else if (count === 9) {
			shipColor = '#DD4649';
		} else if (count === 10) {
			shipColor = '#FE9497';
		} else if (count === 11) {
			shipColor = '#FEBEC0';
		} 
	}

this.destroy = function() {
		// set flag to delete the drop
		if (count === 11) {
			this.toDelete = true;
			background('#C90904');
		}

	}



	// recieve value and set x direction to value
	this.setDir = function(dir) {
		this.xdir = dir;
	}

	this.move = function(dir) {
		// * 5 allows quicker movment of 5 pixels
		this.x += this.xdir * 5;
		if (this.x > 600) {
			this.x = 600;
		} else if (this.x < 0) {
			this.x = 0;
		} // keeps in bounds 
	}
}