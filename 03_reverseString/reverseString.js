const reverseString = function(name) {
    let splittedname="";

    splittedname=name.split("");
    name="";

    for(let i= splittedname.length;i>0;i--){
        name=name+splittedname[i-1];
    }
    return name;


};

// Do not edit below this line
module.exports = reverseString;
