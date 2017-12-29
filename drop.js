function Drop(x, y) {
	// so it always starts in the middle of the window
	this.x = x;
	this.y = y;
	this.r = 8;
	this.toDelete = false; // var start as false, for drop flag
	

	this.show = function() {
		// ctr for ship object
		noStroke(); 
		fill(150, 0, 255);
		ellipse(this.x, this.y, this.r * 2, this.r * 2); // shuld be var
	}

	this.evaporate = function() {
		// set flag to delete the drop
		this.toDelete = true;

	}




// below, if distance btween 2 circles is less than the sum of their radi
	this.hits = function(flower) {
		var d = dist(this.x, this.y, flower.x, flower.y);
		if( d < this.r + flower.r) {
			return true; // when drop hits flower 
		}else {
			return false; // when drop misses flower
		}


		

	}

	this.move = function() {

		this. y = this.y -5;
		
	}


	this.outOfBounds = function() {
		if (this.r > height) {

			
		}

	}


	
}