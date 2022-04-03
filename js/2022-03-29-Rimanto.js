console.log('-------------Kintamuju inicijavimas-----------');

const one = 1;
console.log(one);
const two = 2;
console.log(two);
const three = 3;
console.log(three);


console.log('-------------------- 2 ---------------------');

const first = 'yes';
console.log(first);
const second = 'no';
console.log(second);
const third = 'maybe';
console.log(third);


console.log('-------------------- 3 ---------------------');

const numbers = [12, 21, 35, 44, 56];
console.log(numbers);
const cats = [5, 4, 3, 2, 1];
console.log(cats);
const dogs = [2, 1, 4, 3, 5];
console.log(dogs);


console.log('-------------------- 4 ---------------------');

const names = ['John, Tom, Nick, Norah, Annie.'];
console.log(names);
const cars = ['Audi, BMW, Mercedes, Toyota, Tesla.'];
console.log(cars);
const companies = ['Microsoft, Apple, Sony, Xiaomi, Samsung.'];
console.log(companies);


console.log('----------Veiksmai su kintamaisiais-1---------');

console.log('=', one + two + three);

console.log('-------------------- 2 ---------------------');

console.log(`${first} ${second} ${third}`);

console.log('-------------------- 3 ---------------------');

const sumOfNum = numbers[0] - numbers[1] + numbers[2] - numbers[3] + numbers[4];
console.log('sum =', sumOfNum);
const numOfCats = cats[0] - cats[1] + cats[2] - cats[3] + cats[4];
console.log('sum =', numOfCats);
const numOfDogs = dogs[0] - dogs[1] + dogs[2] - dogs[3] + dogs[4];
console.log('sum =', numOfDogs);

console.log('-------------------- 4 ---------------------');


console.log(`${names}`);
console.log(`${cars}`);
console.log(`${companies}`);

console.log('------------Kintamuju palyginimas------------');

if (one > two) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (one > three) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (two > three) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}


console.log('---------------------- b ------------------------');

if (one < two) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (one < three) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (two < three) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}


console.log('---------------------- c ------------------------');

if (one == two) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (one == three) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (two == three) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('--------------------- d -------------------------');

if (one != two) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (one != three) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (two != three) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('---------------------- e ------------------------');

if (one >= two) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (one >= three) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (two >= three) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('--------------------- f -------------------------');

if (one <= two) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (one <= three) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (two <= three) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('-------------------- 2 -------------------');

console.log(first.length);
console.log(second.length);
console.log(third.length);

console.log('------------------- 3 ------------------');

if (first.length > second.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (first.length > third.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (second.length > third.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('------------------- b ------------------');

if (first.length < second.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (first.length < third.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (second.length < third.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('------------------- c ------------------');

if (first.length == second.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (first.length == third.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (second.length == third.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('------------------- d ------------------');

if (first.length !== second.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (first.length !== third.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (second.length !== third.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('------------------- e ------------------');

if (first.length >= second.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (first.length >= third.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (second.length >= third.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('------------------- f ------------------');

if (first.length <= second.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (first.length <= third.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (second.length <= third.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('------------------- 4 ------------------');