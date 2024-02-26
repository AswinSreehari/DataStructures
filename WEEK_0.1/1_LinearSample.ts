//Search element in an unsorted array

const search = (arr: number[] , val: number): boolean => {
    for(let i = 0 ; i < arr.length ; i ++){
        if(arr[i] === val){
            return true;
        }
    }
    return false;

}
console.log(search([65, 22, 3, 5, 75, 41, 16, 26], 75));