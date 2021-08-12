let body = document.getElementById("body");

console.log(Math.floor(Math.random() * 255))

let randomColor = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"

console.log(randomColor)

function randomize(){
    body.style.backgroundColor = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
}

// rgba(0,0,0,0)

