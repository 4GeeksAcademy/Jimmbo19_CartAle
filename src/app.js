/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function cartaaleatoria() {
  const carta = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const mazo = [" ♦ ", "♥ ", "♠ ", "♣"];

  let cartaazar = carta[Math.floor(Math.random() * carta.length)];
  let mazoazar = mazo[Math.floor(Math.random() * mazo.length)];

  document.getElementById("cartanumero").innerHTML = cartaazar;
  document.getElementById("mazoclase").innerHTML = mazoazar;
  document.getElementById("mazoclase2").innerHTML = mazoazar;
};
