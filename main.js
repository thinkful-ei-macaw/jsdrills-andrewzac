/* eslint-disable strict */
const createGreeting = (name, age) => {
  if (name === undefined || age === undefined) {
    throw new Error('Arguments not valid');
  } else if (typeof age !== 'number' || typeof name !== 'string') {
    throw new TypeError('Invalid input type');
  }
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${getYearOfBirth(age)}.`;
};

const getYearOfBirth = age => {
  if (age < 0) {
    throw new Error('Age can not be negative');
  }
  return 2020 - age;
};


try {
  const greeting1 = createGreeting('Bob', 77);
  console.log(greeting1);
  
} catch(error) {
  console.log(`${error.name}: ${error.message}`);
}

// eslint-disable-next-line no-console

///////// FUNCTION DRILLS 2 ////////////

// Jedi Name
const jediName = (firstName, lastName) => {
  return lastName.slice(0, 3) + firstName.slice(0, 2);
};
console.log(jediName('sam', 'durrant'));

// To Infinity
const beyond = num => {
  if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
    console.log('And beyond');
  } else if (num > 0) {
    console.log('To infinity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else {
    console.log('Staying home');
  }
};
console.log(beyond(Number.MAX_VALUE * 2));

// Cracking the Code

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
}

console.log(decode('craft'));


// How Many Days in a Month?

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

console.log(daysInMonth('January', true));


// Rock Paper Scissors

const rockPaperScissors = (num) => {
  const arr = ['rock', 'paper', 'scissors'];
  const computer = Math.floor(Math.random() * 3) + 1;
  if (num === 1 && computer === 3) {
    return `${arr[0]} beats ${arr[2]}. You win!`;
  } else if (num === 3 && computer === 1) {
    return `${arr[0]} beats ${arr[2]}. Computer wins!`;
  } else if (num === 2 && computer === 1) {
    return `${arr[1]} beats ${arr[0]}. You win!`;
  } else if (num === 1 && computer === 2) {
    return `${arr[1]} beats ${arr[0]}. Computer wins!`;
  } else if (num === 3 && computer === 2) {
    return `${arr[2]} beats ${arr[1]}. You win!`;
  } else if (num === 2 && computer === 3) {
    return `${arr[1]} beats ${arr[2]}. Computer wins!`;
  } else if (num === computer) {
    return 'We have a tie!';
  } else {
    throw new Error('You need to enter a number between 1 and 3');
  }
};

try {
  console.log(rockPaperScissors(2));
} catch(error) {
  console.log(error.message);
}






