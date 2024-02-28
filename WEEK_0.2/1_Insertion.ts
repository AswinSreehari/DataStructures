const Insertion = (arr: number[]): number[] => {
for(let i = 1; i < arr.length; i++){
    let nti = arr[i];
    let j = i-1;
    while(j >=0 && arr[j] > nti){
        arr[j+1] = arr[j];
        j --;
    }
    arr[j+1] = nti;
}
return arr;
}
const arr = [10, 4, -5, 8, 2];
console.log(Insertion(arr));

 