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
function pop() {
    let len = p.value.length;
    let cut = p.value.substr(0, len - 1);
    return (p.value = cut);
}
