let a = [3, -12, 0, 4, 5, -8];
let b = [3, 4, 6, 4, 2, 5];

for (let i = 0; i < a.length; i++) {
    if (a[i] >= 0) {
        b.push(a[i]);
    }
}

// console.log(a);
// console.log(b);

c = a.filter(function (currentValue, indexElem, arr) {
    return currentValue > 0;
});

// console.log(c);

let d = a - b;
console.log(d);