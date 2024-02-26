//Find the maximum value in an array

const maximumValue = (arr: number[]): number => {
    let max: number = 0;
    for(let i = 0 ; i < arr.length ; i ++){
        if( arr[i] > max){
            max = arr[i];
        }
    }
    return max;
    
}
console.log(maximumValue([23, 55, 2, 89, 456, 212, 22, 69, 85]));