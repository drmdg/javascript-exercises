const sumAll = function(n1,n2) {

    if(n2 < 0 || n1 < 0 || typeof(n1)!="number" || typeof(n2)!="number"){
        return("ERROR");
    }

   let aux;
    if(n2<n1){
        aux=n1;
        n1=n2;
        n2=aux;
    }
    
    let soma=0;
    for(let i = n1; i<=n2;i++){
        soma=soma+i;
    }
    return soma;
};

// Do not edit below this line
module.exports = sumAll;
