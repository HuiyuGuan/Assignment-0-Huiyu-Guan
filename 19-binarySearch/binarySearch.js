class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

    binarySearch(nums, target) {
    if(nums.length ==1 && nums[0] != target){
        return false
    }
    let start = 0
    let end = nums.length - 1
        while(start <= end){
            let mid = Math.floor((start+end)/2)
            if(nums[mid] == target){
                return true
            }else if(nums[mid] > target){
                return this.binarySearch(nums.slice(start, mid - 1), target)
            }else{
                return this.binarySearch(nums.slice(mid + 2, end), target)
            }
            }
        return false
    }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;