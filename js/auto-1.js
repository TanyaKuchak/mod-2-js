// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log (totalPrice);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// function sayHi()
//     {console.log("Hello, this is my first function!")};
//     sayHi();

// function add(a, b, c) {
//   // Change code below this line

// return a + b + c;
//   // Change code above this line
// }
// let result = add()
// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;

// const totalPrice = pricePerDroid + orderedQuantity;

// if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`;
//   } else {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }

//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip" ;
//   return canAccessContent;
// }

// function checkStorage(available, ordered) {
// const message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   return message;
// }

// function getNameLength(name) {
//   const message = `Name ${name} is ${name}.lenght characters long`; // Change this line
//     console.log(message);
//     return message;

// }

// 11
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };
// 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   // Change code above this line
//   return message;
// }
// 13
// function isAdult(age) {
//   // Change code below this line
//   const passed = (age >= 18) ;

//   // Change code above this line
//   return passed;
// }
// 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = ( SAVED_PASSWORD === password) ;

//   // Change code above this line
//   return isMatch;
// }

// 15
// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// 16
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'Order is processed, our manager will contact you.';
//   }
//   // Change code above this line
//   return message;
// }

// 17

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;

// const totalPrice = pricePerDroid * orderedQuantity;

// if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }
//     return message;
// }
// 19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD ) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// 20
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if (ordered === 0) { // Change this line
//     message =  'There are no products in the order!';
//   } else if (ordered > available ) { // Change this line
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   // Change code above this line
//   return message;
// }

// 21
// function isNumberInRange(start, end, number) {
//   const isInRange = (number >= start && number <= end); // Change this line

//   return isInRange;
// }
// 22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip" ;
//   return canAccessContent;
// }
// 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// 24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent >= 50000) { discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent <= 50000) {discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent <= 20000) {
//    discount = BRONZE_DISCOUNT;
//   }
//   else {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }

// 25
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//    message = (ordered > available) ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   // Change code above this line
//   return message;
// }

// 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// message = password === ADMIN_PASSWORD ?  "Access is allowed": "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }

// 27
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case  "starter" :// Change this line
//       price = 0; // Change this line
//       break;

//     case "professional":// Change this line
//       price = 20; // Change this line
//       break;

//     case "organization":// Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }
//   switch (password) { // Change this line
//     case  null :
//      message = "Canceled by user!";

//       break;

//     case ADMIN_PASSWORD :
//      message = "Welcome!"
//       break;

//     default:  message = "Access denied, wrong password!";}

//   // Change code above this line
//   return message;
// }

// 29
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
// switch (country) { // Change this line
//     case  "China" :
//      message = "Shipping to China will cost 100 credits";
//         break;

//         case  "Australia" :
//      message = "Shipping to Australia will cost 170 credits";
//         break;

//         case  "Chile" :
//      message = "Shipping to Chile will cost 250 credits";
//         break;

//         case  "Jamaica" :
//      message = "Shipping to Jamaica will cost 120 credits";
//         break;

//       default:  message = "Sorry, there is no delivery to your country";}
//   // Change code above this line
//   return message;
// }

// 30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.lenght} characters long`; // Change this line

//   return message;
// }

// 31
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength =courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// 32
// function getSubstring(string, length) {
//   const substring =string.slice(0, length ); // Change this line

//   return substring;
// }

// 33
// function formatMessage(message, maxLength) {
//   let result =
//    message.length <= maxLength
//       ? message
//       : message.slice(0, maxLength) + "...";

//   return result;
// }
// 34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// 35
// function checkForName(fullName, name) {
//  const result = fullName.includes(name) ; // Change this line
//   return result;
// }
// 36
// function checkForSpam(message) {
//   let result;
//   const normalizedLowerCaseInput = message.toLowerCase();

//  result = normalizedLowerCaseInput.includes("sale") || normalizedLowerCaseInput.includes("spam")

//   return result;
// }
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]
// 2 / 32

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//     if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//     return "Access denied, wrong password!";
// }

// 3 / 32
// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//    return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//    return "The order is accepted, our manager will contact you";
//   }

// 4 / 32
// // Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];

// 5 / 32
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// 6 / 32
// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";

// 7 / 32
// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;

// 8 / 32
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length -1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log (lastElement);

// 9 / 32
// function getExtremeElements(array) {

//  const extremeElements = [array[0], array[array.length - 1]];
//  return extremeElements;

// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// 10 / 32
// function splitMessage(message, delimeter) {
// let words;
//  words = message.split(delimeter);
// return words;
// }
// 11/32
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line

