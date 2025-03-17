// Write your solution here!
let cats=  ["Milo", "Otis", "Garfield"]
console.log(cats["1"])//this is the array

function destructivelyAppendCat(ralph) {
    cats.push(ralph); 
}
function  destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
    }
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift();  
}
function appendCat(Broom) {
    return [...cats, Broom];  
}

function prependCat(vamoose) {
    return [vamoose, ...cats]; 
}

function removeLastCat() {
    return cats.slice(0, -1);  
}

function removeFirstCat() {
    return cats.slice(1);  
}


