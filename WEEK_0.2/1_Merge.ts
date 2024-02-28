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
const arr = [5,  2,  4,  6,  1,  3];
console.log(Merge(arr));