// alert(x);
var button=document.querySelector(".btn");
button.addEventListener("click", myFunctionCompressed);

function myFunction(){
    var x1=Math.floor(Math.random()*6+1);
    var x2=Math.floor(Math.random()*6+1);
    document.querySelector("h1").classList.add("special");    
    //for first Player
    if(x1===1)
    {
        document.querySelector(".img1").setAttribute("src","images/dice1.png")
    }
    else if(x1===2)
    {
        document.querySelector(".img1").setAttribute("src","images/dice2.png")
    }
    else if(x1===3)
    {
        document.querySelector(".img1").setAttribute("src","images/dice3.png")
    }
    else if(x1===4)
    {
        document.querySelector(".img1").setAttribute("src","images/dice4.png")
    }
    else if(x1===5)
    {
        document.querySelector(".img1").setAttribute("src","images/dice5.png")
    }
    else if(x1===6)
    {
        document.querySelector(".img1").setAttribute("src","images/dice6.png")
    }
    //For second player
    if(x2===1)
    {
        document.querySelector(".img2").setAttribute("src","images/dice1.png")
    }
    else if(x2===2)
    {
        document.querySelector(".img2").setAttribute("src","images/dice2.png")
    }
    else if(x2===3)
    {
        document.querySelector(".img2").setAttribute("src","images/dice3.png")
    }
    else if(x2===4)
    {
        document.querySelector(".img2").setAttribute("src","images/dice4.png")
    }
    else if(x2===5)
    {
        document.querySelector(".img2").setAttribute("src","images/dice5.png")
    }
    else if(x2===6)
    {
        document.querySelector(".img2").setAttribute("src","images/dice6.png")
    }
    document.querySelector("h1").classList.add("special");
    if(x1>x2)
        document.querySelector("h1").textContent="🚩Player 1 wins";
    else if(x2>x1)
        document.querySelector("h1").textContent="Player 2 wins🚩";
    else 
        document.querySelector("h1").textContent="Tied! Try Again";
}

function myFunctionCompressed() {
    document.querySelector("h1").classList.remove("special");
    var x1=Math.floor(Math.random()*6+1);
    var x2=Math.floor(Math.random()*6+1);

    for (let j = 1; j <= 6; j++) {
        let selector = `.img1`;
        let filename = `images/dice${j}.png`;
        
        if (x1 === j) {
            document.querySelector(selector).setAttribute("src", filename);
            break; // exit the loop once the correct image is set
        }
    }
    
    for (let j = 1; j <= 6; j++) {
        let selector = `.img2`;
        let filename = `images/dice${j}.png`;

        if (x2 == j) {
            document.querySelector(selector).setAttribute("src", filename);
            break; // exit the loop once the correct image is set
        }
    }
    document.querySelector("h1").classList.add("special");
    if(x1>x2)
        document.querySelector("h1").textContent="🚩Player 1 wins";
    else if(x2>x1)
        document.querySelector("h1").textContent="Player 2 wins🚩";
    else 
        document.querySelector("h1").textContent="Tied! Try Again";
}


