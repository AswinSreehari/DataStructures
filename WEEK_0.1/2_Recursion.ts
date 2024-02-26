//Binary Search

const binarySearch = (arr: number[], val: number, left: number =  0, right: number = arr.length -  1): number => {
    if (left > right) return -1;
    let mid: number = Math.floor((left + right) /  2);
    if (arr[mid] === val) return mid;
    if (arr[mid] > val) {
        return binarySearch(arr, val,  0, mid -  1);  
    } else {
        return binarySearch(arr, val, mid +  1, right);  
    }
}

 
console.log( binarySearch([1, 3, 5, 7, 9] , 5)); //2
