var x,y;
console.log("start MMethod")

document.getElementById("submit").addEventListener('click',function (evnt) {
    evnt.preventDefault();
    var equ = document.getElementById('exp-input').value
    
    var initial = {
        xi : eval(document.getElementById('x-input').value),  //initial value of x
        yi : eval(document.getElementById('y-input').value),  //initial value of y
        h  : eval(document.getElementById('h-input').value),  //step-length
        xo : eval(document.getElementById('x-output').value),    //final value of x
        mod : eval(document.getElementById('value-mod').value)    //number of modifications
       
    }

function zfun(x,y){
    //define the function z
    var z = eval(equ);
    return z
}
function finvalue(){

    var increX = initial.x + initial.h;
    if(increX == initial.xo){
        var y = yeuler();
        var Yfinal = noofmod(y)  
    }
    else{
        var cond =  initial.xo - initial.xi;
        while(cond > 0){
            var y = yeuler();
            var Yfinal = noofmod(y)
            initial.xi += initial.h;
            cond -= initial.h;
            initial.yi = Yfinal;
            }
    }
    document.getElementById('final').innerHTML = " The Numerical Solution Using  MILNE'S METHOD = " + Yfinal.toFixed(5)
}
finvalue(); 
console.log("end");
},false)



