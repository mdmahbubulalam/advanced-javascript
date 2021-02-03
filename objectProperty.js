const students = [{
        id: 21,
        name: 'Omar Sunny'
    },
    {
        id: 31,
        name: 'Shakib Khan'
    },
    {
        id: 41,
        name: 'Misha'
    },
    {
        id: 71,
        name: 'Dipjol'
    },
]

const output = []

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    output.push(element.name);
}

console.log(output);

//students er name ber korbe
const names = students.map(s => s.name);
console.log(names);

//id 40 er nicher gulo dekhabe
const names2 = students.filter(s => s.id < 40);
console.log(names2);

//id 40 er nicher prothomo element ta dekhabe
const names3 = students.find(s => s.id < 40);
console.log(names3);

