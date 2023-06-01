let idade = 29;

if (idade> 18) {
    console.log('maior de idade');
} else {
    console.log('menor de idade');
}


if (true) {
    // Início do escopo do if
    let userAge = '20';
    console.log(userAge); // 20
    // Fim do escopo do if
    userAge = 10;
    console.log(userAge);
  }
