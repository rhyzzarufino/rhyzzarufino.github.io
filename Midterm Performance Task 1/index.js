var quiz = [10, 20, 15, 7, 19, 20];
let totalScore = 0;

const totalNumber = quiz.length;
var passedQuizzes = quiz.filter(function(score) {
  return score >= 10;
})
var failedQuizzes = quiz.filter(function(score) {
  return score < 10;
})
for (var i = 0; i < quiz.length; i++) {
  totalScore += quiz[i];
}
let average = Math.round(totalScore / quiz.length);

/// To get the average, I have to add them all up then divide them by their total number

document.write("The given score is " + quiz + "<br />");
document.write("And the passing score is 10" + "<br />");
document.write("The total number of the given score is " + totalNumber + "<hr />");
document.write("These are the scores that passed: " + passedQuizzes + "<br />");
document.write("The total of passed scores is " + passedQuizzes.length + "<hr />");
document.write("These are the scores that failed: " + failedQuizzes + "<br />");
document.write("The total of failed scores is " + failedQuizzes.length + "<hr />");
document.write("The average score is " + average + "<hr />");
