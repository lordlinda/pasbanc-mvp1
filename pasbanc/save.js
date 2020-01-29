 /*let the calculation begin*/
 //duration is less than 3 months
  
//console.log(typeof leastDuration);
    function calculate(){
   let inputType = document.getElementById("add_type").value;
    let duration = document.getElementById("duration").value;
    let rent = document.getElementById("amount").value;
    let leastDuration = parseFloat(duration);
    console.log(inputType);
    console.log(rent);
        console.log(leastDuration);

//console.log(typeof leastDuration);
    console.log(leastDuration);
   if(inputType === "Daily" && leastDuration <= 3){
     let n = (leastDuration * 30);
     console.log(n);
     //interest rate per period
     let i = (0.05)/84;
    //console.log(i);
     let final_value = (((Math.pow((1+i),n))-1)/i)*rent;
     console.log(final_value);
 }else{
 	console.log("something is coming");
 }
};

document.getElementById("calc").addEventListener('click',calculate);
