// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.

class Cat {
  constructor(name, breed) {
    this.species = 'cat';
    this.breed = breed;
    this.name = name;
    this.tiredness = 50;
    this.hunger = 50;
    this.loneliness = 50;
    this.happiness = 50;
  }

  sleep = (hours) => {
    this.tiredness -= hours * 5;
    this.happiness += hours * 1;
  };

  eat = (food) => {
    this.hunger -= food * 0.2;
    this.happiness += food * 0.1;
  };

  play = (minutes) => {
    this.loneliness -= minutes * 3;
    this.happiness += minutes * 5;
  };

  wait = (minutes) => {
    this.tiredness += minutes * 0.1;
    this.hunger += minutes * 1.5;
    this.loneliness += minutes * 1;
    this.happiness -= minutes * 2;
  };
}

const boots = new Cat('Boots', 'Siamese');

// B) Make Boots wait 20 minutes and call then console.log(boots);

boots.wait(20);

console.log(boots);
