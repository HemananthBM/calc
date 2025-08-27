let input = document.getElementById("result");

function add(a){
    input.value += a; 
}

//clears all data
function clr(){
    input.value = "";
}

//deletes last value
function del(){
    input.value = input.value.slice(0, -1);
}


function final(){
    input.value = eval(input.value);
}


let equal = document.querySelector(".equal");
console.log(equal);
