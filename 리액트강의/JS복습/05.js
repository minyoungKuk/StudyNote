///////////////////////////////////////////////// Template Literals : 변수와 표현식을 문자열 안에 쉽게 삽일 할 수 있게 해주는 문법
// const customer = {
//   name: "르탄이",
// };

// const item = {
//   name: "커피",
//   price: 4000,
// };

// console.log(
//   `감사합니다! ${customer.name}님, 주문하신 ${item.name} 나왔습니다. 가격은 ${item.price} 입니다`
// );

// const orderDetails = `
// 고객 : ${customer.name}
// 상품 : ${item.name}
// `;

// console.log(orderDetails);

///////////////////////////////////////////////// Destructuring
// const item = {
//   name: "커피",
//   price: 3000,
// };

// const { name, price } = item;

// console.log("name => ", name);

// function greet({ name, age }) {
//   console.log(`안녕하세요. 제 이름은 ${name}입니다. 나이는 ${age}살 입니다.`);
// }

// greet(person);

// const person = {
//   name: "르순이",
//   age: 20,
//   job: "개발자",
// };

// const { name, age } = person;

// console.log(`안녕하세요! ${name}이고 ${age}살입니다.`);

// const movie = {
//   title: "inception",
//   director: "Christopher Nilan",
//   release: {
//     year: 2010,
//     month: "July",
//   },
// };

// const {
//   title,
//   release: { year },
// } = movie;
// console.log(`영화의 제목은 ${title}입니다 / ${year}년도에 나왔습니다`);

// const nums = [10, 20, 30, 40, 50];
// const [first, , third] = nums;
// console.log(`첫 번째 숫자는 ${first}, 세번째는 ${third}`);

// const confirmReservation = (user) => {
//   const { name, roomType, date: firstDate } = user;
//   return `${name} 고객님늬 ${roomType}룸 입실날짜는 ${firstDate}입니다`;
// };

// const userInfo = {
//   name: "James",
//   roomType: "Deluxe",
//   date: "2023-05-30",
// };

// const result = confirmReservation(userInfo);

// console.log(result);

///////////////////////////////////////////////// Spread Operators
// const colors = ["red", "green", "blue"];

// // const [firstColor, secondColor] = colors;
// const [, , thirdColor] = colors;

// // console.log(firstColor);
// // console.log(secondColor);
// console.log(thirdColor);

const originalUser = {
  name: "르탄이",
  age: 28,
};

// 어디에 복사

// const copy = { ...originalUser };

// copy.name = "르순이";

// console.log(originalUser);
// console.log(copy);

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combine = [...first, ...second];

// console.log(combine);

// const obj1 = {
//   name: "르탄이",
//   age: 25,
// };

// const obj2 = {
//   name: "르순이",
//   email: "rsoon@sparta@com",
// };

// const mergedObj = { ...obj1, ...obj2 };

// mergedObj.name = "원장님";

// console.log(obj1);
// console.log(obj2);
// console.log(mergedObj);

///////////////////////////////////////////////// rest Operators
//// Spread Operators와 비슷하당 ㅎ
// 1. 함수의 매개변수
function sum(...nums) {
  return nums.reduce((acc, cur) => acc + cur);
}

const result = sum(1, 2, 3, 4, 5, 6);

console.log(result);

// 2. 객체 분해 할당 시. 여라 값을 그룹핑
const person = {
  name: "john",
  age: 30,
  country: "usa",
  occupation: "developer",
};

// const { occupation, name, age, country } = person;
const { occupation, ...rest } = person;
console.log(rest);
