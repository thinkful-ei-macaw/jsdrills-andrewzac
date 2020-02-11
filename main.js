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

