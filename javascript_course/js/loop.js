const people = [
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

// for loop
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}
// for of loop
for (p of people) {
    console.log(p);
}

// while loop
let i = 0;
while (i < people.length) {
    console.log(`${i}: ${people[i].job}`);
    i++;
}

