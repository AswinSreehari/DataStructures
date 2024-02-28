const Merge = (arr: number[]): number[] => {
    if(arr.length <= 1) return arr;
const mid = Math.floor(arr.length)/2;
let left: number[] = arr.slice(0, mid);
let right: number[] = arr.slice(mid);
return sort(Merge(left), Merge(right)); 
}
const sort = (left: number[] , right: number[]): number[] => {
    const sortedArr: number[] = [];
    while(left.length && right.length){

        if(left[0] < right[0]){
            sortedArr.push(left.shift() as number)
        }else{
            sortedArr.push(right.shift() as number);
        }
    }
    return [...sortedArr,...left,...right];
}
const arr = [1.5,  3.2,  0.7,  2.8,  1.9];
console.log(Merge(arr));