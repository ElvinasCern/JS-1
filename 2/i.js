function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log('----------1-----------')
let a1 = rand(0, 4);
let b1 = rand(0, 4);
let c1 = 0;
console.log('a', a1);
console.log('b', b1);

if (a1 * b1 == 0) {
    console.log('dalyba iš nulio');
}
else if (a1 > b1) {
    c1 = a1 / b1;
    console.log(c1);
}
else {
    c1 = b1 / b1;
    console.log(c1);
}

console.log('----------2-----------')
let d = rand(0, 25);
let e = rand(0, 25);
let f = rand(0, 25);
console.log('d =', d);
console.log('e =', e);
console.log('f =', f);

if (d < e && d > f) {
    console.log(d);
}
else if (d > e && d < f) {
    console.log(d);
}
else if (e < d && e > f) {
    console.log(e);
}
else if (e > d && e < f) {
    console.log(e);
}
else if (f < d && f > e) {
    console.log(f);
}
else {
    console.log(f);
}

console.log('--------3----------')

let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);
console.log('a =', a, 'b =', b, 'c = ', c)
if (a + b <= c || a + c <= b || b + c <= a) {
    console.log('taip');
}

else {
    console.log('ne');
}


console.log('--------4---------')
let g5 = 0;
let g6 = 0;
let g7 = 0;
let g = 0;
let arr4 = [rand(0, 2), rand(0, 2), rand(0, 2), rand(0, 2)];
console.log(arr4);
while (g < arr4.length) {
    if (arr4[g] == 0) {
        g5++;
    }
    else if (arr4[g] == 1) {
        g6++;
    }
    else {
        g7++;
    }
    g++;
}

console.log('0 YRA', g5);
console.log('1 YRA', g6);
console.log('2 YRA', g7);

console.log('--------5-----------');

let arr = [rand(-10, 10), rand(-10, 10), rand(-10, 10)];
let i = 0;
console.log(arr);

while (i < arr.length) {
    if (arr[i] < 0) {
        console.log('+', arr[i], '+');
    } else if (arr[i] > 0) {
        console.log('-', arr[i], '-');
    } else {
        console.log('*', arr[i], '*');
    }
    i++;
}
console.log('----------6---------')

let kaina = rand(5, 3000);
let nkaina = 0;
if (kaina >= 1000) {
    nkaina = kaina - (kaina * 0.03);
    console.log('JUS GAUNATE', kaina, 'ZVAKIU', 'VISO MOKETI', nkaina + 'EU');
} else if (kaina >= 2000) {
    nkaina = kaina - ('JUS GAUNATE', kaina, 'ZVAKIU.', 'VISO MOKETI', nkaina + 'EU');
    console.log(nkaina + 'EU');
} else {
    console.log('JUS GAUNATE', kaina, 'ZVAKIU.', 'VISO MOKETI', kaina + 'EU');
}

console.log('----------7---------')


let v1 = rand(0, 100);
let v2 = rand(0, 100);
let v3 = rand(0, 100);
let vvv = v1 + v2 +v3;
let vvvVidurki = vvv / 3;

let daliklis = 3;
let kaDalinam = vvv;









