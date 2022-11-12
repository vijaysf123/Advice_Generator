const btn = document.getElementById("generate_advice");
const num = document.getElementById("eg_quote_no");
const quote = document.querySelector(".eg_quote");

btn.addEventListener("click" , generateAdvice);

function generateAdvice() {
    num.innerHTML =  Math.floor((Math.random() * 100) + 1);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let obj = JSON.parse(xhttp.responseText);
        console.log(obj);
       quote.innerHTML =` " ${obj.slip.advice} "`
    }
  };
  xhttp.open("GET", "https://api.adviceslip.com/advice", true);
  xhttp.send();
};


  // var xhttp = new XMLHttpRequest();
  // xhttp.onload = ()=>{
  //   let obj = JSON.parse(xhttp.responseText);
  //     console.log(obj);
  //    quote.innerHTML =` " ${obj.slip.advice} "`
  //   };
  //   xhttp.open("GET", "https://api.adviceslip.com/advice", true);
  //   xhttp.send();