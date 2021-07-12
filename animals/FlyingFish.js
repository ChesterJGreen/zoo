class FlyingFish {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    wingspan = 0,
    topFlightSpeed = 0,
    bounceHeight = 0,
    prey = true,
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.wingspan = wingspan;
    this.topFlightSpeed = topFlightSpeed;
    this.bounceHeight = bounceHeight;
    this.prey = prey;
  }
  eat(food) {
    console.log(`Slid all the ${food}ies down it's gullet.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
  bounce(surface) {
    console.log(`The ${this.constructor.name} will bounce ${this.bounceHeight}inches off the ${surface}`)
  }
}

export default FlyingFish;