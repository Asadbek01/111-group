var arr = ['true', 12312, true, [], {}];
// string ichida biron bir m'alumot qiymat kelgan taqdirda ham  =  ""
console.log(arr);

// var let va const

// har bitta  o'zgaruvchi kalit so'zi o'zidan keyin nom kutadi.
// console.log(a); //es5
var a = 10; // Global variable

// Block scoped -> es6 let va const

let c = 20;
c = 30;
// console.log(c); // 30

const b = 20; // constant -> o'zgarmas
// b = 30;

// Ma'lumot turlari: string, boolean, undefined

// string -> "". '', ``
// console.log(`${c}`); // template literal

// number -> 234234

// boolean -> true/false
let bool = true;

// array -> []

// object -> {}

// let str = 'Jamshidbek'; // string
// let son = 1231; // number
// str = ['olma', 'uzum', 'banan'];
// console.log(str); //

const meva = ['olma', 'uzum', 'banan'];
meva[1] = 'ananas';
console.log(meva);

// objects

// let comp = {
// 	// key value pairs == nom va qiymat(ma'lumot turi) juftlik
// 	ism: 'Asus',
// 	rangi: 'black',
// 	yil: 2021,
// 	model: ['X240', 'X340'],
// 	xotira: '512GB',
// };
// console.log(comp.yil);

// Vazifalar -> O'zgaruvchilardan va ma'lumot turlaridan

// 1) Hamma ma'lumot turlarini alohida o'zgaruvchiga saqlang.

// 2) Arrayni ichidan menga oxirgi elemntni console olib bering

// 3) Objectni nomlariga bo'glaning.

// 4) let va const ni tushuntirib yozing

// 5) yangi arrayni const o'zgaruvchiga solib uni ichiga 3 ta element bering, ichidagi elementi yanglang
