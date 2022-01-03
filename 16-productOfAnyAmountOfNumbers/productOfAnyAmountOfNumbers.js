function productOfAnyAmountOfNumbers(...args) {
    let total = 1
    for(var i = 0; i<args.length; i++){
        total *= args[i]
    }
    return total
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;