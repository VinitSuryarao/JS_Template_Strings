

var name ="Vinit Suryarao";
var marks=85;

// Old Way of Concat
var Oldmessage ="Welcome"+name+" to JavaScript";

// Using Template Strings
var Newmessage =`Welcome ${name} Your Marks is ${marks}`;
console.log(Newmessage);

// We can call Function in Template strings

function getMarks(name, marks)
{
    return `${name} ${marks}`;
}
var message = `Hello ${getMarks(name, marks)}`;
console.log(message);