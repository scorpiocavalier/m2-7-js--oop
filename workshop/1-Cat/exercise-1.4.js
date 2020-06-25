// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
    this.tiredness = 0
    this.hunger = 0
    this.loneliness = 0
    this.happiness = 0
  }

  wait = minutes => {
    this.tiredness += 5 * minutes
    this.hunger += 5 * minutes
    this.loneliness += 5 * minutes
    this.happiness -= this.happiness - 5 * minutes >= 0 ? 5 * minutes : 0
  }

  sleep = hours => {
    this.tiredness -= this.tiredness - 5 * hours >= 0 ? 5 * hours : 0
    this.happiness += 10 * hours
  }

  eat = kibbles => {
    this.hunger -= this.hunger - Math.round(kibbles / 5) >= 0 ? Math.round(kibbles / 5) : 0
    this.happiness += 1 * kibbles
  }

  play = minutes => {
    this.loneliness -= this.loneliness - 3 * minutes >= 0 ? 3 * minutes : 0
    this.happiness += 1 * minutes
  }
}

const boots = new Cat('Boots', 'Siamese')

console.log('Once born:', JSON.stringify(boots, null, 2))

boots.sleep(8)
console.log('After sleeping: ', JSON.stringify(boots, null, 2))

boots.wait(20)
console.log('After waiting: ', JSON.stringify(boots, null, 2))

boots.eat(100)
console.log('After eating: ', JSON.stringify(boots, null, 2))

boots.wait(20)
console.log('After waiting: ', JSON.stringify(boots, null, 2))

boots.play(60)
console.log('After playing: ', JSON.stringify(boots, null, 2))
