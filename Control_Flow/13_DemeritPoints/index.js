checkSpeed(124);

function checkSpeed(speed) {
    let speedLimit = 70;
    let kmPerPoint = 5;

    if (speed < speedLimit) {
        console.log("Okay");
    }
    else {
        const Points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (Points > 12) {
            console.log("Liscence suspended");
        } else {
            console.log("Points:", + Points);
        }
    }
}