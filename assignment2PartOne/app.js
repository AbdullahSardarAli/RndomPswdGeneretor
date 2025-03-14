
let arryAphabet = ["a", "b", "c", "d", "e", "f", "i", "j"];
let password = [];
for(let i = 0 ; i < 5 ; i++){
    let creatRandom = Math.floor(Math.random()*7)
    password += arryAphabet[creatRandom];
    console.log(password)
}
let numbericPswd = [];
for(let i = 1 ; i<password.length ; i++){
    let charindex = arryAphabet.indexOf(password[i])
  numbericPswd += charindex;
  console.log(numbericPswd);
}
let numericPasswordAsNumber = Number(numbericPswd);
console.log("Numeric Password (as number): ", numericPasswordAsNumber);


