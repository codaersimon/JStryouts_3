console.log("----Lev2_2----");

preName = document.getElementById("vorname");
lastName = document.getElementById("nachname");
country = document.getElementById("land");

console.log(preName.value);

function submitMe(){
    console.log(preName.value + " " + lastName.value + " " + country.value)
}