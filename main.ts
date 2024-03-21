#! /usr/bin/env node


import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "enter first Number", type: "number" , name: "firstnumber"},
    {message: "enter second Number", type: "number" , name: "secondnumber"},
    {message: "select one of the operator", type: "list", name: "operator", choices:["Addition","Substraction","Multiplication","Division"]},

]);


// // conditional statement

if(answer.operator === "Addition"){
console.log(answer.firstnumber+answer.secondnumber)
}

else if (answer.operator === "Substraction"){
    console.log(answer.firstnumber - answer.secondnumber);

}

else if (answer.operator === "Multiplication"){
    console.log(answer.firstnumber * answer.secondnumber);
}

else if (answer.operator === "Division"){
    console.log(answer.firstnumber / answer.secondnumber);
} else {
    console.log("Please insert valid operator")
}
