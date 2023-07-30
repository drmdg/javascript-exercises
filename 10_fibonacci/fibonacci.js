const fibonacci = function(num) {

    if(num<0){
        return "OOPS";
    }

    fibo=[1,1];
    if (num===1 || num==2){
        return 1;
    }

        for(let i=2;i<num;i++){
            fibo.push( fibo[i-2] + fibo[i-1] );
        }
    return fibo[num-1];




};

// Do not edit below this line
module.exports = fibonacci;
