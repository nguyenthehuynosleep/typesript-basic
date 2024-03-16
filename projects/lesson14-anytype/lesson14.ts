let namev1: string = "thehuycoder";
let namev2: any = "thehuy";

namev2 = 22;

namev2 = [];

namev2 = () => {};
namev1.padEnd; //khai báo cụ thể thì có thể hỗ trợ các method khi chúng ta . đến chúng, còn khi khai báo any thì không có hỗ trợ các method
console.log(">>>>>>>>namev2: " + typeof namev2);
