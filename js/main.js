// window.alert('hello external');
// document.getElementById('demo').innerHTML = 'HELLO ROQA ';
// console.log('hello DEV');

// var userName = 'roqia ';
// userName = 'roqa';
// userName += 'hany';
// console.log(userName);

// var user_name = window.prompt('enter your name');
// console.log(user_name);

// document.getElementById('demo').innerHTML = user_name;
// var userAge;
// console.log(typeof userAge);

// console.log(typeof undefined);

// var num1 = window.prompt('enter num1');
// var num2 = window.prompt('enter num2');

// var result = Number(num1) + Number(num2);

// console.log(result);

// var admin = 'roqa';

// if (admin == 'roqia') {
//   console.log('can edit , delete , add');
// } else {
//   console.log('ay 7aga');
// }

// var num = window.prompt('enter num');

// if (num % 2 == 0) {
//   console.log('by2bl ala 2');
// } else if (num % 3 == 0) {
//   console.log('by2bl ala 3');
// } else if (num % 5 == 0) {
//   console.log('by2bl ala 5');
// } else if (num % 7 == 0) {
//   console.log('by2bl ala 7');
// } else if (num % 9 == 0) {
//   console.log('by2bl ala 9');
// } else {
//   console.log('ay 7aga');
// }

// var num = window.prompt('enter num');
// switch (num) {
//   case '2':
//     console.log('equal 2');
//     break;
//   case '3':
//     console.log('equal 3');
//     break;
//   case '5':
//     console.log('equal 5');
//     break;
//   case '7':
//     console.log('equal 7');
//     break;
// }

// var num = window.prompt('enter num :');

// if (num % 3 == 0 && num % 4 == 0) {
//   console.log('by2bl 3la 3 and 4');
// } else if (num % 3 == 0 || num % 4 == 0) {
//   console.log('by2bl 3la 3 or 4');
// } else {
//   console.log('ay 7aga');
// }

// var r = undefined;
// var a = null;
// if (r === a) {
//   console.log('equal');
// } else {
//   console.log('not equal');
// }

// var h = 5; // number
// var g = '5'; // string
// if (h == g) {
//   console.log('equal');
// } else {
//   console.log('not equal');
// }

// var l = 5;
// var k = 10;
// console.log(l == k); // false
// console.log(l != k); // true
// console.log(l > k); //false
// console.log(l >= k); //false
// console.log(l < k); //true
// console.log(l <= k); // true
// console.log(l === k); //false

// console.log(10 - '5'); //5
// console.log(10 - ''); //10 - 0 = 10
// console.log(10 - 'roqa'); //NaN
// console.log(10 - true); //10 -1 = 9
// console.log(10 - false); //10 -0 = 10
// console.log(10 - null); //10 -0 = 10
// console.log(10 - undefined); //NaN

// console.log(5 + 5 + 5 + '5'); // 155
// console.log('5' + 5 + 5 + 5); // 5555

// for (var i = 0; i < 10; i++) {
//   console.log('roqa');
//   console.log('hany');
// }

// var cartona = '';
// for (i = 0; i < 5; i++) {
//   cartona += 'roqa';
// }
// console.log(cartona);

var box2 = '';
for (var i = 0; i < 3; i++) {
  box2 += `<div class="col-sm-12 col-md-4">
  <div class="card w-100">
    <img src="400046700956_161359.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
      </p>
      b5
    </div>
  </div>
</div>`;
}
document.getElementById('demo_2').innerHTML = box2;
