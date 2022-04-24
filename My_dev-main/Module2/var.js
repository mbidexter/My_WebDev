var a =10;
console.log("Line number 1 ",varname);
var varname = 10;
function b(){
    console.log("Line number 5 ",varname);
}
console.log("Line number 7" ,varname);
function fn() {
    console.log("Line number 9 ",varname);
    var varname = 20;
    b();
    console.log("Line number 12 ", varname);
}
fn();