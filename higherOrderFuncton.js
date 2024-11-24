// Higher order function (A function which takes another function as an argument / returns a function)

radius = [2, 3, 4, 5, 6];
// 
const area = (radius) => {
  return Math.PI * Math.pow(radius, 2);
};

const calculate = (radius, logic) => {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

Array.prototype.calculate1 = (logic) => {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

Array.prototype.calculate = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

// map() function

console.log(radius.map((ele) => area(ele)));

// map() function

console.log(calculate(radius, area));

// calulate as function visible for all the arrays

console.log(radius.calculate(area));

// Arrow function call

console.log(radius.calculate1(area));
