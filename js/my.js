let p = document.getElementById("demo");
function buttonsValue(a) {
    return (p.value += a);
}
function cleard() {
    p.value = "";
}
function valuee() {
    let value = p.value;
    let newValue = value.replace("x", "*");
    let newn = newValue.replace("÷", "/");
    let result = eval(newn);
    console.log(result);
}
