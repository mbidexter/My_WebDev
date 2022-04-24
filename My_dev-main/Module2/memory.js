// console.log(global)
// console.log(this);

console.log(a);
var a;
console.log(a);
a=10;
console.log(a);

fn();
function fn(){
    console.log("Hey I am a fn");
}

fn();

//func();
var func = function fn1(){
    console.log("Hey there");
}
func();

var b =15;

function fn2(){
    var b = 30;
    console.log("inner",b);
}
fn2();
console.log("outer",b);

