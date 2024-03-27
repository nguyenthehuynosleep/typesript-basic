// input A = [1, 2, 3, 1, 4]
// output: true

// input A = [1, 2, 3, 4]
// output: false

function containsDuplicate(nums) {
  let seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

// Test cases
let A1 = [1, 2, 3, 1, 4];
let A2 = [1, 2, 3, 4, 5];

console.log(containsDuplicate(A1)); // Output: true
console.log(containsDuplicate(A2)); // Output: false

//xâu đối xứng là xâu kí tự mà khi viết từ phải qua trái từ trái qua phải thì xâu đó không thay đổi. Cho 1 xâu kí tự S bất kì, hãy tìm số lượng kí tự nhỏ nhất cần thay đổi đẻ sâu S trở thành đối xứng

// input: stdin

// Dòng 1: chưa xâu S, có đồ dài tự 1 đến 100, gồm các kí tự trong bảng chữ cái tiếng Anh,
// Output: stdout

//Dòng 1 số lượng kí tự nhỏ nhát cần thay đỏi để xâu S trở thành đối xứng

//Giới hạn thời gian: 1 giây
//Giới hạn bộ nhớ: 100MB

function minChangesToPalindrome(S) {
  let changesNeeded = 0;
  const len = S.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (S[i] !== S[len - 1 - i]) {
      changesNeeded++;
    }
  }
  return changesNeeded;
}

// Đọc dữ liệu đầu vào từ stdin
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("", (S) => {
//   const result = minChangesToPalindrome(S);
//   console.log(result);
//   rl.close();
// });

// bill là 1 travel Blogger rất thích đi du lịch. Một lần di tới đâu, cậu đều ghi lại địa điểm và thời gian đến thăm vào cuốn sổ của mình, mỗi dòng trong cuốn sổ có cấu trúc: (Địa điểm: thời gian)
// sau 20 năm, cuốn sổ 1000 trang đã được viết gần hết. Và danh sách quá dài khiến cho Bill rất khó nhớ xem mình đã từ đến 1 địa điểm đó hay chưa để lên kế hoạch cho chuyến đi tiếp. Hãy lựa chọn cấu trúc dữ liệu nhằm 
// số hóa cuốn sở của Bill, giúp cậu các định nhanh nhất 1 địa chỉ đã được thăm hay chưa và vào thời gian nào, Giải thích về lựa chọn của mình

// VD: HawailL: 2011

//     New York: 2018

    

    // Khởi tạo cuốn sổ của Bill là một đối tượng rỗng
let billTravelLog = {};

// Hàm để thêm một mục nhập mới vào cuốn sổ
function addEntry(location, time) {
    billTravelLog[location] = time;
}

// Hàm kiểm tra xem một địa điểm đã được ghé thăm hay chưa
function hasVisited(location) { 
    return billTravelLog.hasOwnProperty(location);
}

// Hàm để lấy thời gian của một địa điểm
function getTimeVisited(location) {
    return billTravelLog[location];
}

// Thêm các mục nhập vào cuốn sổ của Bill
addEntry("HawailL", 2011);
addEntry("New York", 2018);
addEntry("Ha Noi", 2021);

console.log('billTravelLog', billTravelLog);
// Kiểm tra xem Bill đã ghé thăm một số địa điểm hay chưa
console.log(hasVisited("HawailL"));  // Output: true
console.log(hasVisited("Paris"));    // Output: false

// Lấy thời gian Bill đã ghé thăm một địa điểm
console.log(getTimeVisited("Ha Noi"));  // Output: 2018

// Thực hiện thả 1 quả bóng lên sàn nhà, bóng khi chạm sàn nhà sẽ nẩy lên N+1 lần, Giả sự bóng nẩy trên 1 đường thằng và ở lần đầu tiên bóng nẩy lên với tọa độ D1 = 0, ở lần thứ i(2<=i<=N+1) bóng sẽ ở tọa độ 
// Di = D(i-1) + L(i-1)

// hãy cho biết số lần nẩy bóng bóng trước khi vượt tọa độ X 

// input: stdin
//     Dòng 1: chưa 2 số nguyên dương N(1<=N<=100)  và X (1<=X<=10000)
//     Dòng 2: chứa dãy số L (1 <=L(i) <=100)

// output: stdout
// dòng 1: Số lần nẩy của bóng trước khi vượt qua tọa độ X

// giới hạn 1S
// giới hạn bộ nhớ 100MB
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N, X;
let L = [];

rl.question('Nhập số lần nảy N và tọa độ X: ', (input) => {
  const [n, x] = input.trim().split(' ').map(Number);
  N = n;
  X = x;
  
  rl.question('Nhập dãy số L: ', (input) => {
    L = input.trim().split(' ').map(Number);
    rl.close();
    
    let numBounces = 0;
    let currentPosition = 0;

    for (let i = 0; i < N; i++) {
      currentPosition += L[i];
      numBounces++;
      if (currentPosition >= X) {
        break;
      }
    }

    console.log('Số lần nảy của bóng trước khi vượt qua tọa độ X:', numBounces);
  });
});
