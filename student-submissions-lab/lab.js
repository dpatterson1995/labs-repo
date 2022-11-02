let submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

function addSubmission(array, newName, newScore, newDate) {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
  };

  newSubmission.score >= 60
    ? (newSubmission.passed = true)
    : (newSubmission.passed = false);

  array.push(newSubmission);
  console.log(array);
}

addSubmission(submissions, "Sally", 40, "2020-01-01");

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
  console.log(array);
}

deleteSubmissionByIndex(submissions, 1);

function deleteSubmissionByName(array, name) {
  let indexOfObjects = array.findIndex((object) => {
    return object.name === name;
  });
  array.splice(indexOfObjects, 1);
}
deleteSubmissionByName(submissions, "Jack");
console.log(submissions);

function editSubmission(array, index, score) {
  array[index].score = score;
  array[index].passed = score >= 60;
}
editSubmission(submissions, 3, 76);
console.log(submissions);

function findSubmissionByName(array, name) {
  let foundSubmission = array.find((array) => {
    return array.name === name;
  });
  console.log(foundSubmission);
}
findSubmissionByName(submissions, "Jill");

function findLowestScore(array) {
  let lowestScore = array[0];
  array.forEach((submission) => {
    if (submission.score < lowestScore.score) {
      lowestScore = submission;
    }
  });
  return lowestScore;
}
console.log(findLowestScore(submissions));

function findAverageScore(array) {
  let sum = 0;
  for (let score of array) {
    sum += score.score;
  }
  return sum / array.length;
}
console.log(findAverageScore(submissions));

function filterPassing(array) {
  let passed = array.filter((array) => array.passed === true);
  {
    console.log(passed);
    return;
  }
}
filterPassing(submissions);

function filter90AndAbove(array) {
  let passed = array.filter((array) => array.score >= 90);
  {
    console.log(passed);
    return;
  }
}
filter90AndAbove(submissions);
