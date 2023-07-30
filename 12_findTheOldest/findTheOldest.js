// function compareage(a,b){
    
//     if(('yearOfDeath') in a){
//         aage= new Date().getFullYear() - a.yearOfBirth;
//     }else{
//         let aage=a.yearOfDeath-a.yearOfBirth;
//     }
//     if(('yearOfDeath') in b){
//         bage= new Date().getFullYear() - b.yearOfBirth;
//     }else{
//         let bage=b.yearOfDeath-b.yearOfBirth;
//     }

//     if (aage > bage) return 1; // if the first value is greater than the second
//     if (aage == bage) return 0; // if values are equal
//     if (aage < bage) return -1; // if the first value is less than the second
// }

function calcage(birth,death){

    if(!death){
        death=new Date().getFullYear();
    }
    return death-birth;


}

const findTheOldest = function(people) {


    let oldest = people.reduce((older,current)=>{
        let age1=calcage(older.yearOfBirth,older.yearOfDeath);
        let age2=calcage(current.yearOfBirth,current.yearOfDeath);
        if(age1<age2){
            return current;
        }else{
            return older;
        }
    } )

    return oldest;



    // people.sort(compareage);
    
    // return(people[0]);

};

// Do not edit below this line
module.exports = findTheOldest;
