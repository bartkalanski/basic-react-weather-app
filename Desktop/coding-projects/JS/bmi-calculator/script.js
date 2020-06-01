document.getElementById('form').onchange = function(){
let height = Number(document.getElementById('input-height').value);
let weight = Number(document.getElementById('input-weight').value);
let calculation = Math.round(weight / (height * height));
document.getElementById('grid-result').innerHTML = `Your BMI is: ${calculation}.`;
document.getElementById('sendBtn').addEventListener('click',function(){
    document.getElementById('grid-result').style.display='block';
})
}
