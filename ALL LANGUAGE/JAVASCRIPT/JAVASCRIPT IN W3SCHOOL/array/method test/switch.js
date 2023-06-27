function myans() {
    const t1 = document.getElementById("t1").value;
    const t2 = document.getElementById("t2").value;
    const operator = document.getElementById("sign").value;
    let result;
  
    switch (operator) {
      case "+":
        result = parseInt(t1) + parseInt(t2);
        break;
      case "-":
        result = parseInt(t1) - parseInt(t2);
        break;
      case "*":
        result = parseInt(t1) * parseInt(t2);
        break;
      case "/":
        result = parseInt(t1) / parseInt(t2);
        break;
      case "%":
        result = parseInt(t1) % parseInt(t2);
        break;
      default:
        result = "Invalid operator only + - * / %";
        break;
    }
  
    document.getElementById("switch").textContent = result;
  }
  