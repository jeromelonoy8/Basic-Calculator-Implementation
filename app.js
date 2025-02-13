function addnumbers(){
    calculate("+");
}
function subs(){
    calculate("-");
}
function multiply(){
    calculate("*");
}
function division(){
    calculate("/");
}

function calculate(operator)
{
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if(!isNaN(num1) && !isNaN(num2))
    {
        let result;
        switch(operator)
        {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/": result = num2 !== 0 ? num1/num2: "Cannot divide by zero"; break;
        }
        document.getElementById('result').value = result;
    }
    else
    {
        alert('Please enter a number');
    }
}
function Clearbtn()
   {
   document.getElementById('num1').value = '';
   document.getElementById('num2').value = '';
   document.getElementById('result').value = '';
   }
function Exitbtn()
{
   window.close();
}
document.getElementById("num1").addEventListener("keydown", function(event){
   if (event.key == "Enter")
       {
           event.preventDefault();
           addnumbers();
       }
   });
document.getElementById("num2").addEventListener("keydown",function(event){
   if(event.key == "Enter")
   {
       event.preventDefault();
       addnumbers();
   }
});