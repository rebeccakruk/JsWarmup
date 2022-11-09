let myCity = {
    name : `Spruce Grove`,
    population : 60000,
    isCapital : false,
    // communities : [`Tonewood`, `Stonebridge`, `Woodhaven`, `Heatherglen`]
}
// you can use .notation (dot notation). the more correct approach is dot notation.
if (myCity.isCapital){
    console.log(`City name: ${myCity[`name`]}. Population: ${myCity.population}` );
} else {
    console.log(`not important enough`);
}


// Simple array push
// let myArr = [];
//myArr.push(`something`);

myCity.communities = [
                        {
                            name: `Tonewood`,
                            population: 100
                        }

                    ]
console.log(myCity.communities);

myCity.communities.push(
                            {
                                name: `Woodhaven`,
                                population: 100,
                            }
                        );
myCity.communities.push(
                            {
                                name: `Kenton`,
                                population: 60,
                            }
                        );
myCity.communities.push(
                            {
                                name: `Greystone`,
                                population: 70,
                            }
                        );
myCity.communities.push(
                            {
                                name: `Prescott`,
                                population: 5000,
                            }
                        );
myCity.communities.push(
                            {
                                name: `Stoneshire`,
                                population: 1100,
                            }
                        );


// aside
// let person = {
//     name: `John John`,
//     pet: {
//         name: `Rocky`
//     }
// }

// console.log(person.pet.name);

// let person2 = {
//     fName: `John`,
//     lName: `John`,
//     pet: {
//         name: `Rocky`
//     }
// }
// let query = `fName`;
// console.log(person[query]);

// console.log(person.pet.name);

let i = 0;
while (i < myCity.communities.length){
    console.log(`Large communities:`);
    if (myCity.communities[i].population >= 100){
        console.log(myCity.communities[i].name);
    }
    i++;
}


// //OR!
// for (let counter = 0; counter < myCity[`name`].length; counter++) {
//     console.log(myCity[`name`][counter][`name`]);
//     console.log(company[`managers`][counter][`salary`]);
//         if (company[`managers`][counter][`isSenior`] === true) {
//         console.log(`You won the manager game!`);
//     }
// }