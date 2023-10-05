// const a_p = {
//     Square_a: function (a) {
//         //Square_a  ,a is area
//         return a ** 2;
//     },
//     Square_p: function (a) {
//         //Square_p  ,p is perimeter
//         return a * 4;
//     },
//     Square_ap: function (a) {
//         //Square_ap  ,(area,perimeter)
//         return this.Square_a(a) + "\n" + this.Square_p(a);
//     },
//     Rectangle_a: function (a, b) {
//         return a * b;
//     },
//     Rectangle_p: function (a, b) {
//         return (a + b) * 2;
//     },
//     Rectangle_ap: function (a, b) {
//         return this.Rectangle_a(a, b) + "\n" + this.Rectangle_p(a, b);
//     },
//     Triangle_a: function (a, b) {
//         return (a * b) / 2;
//     },
//     Triangle_p: function (a, b, c) {
//         return a + b + c;
//     },
//     Triangle_ap: function (a, b, c) {
//         return this.Triangle_a(a, b) + "\n" + this.Triangle_p(a, b, c);
//     },
//     Circle_a: function (a) {
//         return a ** 2 * 3.14;
//     },
//     Circle_p: function (a) {
//         return a * 3.14;
//     },
//     Circle_ap: function (a) {
//         return this.Circle_a(a) + "\n" + this.Circle_p(a);
//     },
// };
// console.log(a_p.Circle_ap(2, 8));

// const click =["nima","ali","mmd"]
// for(n in click){
//     document.write(click[n])
// }
// console.log(click)
// let x = 0;
// for (let i = 0; i < 1000; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//         x += i;
//     }
// }
// console.log(x);
// let x = document.getElementById("mybtn");
// x.addEventListener("click", mymove);
// x.addEventListener("click", mymove2);
// function mymove() {
//     let elem = document.getElementById("sqer");
//     let pos = 0;
//     let id = setInterval(chench, 1);
//     function chench() {
//         if (pos == 100) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }
// function mymove2() {
//     let elem = document.getElementById("sqer2");
//     let pos = 100;
//     let id = setInterval(chench, 1);
//     function chench() {
//         if (pos == 0) {
//             clearInterval(id);
//         } else {
//             pos--;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }
// let role="ht";
// switch (role) {
//     case "mmd":
//         console.log("mmd");
//         break;
//     case "nima":
//         console.log("nima");
//     default:
//         console.log("kossher");
// }
// let x = -1;
// if (x === 0) {
//     console.log(0);
// } else if (x === 1) {
//     console.log(1);
// } else {
//     console.log("big");
// }
// console.log(
//     x === 0 || x === 1
//         ? "binery"
//         : x > 0
//         ? "posetiv decimal"
//         : "nagetiv decimal"
// );
// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     if (i === 5) {
//         break;
//     }
//     i++;
// }
// let x = 0;
// do {
//     console.log("hello");
//     x++;
// } while (x <= 5);
// const person = { fName: "nima", lName: "borokh", age: 23 };
// for (let i in person) {
//     console.log(person);
// }
// const myArrey=["nima","mmd","mohsen"]
// for (const i of myArrey) {
//     console.log(i);
// }
// for (const i in myArrey) {
//     console.log(myArrey[i]);
// }
// function creatObject(fName, lName, age) {
//     this.fName = fName;
//     this.lName = lName;
//     this.age = age;
// }
// let x = new creatObject("nima", "borokh", 40);
// console.log(x);
// let obj = {};
// let arr = [];
// console.log(obj);
// console.log(arr);

