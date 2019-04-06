
// factory function creates objects!
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}

const circle = createCircle(1);


circle.draw();


// constructor function creates objects in a different way!
// i like constructor function syntax better!
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle2 = new Circle(1);
