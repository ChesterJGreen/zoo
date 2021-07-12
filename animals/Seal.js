class Seal {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    tailLengthInch = 0,
    teethSize = '',
    prey = false,
    aquatic = true,
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.teethSize = teethSize;
    this.prey = prey;
    this.aquatic = aquatic;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}

export default Seal;