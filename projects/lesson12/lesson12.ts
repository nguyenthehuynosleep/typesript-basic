let skill1: (string | number)[] = ["thehuycoder", 22];
skill1.push("thehuy");
skill1.push("nguyen the huy");

// typescript tuple: dataType, size, order

let info: [string, number] = ["thehuycoder", 22];

// optional tuple: bắt buộc phải đặt cuối cùng
let info1: [string, number, boolean?] = ["thehuycoder", 22];

info1.push(24);
// let skill3: [string|boolean|number?]

console.log(">>>>>>>>>>>>info1", info1);
