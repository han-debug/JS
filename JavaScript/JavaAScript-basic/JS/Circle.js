function Circle(r){
	this.r = r;
	this.temp = 2;
	this.getArea = function(){
		return this.PI*this.r*this.r;
	}
	this.ce = function(o = 9){
		console.log(o);
	}
}
Circle.prototype.PI = 3.1415;
Circle.prototype.getCircleArea = function(t = this.temp){
	return this.PI*t*t;
}