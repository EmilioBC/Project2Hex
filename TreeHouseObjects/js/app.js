// const person = {
//     name:'Emilio',
//     city: 'New York',
//     age: 37,
//     isStudent: true,
//     skills: ['Javascript', 'HTML', 'CSS']
// };
// person.dob = 'April';
// person.nickname = 'Jay'
// const message = `Hi, I'm ${person.name}. I live in ${person.city}. You can call me as ${person.nickname}. I have ${person.skills.length} skills. My skills are ${person.skills.join(', ')}.`;

// console.log(message);
// console.log(person.dob);

// for (let key in person) {
//     console.log(key);
// }

////////////////////////////////////////////////////////
//////////////// FOR IN //////////////////////////////////
////////////////////////////////////////////////////////

// const person = {
//   name:'Emilio',
//   city: 'New York',
//   age: 37,
//   isStudent: true,
//   skills: ['Javascript', 'HTML', 'CSS']
// };

// for(let prop in person) {
//     console.log(`${prop}: ${person[prop]}`);
// }

// 1. Create an array to hold quiz questions and answers
// const questions = [
//     {
//       question: 'How many planets are in the Solar System?', 
//       answer: '8'
//     },
//     {
//       question: 'How many continents are there?', 
//       answer: '7'},
//     {
//       question: 'How many legs does an insect have?', 
//       answer: '6'
//     },
//     {
//       question: 'What year was JavaScript created?', 
//       answer: '1995'
//     }
//   ];
  
//   // 2. Store the number of questions answered correctly
//   const correct = [];
//   const incorrect = [];
//   let correctAnswers = 0;
  
//   /* 
//     3. Use a loop to cycle through each question
//         - Present each question to the user
//         - Compare the user's response to answer in the array
//         - If the response matches the answer, the number of correctly
//           answered questions increments by 1
//   */
//   for ( let i = 0; i < questions.length; i++ ) {
//     let question = questions[i].question;
//     let answer = questions[i].answer;
//     let response = prompt(question);
    
//     if ( response === answer ) {
//       correctAnswers++;
//       correct.push(question);
//     } else {
//       incorrect.push(question);
//     }
//   }
  
//   function createListItems(arr) {
//     let items = '';
//     for (let i = 0; i < arr.length; i++) {
//       items += `<li>${arr[i]}</li>`;
//     }
//     return items;
//   }
  
//   // 4. Display the number of correct answers to the user
//   let html = `
//     <h1>You got ${correctAnswers} question(s) correct</h1>
//     <h2>You got these questions right:</h2>
//     <ol>${ createListItems(correct) }</ol>
  
//     <h2>You got these questions wrong:</h2>
//     <ol>${ createListItems(incorrect) }</ol>
//   `;
  
//   document.querySelector('main').innerHTML = html;

// const pets = [
//     {name:'Auster', type:'dog', breed:'aussie', age:1, photo:'img/aussie.jpg'},
//     {name:'Dacks', type:'dog', breed:'dachshund', age:2, photo:'img/dachshund.jpg'},
//     {name:'Goldy', type:'dog', breed:'golden', age:3, photo:'img/golden.jpg'},
//     {name:'Percy', type:'dog', breed:'persian', age:4, photo:'img/persian.jpg'},
//     {name:'Pugi', type:'dog', breed:'pug', age:5, photo:'img/pug.jpg'},
//     {name:'Taba', type:'dog', breed:'tabby', age:6, photo:'img/tabby.jpg'}
// ];

const pets = [
    {name:'Auster', type:'Dog', breed:'Aussie', age:1, photo:'img/aussie.jpg'},
    {name:'Dacks', type:'Dog', breed:'dachshund', age:2, photo:'img/dachshund.jpg'},
    {name:'Goldy', type:'Dog', breed:'golden', age:3, photo:'img/golden.jpg'},
    {name:'Percy', type:'Dog', breed:'persian', age:4, photo:'img/persian.jpg'},
    {name:'Pugi', type:'Dog', breed:'pug', age:5, photo:'img/pug.jpg'},
    {name:'Taba', type:'Dog', breed:'tabby', age:6, photo:'img/tabby.jpg'}
];


