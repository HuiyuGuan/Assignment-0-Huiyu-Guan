function sumOfMinimumAndMaximum(nums) {
  let min = 9999
  let max = 0
  for(var i = 0; i < nums.length; i++){
    if(nums[i] < min){
        min = nums[i]
    }
    if(nums[i] > max){
        max = nums[i]
    }
  }
  return min + max
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;