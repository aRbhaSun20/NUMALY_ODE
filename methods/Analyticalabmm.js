var x, y;
console.log("start Analytics")

document.getElementById("submit").addEventListener('click', function(evnt) {

    var equ = document.getElementById('exp-input').value

    var initial = {
        xi: eval(document.getElementById('Xo-value').value), //initial value of x
        yi: eval(document.getElementById('Yo-value').value), //initial value of y
        xo: eval(document.getElementById('x-output').value), //final value of x

    }

    function zfun(x, y) {
        //define the function z
        var z = eval(equ);
        return z
    }

    var constants = {
        a: initial.xi,
        b: initial.xo,
        h: 0.001,

    }
    var nofte = (constants.b - constants.a) / (constants.h * 5)
    var sum = 0;

    function integrate() {
        for (let n = 0; n < nofte; n++) {
            sum = (sum + zfun(constants.a + n * constants.h, initial.yi))
        }

        return (sum * constants.h)
    }

    let final = integrate().toFixed(5)

    document.getElementById('finalanaly').innerHTML = " The Analytical Solution for given Equation = " + final + " expected H = " + constants.h


}, false)