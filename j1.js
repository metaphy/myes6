'use strict'; 
 
function greetings (name) {
    name = name || 'world'; 
    console.log('Hello, ' + name + '!'); 
}

export default greetings;