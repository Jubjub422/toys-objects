// const toySoldier = {
//     id=1,
//     name="Army Man",
//     manufacturer="Hasbro",
//     price= 8,
//     weight= 1.3    
// }

// const toyGun = {
//     id=2,
//     name="Ray-Gun",
//     manufacturer="Activision",
//     price=25,
//     weight=5
// }

// const toyCar = {
//     id=3,
//     name="Hot Wheels RC",
//     manufacturer="Hot Wheels",
//     price=200,
//     weight=65
// }


// const toys = [
//     {
//         id:1,
//         name: "Army Man",
//         manufacturer:"Hasbro",
//         price: 8,
//         weight: 1.3,
//         parentSupervision: true
//     },
//     {
//         id:2,
//         name:"Ray-Gun",
//         manufacturer:"Activision",
//         price:25,
//         weight:5,
//         parentSupervision: false
        

//     },
//     {
//         id:3,
//         name:"Hot Wheels RC",
//         manufacturer:"Hot Wheels",
//         price:200,
//         weight:65,
//         parentSupervision: true

//     }
// ]

// const toyBall ={
//     id:4,
//     name: "Wiffle Ball",
//     manufacturer: "Hasbro",
//     price: 12,
//     weight:1.5,
//     parentSupervision: false
// }
// const toyDoll ={
//     id:5,
//     name: "Barbie",
//     manufacturer: "Hasbro",
//     price: 99,
//     weight:1,
//     parentSupervision: false
// }
// toys.push(toyBall)
// toys.push(toyDoll)

// console.log(toys)


//!toy to find section
// const toyToFind = 3

// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//     toy.price += (toy.price * 0.05)
//     console.log(`The price of ${toy.name} is $${toy.price}.`)
//     }
// }

//!remove item function
// const removeProduct = (number) => {
//     //iterate through toys
//     for (const toy of toys) {
//         //find specific toy id to remove
//         if (toy.id === number) {
//             //remove specific object from toys
//             //*is this the right way to do it???
//             toys.splice(number - 1 , 1)
//             //number-1 is the index of the object we need to remove 
//         }
//     }
// }

// removeProduct(1)

// console.log(toys)

//! Perry Scope

const currentInventory = [
    "Muscle Man",
    "Dora the Scientist",
    "Princess Sparkles",
    "Perry Scope",
    "Explorer Backpack",
    "Space Scout Suit",
    "Geology Mineral Dig Kit",
    "Perry Scope"
]

const sellPerryScope = () => {

    for (const toy of currentInventory) {
        let availableForPurchase = false

        if (toy === "Perry Scope") {
            availableForPurchase = true
        }
        if (availableForPurchase) {
            console.log("Enjoy your new Perry Scope")
        }
    }

}

sellPerryScope()
