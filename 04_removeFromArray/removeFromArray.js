const removeFromArray = function() {

    let args= Array.from(arguments);

    for(let index=1;index<args.length;index++){
        for (let i=0; i< args[0].length;i++){
            if(args[0][i]===args[index]){
                args[0].splice(i,1);

            }
        }
    }
    return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
