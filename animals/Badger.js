class Badger {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    tailLengthInch = 0,
    teethSize = '',
    prey = false,
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.teethSize = teethSize;
    this.prey = prey;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
  warning(distance) {
    alert(`The ${this.constructor.name} has teeth that are ${this.constructor.teethSize} and you should stay at least ${distance} away!`)
  }
}

export default Badger;