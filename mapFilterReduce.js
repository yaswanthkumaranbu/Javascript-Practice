const arr = [1, 2, 3, 4, 5];

function double(ele) {
  return ele * 2;
}
function isOdd(ele) {
  return ele % 2;
}

const output = arr.map((e) => console.log(e));

const output1 = arr.map(double);

const output2 = arr.filter(isOdd);

const sum = arr.reduce((acc, ele) => {
  acc = acc + ele;
  return acc;
}, 0);

const max = arr.reduce((max, ele) => {
  if (ele > max) max = ele;

  return max;
}, 0);

output1.push(99);

console.log(output);
console.log(output1);
console.log(output2);
console.log(sum);
console.log(max);

// Real world example

const users = [
  { firstName: "Gojo", lastName: "saturo", age: 29 },
  { firstName: "Adamas", lastName: "", age: 5000 },
  { firstName: "Aizen", lastName: "sasuke", age: 5000 },
];

const fullName = users.map((obj) => {
  return obj.firstName + " " + obj.lastName;
});

console.log(fullName);

const particularAge = {};

const particular = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(particular);

const firstNameWithAge = users
  .filter((ele) => ele.age < 30)
  .map((record) => record.firstName);

console.log(firstNameWithAge);

// anonymous function

const firstNameWithAge1 = users
  .filter(function (ele) {
    if (ele.age < 30) {
      return ele;
    }
  })
  .map(function (record) {
    return record.firstName;
  });

console.log(firstNameWithAge1);

const firstNameWithAge2 = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(firstNameWithAge2);
