//Javascript program to find the second largest element in an array

const arr:number[] = [ 5, 65, 21, 44, 2, 11, 69, 88, 65];

arr.sort((a , b) => {
    return b - a;
});
console.log("Second largest element is : ",arr[1]);