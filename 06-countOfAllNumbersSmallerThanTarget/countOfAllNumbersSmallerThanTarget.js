function countOfAllNumbersSmallerThanTarget(nums, target) {
let total = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < target){
        total++
        }
    }
  return total
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;