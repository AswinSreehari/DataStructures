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
const arr = [1.5,  3.2,  0.7,  2.8,  1.9];
console.log(selection(arr));