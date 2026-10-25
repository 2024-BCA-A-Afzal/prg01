
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("Prime Numbers from 1 to 100:");

for (let num = 1; num <= 100; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}
