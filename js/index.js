//Bai 1:  Lấy kết quả giao giữa 2 mảng
let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
const result1 = arrA.reduce((first, el) => {
  return arrB.includes(el) && first.push(el), first;
}, []);
console.log("[Bài 1]-Kết quả giao giữa 2 mảng là: ", result1);

// Bài 2: Làm phẳng array sau (Chuyển về mảng 1 chiều)

let arr2 = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
function flat(arr = []) {
  return arr.reduce((first, el) => {
    return first.concat(Array.isArray(el) ? flat(el) : el);
  }, []);
}
const result2 = flat(arr2);
console.log("[Bài 2]: Mảng ban đầu: ", arr2);
console.log("[Bài 2]: Mảng sau khi làm phẳng: ", result2);

//Bài 3: Tách phần tử trong mảng theo đúng kiểu dữ liệu

let arr3 = [
  [1, "a", true],
  [2, "b", false],
];
function separate(arr = []) {
  return arr.reduce(
    (t, v) => {
      v.forEach((w, i) => t[i].push(w));
      return t;
    },
    Array.from({ length: Math.max(...arr3.map((el) => el.length)) }).map(
      () => []
    )
  );
}
console.log("[Bài 3]: Mảng khi chưa tách dữ liệu ", arr3);
console.log("[Bài 3]: Mảng sau khi tách dữ liệu ", separate(arr3));

//Bài 4: Thiết kế 1 mảng và đổ dữ liệu lên giao diện.
const title = `Tiêu đề bài viết `;
const url = `./assets/imgs/image.PNG`;
const p = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptas,
quasi est ab enim, atque reprehenderit mollitia accusamus laudantium porro
ea quibusdam sit perspiciatis, debitis inventore ipsum? Ipsum, facilis
consectetur.`;
const arrInput = [title, url, p];
function designArr(numberElement) {
  let arr = Array.from({ length: numberElement }).map((el, index) => arrInput);
  for (let index in arr) {
    if (index % 2 == 0) {
      document.write(`
      <div class="post-item">
        <div class="container">
          <img src="${arr[index][1]}" alt="">
          <div class="content">
            <h2 class="title">${arr[index][0] + (+index + 1)}</h2>
            <p>${arr[index][2]}</p>
          </div>
        </div>
      </div>
      `);
    } else {
      document.write(`
      <div class="post-item">
        <div class="container">
          <div class="content">
            <h2 class="title">${arr[index][0] + (+index + 1)}</h2>
            <p>${arr[index][2]}</p>
          </div>
          <img src="${arr[index][1]}" alt=""> 
        </div>
      </div>
      `);
    }
  }
}
designArr(3);
