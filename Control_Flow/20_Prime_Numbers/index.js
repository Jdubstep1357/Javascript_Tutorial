showPrimes(10);



// takes limit, and shows all prime numbers up to t
// this limit



// shows primes instead of non primes
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) console.log(number);
    }
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        // find way to check against prime numbers
        if (number % factor === 0)
            return false;
    }
    return true;

}