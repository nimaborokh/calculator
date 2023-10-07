let p = document.getElementById("demo");
function buttonsValue(a) {
    return (p.value += a);
}
function cleard() {
    p.value = "";
}
function inputValue(id) {
    let element = document.getElementById(id);
    let value = element.value;
    console.log(value);
}
