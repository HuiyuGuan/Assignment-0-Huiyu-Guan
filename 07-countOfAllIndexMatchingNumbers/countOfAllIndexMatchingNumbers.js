function countOfAllIndexMatchingNumbers(nums) {
    let total = 0
    for(var i = 0; i < nums.length; i++){
        if(nums[i] == i){
            total++
        }
    }
    return total
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;