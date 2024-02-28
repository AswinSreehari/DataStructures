const bubbleSort = (arr: number[]): number[] => {
    let isSorted: boolean;
    do {
        isSorted = false;
        for (let i =  0; i < arr.length -  1; i++) {
            if (arr[i] > arr[i +  1]) {
                let temp = arr[i];
                arr[i] = arr[i +  1];
                arr[i +  1] = temp;
                isSorted = true;
            }
        }
    } while (isSorted);
    return arr;
};
const arr: number[] = [5,  3,  8,  4,  1,  6];
console.log(bubbleSort(arr));  

export{}