const form = document.querySelector('form')

// this will give us an empty value
//const weight = parseInt(document.querySelector('#weight').value)


// console.log(form);

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height <0) 
        result.innerHTML = `Please give a valid height ${height}`;
   
   else if(weight === '' || weight <0 || isNaN(weight))
        result.innerHTML = "Please give a valid weight";
    else{
        // height =height/100;
        // height=height*height;
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
     //   result.innerHTML = `Your BMI is: ${bmi}`;

        if(bmi<18.5)
            result.innerHTML =`Your BMI is: ${bmi} <br> You are Underweight`
        else if(bmi>=18.5 && bmi<=24.9)
            result.innerHTML =`Your BMI is: ${bmi} <br> You are Normal Weight`
        else
            result.innerHTML =`Your BMI is: ${bmi} <br> You are Overweight`
    }

})