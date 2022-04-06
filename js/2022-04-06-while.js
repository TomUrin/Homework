console.log('---------------1----------------');

    let min = 1;
    let max = 10;
    let suma = 0;
    const galutineSuma = 100;
    while (suma < galutineSuma) {
        let skaicius = Math.floor(Math.random() * (max - min) + 1);
        suma += skaicius;
     if (skaicius > galutineSuma - suma) {
        break;
    }
    console.log(suma);
}

console.log('---------------2----------------');

    let minSkaicius = 1;
    let maxSkaicius = 10;
    let sumaSkaiciu = 0;
    while (sumaSkaiciu % 7 === 0) {
        let skaicius = Math.floor(Math.random() * (max - min) + 1);
        sumaSkaiciu += skaicius;
        console.log(sumaSkaiciu);
}

console.log('---------------3----------------');

/*
function countSheep(num) {
    let skyriai = num;
    let skyriuSuma = 0;
    let dienos = 0;
    for (let i = 0; i < num; i++) {
        dienos++;
        skyriuSuma += dienos;  
    }return `Dienos: ${dienos}, skyriai: ${skyriuSuma}`
    
  }
  console.log(countSheep(8));
  */


console.log('---------------4----------------');

    
    while (10) {
        let random = Math.floor(Math.random() * 10);
        console.log(random);
        if (random === 5) {
            break;
        }
    }

console.log('----------------5---------------');

    let count = 0;
    while (typeof(count) == 'number') {
        let random = Math.floor(Math.random() * 10);
        count++;
        console.log(random);
        if (random === 5 || random === 7) {
            break;
        }
    }

    console.log(`Ciklai: ${count}`);