// const Scraper = require("website-scraper");
import Scraper from "website-scraper"
console.log("Hey harshad let's learn nodejs basics..");

let options = {
  urls: ["https://github.com/"],
  directory: "./dowloadedSourceCode",
};

// function demo(a){
// console.log("demo is called");
// }

// demo(5)
Scraper(options)
  .then((data) => {
    console.log(data);
    console.log("source code of website downloaded.. ");
  })
  .catch((err) => console.log(err));
