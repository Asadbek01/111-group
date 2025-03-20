// Ma'lumot turlari

//  string -> '', "", ``
// number  -> 12345
// boolean -> true/false

// object -> {key value pairs => nom va qiymat juftlik}

// let comps = {
// 	names: ['LG', 'Asus'],
// 	friend: {
// 		name: 'Jamshidbek',
// 		age: 25,
// 		isStudent: true,
// 		hobbies: ['reading', 'painting'],
// 	},
// };

const Jamshidbek = {
	familyMembers: 5,
	age: '20',
	hobbies: ['reading', 'painting'],
};

const names = ['Jamshidbek', 'Ulugbek', 'Asadbek'];

console.log(names[1]); // array index bo'ylab access qiladi.

console.log(Jamshidbek.hobbies[1]);

// let va const
const c = 20; // qiymat shart
// c = 30; // o'zgarmaydi
// console.log(c);

// let b = 10;
// b = 20;
// console.log(b);

// metodlar va operatorlar

//Array metodlari
// push() -> arrayga element qo'shadi
// .pop() -> Oxirgi elementni olib tashlaydi.
// .shift() -> birinchi elemntni olib tashlaydi
// .slice(startIndex, endIndex) index bo'ylab kesib oladi

names.push('push metodi');
names.push('pop metodi');
names.push('shift metodi');
// names.pop();

// names.shift();

let slicedArray = names.slice(0, 5);

console.log(names);
console.log(slicedArray);

// let array = [];

// array.push('olma');
// array.push('behi');
// array.push('uzum');
// console.log(array);

// key value pairs -> nom va qiymat juftligi
// const obj = {};

// obj.name = 'Jamshidbek'; // element qo'shish
// obj.age = 25;

// delete obj.age;
// delete obj.name;
// console.log(obj);

const Ulugbek = {};
Ulugbek.yoshi = '23';
console.log(Ulugbek);

// Vazifalar- >

// 1) hamma ma'lumot turlarini alohida o'zgaruvchiga saqlang

// 2) 2 ta o'zgaruvchi yarating va nomi num1 va num2 bo'lsin ikkalsiga ham number ma'lumot turida qiymat bering

// 3)  kitob objectni yarating, nomi, yili, (authors) -> array ma'lumot turida kelsin.

// 4) let, const va var ni  farqlab yozib tushintirib bering.

// 5) Array yarating va ichiga 5 ta elemnt soling.
