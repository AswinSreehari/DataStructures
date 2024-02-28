const selection = (arr: number[]): number[] => {
for(let i = 0 ; i < arr.length ; i ++){
    let minIndex = i;
    for(let j = i + 1; j <arr.length; j ++){
        if(arr[j] < arr[minIndex]){
            minIndex = j;
        }
    }
    if(i !== minIndex){
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
return arr;
} 
const arr = [5,  2,  4,  6,  1,  3];
console.log(selection(arr));