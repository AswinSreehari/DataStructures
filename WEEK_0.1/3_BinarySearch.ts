 // Find the peak element in an array

function findPeakElement(nums: number[]): number {
    let left: number = 0;
    let right: number = nums.length - 1;
    while (left < right) {
        let mid: number = Math.floor((left + right) / 2);
        if (nums[mid] < nums[mid + 1]) {
             left = mid + 1;
        } else {
             right = mid;
        }
    }
     return left;
}

 
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));  
