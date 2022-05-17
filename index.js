// function runFiveMiles() {
//     console.log("Go for a five-mile run");
// }

// function liftWeights() {
//     console.log("Pump iron");
// }

// function swimFortyLaps() {
//     console.log("Swim 40 laps");
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }

// function Monday() {
//     exerciseRoutine(liftWeights);
// }

// function Tuesday() {
//     runFiveMiles();
//     console.log("Swim 40 laps");
// }

// function Wednesday() {
//     runFiveMiles();
//     runFiveMiles();
// }

// function Thursday() {
//     runFiveMiles();
//     console.log("Pump iron");
// }

// function Tuesday() {
//     runFiveMiles();
//     console.log("Swim 40 laps");
// }

// function morningRoutine(exercise) {
//     let breakfast;

//     if (exercise === liftWeights) {
//         breakfast = "protein bar";
//     } else if (exercise === swimFortyLaps) {
//         breakfast = "kale smoothie";
//     } else {
//         breakfast = "granola";
//     }

//     exerciseRoutine(exercise);

//     return function () {
//         console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//     };
// }

// morningRoutine(liftWeights)();


function receivesAFunction (callback) {
    return callback();
}

function returnsANamedFunction () {
    return function namedFunction() {console.log('function')};
}

function returnsAnAnonymousFunction() {
    return () => {return 1};
}