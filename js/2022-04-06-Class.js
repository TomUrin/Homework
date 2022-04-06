class Dog {
    constructor (vardas, rusys, maistas, kailioSpalva, akiuSpalva, kojuSkaicius, pozicija) {
        this.vardas = vardas;
        this.rusys = rusys;
        this.maistas = maistas;
        this.kailioSpalva = kailioSpalva;
        this.akiuSpalva = akiuSpalva;
        this.kojuSkaicius = kojuSkaicius;
        this.position = pozicija;
        this.sedi = false;
        this.garsas = false;
        this.prisistatymas = true;
        
    }

    sedet() {
        this.sedi = true;
    }

    pozicija() {
        if(this.sedi) {
            console.log(`${this.vardas}: I am sitting.`)
        } else {
            console.log(`${this.vardas}: I am standing.`)
        }
    }

    prisistatyk() {
        if(this.sedi) {
            console.log(`Hi, I am a dog and my name is ${this.vardas}. My color is ${this.kailioSpalva}. My eyes are ${this.akiuSpalva}. I have ${this.kojuSkaicius} legs. Right now i am sitting.`)
        } else {
            console.log(`Hi, I am a dog and my name is ${this.vardas}. My color is ${this.kailioSpalva}. My eyes are ${this.akiuSpalva}. I have ${this.kojuSkaicius} legs. Right now i am standing.`)
        }
    }
    
    balsas() {
        this.garsas = true;
        if (this.garsas) {
            console.log(`${this.vardas}: au au!!`);
        }
    }
}

const suo = new Dog('Max', 'buldogas', 'mesa', 'black', 'brown', 4, 'I am standing');


//suo.balsas();
//suo.sedet();
//suo.prisistatyk();
//suo.pozicija();