const repeatString = function(name,times) {
    if(times<0){
        return "ERROR";
    }

    let finalname="";
    for (let i=0;i<times;i++){
            finalname=finalname+name;
    }
    return finalname;

};

// Do not edit below this line
module.exports = repeatString;
