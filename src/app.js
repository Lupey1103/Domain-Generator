/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let determiner = ["the", "a", "my", "many"];
  let bands = ["slipknot", "lornashore", "avengedsevenfold", "chelseagrin"];
  let domain = [".com", ".net", ".net", ".org"];

  function newDomain() {
    document.getElementById("domain").innerHTML =
      determiner[Math.floor(Math.random() * determiner.length)] +
      bands[Math.floor(Math.random() * bands.length)] +
      domain[Math.floor(Math.random() * domain.length)];
  }

  document.getElementById("myBtn").addEventListener("click", newDomain);

  console.log("Make Your Websites Now!");
};
