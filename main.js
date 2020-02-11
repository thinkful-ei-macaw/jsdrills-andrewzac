/* eslint-disable strict */
const createGreeting = (name, age) => {
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${getYearOfBirth(age)}.`;
};

const getYearOfBirth = age => {
  if (age < 0) {
    throw new Error('Age can not be negative');
  }
  return 2020 - age;
};


try {
  const greeting1 = createGreeting('andy', 35);
  console.log(greeting1);
  
} catch(error) {
  console.log(error);
}

// eslint-disable-next-line no-console

