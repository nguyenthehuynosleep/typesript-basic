
enum API_STATUS {
            PENDDING = 'PENDDING',
            FULFILLED = 'FULFILLED',
            REJECTED = 'FULFILLED', //promise status             
}

let status_api = API_STATUS.PENDDING;
let status_api1 = API_STATUS.FULFILLED;
let status_api2 = API_STATUS.REJECTED;


console.log('>>>>>SPENDING', status_api);
console.log('>>>>>FULFILLED', status_api1);
console.log('>>>>>REJECTED', status_api2);

//nếu sử dụng ở fontend thì syntax
