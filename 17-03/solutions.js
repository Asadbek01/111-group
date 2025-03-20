// Vazifalar

// 1 - mashiq;

// Hamma  malumot turlarini alohida ozgaruvchiga saqlang

let string = 'Salom'; // Matn (String)

let number = 25; // Son (Number)

let boolean = true; // tru false (Boolean)

let undefined; // Undefined qiymat

let object = {
	ism: 'Ali',
	yosh: 30,
}; // Object
let array = [1, 2, 3]; // Array (Object turi)
let functionType = function () {
	return 'Bu funksiya';
}; // Function

// 2 - mashiq;
// Arrayni ichidegi oxirgi elementni consolega olish

let fruits = ['tarvuz', 'qovun', 'apelsin'];
console.log(fruits[fruits.length - 1]); // apelsin

// 3 - mashiq;
//objectni nomlariga boglaning.

// 4 - mashiq;
//let va const ni farqi

// let -> O'zgaruvchi qiymatini keyinchalik ozgartirish mumkin
let yosh = 20;
yosh = 25; // O'zgarishi mumkin

// const -> Qiymati o'zgarmaydi
const ism = 'Ali';

// ism = "Diyora"; // Xatolik bo'ladi

const numbers = [1, 2, 3];
numbers[0] = 10; // To‘g‘ri
console.log(numbers); // [10, 2, 3]

const cars = ['BMW', 'Ferrari', 'Bugatti'];
cars[1] = 'Audi'; // "Ferrari" o'rniga "Audi" yozildi
console.log(cars); // ["BMW", "Audi", "Bugatti"]
