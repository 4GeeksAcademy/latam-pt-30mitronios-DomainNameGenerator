/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = `<ul>${generateDomain
      .map(domainName => `<li>${domainName}</li>`)
      .join(" ")}</ul>`;
  });
};
let pronouns = ["the", "our", "your"];
let adjectives = ["black", "big", "awesome", "cute", "superb"];
let nouns = ["cat", "racoon", "blog", "website", "domain"];
let tlds = [".com", ".es", ".us", ".org", ".bo", ".nz", ".ca"];

let generateDomain = [];

for (let pronoun of pronouns) {
  for (let adjective of adjectives) {
    for (let noun of nouns) {
      for (let tld of tlds) {
        generateDomain.push(`${pronoun}${adjective}${noun}${tld}`);
      }
    }
  }
}
