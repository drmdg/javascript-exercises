function ischaraletter(char){
    if(char.toLowerCase()!=char.toUpperCase()){
        return true;
    }
    return false;
}


const palindromes = function (palavra) {
    let i=0;
    
    let aux=[];
    palavra=palavra.toUpperCase();
    
   for(i=0;i<palavra.length;i++){
    if (ischaraletter(palavra[i])){

    aux.push(palavra[i]);

    }else if(!isNaN(palavra[i]) && palavra[i]!=" "){

    aux.push(palavra[i]);
    }
   }
    i=0;
    for(j=aux.length-1;i<aux.length-1/2;j--){
        if(aux[i]!=aux[j]){
            return false;
        }
        i++
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
