class DeathAdder {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    tailLengthInch = 0,
    teethSize = '',
    venom = true,
    prey = false,
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.teethSize = teethSize;
    this.venom = venom;
    this.prey = prey;
  }
  eat(food) {
    console.log(`swallow all the ${food}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} sounds like ${noise}!`)
  }
  poison(bite) {
    alert(`If you were bit on the ${bite} by the ${this.constructor.name}... You will probably die soon!💀`)
  }
}

export default DeathAdder;