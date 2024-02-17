//Assignment Solution
// Task 2:
//  let personName: string ="Eric";
//  console.log(`Hello ${personName},would you like to learn some python today?`);


//Task 3:
//   let personName: string = "dua azhar";

//in lowercase
//  console.log("lowercase:", personName.toLowerCase());

//in uppercase
//   console.log("uppercase:", personName.toUpperCase());

//title case
//   console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));

//Task 4:
//  let quote: string ="A person who never made a mistake never tried anything new.";
//  let Author: string ="Albert Einstein";

//  console.log(`${Author} once said, "${quote}"`);

//task 5:

//   let famous_person: string = "Albert Einstein";
//   let message: string = `${famous_person} once said, "${quote}"`;

//   console.log(message);

//task 6:
//  let personName: string ="\t\n   john doe \n\t";
//  console.log("Original:",  personName);
//  console.log("Stripped:",  personName.trim());

//task 7 and 8:
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4*2);
// console.log(16/2);

//task 9:
//  let favouriteNumber: number = 14;

 //revealing my favourite number in a message format.
//  console.log(`my favourite number is ${favouriteNumber}.`);

//task 10:
//Author: [Dua Azhar]
//date [Wednesday , Feburary 14 , 2024]

//task 9: printing my favourite number.

//task 11:
// let names : string [] = ["dua","hania","hamza","darim"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

//task 12:
// let names : string [] = ["dua","hania","hamza","darim"];

// let message : string = "Do you like to play football?"
// console.log(names[0] + " "+ message )
// console.log(names[1] + " "+ message )
// console.log(names[2] + " "+ message )
// console.log(names[3] + " "+ message )

//task 13:
// let transpotation : string [] = ["Honda Motorcycle","Audi","Honda City"];
// transpotation.map((items) => console.log(`I would like to own a ${items}`));

//task 14:
// let guestArr : string [] = ["dua","hania","hamza"];

// guestArr.map((items) => ( console.log(`Dear ${items} , You are invited to the dinner`)));

//task 15:
//  let guestArr : string[] = ["dua", "hania" ,"hamza"];
//   let canNotAttend : string = "dua"

// console.log(canNotAttend + " " + ("can not attend the dinner."));

//part 2
// let newGuest : string = "mubashira"
// guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

// console.log(guestArr)
 
// guestArr.map((items) => 
// console.log(`Dear ${items}, you are invited to the dinner.`)
// )

//task 16:
//  let guestArr : string[] = ["mubashira", "hania" ,"hamza"];
//  let canNotAttend : string = "hania"

//  let newGuest : string ="huzaifa"

//  guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//  console.log(guestArr)


//  guestArr.map((items) => 
//  console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`)
//  );

//part 2 began
// let guestbeg : string ="aisha"
// guestArr.unshift(guestbeg);
// console.log(guestArr)

//part 3 middle
// let middleguest : string ="abid"
// let middleIndex = guestArr.length/3
// guestArr.splice(middleIndex,0,middleguest)
// console.log(guestArr)

//part 4 append
// guestArr.push("dua")
// console.log(guestArr)

//part 5
// guestArr.map((items) =>
// console.log(` Dear ${items}, you are invited in the more people list on dinner`));

//task 17:
// let GuestArr: string[] = ["Rastan Lal", "Roshi Mahanta", "Gabbar Singh"];
// let canNotAttend: string = "Roshi Mahanta";
// let newGuest: string = "Chaman Lal";
//  GuestArr[GuestArr.indexOf(canNotAttend)] = newGuest;
// GuestArr.unshift("kalia");
//  let middleGuest: string = "Crime Master GOGO";
// let middleIndex = GuestArr.length / 2;
// GuestArr.splice(middleIndex, 0, middleGuest);
// GuestArr.push("Micheal");
// console.log("I can invite only two people to dinner");
// while(GuestArr.length>2){
//     let removeGuest =GuestArr.pop()
//     console.log(`Dear ${removeGuest}, you are not invited to the dinner`)
// }
// GuestArr.map((item) =>
// console.log(`Dear ${item}, you are invited to a dinner`)
// );
// GuestArr.pop();
// GuestArr.pop();
// console.log(GuestArr);

