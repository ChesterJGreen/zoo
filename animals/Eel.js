class Eel {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    tailLengthInch = 0,
    teethSize = '',
    electric = true,
    aquatic = true,
    prey = false,
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.teethSize = teethSize;
    this.electric = electric;
    this.aquatic = aquatic;
    this.prey = prey;
  }
  eat(food) {
    console.log(`Viciously shreds all the ${food}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
  electric(creature) {
    alert(`The ${this.constructor.name} will shock the crap out of a ${creature}!`)
  }
}

export default Eel;