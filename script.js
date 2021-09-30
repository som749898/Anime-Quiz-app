var readlineSync = require("readline-sync");
var userName = readlineSync.question("May I have your name?\n");
console.log("Welcome " + userName + " to \'Haikyuu\' quiz game!");
console.log(`
1. This game will prove if you are a real fan of anime \'Haikyuu\' or not
2. Total there are 10 questions
3. For each correct answer you get 1 point
4. No deduction for any wrong answer`);
console.log();
console.log("Let the game begin");
var score = 0;
var highScorer = [
  {
    name : "Yash",
    score : 8
  },
  {
    name : "Abhisekh",
    score : 6
  },
  {
    name : "Raj",
    score : 7
  }
];
var questionOne = {
  question : `
  1. Who is the oldest first year on Karasuno?
  [a] Hinata
  [b] Kageyama
  [c] Tsukishima
  [d] Yamaguchi\n`,
  answer : "a"
};
var questionTwo = {
  question : `
  2. Who does Karasuno beat for their first real win?
  [a] Ohgiminami
  [b] Date Tech
  [c] Tokonami
  [d] Aobajohsai\n`,
  answer : "c"
};
var questionThree = {
  question : `
  3. Who created the story of Haikyuu?
  [a] Oomori Fujino
  [b] Miura Tsuina
  [c] Seta Aomaru
  [d] Furudate Haruichi\n`,
  answer : "d"
};
var questionFour = {
  question : `
  4. How many chapters does the manga have right now?
  [a] 211
  [b] 221
  [c] 219
  [d] 250\n`,
  answer : "c"
};
var questionFive = {
  question : `
  5. When does the 3rd Season begin?
  [a] 7 October
  [b] 8 October
  [c] 9 October
  [d] 10 October\n`,
  answer : "a"
};
var questionSix = {
  question : `
  6. What does Fukurudani mean?
  [a] Owl Valley
  [b] Owl Power
  [c] Mighty Owls
  [d] Risen Owls\n`,
  answer : "a"
};
var questionSeven = {
  question : `
  7. Which of these pairs are NOT childhood friends?
  [a] Kuroo and Kenma
  [b] Bokuto and Akaashi
  [c] Tsukishima and Yamaguchi
  [d] Oikawa and Iwaizumi\n`,
  answer : "b"
};
var questionEight = {
  question :`
  8. What is Kuroo's position and shirt number?
  [a] Wing Spiker, 1
  [b] Wing Spiker, 5
  [c] Captain, 1
  [d] Captain, 5\n`,
  answer : "c"
};
var questionNine = {
  question : `
  9. How did Hinata and Kenma meet?
  [a] Their first practice match with Nekoma
  [b] Hinata got lost
  [c] During a marathon
  [d] I have no idea\n`,
  answer : "b"
};
var questionTen = {
  question : `
  10. Where is Kiyoko's mole located?
  [a] Her left eye
  [b] Her ear
  [c] Her mouth
  [d] Her cheek\n`,
  answer : "c"
};
var questions = [questionOne,questionTwo, questionThree, questionFour,questionFive,questionSix,questionSeven, questionEight, questionNine, questionTen];
function game(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer){
    console.log("Congratulation, you are correct!");
    score++;
    console.log("You scored 1 point");
  }else{
    console.log("Sorry, you are wrong!");
    console.log("You scored 0 point");
  }
  console.log("-----------------------");
}
for (var i=0;i<questions.length;i++){
  game(questions[i].question, questions[i].answer);
}
console.log();
console.log("Your final score is " + score);
console.log("Highest scorer is Yash with 8 points!!");
console.log("If you have beaten the highscorer plss send me your screenshot");