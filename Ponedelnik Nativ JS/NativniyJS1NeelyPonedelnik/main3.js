// объекты

const developer={
    name: 'Alex',
    age: 24,
    isMan: true,
    sayHi() {
        console.log('Hi')
    }
}
console.log(developer.age)  //

const developer1 = new Object({
    name: 'Alex',
    age: 24,
    isMan: true,
    sayHi(){
        console.log('Hi')
    }
})
console.log(developer1.sayHi())