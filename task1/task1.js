const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите необходимое число: ', number=> {
    if(isNaN(number.trim()) || number.trim().length < 1){
        console.log('Повторите попытку ввода числа.');
    } else if(Number(number.trim()) > 7){
        console.log('Привет');
    };

readline.close();

});
