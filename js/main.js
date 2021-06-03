let randomFunction=(startRandomNumber,toRandomNumber)=>{
    if(startRandomNumber>=0 && toRandomNumber>=0)
    {
        if(startRandomNumber<=toRandomNumber){
            return Math.ceil(Math.random()*200);
        }else{
            console.log("startRandomNumber must be less than toRandomNumber");
        }

    }else{
        console.log("startRandomNumber and toRandomNumber must be positive or equal to zero");

    }

}



let randomFunctionDouble=(startRandomNumber,toRandomNumber,count)=>{
    if(startRandomNumber>=0 && toRandomNumber>=0)
    {
        if(startRandomNumber<=toRandomNumber){
            let result=(Math.ceil(Math.random()));
            count= Math.pow(10, count);;
            result=result/count;
            return result ;
        }else{
            console.log("startRandomNumber must be less than toRandomNumber");
        }

    }else{
        console.log("startRandomNumber and toRandomNumber must be positive or equal to zero");

    }

}
console.log(randomFunctionDouble(1.5,0.5,2));