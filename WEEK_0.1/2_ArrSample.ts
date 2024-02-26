//Javascript program to sort elements of an array in ascrnding order

const arr: number[] = [9, 2, 3, 7, 4, 1, 15, 12, 2];

arr.sort((a:number , b:number):number => {
    return a - b;
});
console.log("Sorted array is : ",arr);