// //task 18:
// let countryArr = [
//     "Pakistan",
//     "India",
//      "Argentina",
//      "Zimbabwe",
//      "America", 
//      "Bangladesh",
//     ];
//     //  console.log(countryArr);
//     // console.log(countryArr.sort());
//     // console.log(countryArr);
//     // console.log(countryArr.reverse());
//     //  console.log(countryArr);
//     let sortedArray = [
//     "Pakistan",
//     "India",
//      "Argentina",
//      "Zimbabwe",
//      "America", 
//      "Bangladesh",
//     ];
//     sortedArray.sort();
//     console.log(sortedArray);
//     sortedArray.reverse();
//     console.log(sortedArray);
    
//task 19:
// let guestArr: string[] = ["dua", "mubashira", "Aisha", "hania"];
// let canNotattend: string = "abid";
// let newGuest: string = "huzaifa";
// guestArr[guestArr.indexOf(canNotattend)] = newGuest;
// guestArr.unshift("sania");
// let middleGuest: string = "heer";
// let middleIndex = guestArr.length / 2;
// guestArr.splice(middleIndex, 0, middleGuest);
// guestArr.push("sara");
// // console.log(guestArr);


//  console.log(guestArr.length + " " + "please" + " " + "are invited to dinner");

//task 20:
// let proglanguages:string[] =[
//     "HTML", "CSS","javaScript/TypeScript","php"];
//     proglanguages.map((item) => console.log(item));

//task 21:
// Define a Book interface
// interface Book {
//     title: string;
//     author: string;
//     genre: string;
// }

// // Create objects containing book items
// const book1: Book = {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: "J.K. Rowling",
//     genre: "Fantasy"
// };

// const book2: Book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     genre: "Classic"
// };

// // Accessing and printing the information
// console.log(book1.title, book1.author, book1.genre);
// console.log(book2.title, book2.author, book2.genre);

//task 22:
// const programmingLanguage: string[] =[
//     "python",
//     "html",
//     "css",
//     "javascript",
//     "typescript",
// ];
// console.log(programmingLanguage[6]);
// console.log(programmingLanguage[3]);


//task 23:
//(5 question of true)

// let number: number = 10;
// // Test 1
// console.log("Is number equal to 10? I predict True.");
// console.log(number === 10);

// // Test 2
// console.log("Is number not equal to 5? I predict True.");
// console.log(number !== 5);

// // Test 3
// console.log("Is number greater than 5? I predict True.");
// console.log(number > 5);

// // Test 4
// console.log("Is number less than or equal to 10? I predict True.");
// console.log(number <= 10);

// // Test 5
// console.log("Is number multiplied by 2 equal to 20? I predict True.");
// console.log(number * 2 === 20);

//(5 questions false)
// let car: string = 'subaru';
// // Test 1
// console.log("Is car equal to 'subaru'? I predict True.");
// console.log(car === 'honda');

// // Test 2
// console.log("Is car not equal to 'hilux'? I predict True.");
// console.log(car !== 'hilux');

// // Test 3
// console.log("Is car length less than 5? I predict False.");
// console.log(car.length < 5);

// // Test 4
// console.log("Is car length greater than 7? I predict False.");
// console.log(car.length > 7);

// // Test 5
// console.log("Is car equal to 'Subaru'? I predict False (case-sensitive comparison).");
// console.log(car === 'Subaru');


//task 24:
// 1.(Tests for equality and inequality with strings)
// const string1: string = "apple";
// const string2: string = "orange";
// console.log(string1 === string2);
// console.log(string1 !== string2);
// 2.(Tests using the lower case function)
// const mixedCaseString: string = "Helloeric";
// console.log(mixedCaseString.toLowerCase() === "helloeric");
// 3.(Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to)
// const num1: number = 10;
// const num2: number = 5;
// console.log(num1 === num2);
// console.log(num1 !== num2);
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);
//4.(Tests using "and" and "or" operators)
// const Condition1: boolean = true;
// const Condition2: boolean = false;
// // console.log(Condition1 && Condition2);
//  console.log(Condition1 || Condition2);
// 4.(Test whether an item is in a array)
// const fruits: string[] = ["Grapes", "Mango", "Banana", "Gava"];
// console.log(fruits.includes("Grapes"))
// console.log(fruits.includes("grapes"))

