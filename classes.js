function run (s){
    return `speed ${this.age * 5}`
}

const dog = {
    name:'Gav',
    age: 13,
    run
}

const dog2 = {
    name:'Boo',
    age:4,
    run,
}

console.log(dog.run(5))
console.log(dog2.run(3))
