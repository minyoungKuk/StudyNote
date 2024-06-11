// const myPromise = new Promise(function (resolve, reject) {
//   // 비동기 작업을 수행
//   if (false) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// myPromise
//   .then(function (value) {
//     // 성공 (resolve)한 경우 수행
//     console.log(value); // Success
//   })
//   .catch(function (error) {
//     console.log(error); // Failed
//   })

// async await💛💛💛💛
async function fetchData() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await data.json();
    console.log(json);
  } catch (error) {
    console.log("Data loading failed", error);
  }
}

fetchData();
