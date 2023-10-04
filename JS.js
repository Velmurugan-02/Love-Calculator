let divide1 = document.getElementById("divide1");
let cal = document.getElementById("cal");
let name_error = document.getElementById("name_error");
let crush_error = document.getElementById("crush_error");
let btn = document.getElementById("btn");
let name = document.getElementById("name");
let crush0 = document.getElementById("crush"); 

let random;
let name_you;
let crush_name;
let you;
let crush;

function myfun(){
        name_you = document.getElementById("name").value;
        crush_name = document.getElementById("crush").value;

        if(name_you == "" && crush_name == ""){
            name_error.style.visibility = "visible";
            crush_error.style.visibility = "visible";
        }
        if(name_you == ""){
            name_error.style.visibility = "visible";
        }
        else if(crush_name == ""){
            name_error.style.visibility = "hidden";
            crush_error.style.visibility = "visible";
        }
        else{
            name_error.style.visibility = "hidden";
            crush_error.style.visibility = "hidden";
            my2fun();
        }
}
function my2fun(){
        if(you == name_you){
            alert("Give another Name");
        }
        else if(crush == crush_name){
            alert("Give another crush name");
        }
        else{
            my3fun();
            you = name_you;
            crush = crush_name;
        }
}

function my3fun(){
    random = Math.floor(Math.random() * 100);
    cal.innerHTML = `${name_you} and ${crush_name} has ${random}% love`;
}


function enter0(event){
    if(event.key === "Enter"){
        crush0.click();
    }
}

function enter1(event){
    if(event.code === "Enter"){
        btn.click();
    }
}

crush0.addEventListener('keypress',enter1);
name.addEventListener("keypress",enter0);