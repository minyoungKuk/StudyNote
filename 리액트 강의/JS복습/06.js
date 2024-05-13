//////// 화살표 함수
// 리턴이 한 줄 일때
// const add = (a, b) => a + b;

// 중괄호가 들어 갈때는 ? 리턴이 들어가야한당!
const add = (a, b) => {
  return a + b;
};

// console.log(add(1, 8));

////// 조건 연산자, 삼항 연산자
const score = 85;
const grade = score >= 80 ? "A" : "B";
// console.log(grade);

////// 단축 평가
// 논리 연산자를 활용 (||, &&, ?., ??)
// 1. 논리합 연산자(||)
// truthy, falsy
// falsy : false, 0, "", null, undefined, NaN
const getUserName = (user) => user.name || "신원미상";

const person = {
  name: "르탄이",
  age: 20,
};

// console.log(getUserName(person));

// 2. 논리곱(&&) 연산자 💛💛💛💛
const loggedIn = true;
const userName = "르탄이";

// 좌변이 Truthy한 값을때만 우벼으로 넘어감으로 이런식으로 많이 쓰임 !!!!!
// loggedIn && console.log(`환영합니다 ${userName}님`);

const user = {
  profile2: {
    name: "르탄이",
    detail: {
      age: 30,
      location: "서울시 강남구",
    },
  },
  printHello: () => console.log("Hello"),
};

// console.log(user.profile?.detail.age);
// user.printHello1.();
user.printHello1?.();

////////// null 병함 연산자

const displaypreference = (preference) => {
  const textLength = preference.textLength || 50;
  console.log("1 => ", textLength);

  const itemperpage = preference.itemperpage ?? 10;
  console.log("2 => ", itemperpage);
};

let userLocation = null;
console.log(userLocation ?? "없는 위치");

// null 병합 연산자와 논리합 연산자(||)
const userPreference = {
  textLength: 0,
  itemperpage: 0,
};

displaypreference(userPreference);
