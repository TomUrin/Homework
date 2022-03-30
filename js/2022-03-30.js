console.log('-------------1-------------');

const n = 20;
if (n == 20) {
    console.log('Geras');
} else {
    console.log('Blogas');
}

console.log('-------------2-------------');

const spalva = 2;
const elgesys = spalva;
if (elgesys == 2) {
    console.log('Palaukite');
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

let a = 10;
console.log(--a);
let b = 5;
console.log(++b);

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

const menuo = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dienos = menuo[2];
console.log(dienos);

console.log('-------------8-------------');

const skaicius = 1;
if (skaicius % 2) {
    console.log('Kambari tvarkys jaunelis');
} else {
    console.log('Kambari tvarkys vyresnelis');
}

console.log('-------------9-------------');



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