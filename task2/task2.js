const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите необходимое имя: ', userName=> {
    if(userName.trim() === 'Вячеслав'){
        console.log('Привет, Вячеслав');
    }else {
        console.log('Нет такого имени');
    };

readline.close();

});
