// Basic operations, types of data, prompt and alert. Doesn´t receive parametres.
/**
 * This function show a prompt where user put a 2 numbers
 * @returns sum of 2 numbers
 */
function sum() {
    x = window.prompt("Put first number");
    y = window.prompt("Put second number");
    return alert(parseFloat(x) + parseFloat(y))
}
/**
 * This function convar celsius to farenheit. Doesn´t receive parametres
 * @returns ºFarenheit
 */
function convarGrades() {
    celsius = window.prompt("Put grades celsius");
    farenheit = parseInt(celsius) * parseInt(9) / parseInt(5) + parseFloat(32);
    return alert(celsius + "º grados celsius" + " is " + farenheit + "º Farenheit")
}
/**
 * This function show a prompt and user type a number. Doesn´t receive parametres.
 * @returns result of division
 */
function div() {
    x = window.prompt("Put a num to div");
    return alert(parseFloat(x) / parseFloat(10))
}
/**
 * This script identify the type of var x. Doesn´t receive parametres
 * @returns alert with type the var
 */
function identify() {
    x = [1];
    return alert(typeof x);
}

// If and else
/**
 * This function show if a number is odd or pair. Doesn´t receive parametres
 * @returns an alert with string result
 */
function oddPair(){
    x = window.prompt("Input a number");
    if (parseInt(x) % 2 === 0){
        return alert("pair")
    } else return alert("odd")
}
/**
 * This function check if input number by user is div between 5 and 11. Doesn´t receive parametres
 */
function checkDiv(){
    x = window.prompt("Input a number");
    if (parseInt(x)%parseInt(11) === 0  && parseInt(x)%parseInt(5) === 0){
        console.log("true")
    } else console.log("false")
}
/**
 * This function dosen´t receive parametres and show 2 prompt
 * @returns result of which number is the highest
 */
function checkWhichNumberIsHighest(){
    x = window.prompt("Input a number");
    y = window.prompt("Input a number");
    if(x>y){
        return alert("First input is the highest")
    } else alert("Second input is the highest")
}