// return message.split(" ").length*pricePerWord;
//    // Change code above this line
// }
// 12 / 32
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

// string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }
// 13 / 32
// function slugify(title) {
//   // Change code below this line

// return title.toLowerCase().split(" ").join("-");

//   // Change code above this line
// }
// 14 / 32
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length -1);
// const lastThreeEls = fruits.slice(2);

// 15 / 32
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

//   const allClients = oldClients.concat(newClients); // Change this line
// 16 / 32
//  function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//       const ollArray = firstArray.concat(secondArray).slice(0, maxLength);
//     return ollArray;

//   }

// 17 / 32
// const start = 3;
// const end = 7;

// for (let i = start ; i <=end ; i += 1 ) { // Change this line
//   console.log(i);
// }
// 18 / 32
// function calculateTotal(number) {
//  // Change code below this line
//  let sum = 0;
// for ( let i = 1 ; i <= number ; i += 1 ) { // Change this line
//  sum += i;
//  }
// return sum;
// }
// 19/32
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0 ; i < fruits.length ; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
// 20/32
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for(const value of order){
//   total += value;
// }
//   // Change code above this line
//   return total;
// }

// 21/32
// function findLongestWord(string) {
//   // Change code below this line
//     // через for
// let  words = string.split(" ");
//    let longWord = words[0];
// for (const word of words) {

//   if (word.length > longWord.length) {
//      longWord = word;
//    }
// }
//      return longWord;
//      }
//     // через for if
//   let words = string.split(" ");
//   let longWord = words[0];
//   for(let i = 0; i < words.length; i += 1){
//     if( words[i].length > longWord.length){
//       longWord = words[i]
//     }
//   }
//   return longWord;
// }
// 22/32
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for(let i = min; i <= max; i += 1){
//   numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }

// 23/32
// function filterArray(numbers, value) {
//    const  element = [];
// for (let i = 0; i < numbers.length; i +=1) {

//   if (numbers[i] > value) {
//     element.push(numbers[i])
//    }
// }
//   return element;
// }
// 24/32
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);
// }
// 25/32
// function getCommonElements(array1, array2) {
//   const array12 = [];
//   for (let i = 0; i <= array1.length; i +=1) {
//   if (array2.includes(array1[i])){
//   array12.push(array1[i])
//   }
//   }
//   return array12;
// }
// 26/32
// function calculateTotalPrice(order) {
//   let total = 0;

// for( const value of order){
//    total += value;
// }
//    return total;
// }
// 27/32
// function filterArray(numbers, value) {
//   // Change code below this line
//  let filteredNumbers = [];
//   for (const  number of numbers) {
//         if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }
// 28/32

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

//  29/32
// function getEvenNumbers(start, end) {
//    // Change code below this line
// const numbers = [];
//   // Change code below this line
// for ( let i = start; i <= end; i += 1){
//   if ( i % 2 === 0){
//   numbers.push(i);
//   }
// }
// return numbers;

//   }
// 30/32
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//   break;
//      }
//   }
// 31/32
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//      return i;
//         }
//      }
// }

// 32/32
// function includes(array, value) {
//   // Change code below this line

//   for( let i = 0; i <= array.length; i += 1 ){
//     if (array[i] === value){
//       return true;
//     }
//     }
//   return false;
// }

// 3 тиждень

// const playlist = {
//     name: 'Мій супер плей лист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],

//         //метод об'єкта
//     // getName() {
//     //     console.log('Так це gwtName :)', a );
//     // },
//     changeName(newName) {
//         // у методі ніколи не можна використовувати ім'я об'єкта
//         console.log('this всередині changeName:', this);
//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);

//     },
//     getTrackCount() {
//         return this.tracks.length;
//     }

// };
// playlist.changeName('Нове імя');
// console.log(playlist);
// playlist.addTrack('новий трек');
// console.log(playlist);
// console.log(playlist.getTrackCount());

// const numbers = [...[1, 2, 3,], 4, 5];
// console.log(numbers);
// const temps = [18, 14, 12, 19, 21, 1, 29];
// console.log(Math.max(1, 4, 12, 18));
// console.log(Math.min(...temps));
// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смішної людини",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// 1/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
// rating: 4,
// price: 2153,
// tags: ["premium", "promoted", "top"],
// };
// 2/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner:{
//   name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   }
// };
// 3/42
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// 4/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line
// 5/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// 6/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
//     apartment.rating = 4.7;
//   apartment.owner.name = "Henry Sibola";
//   apartment.tags.push("trusted");
// // Change code below this line
// 7/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// // Change code below this line
// 8/41
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
//   // Change code below this line
//   // Change code above this line
// };
// 9/41
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };
// 10/41
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // for (const key in apartment)
//   const keys = ["descr", "rating", "price"];
// const values = ["Spacious apartment in the city center", 4, 2153];
// for (const key in apartment) ;
// // Change code below this line}
// 11/41
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }
// 12 / 41
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (key in object) {
//   if (object.hasOwnProperty(key)){
//     propCount +=1;
//   }
// }
//   // Change code above this line
//   return propCount;
// }
// 13/41

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
// values.push(apartment[key])
// }
// 14 / 41
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   return Object.keys(object).length;
//   // Change code above this line
// }
// // або
// // function countProps(object) {
// //   const keysObject = Object.keys(object);
// //   const propCount = keysObject.length;
// //   return propCount;
// // }
// 15 / 41
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// // 16/41
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
// for (const value of values) {
//   totalSalary += value;}
//   // Change code above this line
//   return totalSalary;
// }
// 17/41
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for ( const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// 18/41
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     for (const product of products) {
//       if (product.name === productName){
//         return product.price}
//          }
//    return null;
//     }
// 19/41
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   const arrProductValues = [];
//   // Change code below this line
// for (const product of products) {
//     if(product[propName]) {
//        arrProductValues.push(product[propName])
//     }
// }
// return arrProductValues
//   // Change code above this line
// }
// 20/41
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   totalPrice = 0;
//   for  ( product of  products) {
//     if(productName === product.name){
//       totalPrice = product.price * product.quantity;
//     }
//   }
// return totalPrice ;
// }
// 21/41
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 22/41
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const{ yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// 23/41
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {yesterday : highYesterday, today: highToday, tomorrow: highTomorrow,  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// 24/41
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const{ hex, rgb}  of colors) {

//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// 25/41
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {today : { high: highToday, low : lowToday, icon : todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, tomorrow : {high : highTomorrow, low : lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },  } = forecast;
// 26/41
// function calculateMeanTemperature(forecast) {
//   const{ today:{low: todayLow, high: todayHigh}, tomorrow:{low: tomorrowLow, high: tomorrowHigh}} = forecast;
//     // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// 27/41
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore =  Math.min(...scores);

// 28/41
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max (...allScores);
// const worstScore = Math.min(...allScores);

// 29/41
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings,...overrideSettings};
// 30/41
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

//   // Change code below this line
//   const result = { category: category, priority: priority, completed: completed, ...data};
//   return result;
//   // Change code above this line
// }
// 31/41

// // Change code below this line
// function add(...args) {
//  let sum = 0;
//   for (let arg of args) {
//      sum += arg
//  }
//   // Change code above this line
//   return sum;
// }
// 32/41
// Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(arg > firstNumber) {
//     total += arg;
//   }
//   }
//   return total;
//   // Change code above this line
// }
// 33/41
// Change code below this line
// function findMatches(massif, ...otherArgs) {
//   const matches = []; // Don't change this line
// for(let arg of otherArgs){
//   if(massif.includes(arg)){
//     matches.push(arg);
//   }
// }
//   // Change code above this line
//   return matches;
// }
// 34/41
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`;
//   },
//    updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };
// 35 / 41
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     // this.books.push(newName);
//     // Change code above this line
//  },
// };
// 36/41
// const atTheOldToad = {
//   // Change code below this line
// potions: [],
// };
// 37/41
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions(){
//     return this.potions;
//   },
//   // Change code above this line
// };
// 38/41
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//  this.potions.push(potionName);
//     // Change code above this line
//   },
// };
// 39/41
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {

//      const {potions} = this;
//     for( const potion of potions){
//       if(potionName === potion){
//         return potions.splice(potions.indexOf(potion), 1)
//       }
//     }
//       },
// };
// 40/41
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//    const {potions} = this;
//     for( const potion of potions){
//       if(oldName === potion){
//         return potions.splice(potions.indexOf(oldName), 1, newName)
//       }
//     }
//   },
// };
// 41/41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const{potions} = this;
//     for(const potion of potions){
// if(newPotion.name === potion.name){
//   return `Error! Potion ${newPotion.name} is already in your inventory!`;
// }
//     }
//       return potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions){
//            if(potionName === potion.name){

//       return this.potions.splice(this.potions.indexOf(potion), 1);
//       }
//     }
//   return `Potion ${potionName} is not in inventory!`;

//   },
//   updatePotionName(oldName, newName) {
//     const {potions} = this;
//     for(const potion of potions){
//       if (potion.name === oldName){
//         potion.name = newName;
//         return newName;
//       }
//     }
//      return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// 4 mod
// 1/48
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;
// 2/48
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
//   }
// 3/48
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log( `Eating pizza ${pizzaName}`);
// });
// 4/48
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     if(this.pizzas.includes(pizzaName)){
//       return makePizza(pizzaName);
//     }
//       return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
// 5/48
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//     orderedItems.forEach(function (orderedItem, i = 0) {
//       totalPrice += orderedItems[i];
//     });

//   // Change code above this line
//   return totalPrice;
// }
// 6/48
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   numbers.forEach(function (number, i = 0, numbers) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     };
//   });
//   // Change code above this line
//   return filteredNumbers;
// }
// 7/48
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   firstArray.forEach(function (elementOfArray, i = 0, firstArray) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   })

//   return commonElements;
//   // Change code above this line
// }
// 8/48

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// 9/48
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>
//    quantity * pricePerItem;

// // Change code above this line

// 10/48
// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach ((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line

// 11/48
// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach( (number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// 12/48
// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach( (number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// 13/48
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else{
//       newArray.push(number);
//     }
//     });
//   // for (let i = 0; i < numbers.length; i += 1) {
//     return newArray;
//   // }
//   // Change code above this line
// }
// 14 / 48
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// 15/48
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// 16/48
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// 17/48
// Change code below this line
// const getUserNames = (users) => {
//   const names = [];
//   users.map((user) => {
//     names.push(user.name);
// });
// return names;
// };
//   // Change code above this line

// 18/48
// Change code below this line
// const getUserEmails = (users) => {
//   const mails = [];
//   users.map((user) => {
//     mails.push(user.email);
// });
// return mails;
// };
//   // Change code above this line
// 19/48

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 ===0 );
// const oddNumbers = numbers.filter(number => number % 2 ===1 );
// 20/48
//  const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//    (book, index, array) => array.indexOf(book) === index
// );
// console.log(uniqueGenres);
// 21/48
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(({rating}) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({author}) => author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);
// 22/48

// const getUsersWithEyeColor = (users, color) => users.filter(
//    user => user.eyeColor === color
//     )
// 23/48
// const getUsersWithAge = (users, minAge, maxAge) =>  users.filter(
//    user => user.age >= minAge && user.age < maxAge
//     )

// 24/48
// const getUsersWithFriend = (users, friendName) => users.filter(
//    user => user.friends.includes(friendName)
//     )
// 25/48
// const getFriends = (users) => {
//   const array = users.flatMap(user => user.friends);
// return array.filter((friend, index, array) => array.indexOf(friend) === index);
//   };

// 26/48
// const getActiveUsers = (users) => users.filter(user => user.isActive);

// 27/48
// const getInactiveUsers = (users) => users.filter(user => !user.isActive);
// 28/48
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// 29/48
// const getUserWithEmail = (users, email) => { return users.find(user => user.email === email);
//  };
// 30/48
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 === 1);;

// const eachElementInSecondIsEven = secondArray.every(element => element % 2 === 0);;
// const eachElementInSecondIsOdd = secondArray.every(element => element % 2 === 1);;

// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);;
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 === 1);;
// 31/48
// const isEveryUserActive = (users) => {return users.every(user => user.isActive);
// };
// 32/48
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(element => element % 2 === 1);

// const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(element => element % 2 === 1);

// const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 === 1);

// 33/48
// const isAnyUserActive = users => {return users.some(user => user.isActive);

// };
// 34/48
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce(
// (total, value) => {return total + value;
//                   }, 0 );

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// 35/48
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return (player.playtime / player.gamesPlayed) + total;
// }, 0);
// console.log(totalAveragePlaytimePerGame);
// 36 / 48
// Change code below this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const calculateTotalBalance = users => {return users.reduce((total, user) => total + user.balance, 0);

// };
// console.log(calculateTotalBalance);

// 37/48

// const getTotalFriendCount = users => {return users.reduce((total, user) => [...total, ...user.friends], []).length;
// };
// 38/48
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
// 39/48
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates =[...releaseDates].sort((a, b) => b - a);
// 40/48
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// 41/48
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBoook) => firstBook.author.localeCompare(secondBoook.author));

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBoook) => secondBoook.author.localeCompare(firstBook.author));;

// const sortedByAscendingRating = [...books].sort((firstBook, secondBoook) => firstBook.rating - secondBoook.rating);

// const sortedByDescentingRating =  [...books].sort((firstBook, secondBoook) => secondBoook.rating - firstBook.rating);
// 42/48
// Change code below this line
// const sortByAscendingBalance = users => { return [...users].sort((a, b) => a.balance - b.balance);

// };
// // Change code above this line
// 43/48
// const sortByDescendingFriendCount = users => { return [...users].sort((a, b) => b.friends.length - a.friends.length);

// };
// 44/48
// Change code below this line
// const sortByName = users => { return [...users].sort((a, b) => a.name.localeCompare(b.name))

// };
// //
// 45/48
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .filter(book => book.rating >= MIN_BOOK_RATING)
//          .map(book => book.author);
// 46/48
// const getNamesSortedByFriendCount = users => {
//   return [...users]
//   . sort((a, b) => a.friends.length - b.friends.length)
//    .map(users => users.name) ;

// };
// 47/48
// const getSortedFriends = users => {
//   return [...users]
//   .flatMap(user => user.friends)
//   .filter((friend, index, array) => array.indexOf(friend) === index)
//   .sort((first, second) => first.localeCompare(second))
//    };
// 48/48
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//   .filter(user => user.gender === gender)
//     .reduce((total, user) => (total += user.balance), 0);

// };

//------------ 5модуль

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//   },
// };
// // user.showTag();

// const foo = function () {
//   console.log('foo -> tjhis', this);
// };
// foo();

// const showTag = function () {
//   console.log('showTag -> this', this);
//   console.log('showTag -> this', this.tag);
// };
// // showTag();
// const user = {
//   tag: 'Mango',
// };
// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this', this.tag);
//   },
// };
// user.showTag();
// const outerShowTag = user.showTag;
// outerShowTag();

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this', this.tag);
//   },
// };
// user.showTag();
// const xyz = user.showTag;
// xyz();

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };
// const updateCounter = function (value, operation) {
//   operation(value);
// };
// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);
// 1/20
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };
// 2/20
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//    this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// 3/20
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };
// 4/20
// 5 / 20
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

//   const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line
// 6/20
// class Car {}
// 7/20
// class Car {
//   // Change code below this line
// constructor(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//     this.price = price;
// }

//   // Change code above this line
// }
// 8/20
// class Car {
//   // Change code below this line
//   constructor({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }
// 9/20
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
// getPrice() {
//   return this.price;
// }
// changePrice(newPrice){
//     this.price = newPrice;
// }

//   // Change code above this line
// }
// 10/20
// class Storage {
//   constructor (items){
//     this.items = items;
//   }
//   getItems(){
//     return this.items;
//   };
//   addItem(newItem){
//     this.items.push(newItem);

//   };
//   removeItem(itemToRemove){
//     this.items.indexOf(itemToRemove);
//     this.items.splice(1, 1)
//     // this.items.splice(indexOf("itemToRemove");

//   };
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// 11/20
// class StringBuilder{
//   constructor(initialValue){
//     this.value = initialValue;
//   }
//   getValue(){
//     return this.value;
//   }
//   padEnd(str){
//       this.value = this.value + str;

//   }
//   padStart(str){
//      this.value = str + this.value;

//   }
//   padBoth(str){
//    this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// 12/20
// class Car {
//   // Change code below this line
//   #brand;
//   model;
//   price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   // Change code above this line
// }
// 13/20
// class Storage {
//   // Change code below this line
// #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// 14/20
// class StringBuilder {
//   // Change code below this line
// #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// 15/20
// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//  set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }
// 16/20

// class Car {
//   // Change code below this line

//   static MAX_PRICE = 50000;
//    #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE){
//     return;
//     } else {
//        this.#price = newPrice;
//     }

//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// 17/20
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
// static checkPrice (price) {
//   if (price > Car.#MAX_PRICE) {
//     return "Error! Price exceeds the maximum";
//   } else {
//     return "Success! Price is within acceptable limits"
//   }
// };
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// 18/20
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User {
//   static AccessLevel = {BASIC: "basic", SUPERUSER: "superuser"} ;}
// 19/20
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
// constructor({accessLevel,email}){
//     super(email);
//      this.accessLevel = accessLevel;

//   }
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
// 20/20
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   blacklistedEmails = [];
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// // mango.blacklist('poly@mail.com');
// // console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// // console.log(mango.isBlacklisted('mango@mail.com')); // false
// // console.log(mango.isBlacklisted('poly@mail.com')); // true
// const fruits = ["apple", "peach", "pear", "banana"];
// // const lastElementIndex = fruits.length -1;
// const lastElement = fruits[fruits.length -1];
// // console.log(lastElementIndex);
// console.log(lastElement);;

