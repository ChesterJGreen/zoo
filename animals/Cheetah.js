class Cheetah {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    tailLengthInch = 0,
    teethSize = '',
    topLandSpeed = '',
    prey = false,
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.teethSize = teethSize;
    this.topLandSpeed = topLandSpeed;
    this.prey = prey;
  }
  eat(food) {
    console.log(`chase chase all the ${food}.`)
  }
  speak(noise) {
    console.log(`The ${this.constructor.name} says ${noise}!`)
  }
  run(speed) {
    console.log(`The ${this.constructor.name} can travel at speeds up to ${this.constructor.topLandSpeed} as opposed to your measley ${speed}`)
  }
}
export default Cheetah;
