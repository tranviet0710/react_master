const persons = [
    {
        id: 1,
        name: 'Viet',
        job: 'FullStack Developer',
    },
    {
        id: 2,
        name: 'Nguyen',
        job: 'Backend Developer',
    },
    {
        id: 3,
        name: 'Dong',
        job: 'Automation Tester',
    },
    {
        id: 4,
        name: 'Thien',
        job: 'Frontend Developer',
    },
    {
        id: 5,
        name: 'Bao',
        job: 'DevOps Developer',
    }
]

// forEach
persons.forEach(function (person, i, a, b, c, s) {
    console.log(person.job);
    console.log(i);
    console.log(a);
    console.log(b);
})

// map
const personNames = persons.map(function (person) {
    return person.name;
});
console.log(personNames);

// filter
const isTester = persons.filter(function (person) {
    // return person.job.includes("Tester");
    return person.job === "Automation Tester";
});
console.log(isTester);