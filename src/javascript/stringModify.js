export default function stringModification(args) {
    const newString = [];
    for (let letter of args) {
        letter === letter.toUpperCase() ? newString.push(` ${letter}`): 
        newString.push(letter);
    }

    newString[0] = newString[0].toUpperCase();
    return newString.join("");
};

// modify the string output in the every component