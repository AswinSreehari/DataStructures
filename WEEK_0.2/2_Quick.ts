const Quick = (arr: string[]): string[] => {
    if (arr.length <=  1) {
      return arr;
    }
  
    let pivot = arr[0];
    let leftArr: string[] = [];
    let rightArr: string[] = [];
  
    for (let i =  1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...Quick(leftArr), pivot, ...Quick(rightArr)];
  };
  
const arr = ['cat', 'dog', 'bat', 'ant', 'car']
console.log(Quick(arr));