//task 25:
// let signalColor: string = 'green';
// // // Version that passes the if test (green alien)
// // if (signalColor === 'green') {
// //     console.log("player just earned 5 points!");
// // }

// //  Version that fails the if test (red alien)
// signalColor = 'red';

// if (signalColor === 'green') {
//     console.log("player just earned 5 points!");


// //task 26:
// let mangoColor: string = 'yellow'
// mangoColor = 'purple';
// //Version that passes the if test (yellow mango)
// if (mangoColor === 'yellow') {
//     console.log("player just earned 5 points!");
// }
//  else{
//     console.log("player just earnes 10 points!");
// }
// // Version that passes the else condition
//  mangoColor = 'purple';
// if (mangoColor === 'yellow') {
//     console.log("player just earned 5 points!");
// }
//  else{
//     console.log("player just earnes 10 points!");
// }


//task 27:
// let alienColor: string = 'green'
// if (alienColor === 'green') {
//     console.log("player just earned 5 points!");
// }
// else if (alienColor === 'yellow') {
//     console.log("player just earned 10 points");
// }
// else if(alienColor === 'red') {
//     console.log("player just earned 15 points!");
// }
// alien is yellow
// let alienColor: string = 'yellow'
// if (alienColor === 'green') {
//     console.log("player just earned 5 points!");
// }
// else if (alienColor === 'yellow') {
//     console.log("player just earned 10 points");
// }
// else if(alienColor === 'red') {
//     console.log("player just earned 15 points!");
// }
// alien is red
// let alienColor: string = 'red'
// if (alienColor === 'green') {
//     console.log("player just earned 5 points!");
// }
// else if (alienColor === 'yellow') {
//     console.log("player just earned 10 points");
// }
// else if(alienColor === 'red') {
//     console.log("player just earned 15 points!");
// }


//task 28:
// let age: number = 2
// if(age < 2){
//     console.log("the person is a baby")
// }
// else if (age>=2 && age <4) {
//     console.log("the person is toddler")
// }
// else if (age>=4 && age <13){
//     console.log("the person is a kid")
// }
// else if (age>=13 && age <20){
//     console.log("the person is a teenager")
// }
// else if (age>=20 && age <65){
//     console.log("the person is a adult")
// }
// else if (age>65){
//     console.log("the person is an elder")l
// }

//task 29:
// const favouriteFruits: string [] = ["banana", "apple", "strawberry","cheeko"];
// // check for cartain fruits using independent if statements
// if (favouriteFruits.includes("banana")){
//     console.log("you really like bananas!");
// }
// if (favouriteFruits.includes("apple")){
//     console.log("you really like apples!");
// }
// if (favouriteFruits.includes("strawberry")){
//     console.log("you really like strawberries!");
// }
// if (favouriteFruits.includes("cheeko")){
//     console.log("you really like cheekoos!");
// }
// if (favouriteFruits.includes("orange")){
//     console.log("you are really like oranges!")
// }
// else {
//    console.log("oranges are not in your favourite fruits list.")
// }

 
//task 30:
// let employee: string[] =["admin", "Rizwan Akhtar", "Ahsen Rizwan", "Nida Rizwan", "Rumaisa Rizwan"];
// for(let i=0; i<employee.length; i++){
//     if(employee[i] == "admin"){
//         console.log("Hello admin, would you like to see a status report?")
//     }
//     else{
//         console.log(`Hello ${employee[i]}`)
//     }
// }


//task 31:
// let usernames: string[] = ["dua", "huzaifa", "Aisha", "Mubashira"];

// if (usernames.length === 0) {
//   console.log("we need to find some users!")
// }else{
//   for (let i=0; i<=usernames.length; i++) {
//   // for (let username of usernames) {
//     console.log(usernames);
//   }
// }

// usernames.splice(0, usernames.length);


//task 32:
// const currentUsers: string[] = ["Abid", "dua", "huzaifa", "hamza", "mubashira"];

// const newUsers: string[] = ["dua", "heer", "hania", "abdur rehman", "Abid"];

// function isUsernameTaken(username: string): boolean {
//   return currentUsers.some((user) => user.toLowerCase() === username.toLowerCase());
// }

// for (const newUser of newUsers) {
//   if (isUsernameTaken(newUser)) {
//     console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different one.`);
//   } else {
//     console.log(`Congratulations! The username '${newUser}' is available.`);
//   }
// }


