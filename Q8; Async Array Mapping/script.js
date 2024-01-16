// Q8; Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds

let numbers = [10, 20, 30, 10];
arrayMapping(numbers).then((result) => {
    console.log(result)
});

async function arrayMapping(array) {

    let promiseArray = [];
    for (let iterator of array) {
        // promiseArray.push(promises(iterator)) if you want promises in array then rmove await
        promiseArray.push(await promises(iterator))
    }
    return promiseArray
}

async function promises(data) {
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data = data * 2);
        }, 500)
    })

    return prom;
}


