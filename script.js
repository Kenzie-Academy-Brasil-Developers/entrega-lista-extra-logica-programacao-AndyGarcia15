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

function cashMachine(saque,salario,valorVendas){
    let salarioTotal = calculateSalary(salario,valorVendas)
    let sobra = salarioTotal - saque

        let notas = [100,50,10,5,2];
        let totalNotas = '';
        for(let i = 0; i < notas.length; i++){
           if(saque >= notas[i]){
    
              let div = saque/notas[i];
              totalNotas += `${div} notas de ${notas[i]}`;
              saque -= div*notas[i];
           }
           
        }
        return `Notas sacadas ${totalNotas} saldo atual ${sobra}`;
}
    console.log(cashMachine(500,1200,3000))




function calculateStock(atual,maxima,minima){
    let media = (maxima + minima)/2
    if(atual >= media){
        return 'não efetuar compra'
    }
    else{
        return 'efetuar compra'
    }

}
    console.log(calculateStock(5,50,20))



function calculateAge(nascimento,atual){
let anos = atual - nascimento
let meses = (atual - nascimento) *12
let dias = (atual-nascimento) *365 

return `tem ${anos} anos / ${meses} meses / ${dias} dias`
}

console.log(calculateAge(1998,2022))

function getDiagonal(matriz){
    let diagonal = [];
    let contador = 0;
    for(let i = 0; i < matriz.length; i++){
       diagonal.push(matriz[i][contador])
       contador += 1
    }
    return diagonal 
}


let arr = [[1,2,3],
              [4,5,6],
              [7,8,9]]


console.log(getDiagonal(arr))

