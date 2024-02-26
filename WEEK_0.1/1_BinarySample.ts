//Search an element in an unsorted array

const binarySearch = (arr: number[], target: number):number => {
    let leftIndex: number = 0;
   let rightIndex: number = arr.length - 1;
   while(leftIndex <= rightIndex){
     let mid = Math.floor((leftIndex + rightIndex) /2);
     if(target === arr[mid]){
       return mid;
     }
     if(target < arr[mid]){
       rightIndex = mid - 1;
     }else{
       leftIndex = mid + 1;
     }
   }
   return -1;
 }

 
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 6));

