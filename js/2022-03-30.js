console.log('-------------1-------------');

const n = 0;
if (n > 0) {
    console.log('Geras');
} else {
    console.log('Blogas');
}

console.log('-------------2-------------');

const spalva = 2;
if (spalva === 1) {
    console.log('Eikite');
} else if (spalva === 2) {
    console.log('Palaukite');
} else if (spalva === 3) {
    console.log(`STOP!`);
}

console.log('-------------3-------------');

const dezes = 2;
const knygos = 8;
const deziuTalpa = 5;
const talpa = deziuTalpa * dezes;
if (knygos <= talpa) {
    console.log('Knygos telpa i dezes.')
} else {
    console.log('Knygos netelpa i dezes.')
}

console.log('-------------4-------------');

let a = 2;
let b = 2;
if (a > b) {
console.log(`a = ${--a}; b = ${++b}`)
} else if (a < b) {
    console.log(`a = ${++a}; b = ${--b}`)
} else {
    console.log('Skaiciai yra lygus.');
}

console.log('-------------5-------------');

const centai = 50;
const kaina = 20;
const galimosPorcijos = Math.floor(centai / kaina);
const likutis = centai - (kaina) * galimosPorcijos;
console.log('porcijos:', galimosPorcijos);
console.log ('likutis:', likutis);

console.log('-------------6-------------');

const degtukai = 6;
if (degtukai == 6) {
    console.log('Trikampi sudelioti galima.');
} else {
    console.log('Trikampi sudelioti negalima.');
}

console.log('-------------7-------------');

const dienuSkaicius = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const menuo = dienuSkaicius[2];
console.log(menuo);

console.log('-------------8-------------');

const skaicius = 2;
if (skaicius == 1 || skaicius == 3 || skaicius == 5) {
    console.log('Kambari tvarkys jaunelis');
} else {
    console.log('Kambari tvarkys vyresnelis');
}

console.log('-------------9-------------');

let pradzia = 1896;
let metai = 2007;
let eile = (metai - pradzia) / 4 + 1;
if (metai % 4 == 0) {
    console.log(`Eile: ${eile}`);
} else {
    console.log('Metai neolimpiniai');
}

console.log('-------------10-------------');
const val = 1;
const min = val * 60;
const v = 9;
const m = 5;
const v1 = 8;
const m1 = 29;
const m2 = 43;
if (v1 * min + m1 + m2 >= v * min + m) {
    console.log('Petras i pamoka paveluos.');
} else {
    console.log('Petras i pamoka nepaveluos.');
}