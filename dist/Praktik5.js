let a, b, c, d;

a = 20;
b = 30;
c = 3;
d = 5;

console.log("Nilai variabel awal adalah : \n");
console.log("a=" + a + ", b=" + b + ", c=" + c + ", d=" + d + "\n");
// Aritmatika Operator
console.log("1a. d = a * b + c => d = " + (d = a * b + c));
console.log("1b. d = a * (b + c) => d = " + (d = a * (b + c)));
console.log("1c. d = a + b / b - a => d = " + (d = a + b / b - a));
console.log("1d. d = a % c => d = " + (d = a % c));

// Penaikan dan Penurunan
b = 30;
console.log("2a. d = b++ + 10 => d = " + (d = b++ + 10));
b = 30;
console.log("2b. d = ++b + 10 => d = " + (d = ++b + 10));
b = 30;
console.log("2c. d = b-- + 10 => d = " + (d = b-- + 10));
b = 30;
console.log("2d. d = --b + 10 => d = " + (d = --b + 10));

// Bitwise Operator
b = 30;
console.log("3a. d = b & c => d = " + (d = b & c));
b = 30;
console.log("3b. d = b | c => d = " + (d = b | c));
b = 30;
console.log("3c. d = b >> 1 => d = " + (d = b >> 1));
b = 30;
console.log("3d. d = b << 2 => d = " + (d = b << 2));

// Penaikan dan Penurunan Majemuk Operator
d = 5;
console.log("4a. d += 2 => d = " + (d += 2));
d = 5;
console.log("4b. d *= 2 => d = " + (d *= 2));
d = 5;
console.log("4c. d &= 2 => d = " + (d &= 2));

// Penugasan Operator
console.log("5a. d = 20 => d = " + (d = 20));
console.log("5b. d = 9 => d = " + (d = 9));

// Kondisi Operator
console.log("6a. d = a<b ? a:b => d = " + (d = a<b ? a:b));
console.log("6b. d = a>b ? a:b => d = " + (d = a>b ? a:b));

// Relasi (ubah tipe data d menjadi Boolean dulu dan isi nilai d dengan false)
d = false;
console.log("7a. d = 12 > 3 => d = " + (d = 12 > 3));
console.log("7b. d = 12 < 3 => d = " + (d = 12 < 3));

// Logika (ubah tipe data d menjadi Boolean dulu dan isi nilai d dengan false)
d = false;
console.log("8a. d = (a<15)&&(a>25) => d = " + (d = (a<15)&&(a>25)));
console.log("8b. d = (b<15)||(b>25) => d = " + (d = (b<15)||(b>25)));
console.log("8c. d = (a<15)^(a>25) => d = " + (d = Boolean((a<15)^(a>25))));

console.log("d=" + d);