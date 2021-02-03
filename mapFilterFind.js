const numbers = [3, 4, 5, 6, 7, 8];

//for loop diye array er element ke square kora jay.
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);


//alada function and map use kore numbers er square-
function square(element) {
    return element * element;
}
const result1 = numbers.map(square);
console.log(result1);

/*map er modhdhe je function use kora hoy sekhane 3 ta parameter dhukbe-
    element - array er element gulo ashbe
    index - array er index gulo ashbe
    array - puro array ta ashbe.
*/
const numbersMap = numbers.map(function (element, index, array) {
    console.log(element, index, array);
})

//map er moddhe direct function use kore square - 
const result2 = numbers.map(function (element) {
    return element * element;
})
console.log(result2);

//arrow function use kore square - 
const result3 = numbers.map(x => x * x); //parameter=>return statement
console.log(result3);

//arrow function and filter use kore array er modhde theke kichu filter kore niye ashar jonno - 
//filter er kaj hochche array er modhde je element ache seguloke filter kore je shorto ache,
//sei shorto onijanyi dekhabe
const result4 = numbers.filter(x => x > 5) // numbers array er modhdhe 5 er upore jesob element ache seguloke dekhabe
console.log(result4);

//find and filter almost same. filter loop create kore array diye dibe, find only 1 ta element dibe
const result5 = numbers.find(x => x > 5) // numbers array er modhdhe 5 er upore je element ta prothom ache seita dibe
console.log(result5);