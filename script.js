function operate (n1, n2, func) {
    if (func == 'multiply') return parseFloat(n1) * parseFloat(n2)
    if (func == 'divide') return parseFloat(n1) / parseFloat(n2)
    if (func == 'add') return parseFloat(n1) + parseFloat(n2)
    if (func == 'subtract') return parseFloat(n1) - parseFloat(n2)
}

////////////////////////////////////////////////////

let container = document.querySelector('#calculator')
let face = document.querySelector('#face')
let screen = document.querySelector('#screen')
let display = document.querySelector("#display")

////////////////////////////////////////////////////

let buttons = document.querySelectorAll(".button")
buttons.forEach((button) => {
    button.addEventListener('click', calculator)
})

////////////////////////////////////////////////////

function calculator (e) {
    let n1 = ''
    let n2 = ''
    let numbers = ''
    let method

    //REMOVING FACE AFTER FIRST BUTTON PRESS
    if (screen.contains(face)) screen.removeChild(face)
    ////////////////////////////////////////

    //INPUTING DIGITS & POINT PERIOD
    if (!isNaN(e.target.id)){
        if (n1 !== '') {
            numbers = ''
            numbers = numbers + e.target.id
        } else {
            numbers = numbers + e.target.id
        }
    }

    //INPUTING PERIOD
    if (e.target.id == "period"){
        if (numbers.indexOf('.') < 0) {
            numbers = numbers + '.'
        }
    }

    //CALCULATING
    if (e.target.classList.contains('opr')) {
        if (n1 == '') {
            n1 = Number(numbers)
            method = e.target.id
            console.log('n1 =', n1)
            console.log('n2 =', n2)
            console.log('num =', numbers)
            console.log('e =', method)
        } else if (n1 !== ''){
            n2 = Number(numbers)
            console.log('n1 =', n1)
            console.log('n2 =', n2)
            console.log('num =', numbers)
        }
    }

    if (e.target.id == 'equals') {
        if (n1 !== '') {
            n2 = numbers
            numbers = operate(n1, n2, method)
            console.log('n1 =', n1)
            console.log('n2 =', n2)
            console.log('num =', numbers)
        }
    }

    //DISPLAYING ARRAY AS NUMBER
    display.textContent = numbers


    //BUTTON PRESS ANIMATION
    e.target.classList.add('buttonPressed')
    setTimeout(function(){
        e.target.classList.remove('buttonPressed')
    }, 30)
}