//Occurance of an element in an array

const occurance = (arr: number[] , val: number): number => {
    let count: number = 0;
    for(let i = 0 ; i < arr.length ; i ++){
        if(arr[i] === val){
            count ++;
        }
    }
    return count;
}

console.log(occurance([2, 3, 5, 5, 1, 9, 3, 4, 5, 7] , 5))