/* 
Description
*/

function someCode(parameters) {
    var result = parameters;
    return result;
}

// or

var sayHello = function(name) {
    return `Hey there ${name}`;
}

if(require.main == module) {
    let name = "Jen";
    console.log(sayHello(name));

    name = "Amy";
    console.log(sayHello(name));
    
    name = "Toby";
    console.log(sayHello(name));
}

/*
Passed with success:
link to problem

Understand:
- notes

Match:
- notes

Plan:
- my pseudocode

Review:
Time complexity: O()
Space complexity: O()
*/