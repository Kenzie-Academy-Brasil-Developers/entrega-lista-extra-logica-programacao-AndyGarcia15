function calculateSalary(salarioFixo, valorVendas){
    let comissao = 0
    let salario = salarioFixo
    if(valorVendas <= 1200){
        comissao = 0.03
        salario += valorVendas * comissao

        return salario
    }
    else{
        comissao = 0.05
        salario += valorVendas * comissao

        return salario
    }
}

console.log(calculateSalary(1200,3000))

function cashMachine(valorSaque,salarioFixo,valorVendas ){
    let salario = calculateSalary(salarioFixo,valorVendas)

    let saldoFinal = salario - valorSaque

    

    return saldoFinal
}

console.log(cashMachine(500,1200,800))