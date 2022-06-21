var currentPlayer = "X"

function clickHandler(event) {
    console.log("clickHandler start")

    //if (player)
    if (event.target.innerHTML == ""){
        console.log("leeres Element geklickt")
        event.target.innerHTML = currentPlayer
        event.target.setAttribute("data-selected", currentPlayer)
        if (currentPlayer == "X"){
            currentPlayer = "O"
        } else {
            currentPlayer = "X"
        }
        var gewinner = berechneGewinner( )
        if (gewinner){
            console.log(gewinner + " hat gewonnen ")
            resetGame()
            document.getElementById("status").innerHTML = gewinner + " hat gewonnen"     // X || O
        }


        var spielVorbei = gameOver ( )
        if (spielVorbei){
            resetGame()
        }

    }
    console.log("clickHandler ende")

// for schleife mit array
}

function gameOver( ) {
    console.log("gameOver start")
    const fields = [...(document.getElementById("gameBoard").children)]
    const weitererZugMöglich = fields.find(IstDasFeldLeer);
    console.log("gameOver ende")
    return !weitererZugMöglich


}
function IstDasFeldLeer(field){
    return field.innerHTML == ""



}
function resetGame( ){
    const fields = [...(document.getElementById("gameBoard").children)]
    fields.forEach(emptyField)

}
function emptyField(div){
    div.innerHTML = ""
    div.removeAttribute("data-selected")

}
function berechneGewinner( ) {
    const fields = [...(document.getElementById("gameBoard").children)]
    //fields[0] == "X"
    let winner;
        if(fields[0].innerHTML.length > 0 && ((fields[0].innerHTML == fields[1].innerHTML && fields[1].innerHTML == fields[2].innerHTML)
            || (fields[0].innerHTML == fields[3].innerHTML && fields[3].innerHTML == fields[6].innerHTML)
            || (fields[0].innerHTML == fields[4].innerHTML  && fields[4].innerHTML == fields[8].innerHTML))) {
            console.log("0=1=2 oder 0=3=6 oder 0=4=8")
            winner = fields[0].innerHTML
        }
        else if (fields[1].innerHTML.length > 0 && (fields[1].innerHTML == fields[4].innerHTML && fields[4].innerHTML == fields[7].innerHTML)){
            console.log("1=4=7")
            winner = fields[1].innerHTML
        }
        else if (fields[2].innerHTML.length > 0 && ((fields[2].innerHTML == fields[4].innerHTML && fields[4].innerHTML == fields[6].innerHTML)
            || (fields[2].innerHTML == fields[5].innerHTML && fields[5].innerHTML == fields[8].innerHTML))){
            console.log("2=4=6 oder 2=5=8")
            winner = fields[2].innerHTML
        }
        else if (fields[3].innerHTML.length > 0 &&(fields[3].innerHTML == fields[4].innerHTML && fields[4].innerHTML == fields[5].innerHTML)){
            console.log("3=4=5")
            winner = fields[3].innerHTML
        }
        else if (fields[6].innerHTML.length > 0 && (fields[6].innerHTML == fields[7].innerHTML && fields[7].innerHTML == fields[8].innerHTML)){
            console.log("6=7=8")
            winner = fields[6].innerHTML
        }
        return winner
}
