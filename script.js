alert("Hello World!");

let userName = "Ivan";

function shoMassege() {
  let massege = "Привет" + userName;
  alert(massege);
}

shoMassege();

function dodo() {
  alert("Я ничего не делаю");
}

console.log(dodo());
let x = dodo;
console.log(x);

function greeat(who) {
  alert(`Hello, ${who}`);
}
greeat("Pety");
greeat("alexander");
greeat("ivan");

let a = (12 + 12) * 9;

alert(a);

let d = 4 / 2;

alert(d);

let q = 4;
let w = 4;
let r = 2;

alert(q + w + r);

let v = 4;
let b = 4;
let n = v + b; //Запишем сумму в переменную

alert(n);

greeat("Всего хорошего!");
