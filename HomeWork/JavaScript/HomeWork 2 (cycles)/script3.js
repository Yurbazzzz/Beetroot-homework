const num = +prompt('num')

for (let i = 0; i < num; i++) {
    if (num % i === 0) {
        alert(i)
    }
}