class Woodpecker {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    wingspan = 0,
    topFlightSpeed = 0,
    beak = true,
    prey = true,
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.wingspan = wingspan;
    this.topFlightSpeed = topFlightSpeed;
    this.beak = beak;
    this.prey = prey;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise} and also annoys the hell out of everyone pecking on wood!`)
  }
}

export default Woodpecker;