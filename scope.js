let bonus = 20; // bonus hocche global scope
function sum (sum1,sum2){
    //ekhankar sob kichur scope, ei second bracket er vitore.
    //baire the scpoe er vitorer kono kicu access kora jabe na 
    const result = sum1+sum2+bonus;
    if(result>5){
        const mood1 = 'Happy' // ei scope er bahir theke access kora jabe na.
        let mood2 = 'Moody' // ei scope er bahir theke access kora jabe na.
        var mood3 = 'Funky' // ei scope er bahir theke access kora jabe.
        console.log(mood1);
        console.log(mood2);
        console.log(mood3);

        /*
        Hoisting:
        kono ekta scope er vitore var likhe kono ekta variable declare kora hole,
        oi declaration ta ke oi scope er bahire giye tar parent er scope er upore 
        niye nibe. but var er variable value soho jodi niche declare kora hoy tobe,
        value take se upore nibe na, only var declaration ta ke nibe. 
        var er variable ta upore declare kore  tate kono value set kora hole, oi function er jekono place 
        theke oi variable ta accessible hobe. let ans const er khetre eita hobe na.
        */

    }
    console.log(mood3);
    return result;
    
}

const sumResult = sum(3,4);
console.log(sumResult);