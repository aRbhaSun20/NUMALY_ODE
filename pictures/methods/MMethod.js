var x,y;
console.log("start MMethod")
alert('Welcome to Milnes Method')

document.getElementById("submit").addEventListener('click',function (evnt) {
    evnt.preventDefault();
    var equ = document.getElementById('exp-input').value
    
    var initial = {
        xou     :   eval(document.getElementById('x-output').value),    //final value of x
        h       :   eval(document.getElementById('h-input').value),  //step-length
        mod     :   eval(document.getElementById('modification').value),
        xo      :   eval(document.getElementById('Xo-value').value),
        yo      :   eval(document.getElementById('Yo-value').value),
        x1      :   eval(document.getElementById('X1-value').value),
        y1      :   eval(document.getElementById('Y1-value').value),
        x2      :   eval(document.getElementById('X2-value').value),
        y2      :   eval(document.getElementById('Y2-value').value),
        x3      :   eval(document.getElementById('X3-value').value),
        y3      :   eval(document.getElementById('Y3-value').value),
  

    }

function zfun(x,y){
    //define the function z
    var z = eval(equ);
    return z
}

function predictor(){
    var YfinalP = initial.yo + 4 * initial.h * ((2*zfun(initial.x1,initial.y1)) - (zfun(initial.x2,initial.y2)) + (2*zfun(initial.x3,initial.y3))) / 3; 
    console.log(YfinalP)
    return YfinalP;

}

function corrector(x,y){
    var YfinalC = initial.y2 + initial.h * ((zfun(initial.x2,initial.y2)) + (4*zfun(initial.x3,initial.y3)) + zfun(x,y)) / 3;
    console.log(YfinalC) 
    return YfinalC;
}


var Yfinal = predictor();

while(initial.mod > 0){
    Yfinal  = corrector(initial.xou,y)
    // var fun = zfun(initial.xou,Yfinal)
    mod = mod - 1;
}

document.getElementById('final').innerHTML = " The Numerical Solution Using  MILNE'S METHOD = " + Yfinal.toFixed(5)


console.log("end");
},false)



