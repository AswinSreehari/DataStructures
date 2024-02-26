 //Check if the element exist or not

 const binarySearch = (arr:number[] , val: number) => {
    let leftIndex: number = 0;
    let rightIndex: number = arr.length - 1;
    while(leftIndex <= rightIndex){
        let mid: number  = Math.floor((leftIndex + rightIndex) / 2);
        if(arr[mid] === val) return true;
        if(arr[mid] > val){
            rightIndex = mid - 1;
        }else{
            leftIndex = mid + 1 ;
        }
    }
    return false;
 }


 console.log(binarySearch([1, 2, 23, 4, 5, 6, 9, 8, 2, 7] , 10))