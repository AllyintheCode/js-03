let reqem = +prompt("reqem daxil edin")
let cem = 0
for (let i = 100; i <= 999; i += reqem) {
  if (i % reqem === 0) cem += i;
}
console.log(`cem:${cem}`);
