const add = function(...args) {

  let soma=0;
  for(let i of args){
    soma=soma+i;
  }
  return soma;
	
};

const subtract = function(...args) {
  let sub=2*args[0];
  for(let i of args){
    sub=sub-i;
  }
  return sub;
};

const sum = function(arr) {
  let soma=0;
  for(let i of arr){
    soma= soma + i;
  }
  return soma;

};

const multiply = function(arr) {
  let mult=1;
  for(let i of arr){
    mult= mult * i;
  }
  return mult;

};

const power = function(a,b) {
    return a**b;
};

const factorial = function(fat) {
	let result=1;
  for(let i=1;i<=fat;i++){
    result=i*result;
  }
  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
