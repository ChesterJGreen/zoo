class Urchin {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    prey = true,
    aquatic = true,
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.prey = prey;
    this.aquatic = aquatic;
  }
  eat(food) {
    console.log(`Somehow ingest all the ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} somehow says ${noise}!`)
  }
}

export default Urchin;