let p = document.getElementById("demo");
function buttonsValue(a) {
    return (p.value += a);
}
function cleard() {
    p.value = "";
}
function valuee() {
    let value = p.value;
    let newValue = value.replace("x", "*").replace("÷", "/");
    let result = eval(newValue);
    p.value = result;
}
