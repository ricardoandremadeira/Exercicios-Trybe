let salarioBruto = 2500;
if (salarioBruto < 1556.94) {
let desconto = salarioBruto * 0.08;
let salarioBase = salarioBruto - desconto;
console.log('if1', salarioBase);
} else if (salarioBruto > 1596.95 && salarioBruto < 2594.92){
    desconto = salarioBruto * 0.09;
    salarioBase = salarioBruto - desconto;
    console.log('if2', salarioBase);
} else if (salarioBruto > 2594.93 && salarioBruto < 5189.82){
    desconto = salarioBruto * 0.11;
    salarioBase = salarioBruto - desconto;
    console.log('if3', salarioBase);
} else {
    desconto = 570.88
    salarioBase = salarioBruto - desconto;
    console.log(salarioBase);
}

if (salarioBase > 1903.99 && salarioBase < 2826.65 ){
    desconto = salarioBase * 0.075
    let IR = desconto - 142.80
    let salarioLiquido = salarioBase - IR;
    console.log(salarioLiquido);
}
