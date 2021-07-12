class Goat {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    tailLengthInch = 0,
    teethSize = '',
    hornType = '',
    hornSize = '',
    prey = true,
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.teethSize = teethSize;
    this.hornType = hornType;
    this.hornSize = hornSize;
    this.prey = prey;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food} especially if it's not considered food.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
  climb(item) {
    console.log(`The ${this.constructor.name} will obviously climb the ${item}`)
  }
}

export default Goat;