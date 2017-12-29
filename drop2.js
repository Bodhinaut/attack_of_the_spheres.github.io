function Drop2(x, y, ra) {
	// so it always starts in the middle of the window
	// ra = radius of the alien 
	this.x = x;
	this.y = y;
	this.ra = ra;
	this.r = 6;
	this.toDelete = false; // var start as false, for drop flag


	this.show = function() {
		// ctr for ship object
		noStroke(); // not sure
		//fill(150, 0, 255);
		fill('#ff0066');
		ellipse(this.x, this.y, this.r * 2, this.r * 2); // shuld be var
	}

	this.evaporate = function() {
		// set flag to delete the drop
		this.toDelete = true;

	}




// below, if distance btween 2 circles is less than the sum of their radi
	this.hits = function(ship) {
		var d = dist(this.x, this.y, ship.x, ship.y);
		if( d < this.r + ship.shipR + 9) {
			return true; // when drop hits flower 
		}else {
			return false; // when drop misses flower
		}
	}

	this.move = function() {

		this.y = this.y +5;
	}
	
}