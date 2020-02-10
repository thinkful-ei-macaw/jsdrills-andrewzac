/* eslint-disable strict */
const createGreeting = (name, age) => {
  const yearOfBirth = 2020 - age;
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
};

const greeting1 = createGreeting('andy', 35);
// eslint-disable-next-line no-console
console.log(greeting1);