const underweight = 'It is considered underweight. Keep in mind that an underweight BMI calculation may pose certain health risks. Please consult with your healthcare provider for more information about BMI calculations.'; 
const normal = 'It is considered normal. This healthy weight helps reduce your risk of serious health conditions and means you’re close to your fitness goals.';
const overweight = 'It is considered overweight. Being overweight may increase your risk of cardiovascular disease. Consult with your healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve your health.';
const obese = 'It is considered obese. People with obesity are at increased risk for many diseases and health conditions, including cardiovascular disease, high blood pressure (Hypertension), Type 2 diabetes, breathing problems and more. Consult with your healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve your overall health and quality of life.';

document.getElementById('form').onchange = function(){
let height = Number(document.getElementById('input-height').value);
let weight = Number(document.getElementById('input-weight').value);
let calculation = Math.round(weight / (height * height));

if(calculation < 19){
    document.getElementById('grid-result').innerHTML = `Your BMI is: ${calculation}. ${underweight}`;
}
else if(calculation >= 19 && calculation < 25){
    document.getElementById('grid-result').innerHTML = `Your BMI is: ${calculation}. ${normal}`;
}
else if(calculation >= 25 && calculation < 30){
    document.getElementById('grid-result').innerHTML = `Your BMI is: ${calculation}. ${overweight}`;
}
else if(calculation > 30){
    document.getElementById('grid-result').innerHTML = `Your BMI is: ${calculation}. ${obese}`;
}
document.getElementById('sendBtn').addEventListener('click',function(){
    document.getElementById('grid-result').style.display='flex';
    document.getElementById('grid-result').style.flex_wrap='wrap';
})
}

