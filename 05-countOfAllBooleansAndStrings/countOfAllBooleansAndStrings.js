function countOfAllBooleansAndStrings(arr) {
let total = 0
  for(var i =0; i<arr.length; i++){
      if(arr[i]===true || arr[i]===false || typeof(arr[i])=='string'){
        total++
  }
}
    return total
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;