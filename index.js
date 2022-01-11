// code your solution here
function saturdayFun(activity = 'roller-skate') { 
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));

//to call functions before they appear in the code is called hoisting
console.log(mondayWork("work from home"));
console.log(mondayWork());
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair = "*") {
    return function(value = "special") {
        return `You are ${visualFlair}${value}${visualFlair}!`;
    };
}
console.log(wrapAdjective("%")("a dedicated programmer"));
console.log(wrapAdjective()());
