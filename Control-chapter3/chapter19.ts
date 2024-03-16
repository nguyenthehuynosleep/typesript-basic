//chapter 1*************************************************************

    let infoHuy: string = "";
    //nếu infoHuy có giá trị bằng khác 0 thì dữ liệu boolean sẽ convert sang kiểu true, còn không sẽ xảy ra điều ngược lại
    // nếu infoHuy có giá trị string rỗng thì dữ liệu boolean sẽ convert sang kiểu false, còn không sẽ xảy ra điều ngược lại
    if (infoHuy) {
    console.log("You can watch JAV...");
    } else {
    console.log("You can watch Cartoon...");
    }

    //lesson21
    const age: number = 29;
    switch (age) {
    case 20:
        console.log("Đang là sinh viên");
        break;
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30: //không sử dụng or ở đây được
        console.log("Đã đi làm");
        break;
    default:
        console.log("Run default");
    }
