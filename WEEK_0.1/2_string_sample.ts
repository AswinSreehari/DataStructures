// Check whether the given string is palandrome or not

const string = (str: string): boolean => {
    return str === str.split('').reverse().join('');
}

console.log(string('malayalam'));