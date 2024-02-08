let num1 = +prompt('1-sonni kiriting')
let num2 = +prompt('2-sonni kiriting')

function java9() {

    if (num1 < num2) {
        console.log(num1 + ' soni ' + num2 + ' sonida ' + 'kichik');
    } else if (num1 > num2) {
        console.log(num1 + ' soni ' + num2 + ' sonida ' + 'katta');
    } else {
        console.log(num1 + ' soni ' + num2 + ' soniga ' + 'teng');
    }
}

java9()
