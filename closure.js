function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

//function er vitore function thakle ekta close environment create kore.
//se jodi tar bairer kono varibale ke access kore, seta jokhon use kora hobe
//tokhon prottekei (niche clock1, clock2) nijosso ekta value rakhbe, etai closure.

//clock1 tar moto kore 1 kore barbe,clock2 tar moto kore 1 kore barbe, 
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1()); // ager count 4 chilo, eikhane 5 hobe
console.log(clock2()); // ager count 3 chilo, eikhane 4 hobe