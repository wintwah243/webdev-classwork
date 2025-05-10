const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

let prom = new Promise((resolve, reject) => {
  if(order[1] > 0){
    resolve('Thank you. Your order was successful.');
  }else{
    reject('We are sorry. Your order could not be completed because some items are sold out.');
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectedValue) => {
  console.log(rejectedValue);
};

checkInventory(order).then(handleSuccess, handleFailure);





