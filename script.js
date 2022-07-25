
// const submissions = [
//     {name: "Jane", score: 95, date: "2020-01-24", passed: true}, 
//     {name: "Joe", score: 77, date: "2018-05-14", passed: true},
//     {name: "Jake", score: 59, date: "2019-07-05", passed: false},
//     {name: "Jill", score: 88, date: "2020-04-22", passed: true},
// ];
// // console.log(submissions);


// function addSubmission(array, newName, newScore, newDate){
//     let isPassing;
//     if (newScore >= 60){
//         isPassing = true;
//     } else {
//         isPassing = false;
//     }
//     const newSubmission = {name: newName, score: newScore, date: newDate, passed: isPassing}
//     array.push(newSubmission);
// };

// addSubmission(submissions, "Marina", 59, "2022-07-19");
// console.log(submissions);


// function deleteSubmissionByIndex(array, index) {
//     array.splice(index, 1);
// }

// deleteSubmissionByIndex(submissions, 0);


// const deleteSubmissionByName = (array, name) => {
//     return array.splice(name);
// }

// const index = name.findIndex(name => name.)

// function deleteSubmissionByName(array, name) {
//     const index = array.findIndex() {

//     } 
//     submissions.findIndex(name, 1);
//     submissions.splice(name, 1);
// };



const submissions = [
    {name: "Jane", score: 95, date: "2020-01-24", passed: true}, 
    {name: "Joe", score: 77, date: "2018-05-14", passed: true},
    {name: "Jake", score: 59, date: "2019-07-05", passed: false},
    {name: "Jill", score: 88, date: "2020-04-22", passed: true},
];

// //second option
// function addSubmission(array, newName, newScore, newDate){

//     const newObj = {name: newName, score: newScore, date: newDate};

//     newObj.passed = newScore >= 60;

//     array.push(newObj);
// };
// addSubmission(submissions, "Marina", 50, "2022-07-21");

// console.log(submissions);

//third option
function addSubmission(array, newName, newScore, newDate){
    array.push({
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60,
    });
}

addSubmission(submissions, "Marina", 50, "2022-07-21");

console.log(submissions);


//second option
const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
};



const deleteSubmissionByName = (array, name) => {
    const index = array.findIndex((element) => {
        return name === element.name;
    });

    deleteSubmissionByIndex(array, index);
}

deleteSubmissionByName(submissions, "Marina");
console.log(submissions);


const editSubmission = (array, index, score) => {
    //can put in 1 line of code
    // array[index] = {...array[index], score: score, passed: score >= 60};
    array[index].score = score;
    array[index].passed = score >= 60;
}

editSubmission(submissions, 1, 40);
console.log(submissions);

function findSubmissionByName(array, name) {
    return array.find((element) => {
        return name === element.name;
    });
}

console.log(findSubmissionByName(submissions, "Jane"));


function findLowestScore(array) {
    let lowest= array[0];

    array.forEach((thing) => {
        if(thing.score < lowest.score){
            lowest = thing;
        }
    });

    return lowest;
}

console.log(findLowestScore(submissions));


function findAverageScore(array) {
    let sum= 0;

    for (const thing of array) {
        sum += thing.score;
    }

    return sum / array.length;
}

console.log(findAverageScore(submissions));


const filterPassing = (array) => {
    return array.filter((thing) => {
        return thing.passed
    });
}

console.log(filterPassing(submissions));


const filter90AndAbove= (array) => {
    return array.filter((thing) => {
        return thing.score >= 90;
    });
}

console.log(filter90AndAbove(submissions));


//Extended Challenges

const createRange = (start, end) => {
    let num = start;
    const range = [];

    while(num <= end) {
        range.push(num);
        num++;
    }

    return range;
}

console.log(createRange(2, 5));


const countElements = (array) => {
    let counts = {};

    for (const thing of array) {
        if (counts[thing]){
            counts[thing] += 1;
        } else {
            counts[thing] = 1;
        }
    }

    return counts;
}

console.log(countElements(["a", "b", "c", "a", "a", "b"]));


//ELEMENT and THING are the same thing in this code
