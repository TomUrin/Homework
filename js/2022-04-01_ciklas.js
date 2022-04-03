console.log('---------------- 1 ----------------');

const pasisveikinimas = 'Labas';
for (let i=[0]; i<5; i++) {
console.log(pasisveikinimas);
}

console.log('---------------- 2 ----------------');

for (let i=0; i<5; i++) {
    console.log(i);
}

console.log('---------------- 3 ----------------');

for (let i=0; i<50; i+=10) {
    console.log(i);
}


console.log('---------------- 4 ----------------');

for (let i=49; i<54; i++) {
    console.log(i);
}

console.log('---------------- 5 ----------------');

let min = 0;
let max = 10;
let r = 5; 

for (let i = 0; i < r; i++) {
    n = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(n);
}

console.log('---------------- 6 ----------------');

for (i=0; i<20; i++) {
    if (i % 3) {
        console.log(i);
    }
}

console.log('---------------- 7 ----------------');
let array = [6];
for (i=1; i<=10; i++) {
{
    console.log(`${array} * ${i} = ${array * i}`);}
}

console.log('---------------- 8 ----------------');

for (i=1; i<10; i++){
    let colis = i;
    cm = colis * 2.54;
    console.log(`${i} col. = ${cm}`);
}

console.log('---------------- 9 ----------------');

let indelis = 100;
let metai = 10;
    for (i = 1; i < metai; i++) {
        indelis += + ( indelis * 2 / 100 );
        let palukanos = indelis - 100;
        console.log (`Metai: ${i}; Galutine suma = ${indelis.toFixed(2)} eur; palukanos: ${palukanos.toFixed(2)} eur`);
    }
 
console.log('---------------- 10 ----------------');

for (i=0; i<=2022; i++) {
    if (i % 4 == 0 && i % 100 !== 0 || i % 400 == 0) {
        console.log(i);
}
}
