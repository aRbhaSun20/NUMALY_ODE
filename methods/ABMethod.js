var x, y;
console.log("start ABMethod")
alert('Welcome to Adam Bashworth Method')

document.getElementById("submit").addEventListener('click', function(evnt) {
    evnt.preventDefault();
    var equ = document.getElementById('exp-input').value

    var initial = {
        h: eval(document.getElementById('h-input').value), //step-length
        mod: eval(document.getElementById('modification').value),
        xo: eval(document.getElementById('x-input').value),
        yo: eval(document.getElementById('y-input').value),
        x1: eval(document.getElementById('X1-value').value),
        y1: eval(document.getElementById('Y1-value').value),
        x2: eval(document.getElementById('X2-value').value),
        y2: eval(document.getElementById('Y2-value').value),
        x3: eval(document.getElementById('x-output').value),
        y3: eval(document.getElementById('Y3-value').value),


    }

    function zfun(x, y) {
        //define the function z
        var z = eval(equ);
        return z
    }

    function predictor() {
        var YfinalP = initial.y3 + initial.h * ((55 * zfun(initial.x3, initial.y3)) - (59 * (zfun(initial.x2, initial.y2))) + (37 * zfun(initial.x1, initial.y1)) - (9 * zfun(initial.xo, initial.yo))) / 24;
        console.log(YfinalP)
        return YfinalP;

    }

    function corrector(y) {
        var YfinalC = initial.y3 + initial.h * ((zfun(initial.x1, initial.y1)) - (5 * (zfun(initial.x2, initial.y2))) + (19 * zfun(initial.x3, initial.y3)) + (9 * zfun(initial.x3, y))) / 24;
        console.log(YfinalC)
        return YfinalC;
    }

    var Yfinal = corrector(predictor())

    // var Yfinal = predictor();

    // while (initial.mod > 0) {
    //     Yfinal = corrector(initial.xou, y)
    //         // var fun = zfun(initial.xou,Yfinal)
    //     initial.mod = initial.mod - 1;
    // }

    document.getElementById('final').innerHTML = " The Numerical Solution Using  Adam Bashworth METHOD = " + Yfinal.toFixed(5)


    console.log("end");
}, false)