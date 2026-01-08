// Calculate the grades of a student
// pass array and calulate grade

// averages grade


// average is 80 + 80 + 50
// Output: C

// 1 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A


const marks = [90, 90, 75];

console.log(calculateGrade(marks));
function calculateGrade(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    const average = sum / marks.length;

    if (average < 60)
        console.log("F");
    else if (average <= 70)
        console.log("D");
    else if (average <= 80)
        console.log("C");
    else if (average <= 90)
        console.log("B");
    else if (average <= 100)
        console.log("A")
    else
        console.log("Error");



    console.log(average);

}