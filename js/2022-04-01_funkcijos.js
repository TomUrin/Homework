console.log('---------------- 1 ----------------');

function suma(a, b) {
    return `${a + b}`;
}

const sum = suma(5, 3);
console.log(sum);

console.log('---------------- 2 ----------------');

function num(a, b) {
    if(a > b) {
        return `${a}`;
    } else if(a < b ) {
        return `${b}`;
    } else {
        return ("lygus");
    }
}
const compare = num(2, 3);
console.log(compare);

console.log('---------------- 3 ----------------');

function skaicius(metai) {
if (metai % 4 == 0 && metai % 100 !== 0 || metai % 400 == 0) {
    return 'Keliamieji metai';
    } else {
        return 'Nekeliamieji metai'
    }
}
console.log(skaicius(2000));

console.log('---------------- 4 ----------------');

function kvad(a) {
    return `${a ** 2}`;
}

const kvadratas = kvad(2);
console.log(kvadratas);

console.log('---------------- 5 ----------------');

function sumTo(x) {
    let sum = 0;
    for (i = 1; i <= x; i++) {
      sum += i;
    }
    console.log(`Suma = ${sum}`);
  }
  
  sumTo(6);

console.log('---------------- 6 ----------------');


console.log('---------------- 7 ----------------');

function zodis(a) {
    return `Zodis: ${a}; Simboliai: ${a.length}`;
}

const string = zodis('BIT');
console.log(string);

console.log('---------------- 8 ----------------');



console.log('---------------- 9 ----------------');

function words(a, f) {
    if (a.length > f.length) {
        return a;
    } else if (a.length < f.length) {
        return f;
    } else {
        return 'Lygus';
    }
}

const zodziai = words('Audi', 'BMW');
console.log(zodziai);

console.log('---------------- 10 ----------------');
let letter = 'a';
let kiekis = 0;
function raide(str) {
    for(i = 0; i < str.length; i++) {
        if(str[i] == letter) {
            kiekis++;
        }
    }
}
raide('abecele');
console.log(`Raide: ${letter} = ${kiekis}`);
