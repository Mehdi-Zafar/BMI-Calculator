const weight = document.getElementById("weight");
const height = document.getElementById("height");
const form = document.querySelector("form");
const standard = document.getElementById("standard");
const metric = document.getElementById("metric");


document.querySelector("div.radiobtns").addEventListener("click",function(){
    if(standard.checked){
        document.querySelector(".standard").classList.remove("hidden");
        document.querySelector(".metric").classList.add("hidden");
    }else if(metric.checked){
        document.querySelector(".standard").classList.add("hidden");
        document.querySelector(".metric").classList.remove("hidden");
    }
})

form.addEventListener("submit",function(e){
    e.preventDefault();
    let bmi;
    let category;
    if(standard.checked){
        bmi = (document.getElementById("weight-lbs").value / document.getElementById("height-inch").value**2)*703;
    }else if(metric.checked){
        bmi = document.getElementById("weight-kg").value/((document.getElementById("height-cm").value/100)**2);
    }
    document.querySelector(".bmi-value").innerText = `BMI Value: ${bmi.toFixed(1)}`;
    if (bmi<18.5){
        category = "Underweight";
    }else if(18.5<=bmi && bmi<=24.9){
        category = "Normal Weight";
    }else if(25<=bmi && bmi<=29.9){
        category = "Overweight";
    }else{
        category = "Obese";
    }
    document.querySelector(".bmi-category").innerText = `BMI Category: ${category}`
})




