function calculator(){
  let number1 =parseInt(document.getElementById("num").value) ;

  let number2 =parseInt( document.getElementById("num2").value);

  let toloba = document.getElementById("toloba").value;

  console.log(number1, number2, toloba);
  let shedegi;
  switch(toloba){
      case "+":
      shedegi = number1+number2;
          document.getElementById("answer").innerHTML = number1 + "+" + number2 +"=" + shedegi;      
      break;
      case "-":
          document.getElementById("answer").innerHTML =number1-number2;
      break;
      case "*":
          document.getElementById("answer").innerHTML = number1*number2;
      break;
      case "/":
          document.getElementById("answer").innerHTML = number1/number2;
      break;
      case "x":
          document.getElementById("answer").innerHTML = number1*number2;
      break;
      case ":":
          document.getElementById("answer").innerHTML = number1/number2;
      break;
      default:  document.getElementById("answer").innerHTML = "ar chagiweria operatori";


  }
}