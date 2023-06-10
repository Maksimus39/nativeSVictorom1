// объекты

const developer = {
    name: 'Alex',
    age: 24,
    isMan: true,
    sayHi() {
        console.log('Hi')
    }
}
//console.log(developer.age)  //

const developer1 = new Object({
    name: 'Alex',
    age: 24,
    isMan: true,
    jsFeature: 'jsFeature',
    sayHi() {
        console.log('Hi')
    }
})
// console.log(developer1.sayHi())
// console.log(developer1['name'])
// console.log(developer1['age'])
//
// developer1.city = 'New York'  // -----добавление нового свойства
developer1.age = 25              // ----изменение возраста
delete developer1.isMan        // оператор удаление
developer1['secret-key'] = 'any text'    // добавить ключ значение
const jsFeature = 'jsFeature'         // добавление нового ключ значение
//console.log(developer1)

const newUser = (name, age) => {
    return {
        name,
        age
    }
}
//console.log(newUser('Vitaly', 29))  // присваивание в консоли

// сравнение объектов
const a = {}
const b = {}
//console.log(a===b)

let c = a
//console.log(a === c)

const user1 = {
    name: 'Anton',
    age: 26,
    isMan: true,
    address: {
        country: 'France',
        city: 'Paris'
    }
}

const user2 = {
    name: 'Anton',
    age: 26,
    isMan: true,
    address: {
        country: 'France',
        city: 'Paris'
    }
}
//console.log(user1 === user2)                    // false
//console.log(user1.name === user2.name)           // true

const user3 = user1
//user3.name = 'Victor'
// console.log(user3.name)
// console.log(user1.name)
// console.log(user3.name === user1.name)
//console.log(user3 === user1)


const user4 = {...user1}
user4.name = 'Alex'
// console.log(user4.name)
// console.log(user1.name)
// console.log(user4.name===user1.name)

user3.address.country = 'Germany'
// console.log(user3.address.country)
// console.log(user1.address.country)
// console.log(user3.address.country === user3.address.country)

// способы клонирования объекта
// 1. spread {... obj}  - неглубокая копия
// 2. Object.assign
// 3. JSON.stringify JSON.PARSE  - глубокая копия
// 4. deepClone - lodash библиотека
// 5. structuredClone - глубокая копия

const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'London',
        country: 'UK',
        coordinates: {
            latitude: 51.5074,
            longitude: -0.1278
        }
    },
    preferences: {
        theme: 'light',
        fontSize: 14,
        notification: {
            email: true,
            sms: false
        }
    }
}

//const userCopy = {...user}        // неглубокое копирование
// console.log(userCopy)
// userCopy.age = 38
// console.log(userCopy)
// userCopy.preferences.theme = 'dark'
// console.log(userCopy)
// console.log(user.age)
// console.log(userCopy.age)
// console.log(userCopy.address.city === user.address.city)
// console.log(user.address.city)
// console.log(userCopy.address.city)

const userCopy2 = structuredClone(user)     // глубокое копирование
userCopy2.address.city = 'Manchester'
// console.log(user.address.city)                     // London
// console.log(userCopy2.address.city)                // Manchester
// console.log(user === userCopy2)                     // false

// методы объектов

const harryPotter = {
    name: 'Гарри Потер',
    gender: 'мужской',
    age: 17,
    appearance: 'Черноволосый с мехом метлах и зелёными глазами',
    specialTraits: 'На лбу шрам в форме молнии',
    clothing: 'Чёрная мантия с капюшоном , рубашка, галстук и мантия Гриффиндора',
    accessories: ['Волшебная палочка', 'Золотой кубок для квиддича'],
    personality: ['Храбрый', 'Дружелюбный', 'Умный'],
    goal: 'Победить Волан-де-Мора и защитить волшебный мир'
}
// Object.keys()
// Object.values()
// Object.entries()
// Object.assign()
// Object.fromEntries()
// Object.freeze()

// 1. С помощью какого метода можно достать все -> ключи в объекте ?   -> что вернёт ?
const keys = Object.keys(harryPotter)
// console.log(keys)
// console.log(Object.keys(harryPotter))


// 2. С помощью какого метода можно достать все -> значения в объекте? -> что вернёт ?
const values = Object.values(harryPotter)
// console.log(values)
// console.log(Object.values(harryPotter))


// 3. Какой ещё есть метод -> используй его                             -> что вернёт ?
const entries = Object.entries(harryPotter)
// console.log(entries)                               //массив массивов
// console.log(Object.entries(harryPotter))

// деструктуризация

const newUserDP = {
    name: 'John',
    age: 30,
    address: {
        city: 'London',
        country: 'UK',
        coordinates: {
            latitude: 51.5074,
            longitude: -0.1278
        }
    },
    preferences: {
        theme: 'light',
        fontSize: 14,
        notification: {
            email: true,
            sms: false
        }
    }
}
//const {name, age, address, preferences} = newUserDP
// const name = newUseDP.name
// const age = newUseDP.age
// const address = newUseDP.address
// const preferences = newUseDP.preferences
//console.log(newUserDP.preferences)


//console.log(name, age, address, preferences)

const {name, age, ...restProps} = newUserDP                    // rest -- копирует
//console.log(restProps)

const {email, sms} = newUserDP.preferences.notification
//console.log(email, sms)

const {theme} = newUserDP.preferences
//console.log(theme)

// lat, long -------- с присвоением
const {latitude: lat, longitude: long} = newUserDP.address.coordinates
//console.log(lat, long)


const getValues = (obj) => {
    const {name, age, ...rest} = obj
    return name, age, rest
}
// console.log(getValues(newUserDP))

const getValues1 = ({name, age, ...rest}) => {
    return name, age, rest
}
//console.log(getValues1(newUserDP))
