class Yak {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    tailLengthInch = 0,
    hornSize = 0,
    hornType = '',
    prey = true,
    topLandSpeed = 0,
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.hornSize = hornSize;
    this.hornType = hornType;
    this.prey = prey;
    this.topLandSpeed = topLandSpeed;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}

export default Yak;