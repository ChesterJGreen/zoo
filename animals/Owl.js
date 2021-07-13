class Owl {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    wingspan = 0,
    beak = true,
    prey = false,
    topFlightSpeed = 0,
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.wingspan = wingspan;
    this.beak = beak;
    this.prey = prey;
    this.topFlightSpeed = topFlightSpeed;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}

export default Owl;