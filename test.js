let a = [3, -12, 0, 4, 5, -8];
let b = [];

for (let i = 0; i < a.length; i++) {
    if (a[i] >= 0) {
        b.push(a[i]);
    }
}

console.log(a);
console.log(b);

c = a.filter(function (currentValue, indexElem, arr) {
    return currentValue > 0;
});

console.log(c);