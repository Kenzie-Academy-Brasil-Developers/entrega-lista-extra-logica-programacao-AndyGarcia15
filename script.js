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

function calculaNotas(troco){
    var notas = [200,100,50,10,5,1];
    var texto = '';
    for(var x=0; x < notas.length; x++){
       if(troco >= notas[x]){
          var div = troco/notas[x];
          texto += div + " notas de "+notas[x]+"\n";
          troco -= div*notas[x];
       }
       
    }
    return texto;
}
console.log(calculaNotas(500))

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

}

