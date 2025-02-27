let soz = prompt("noqteli bi ifade daxil edin ve noqtenin necenci indeksde oldugunu tapag")
let index = 1;
for (let i = 0; i < soz.length; i++) {
  if (soz[i] === ".") {
    index = i;
    break
  }
}
console.log(index);
