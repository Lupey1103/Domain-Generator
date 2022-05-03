/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let domainGenerator = [];
  let determiner = ["the", "a", "my", "many"];
  let bands = ["slipknot", "lornashore", "avengedsevenfold", "chelseagrin"];
  let domain = [".com", ".net", ".net", ".org"];

  for (let i = 0; i < determiner.length; i++) {
    for (let j = 0; j < bands.length; j++) {
      for (let k = 0; k < domain.length; k++) {
        domainGenerator.push("www." + determiner[i] + bands[j] + domain[k]);
      }
    }
  }

  // function newDomain() {
  //   document.getElementById("domain").innerHTML =
  //     determiner[Math.floor(Math.random() * determiner.length)] +
  //     bands[Math.floor(Math.random() * bands.length)] +
  //     domain[Math.floor(Math.random() * domain.length)];
  // }

  // document.getElementById("myBtn").addEventListener("click", newDomain);

  console.log("Make Your Websites Now!");
  document.getElementById("domain").innerHTML = domainGenerator;
};
