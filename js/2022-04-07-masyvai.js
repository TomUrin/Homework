console.log('-----------------1----------------');

let arr = [];

for (let i = 0; i < 20; i++) {
	arr[i] = i + 1;
}

console.log(`Masyvo ilgis: ${arr.length}`);
console.log(arr);

console.log('-----------------2----------------');

let skaicius = Math.floor(Math.random() * (60 - 40) + 40);
let masyvas = [];

for (let i = 0; i < skaicius; i++) {
	masyvas[i] = i + 1;
}

console.log(`Masyvo ilgis: ${masyvas.length}`);
console.log(masyvas);

console.log('-----------------3-----------------');

let ilgis = Math.floor(Math.random() * (15 - 10) + 10);
let mas = [];

    for (let i = 0; i < ilgis; i++) {
	mas[i] = Math.floor(Math.random() * (47 - 5) + 5);
    }
    let max = mas[0];
    for (i = 0; i < mas.length; i++) {
    if (mas[i] > max){
    max = mas[i];
    }
  }
 
console.log(`Masyvo ilgis: ${mas.length}`);
console.log(mas);
console.log(`Maksimalus skaicius: ${max}`)

console.log('-----------------4-----------------');

const lett = {
    letters: 'DEFGH',
}

function array(num) {
    let t = [];
    for (let i = 0; i < num; i++) {
        t.push(lett.letters);
    }
    console.log(t);
}

array(100);


console.log('-----------------5-----------------');

const raides = {
    raidziu: 'MNOP',
}

const atsitiktiniai = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function masyv(num, raide) {
    let p = [];
    let rezultatas = [];
    raide.forEach( item => t = [...p, ...raides[item]]);
    for (let i = 0; i < num; i++) {
        rezultatas.push(t[atsitiktiniai(0, t.length - 1)])
    }
    console.log(rezultatas);

   let m = rezultatas.filter(item => item === 'M').length;
   let n = rezultatas.filter(item => item === 'N').length;
   let o = rezultatas.filter(item => item === 'O').length;
   let raideP = rezultatas.filter(item => item === 'P').length;
    if (m > n && m > o && m > raideP) {
    console.log(`Raide 'M': ${m}`);
    }
    if (n > m && n > o && n > raideP) {
    console.log(`Raide 'N': ${n}`);
    }
    if (o > m && o > n && o > raideP) {
    console.log(`Raide 'O': ${o}`);
    }
    if (raideP > m && raideP > o && raideP > n) {
    console.log(`Raide 'P': ${raideP}`);
    }
    if (raideP === m && raideP === o && raideP === n) {
    console.log('Lygu');
    }
}
masyv(100, ['raidziu']);


console.log('-----------------6-----------------');

function rndNumbers(min, max, count) {
    if (count > max - min + 1);
    let set = new Set();
    while (set.size < count) {
      let num = Math.floor(Math.random() * (max - min) + min);
      set.add(num);
    }
    return [...set];
  }
  
  console.log(rndNumbers(10, 50, 20));
