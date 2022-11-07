let output = document.getElementById("inputext")
var operatorselector = "";
var operatorclicked = false;
var user1 = "";
var user2 = "";

function number(num) {
    if (operatorclicked == false) {
        user1 += num;
        console.log("n1-:" + user1)
        enable(opr)
    } else {
        user2 += num;
        equal_enable(equalbt)
        console.log("n2-:" + user2)
    }
    output.value += num;
    console.log(num)
}

function calculate(operator) {
    operatorclicked = true;
    disable(opr)
    operatorselector = operator;
    console.log("operator-:" + operatorselector)
    output.value += operator;
    console.log(operator)
}

function clr() {
    output.value = "";
    disable(opr)
    // num1 = output.value
    user1=""
    console.log("user1-------"+user1)
    operatorclicked = false
    }

function Result() {
    // var output = document.getElementById("inputext")
    var num1 = parseFloat(user1)
    var num2 = parseFloat(user2)
    var add = 0;

    switch (operatorselector) {
        case "+":
            add = num1 + num2
            console.log(add)
            equal_disable(equalbt)
            break;

        case "-":
            add = num1 - num2
            console.log(add)
            equal_disable(equalbt)
            break;

        case "*":
            add = num1 * num2
            console.log(add)
            equal_disable(equalbt)
            break;

        case "÷":
            add = num1 / num2
            console.log(add)
            equal_disable(equalbt)
            if (num2 == 0) {
                alert("Sorry! Can not devided by 0")
                add = 0;
            }
            break;
    }
    output.value = add;
    user1 = add;
    user2 = "";
    operatorclicked = false;
    enable(opr)
    console.log("num1-:" + user1 + user2)

}

var screen = document.getElementById("inputext")
function del() {
    let remove = screen.value
    remove = remove.slice(0, -1)
    screen.value = remove
    if (operatorclicked == false) {
        user1 = remove
        console.log("user2-:" + user1)
    } else {
        if (user2 == "") {
            operatorclicked = false
            console.log("operatorclick-:" + operatorclicked)

        } else {
            user2 = user2.slice(0, -1)
            console.log("user2-:" + user2)
        }

    }
}

let opr = document.querySelectorAll(".botn")
console.log("operator-:" + opr)

function enable(opera) {
    for (i of opera) {
        i.style.pointerEvents = "auto";
    }
}

function disable(opera) {
    for (i of opera) {
        i.style.pointerEvents = "none";
    }
}


let equalbt = document.getElementById("equal")

function equal_enable() {
    equalbt.disabled = false;
}

function equal_disable() {
    equalbt.disabled = true;
}


