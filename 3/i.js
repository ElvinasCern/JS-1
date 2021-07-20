function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

console.log('-----------1-----------')

let a = rand(2, 10);

let b = rand(2, 10);

let c = rand(2, 10);

// Surasti ir i console.log išvesti dviejų mažesnių kintamųjų sumą
console.log(a, b, c)
if (a >= b && a >= c) {
    console.log('b + c =', b + c);
} else if (b >= a && b >= c) {
    console.log('a + c =', a + c);
} else {
    console.log('a + b =', a + b);
}

let d = rand(2, 10);
let e = rand(2, 10);

console.log('d', d, 'e', e);

if (d > e) {
    console.log('d yra didesnis');
} else if (d == e) {
    console.log('d ir e yra lygus');
} else {
    console.log('e yra didesnis');
}

console.log('----------1--------');

let egzaminoRezultatas = rand(1, 10);
console.log(egzaminoRezultatas);
if (egzaminoRezultatas >= 4) console.log('islaikytas');
else console.log('neislaikytas');

//2.
console.log('-----------2-----------')
let eksperimentoRezultatas = rand(1, 4);

// I6vesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4
console.log(eksperimentoRezultatas);

if (eksperimentoRezultatas == 1) {
    console.log('pavykes eksperimentas');
} else if (eksperimentoRezultatas == 4) console.log('pavykes eksperimentas');
else console.log('nepavykes eksperimentas');

//3.
console.log('-----------3-----------')
let automobilioGreitis = rand(40, 125);

// Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5

if (automobilioGreitis > 60) console.log('Bauda', automobilioGreitis * 5);
else console.log('Leistinas Greitis');

//4.
console.log('-----------4-----------')
let eilesNumeris = rand(1, 30);

//Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė
console.log(eilesNumeris);
if (eilesNumeris % 2 == 0) console.log('Porinis')
else console.log('neporinis');
//5.
console.log('-----------5-----------')
let raideABC;

//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę
RaideABC = rand(1, 3);
console.log(RaideABC);
if (RaideABC == 1) console.log('A');

else if (RaideABC == 2) console.log('B');

else console.log('C');

//6.
console.log('-----------6-----------')
let pirmas = rand(0, 2);

let antras = rand(0, 2);

// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma 
console.log('pirmas', pirmas, 'antras', antras);
console.log('sandauga', pirmas * antras);
console.log('suma', pirmas + antras);
if ((pirmas + antras) > (pirmas * antras)) console.log('Didesne Suma');
else if ((pirmas + antras) == (pirmas * antras)) console.log('nera didesnes, abu vienodi');
else console.log('Didesne sandauga');

//7.
console.log('-----------7-----------')
let asilai = rand(0, 2);

let karves = rand(0, 2);

// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų
console.log(asilai, karves);
if (asilai > 0 || karves > 0) console.log(asilai + karves, "gyvulių yra");
else console.log('gyvuliu nera');

//8.
console.log('-----------8-----------')
let dalyvis1 = rand(1, 4);

let dalyvis2 = rand(1, 4);

// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju
console.log(dalyvis1, dalyvis2);
if ((dalyvis1 + dalyvis2) > 6 || dalyvis1 == dalyvis2) console.log(dalyvis1, dalyvis2, 'Laimejo');
else console.log('pralaimejo');

//9.
console.log('-----------9-----------')
let daug = rand(1000000, 9999999);

// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. Rezultatą išvesti.
console.log('skaicius',daug);
let visi = 0;
if (daug % 5 == 0) {
    console.log('is 5',daug / 5);
    visi++;
}
else if (daug % 10 == 0) {
    console.log('is 10',daug / 10);
    visi++;
}
else if (daug % 33 == 0) {
    console.log('dalinosi is 33',daug / 33);
    visi++;
}
console.log('dalinosi is ', visi)

//10.
console.log('-----------10-----------')
//10.
let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirkles') : 'akmuo';
let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirkles') : 'akmuo';
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu
console.log(as, tu);

if ((as == 'zirkles' && tu == 'popierius') || (as == 'popierius' && tu == 'akmuo') || (as == 'akmuo' && tu == 'zirkles')) {
    console.log('As Laimejau');
}
else if ((as == 'popierius' && tu == 'zirkles') || (as == 'akmuo' && tu == 'popierius') || (as == 'zirkles' && tu == 'akmuo')) {
    console.log('Tu Laimejai');
}
else console.log('Lygios');