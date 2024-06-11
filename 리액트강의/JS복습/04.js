// map : 원본 배열에서 각 요소를 가공한 *새로운 배열*을 리턴하는 함수

// 1) 배열 내의 모든 요소 각각에 대해
// 2) 주어진 함수를 호출한 결과를 모아
// 3) 새로운 배열을 반환

// const nums = [1, 2, 3, 4, 5];
// const squared = nums.map((num) => num * num);
// console.log(squared);

// filter : 주어진 함수에 통과하는 것들을 새로운 배열로 반환
// const nums = [1, 2, 3, 4, 5];
// const evenNums = nums.filter((num) => num % 2 === 0);
// console.log(evenNums);

// const 동영상리스트 = [
//   {
//     아이디: 1,
//     제목: "동영상1",
//     썸네일이미지: "img1.jpg",
//   },
//   {
//     아이디: 2,
//     제목: "동영상2",
//     썸네일이미지: "img2.jpg",
//   },
//   {
//     아이디: 3,
//     제목: "동영상3",
//     썸네일이미지: "img3.jpg",
//   },
// ];

// const filtered = 동영상리스트.filter((video) => video.제목 === "동영상1");
// console.log(filtered);

// reduce : 누적기
// const nums = [1, 2, 3, 4, 5, 234, 1231, 23, 121, 43];
// const res = nums.reduce((누적된값, 일반값) => {
//   console.log("--------");
//   console.log(누적된값);
//   console.log(일반값);
//   return 누적된값 + 일반값;
// });

// console.log("배열 숫자들의 합은 =>", res);

// sort : 정렬 / 요놈은 원본 배열 자체를 바꿔벌임!!!
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

const nums = [40, 100, 1, 5, 25];
nums.sort();
console.log(nums); // [1, 100, 25, 40, 5 ] 이유는 암것도 안넣으면 문자로 인식해서

nums.sort((a, b) => a - b);
console.log(nums);
