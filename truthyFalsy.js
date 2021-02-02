const age = 0;
// if(age>0){
//     console.log('Condition is true');
// }else{
//     console.log('Condition is false');
// }

/* age a jekono number thakle, setake javascript true hisabe dhore nibe, only
jodi oi number ta 0 na hoy. orthat age = 0 hole se false a chole jabe.*/
if(age || age == 0){
    console.log('Condition is true');
}else{
    console.log('Condition is false');
}

const name = 'Alam';
/*name orthat string er modhdhe kichu lekha thakle (ex. name, name.length, name.length>0 etc)
likha thakle seta truthy value hobe. jodi name = " " string er moddhde ekta space or white 
space thakleo seta truthy value hobe. name = "0" thakleo same, karon 0 ekhon ekta string.
Ar jodi name = "", name = null, name = undefined, name - NaN thake, tokhon seta falsy hobe. 
only name thakleo falsy value hobe, karon ekhane name er kono value nai or name er value 
ekhane undefined*/
/**
 * Truthy Value - '0', ' ', [], {}, 'false'
 * Falsy Value - false, 0, "" or '', undefined, null ,NaN
 */
if(name){
    console.log('Condition is true');
}else{
    console.log('Condition is false');
}