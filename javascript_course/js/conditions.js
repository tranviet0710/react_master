const k = 10;

// double equal auto parsing variables to the same datatype and compare them
// triple equal compare value and also data type of variable

if (k === '10') {
    console.log('k is 10');
}
else {
    console.log('k is not 10');
}


const color = 'yellow';
switch (color) {
    case 'red':
        console.log("RED");
        break;
    case 'green':
        console.log("GREEN");
        break;
    default:
        console.log("unknown");
        break;
}