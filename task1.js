const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите необходимое число: ', number=> {
    if(Number(number) > 7){
        console.log('Привет');
    };

readline.close();

});
