//break

// let product = [
//   {
//     name: "Product A",
//     price1: 10.99,
//   },
//   {
//     name: "Product B",
//     price1: 5.49,
//   },
//   {
//     name: "Product C",
//     price11: 7.89,
//   },
// ];
// for (let i = 0; i < product.length; i++) {
//   if (product[i].price1 == 5.49) {
//     console.log(product[i]);
//     break;
//   }
// }

//continue with

// for(let i = 0; i <=10; i++ ) {
//     if(i===9) {
//         continue;
//     }
//     console.log('>>>>>i', i);
// }
let count = 10;
while (count <= 19) {
    count++;
    if (count === 12) {
        continue;
    }
    console.log(count);
}
