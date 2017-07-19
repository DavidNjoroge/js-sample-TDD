'use strict';
module.export={
    dateCalculator:(age, date=2017) => {
        if (typeof(age)!= 'number'){
            return 'undefined'
        }  
        else if (age<0){
            return 'undefined'
        }
        else{
            
           return 2017- age;
        }
    }    
}