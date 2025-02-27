const setir_sayi = +prompt("setir sayi daxil edin");
for (i = setir_sayi; i >= 1; i--) {
  let setir = "";
  for (let j = 1; j <= i; j++) {
    setir += "*"
  }
  console.log(setir);
}
