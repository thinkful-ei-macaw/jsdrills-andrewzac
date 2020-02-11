'use strict';

const getYearOfBirth = age => {
  if (age < 0) {
    throw new Error('Age can not be negative.');
  }
  return 2020 - age;
};

const createGreeting = (name, age) => {
  if (name === undefined || age === undefined) {
    throw new Error('Arguments not valid');
  } else if (typeof age !== 'number' || typeof name !== 'string') {
    throw new TypeError('Invalid input type');
  }
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${getYearOfBirth(age)}.`;
};

try {
  const greeting1 = createGreeting('Zac', 24);
  console.log(greeting1);
} catch(error) {
  console.log('There is some error');
}

/****************
Function Drills 2
*****************/

// Jedi Name Drill

const jediName = (firstName, lastName) => {
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}

// To Infinity Drill

function beyond(num){
  if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY){
    console.log('And beyond');
  } else if (num > 0) {
    console.log('To infinity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else { 
    console.log('Staying home');
  }
}

// Cracking the Code Drill

const decode = (word) => {
  let secret = '';
  if (word[0] === 'a') {
    secret += word[1];
  } else if (word[0] === 'b') {
    secret += word[2];
  } else if (word[0] === 'c') {
    secret += word[3];
  } else if (word[0] === 'd') {
    secret += word[4];
  }
  return secret;
};


// How Many Days in a Month Drill

const daysInMonth = (month, leapYear = false) => {
  switch(month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return  `${month} has 31 days`;
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return  `${month} has 30 days`;
    break;
  case 'February':
    return leapYear ? 'February has 29 days' : 'February has 28 days';
  default: 
    throw new Error('Must provide a valid month.');
  }
};
  