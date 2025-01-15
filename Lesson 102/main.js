// const users = {
//     alex: {
//     age: 23,
//     isAdmin: false
//     },
//     john: {
//         age: 20,
//         isAdmin: true,
//         sayHello(name){
//             console.log(`Hello ${name}`)
//         }
//     }
// }



// console.log(users.alex.isAdmin)
// users.john.sayHello('Tom')


// const users = [
//     {
//         name: 'alex',
//         age: 23,
//         isAdmin: false
//     },
//     {
//         name: 'john',
//         age: 18,
//         isAdmin: true
//     }
// ]

// users.push(
//     {
//         name: 'ivan',
//         age: 23,
//         isAdmin: false
//     }
// )


// for(let i = 0; i < users.length; i++){
//     console.log(users[i])
// }


// const foo = 'hello world'
// console.log(foo.toUpperCase())

// =========================================================================================================

// const user = {
//     name: 'Daniil',
//     age: 23,
//     country: 'Russia',
//     city: 'Ekaterinburg',
//     animal: 'cat',
//     sayHello(name){
//         console.log(`Hello ${name}`)
//     }

// }



// console.log(user)
// user.sayHello('Daniil')


// ============================================\


const users = [

    {
        name: 'daniil',
        age: 23,
        country: 'Russia',
        city: 'Ekaterinburg',
        animal: 'cat',
        isAdmin: true
    },
    {
        name: 'max',
        age: 25,
        country: 'Russia',
        city: 'Ekaterinburg',
        animal: 'dog',
        isAdmin: false
    },
    {
        name: 'denis',
        age: 20,
        country: 'Russia',
        city: 'Ekaterinburg',
        animal: '',
        isAdmin: false
    },
    {
        name: 'tom',
        age: 48,
        country: 'Russia',
        city: 'Ekaterinburg',
        animal: 'mous',
        isAdmin: false
    }
]
let simple = 0;


for(let i = 0; i < users.length; i++){
    if(users[i].isAdmin == false){
        simple = simple + 1;

    }
}
console.log (simple)



