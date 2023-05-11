const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите любое количество чисел через запятую: ', userArray=>{
    const numbArray = userArray.split(',');
    
    const filteredNumbArray = [];
    for(numbUser of numbArray) {
        if(isNaN(numbUser.trim()) || numbUser.trim().length < 1){
            console.log(`"${numbUser}" не является числом. Введите повторно числовой массив`);
        } else{
            filteredNumbArray.push(Number(numbUser.trim())); 
        };
    };

    const resultArray = [];
    for(let numb = 0; numb <= filteredNumbArray.length; numb++){
        if(filteredNumbArray[numb] % 3 === 0 && filteredNumbArray[numb] !== 0){
            resultArray.push(filteredNumbArray[numb]);
        };
    };

    console.log(resultArray);

readline.close();

});
