let resultat = 0;

console.log("le résultat du calcule est " + resultat)

function add(x){
    resultat += x;
    console.log("le résultat du calcule est " + resultat);
    return resultat;
}

function sub(x) {
    resultat -= x;
    console.log("le résultat du calcule est " + resultat);
    return resultat;
}

function mult(x) {
    if (resultat === 0){
        resultat = x;
    }else{
        resultat *= x;
        console.log("le résultat du calcule est " + resultat);
        return resultat;   
    }
}

function div(x) {
  if (resultat === 0) {
    resultat = x;
  } else if (x === 0) {
    console.log("impossible de diviser par 0")
  } else {
    resultat /= x;
    console.log("le résultat du calcule est " + resultat);
    return resultat;
  }
}

let nombre = 0;
let prix = 10;
let prix2 = 1000;
let prix3 = 10000;
let prix4 = 100000;
let prix5 = 1000000;
let item1 = 0;
let item2 = 0;
let item3 = 0;
let item4 = 0;
let item5 = 0;

const incremment = document.getElementById("btn1");
const achat1 = document.getElementById("btn2");
const achat2 = document.getElementById("btn3");
const achat3 = document.getElementById("btn4");
const achat4 = document.getElementById("btn5");
const achat5 = document.getElementById("btn6");

const record = document.getElementById("score");
const notEnoughCash = document.getElementById("notEnough");
const textItem1 = document.getElementById("itemBuy1");

btn1.addEventListener("click", () => {
    nombre++;
    nombre = item1 + (10 * item2) + (200 * item3) + (2000 * item4) + (10000 * item5) + nombre;
    console.log("tu a cliquer " + nombre);
    document.getElementById("score").innerHTML = nombre;
    if(nombre > 1000){
       document.getElementById("score").innerHTML = nombre / 1000 + " K"; 
    }
    if (nombre > 1000000) {
       document.getElementById("score").innerHTML = nombre / 1000000 + " M";
    }
    if (nombre > 1000000000) {
      document.getElementById("score").innerHTML = nombre / 1000000000 + " B";
    }
    incremment.classList.toggle("btn-Change");
});

btn2.addEventListener("click", () => {
    if (nombre >= prix){
            nombre = nombre - 10;
            item1++;
            document.getElementById("itemBuy1").innerHTML ="vous avez " + item1 + " boost";
            console.log("tu a payer " + prix);
            document.getElementById("score").innerHTML = nombre;
            achat1.classList.toggle("btn-Change2");
            document.getElementById("notEnough").innerHTML = "";
            if (nombre > 1000) {
                document.getElementById("score").innerHTML = nombre / 1000 + " K";
            }
            if (nombre > 1000000) {
                document.getElementById("score").innerHTML = nombre / 1000000 + " M";
            }
            if (nombre > 1000000000) {
                document.getElementById("score").innerHTML = nombre / 1000000000 + " B";
            }
        } else {
            document.getElementById("notEnough").innerHTML = "tu n'a pas assez de click";
        }
});

btn3.addEventListener("click", () => {
  if (nombre >= prix) {
    nombre = nombre - 1000;
    item2++;
    document.getElementById("itemBuy2").innerHTML = "vous avez " + item2 + " boost";
    console.log("tu a payer " + prix2);
    document.getElementById("score").innerHTML = nombre;
    achat2.classList.toggle("btn-Change3");
    document.getElementById("notEnough").innerHTML = "";
    if (nombre > 1000) {
      document.getElementById("score").innerHTML = nombre / 1000 + " K";
    }
    if (nombre > 1000000) {
      document.getElementById("score").innerHTML = nombre / 1000000 + " M";
    }
    if (nombre > 1000000000) {
      document.getElementById("score").innerHTML = nombre / 1000000000 + " B";
    }
    } else {
    document.getElementById("notEnough").innerHTML = "tu n'a pas assez de click";
  }
});

btn4.addEventListener("click", () => {
  if (nombre >= prix) {
    nombre = nombre - 10000;
    item3++;
    document.getElementById("itemBuy3").innerHTML = "vous avez " + item3 + " boost";
    console.log("tu a payer " + prix3);
    document.getElementById("score").innerHTML = nombre;
    achat3.classList.toggle("btn-Change4");
    document.getElementById("notEnough").innerHTML = "";
    if (nombre > 1000) {
      document.getElementById("score").innerHTML = nombre / 1000 + " K";
    }
    if (nombre > 1000000) {
      document.getElementById("score").innerHTML = nombre / 1000000 + " M";
    }
    if (nombre > 1000000000) {
      document.getElementById("score").innerHTML = nombre / 1000000000 + " B";
    }
  } else {
    document.getElementById("notEnough").innerHTML =
      "tu n'a pas assez de click";
  }
});

btn5.addEventListener("click", () => {
  if (nombre >= prix) {
    nombre = nombre - 100000;
    item4++;
    document.getElementById("itemBuy4").innerHTML =
      "vous avez " + item4 + " boost";
    console.log("tu a payer " + prix4);
    document.getElementById("score").innerHTML = nombre;
    achat4.classList.toggle("btn-Change5");
    document.getElementById("notEnough").innerHTML = "";
    if (nombre > 1000) {
      document.getElementById("score").innerHTML = nombre / 1000 + " K";
    }
    if (nombre > 1000000) {
      document.getElementById("score").innerHTML = nombre / 1000000 + " M";
    }
    if (nombre > 1000000000) {
      document.getElementById("score").innerHTML = nombre / 1000000000 + " B";
    }
  } else {
    document.getElementById("notEnough").innerHTML =
      "tu n'a pas assez de click";
  }
});

btn6.addEventListener("click", () => {
  if (nombre >= prix) {
    nombre = nombre - 1000000;
    item5++;
    document.getElementById("itemBuy5").innerHTML =
      "vous avez " + item5 + " boost";
    console.log("tu a payer " + prix5);
    document.getElementById("score").innerHTML = nombre;
    achat5.classList.toggle("btn-Change6");
    document.getElementById("notEnough").innerHTML = "";
    if (nombre > 1000) {
      document.getElementById("score").innerHTML = nombre / 1000 + " K";
    }
    if (nombre > 1000000) {
      document.getElementById("score").innerHTML = nombre / 1000000 + " M";
    }
    if (nombre > 1000000000) {
      document.getElementById("score").innerHTML = nombre / 1000000000 + " B";
    }
  } else {
    document.getElementById("notEnough").innerHTML =
      "tu n'a pas assez de click";
  }
});

