let i = 0;

while (i <= 10) {
    // if(i === 5) break;

    // Legac code. Not normally used
    // Outputs all even numbers till 10
    if (i % 2 === 0) {
        i++;
        continue;
    }

    console.log(i++);
    i++;
}