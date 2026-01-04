// Takes parameter limit
// Pass number and when called, see all numbers from 0 to number supplied with limit
// if number is even display even, otherwise display odd

showNumbers(4);

function showNumbers(limit) {
    const EvenNumber = limit % 2 !== 0;

    // for (let i = 0; i <= limit; i++) {
    //     if (limit = EvenNumber) {
    //         console.log(limit + "EVEN");
    //     } else {
    //         console.log(limit + "ODD");
    //     }
    // }

    for (let i = 0; i <= limit; i++) {

        if (i % 2 !== 0)
            console.log(i + " EVEN");
        else
            console.log(i + " ODD");
    }




}