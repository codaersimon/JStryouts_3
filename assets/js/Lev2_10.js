console.log("----Lev2_10----");

let result = document.getElementById("title");

function buttonSmall(){
    result.classList.add("small")
    result.classList.remove("middle")
    result.classList.remove("crazy")
    
}
function buttonMiddle(){
    result.classList.add("middle")
    result.classList.remove("small")
    result.classList.remove("crazy")
    
}
function buttonCrazy(){
    result.classList.add("crazy")
    result.classList.remove("middle")
    result.classList.remove("small")
    
}
