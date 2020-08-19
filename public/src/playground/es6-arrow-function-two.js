const add = function (a, b) {
    console.log(arguments);
    return a + b;
}

//Cannot get arguments in arrow functions  
// const add = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }

console.log(add(55, 1));

// const user = {
//     name: 'Ted',
//     cities: ['Telsiai', 'Vilnius', 'Tryskiai'],
//     printPlacesLived: function () {
//         console.log(this.name);
//         console.log(this.cities);
//         const that = this;

//         this.cities.forEach(function (city) {
//             console.log(that.name + ' has lived in ' + city);
//         });
//     }
// }

// const user = {
//     name: 'Ted',
//     cities: ['Telsiai', 'Vilnius', 'Tryskiai'],
//     printPlacesLived: function () {
//         console.log(this.name);
//         console.log(this.cities);

//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// }

const user = {
    name: 'Ted',
    cities: ['Telsiai', 'Vilnius', 'Tryskiai'],
    printPlacesLived() {

        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // const cityMessages = this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city;
        // });

        // return cityMessages;

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
}

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1, 6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());