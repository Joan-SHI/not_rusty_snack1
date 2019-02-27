module.exports = {callsFunction,
callsProperty,
filter,
find,
map
}
 
function callsFunction (x) {
    return x()
}

function callsProperty (obj) {
return obj.increment()
}

//directly use filter method below.

function filter (array,fn) {
 return array.filter(fn)
}

//or you can write your own filter function like below.

// function filter (array,fn) {
//     const filteredArray = []
//     for (let item of array) {
//         if (fn(item)) {
//             filteredArray.push(item)
//         }  
//     }
//     return filteredArray
// }

//directly use find method below.

function find (array,fn) {
    return array.find(fn)
   }

//or you can write your own find function like below.

// function find (array,fn) {
//     for (let item of array) {
//         if (fn(item)) {
//             return item
//         }  
//     }
// }

//directly use map method below.
function map(array, fn) {
    return array.map(fn)
}
 
//or you can write your own map function like below.
function map (array, fn) {
  const newArray = []
    for (let item of array) {
        newArray.push(fn(item))
    }
    return newArray
}
