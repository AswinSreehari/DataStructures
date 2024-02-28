const Merge = (arr: string[]): string[] => {
    if(arr.length <= 1) return arr;
const mid = Math.floor(arr.length)/2;
let left: string[] = arr.slice(0, mid);
let right: string[] = arr.slice(mid);
return sort(Merge(left), Merge(right)); 
}
const sort = (left: string[] , right: string[]): string[] => {
    const sortedArr: string[] = [];
    while(left.length && right.length){

        if(left[0] < right[0]){
            sortedArr.push(left.shift() as string)
        }else{
            sortedArr.push(right.shift() as string);
        }
    }
    return [...sortedArr,...left,...right];
}
const arr =  ['cat', 'dog', 'bat', 'ant', 'car'];
console.log(Merge(arr));