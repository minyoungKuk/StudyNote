// 리액트를 사용할때 자주 나올 주요 메서드(함수)

const user = {
  name: "르탄이",
  age: 30,
  isAdmin: true,
};

// Object.keys()
const keys = Object.keys(user);
console.log(keys);

// Object.values()
const values = Object.values(user);
console.log(values);

// Object.entries()
// entries : 키와 값을 쌍으로 하는 배열을 반환
const entries = Object.entries(user);
console.log(entries);

// Object.assign()
// assign : 맡기다, 할당하다
const userDetail = {
  occupation: "개발자",
};
Object.assign(user, userDetail);
console.log(user);
