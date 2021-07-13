import Alligator from './Alligator.js'
import Badger from './Badger.js'
import Cheetah from './Cheetah.js'
import DeathAdder from './DeathAdder.js'
import Eel from './Eel.js'
import FlyingFish from './FlyingFish.js'
import Goat from './Goat.js'
import Hamster from './Hamster.js'
import Impala from './Impala.js'
import Jackal from './Jackal.js'
import Kangaroo from './Kangaroo.js'
import Liger from './Liger.js'
import MantaRay from './MantaRay.js'
import Narwhal from './Narwhal.js'
import Owl from './Owl.js'
import Puffin from './Puffin.js'
import QinlingPanda from './QinlingPanda.js'
import Rhinoceros from './Rhinoceros.js'
import Seal from './Seal.js'
import Turtle from './Turtle.js'
import Urchin from './Urchin.js'
import Vole from './Vole.js'
import Woodpecker from './Woodpecker.js'
import Xerus from './Xerus.js'
import Yak from './Yak.js'
import Zebra from './Zebra.js'


var boyAnimals = []
var girlAnimals = []
var prey = []
var predator = []
var aquatic = []
var aves = []
var landAnimal = []

function sortSex(animal) {
  if (animal.gender === 'male') {
    boyAnimals.push(animal)
  } else {
    girlAnimals.push(animal)
  }
}

function vore(animal) {
  if (animal.prey === true) {
    prey.push(animal)
  } else predator.push(animal)

}

function landWaterSea(animal) {
  if (animal.aquatic === true) {
    aquatic.push(animal)
  } else if (animal.wingspan) {
    aves.push(animal)
  } else {
    landAnimal.push(animal)
  }
}


// class zoo
// zoo.aquatic  an 

let alan = new Alligator('Alan', 'green', 'male', 109, 60, 5, false)
sortSex(alan)
vore(alan)
landWaterSea(alan)

let brook = new Badger('Brook', 'brown', 'female', 50, 10, 0.5, false)
sortSex(brook)
vore(brook)
landWaterSea(brook)

let clark = new Cheetah('Clark', 'spotted', 'male', 120, 24, 2, 70, false,)
sortSex(clark)
vore(clark)
landWaterSea(clark)

let debbie = new DeathAdder('Debbie', 'gray', 'female', 5, 80, .25, true, false)
sortSex(debbie)
vore(debbie)
landWaterSea(debbie)

let elliot = new Eel('Elliot', 'purple', 'male', 7, 40, .25, true, true,)
sortSex(elliot)
vore(elliot)
landWaterSea(elliot)

let frank = new FlyingFish('Frank', 'blue', 'male', 3, 8, 35, 12, true)
sortSex(frank)
vore(frank)
landWaterSea(frank)

let gertrude = new Goat('Gertrude', 'white', 'female', 45, 4, 1, 'dual', 6, true)
sortSex(gertrude)
vore(gertrude)
landWaterSea(gertrude)

let hank = new Hamster('Hank', 'brown', 'male', 1, 3, .15, true, 6)
sortSex(hank)
vore(hank)
landWaterSea(hank)

let ilene = new Impala('Ilene', 'brown', 'female', 150, 2, .5, 'dual', 4, true)
sortSex(ilene)
vore(ilene)
landWaterSea(ilene)

let jimmy = new Jackal('Jimmy', 'gray', 'male', 80, 10, 2, false)
sortSex(jimmy)
vore(jimmy)
landWaterSea(jimmy)

let klaxon = new Kangaroo('Klaxon', 'brown', 'male', 250, 60, 1, true, true)
sortSex(klaxon)
vore(klaxon)
landWaterSea(klaxon)

let lupita = new Liger('Lupita', 'orange', 'female', 280, 36, 3, false)
sortSex(lupita)
vore(lupita)
landWaterSea(lupita)

let maxamillion = new MantaRay('Maxamillion', 'purple', 'male', 180, 60, 0, false, true)
sortSex(maxamillion)
vore(maxamillion)
landWaterSea(maxamillion)

let ned = new Narwhal('Ned', 'gray', 'male', 3000, 86, 2, false, true, 60)
sortSex(ned)
vore(ned)
landWaterSea(ned)

let octavius = new Owl('Octavius', 'black', 'male', 20, 36, true, false, 40)
sortSex(octavius)
vore(octavius)
landWaterSea(octavius)

let peter = new Puffin('Peter', 'black', 'male', 15, 24, true, false, true)
sortSex(peter)
vore(peter)
landWaterSea(peter)

let quiGonJinn = new QinlingPanda('Qui-Gon Jinn', 'black', 'male', 300, 2, 3, false)
sortSex(quiGonJinn)
vore(quiGonJinn)
landWaterSea(quiGonJinn)

let ricky = new Rhinoceros('Ricky', 'gray', 'female', 2000, 4, 2, true, 20, 'single')
sortSex(ricky)
vore(ricky)
landWaterSea(ricky)

let samantha = new Seal('Samantha', 'gray', 'female', 280, 36, 3, false, true)
sortSex(samantha)
vore(samantha)
landWaterSea(samantha)

let tonya = new Turtle('Tonya', 'green', 'female', 20, 3, .15, false, true)
sortSex(tonya)
vore(tonya)
landWaterSea(tonya)

let ursula = new Urchin('Ursula', 'gray', 'female', 2, true, true)
sortSex(ursula)
vore(ursula)
landWaterSea(ursula)

let violeta = new Vole('Violeta', 'violet', 'female', 2, 4, .5, true)
sortSex(violeta)
vore(violeta)
landWaterSea(violeta)

let wally = new Woodpecker('Wally', 'blue', 'male', 6, 16, 35, true, true)
sortSex(wally)
vore(wally)
landWaterSea(wally)

let xavier = new Xerus('Xavier', 'brown', 'male', 6, 6, 1, false)
sortSex(xavier)
vore(xavier)
landWaterSea(xavier)

let yankeeDaddy = new Yak('Daddy Yankee', 'brown', 'male', 500, 6, 12, 'dual', true, 35)
sortSex(yankeeDaddy)
vore(yankeeDaddy)
landWaterSea(yankeeDaddy)

let zola = new Zebra('Zola', 'white', 'female', 350, 16, 2, 50, true)
sortSex(zola)
vore(zola)
landWaterSea(zola)

function displaySort() {
  let boys = 'Here are the Boys:'
  console.log(boys)
  console.log(boyAnimals)
  console.log(`Here are the girls`)
  console.log(girlAnimals)
  console.log(`Prey`)
  console.log(prey)
  console.log(`Predators`)
  console.log(predator)
  console.log(`Land Animals`)
  console.log(landAnimal)
  console.log(`Aquatic Animals`)
  console.log(aquatic)
  console.log(`Air Animals`)
  console.log(aves)
}
displaySort()

console.log('The End')