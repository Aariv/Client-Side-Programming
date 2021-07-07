var myCircle = {
	radius: 5.5,
	created: new Date(),
	getArea: function() {
		return this.radius * this.radius * this.radius;
	}

	toString: toString
};

function toString() {
	return "Circle {radius: "+this.radius+", created: "+this.created+"}";
}

console.log(myCircle.getArea());

console.log(myCircle.toString());
console.log(myCircle);

console.log(typeof myCircle.getArea); // function
console.log(typeof myCircle.toString); // function
console.log(typeof myCircle.created); // object
