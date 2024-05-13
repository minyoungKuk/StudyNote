// 객체 : key와 value로 이루어진 값
// JSON(JavaScript Object Notation)

const user = {
  name: "르탄이",
  age: 30,
  isAdmin: true,
  printHello: () => console.log("Hello"),
};

const attribute = "name";

// 객체 접근 방법 : 점 표기법
// console.log(user.name);
// user.printHello();

// 객체 접근 방법 : 괄호 표기법 / 키 값이 변수 일때 주로 사용
// console.log(user[attribute]);

// 객체의 속성에 접근하여 추가 / 변경
user.email = "min@gmail.com"; // 추가
user.age = 31; // 수정

// 삭제 하는 법
delete user.isAdmin;

console.log(user);
