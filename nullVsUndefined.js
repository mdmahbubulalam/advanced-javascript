let firstName;
console.log(firstName); // firstName er value set kora hoy ni, tai undefined ashbe.

let fun=undefined;
console.log(fun);//ekhane oboshshoi undefined dekhabe.

function add (num1,num2){
    console.log(num1+num2);
    //ekhane theke return kora hy ni, tai undefined dekhabe.
    //return //only return likha thakle undefined dekhabe.
}

const result1 = add(10,20);
console.log(result1);

function add2 (num1,num2){
    console.log(num1,num2);
}

const result2 = add(10); //ekhane ekta parameter er value pathano hoyeche, tai undefined dekhabe.
console.log(result2);

const actor = {
    name : 'Al Pacino',
    age : 60,
}

console.log(actor.phone); // actor object er modhdhe phone name a kono property nai, tai undefined dekhabe.

let ages = [20,21,23];
console.log(ages[8]); // ages array er modhdhe 8 tomo index nai, tai undefined ashebe.

/*null means koni kichu exist nai. undefined onek vabe pete pari, but null paoa jay na. 
null ke set korte hoy, null diye check korte hoy. kichu ekta nai, ba chilo but khali 
hoye geche, tokhon null set kore dite hoy*/