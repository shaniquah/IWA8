// Object literals---list of pairs of property names and associated values of an object, enclosed in curly braces ({})

const sex = "Female"

function nameTypes(name) {
    return name === "Samuel" ? name : `Sorry, ${name} is not a female name.`;
}

const names = {myName: "Otshepeng", getName: nameTypes("Samuel"), gender: sex};

console.log(names.myName);
console.log(names.getName);
console.log(names.gender);

// first element of 'names' object===property(myName)=new string("Otshepeng")
// second element===property(getName)=function(nameTypes("Samuel"))
// third element===property(gender)=existing variable(sex)
const greeting = {
    fullName: "Otshepeng Setuke",
    greet: (message, name) => {
        console.log(message + " " + name + "!!");
    }
};

// Using object to log fullName and call 'greet' function with 'fullName' value

// log fullName
console.log(greeting.fullName);

// call 'greet' function
greeting.greet("Greeting", greeting.fullName);

// accessing fullName inside greet function
// change greet function
greet: (message) => {
    console.log(message + " " + this.getFullName() + "!!");
}

getFullName: () => {
    return this.fullName;
}


// Schalk examples:
// anything with 