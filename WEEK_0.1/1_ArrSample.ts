// Write a javascript program to separate odd and even integers into separate arrays.

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even: number[] = [];
let odd: number[] = [];
for(let i = 0 ; i < arr.length ; i ++){
    if(arr[i] % 2 == 0){
        even.push(arr[i]);
    }else{
        odd.push(arr[i]);
    }
}
console.log("Even array : ",even);
console.log("Odd array : ",odd);

 