//Check whether the substring exist with in a string

const string = (str: string , substr: string): boolean => {
    return str.includes(substr);
}

console.log(string('This is a beautiful place.', 'place'));