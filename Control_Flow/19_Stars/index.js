showStars(5);


// prints out * based on number inputted by showStars at top
function showStars(rows) {
    let i = 0;
    for (i = 0; i <= rows; i++) {
        let stars = '';
        for (let j = 0; j <= i; j++)
            stars += '*';
        console.log(stars);
    }
}