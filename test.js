const string = "aboutMe";

const x = string.split("");

function z(args) {
    const newString = [];
    for (let letter of args) {
        letter === letter.toUpperCase() ? newString.push(` ${letter}`): 
        newString.push(letter);
    }

    newString[0] = newString[0].toUpperCase();
    return newString.join("");
}

console.log(z(x));

// console.log(z)