//task 33:
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const num of numbers) {
 
//   if (num === 1) {
//     console.log(`${num}st`);
//   } else if (num === 2) {
//     console.log(`${num}nd`);
//   } else if (num === 3) {
//     console.log(`${num}rd`);
//   } else {
//     console.log(`${num}th`);
//   }
// }


//task 34:
// const favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// console.log("Pizza Names:");
// for (const pizza of favoritePizzas) {
//   console.log(pizza);
// }

// console.log("\nStatements about Pizza:");
// for (const pizza of favoritePizzas) {
//   console.log(`I like ${pizza} pizza.`);
// }

// console.log("\nI really love pizza!");


//task 35:
// const animals: string[] = ["Dog", "Cat", "Rabbit"];

// console.log("Animal Names:");
// for (const animal of animals) {
//   console.log(animal);
// }

// console.log("\nStatements about Animals:");
// for (const animal of animals) {
//   console.log(`A ${animal.toLowerCase()} would make a great pet.`);
// }

// console.log("\nAny of these animals would make a great pet!");


//task 36:
// function make_shirt(size: string, message: string): void {
//     console.log(`T-shirt Summary: Size - ${size}, Message - "${message}"`);
//   }
  
//  make_shirt("Large", "Hello, World!");


// //task 37:
// function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
//     console.log(`T-shirt Summary: Size - ${size}, Message - "${message}"`);
//   }
  
//   make_shirt();
  
//   make_shirt("Medium");
  
//   make_shirt("Small", "TypeScript is awesome!");
  

//task 38:
//   function describe_city(city: string, country: string = "Unknown"): void {
//     console.log(`${city} is in ${country}.`);
//   }
  
//   describe_city("Karachi", "Pakistan");
//   describe_city("New York", "USA");
//   describe_city("Paris"); 
  

//task 39:
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
//   }
  
//   const cityCountry1 = city_country("Lahore", "Pakistan");
//   const cityCountry2 = city_country("Tokyo", "Japan");
//   const cityCountry3 = city_country("Berlin", "Germany");
  
//   console.log(cityCountry1);
//   console.log(cityCountry2);
//   console.log(cityCountry3);


//task 40:
// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     const album: { artist: string, title: string, tracks?: number } = {
//       artist: artist,
//       title: title,
//     };
  
//     if (tracks !== undefined) {
//       album.tracks = tracks;
//     }
  
//     return album;
//   }

//   const album1 = make_album("Artist1", "Album One");
//   const album2 = make_album("Artist2", "Album Two", 12);
//   const album3 = make_album("Artist3", "Album Three", 8);
  
//   console.log(album1);
//   console.log(album2);
//   console.log(album3);
  
  
// //task 41:
// function show_magicians(magicians: string[]): void {
//     console.log("Magicians:");
//     for (const magician of magicians) {
//       console.log(magician);
//     }
//   }
  

//task 42:
// function show_magicians(magicians: string[]): void {
//     console.log("Magicians:");
//     for (const magician of magicians) {
//       console.log(magician);
//     }
//   }
  
//   function make_great(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {
//       magicians[i] = magicians[i] + " the Great";
//     }
//   }
  
//   const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
//   make_great(magicianNames);
  
//   show_magicians(magicianNames);
  

//task 43:
// function show_magicians(magicians: string[]): void {
//     console.log("Magicians:");
//     for (const magician of magicians) {
//       console.log(magician);
//     }
//   }
  

//task 44:
// function order_sandwich(...items: string[]): void {
//     console.log("Sandwich Summary:");
//     if (items.length === 0) {
//       console.log("No items selected for the sandwich.");
//     } else {
//       console.log(`You ordered a sandwich with: ${items.join(', ')}`);
//     }
//     console.log("--------------------------");
//   }
  
//   order_sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
//   order_sandwich("Ham", "Swiss");
//   order_sandwich();


//task 45:
// interface Car {
//     manufacturer: string;
//     model: string;
//     [key: string]: string; 
// }
//   function createCar(manufacturer: string, model: string, ...options: [string, string][]): Car {
//     const car: Car = { manufacturer, model };
  
//     options.forEach(([key, value]) => {
//       car[key] = value;
//     });
  
//     return car;
//   }
  
//   const myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', '2022']);
  
//   console.log(myCar);
  