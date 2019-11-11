var x, y;
console.log("start RKMethod")
alert('Welcome to Runge Kutta Method')

document.getElementById("submit").addEventListener('click', function(evnt) {
    evnt.preventDefault();

    var equ = document.getElementById('exp-input').value

    var initial = {
        xi: eval(document.getElementById('x-input').value), //initial value of x
        yi: eval(document.getElementById('y-input').value), //initial value of y
        h: eval(document.getElementById('h-input').value), //step-length
        xo: eval(document.getElementById('x-output').value) //final value of x

    }

    function zfun(x, y) {
        //define the function z
        var z = eval(equ);
        return z
    }

    function kfinal(k1, k2, k3, k4) {
        //find the final value of k
        var kt = (k1 + 2 * k2 + 2 * k3 + k4) / 6
        return kt
    }

    function kval(x, y, h) {
        //find the values of k
        var k1 = h * zfun(x, y).toFixed(5)
        var k2 = h * zfun(x + h / 2, y + k1 / 2).toFixed(5)
        var k3 = h * zfun(x + h / 2, y + k2 / 2).toFixed(5)
        var k4 = h * zfun(x + h, y + k3).toFixed(5)
            // kfinal(k1,k2,k3,k4);
        var kf = kfinal(k1, k2, k3, k4)
        // console.log(k1, k2, k3, k4, kf)
        return kf
    }

    function finvalue() {
        var finalY = initial.yi
        var increX = initial.x + initial.h;
        if (increX == initial.xo) {
            var finalK = kval(initial.xi, initial.yi, initial.h);
            finalY += finalK
        } else {
            var cond = initial.xo - initial.xi;
            while (cond > 0) {
                var finalK = kval(initial.xi, initial.yi, initial.h);
                initial.xi += initial.h;
                finalY += finalK
                cond -= initial.h;
            }
        }
        // console.log(finalY.toFixed(5))
        document.getElementById('final').innerHTML = " The Numerical Solution Using RUNGE-KUTTA METHOD = " + finalY.toFixed(5)
    }
    finvalue();
    console.log("end");
}, false)
