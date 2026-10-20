// deklarasi Variable
const v0 = 20;
const v1 = 30;
const g = 9.8;
const t = 10;

let vx, vy, v;
let radian;

// Hitung konversi radian
radian = v1 * (Math.PI / 180);

vx = v0 * Math.cos(radian);
vy = v0 * Math.sin(radian) - g * t;
v = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));

console.log("v = " + v);