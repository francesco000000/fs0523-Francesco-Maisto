

function hiddenCadr() {
    let card = document.querySelectorAll(".card")
    
    card.forEach(element => {
       element.hidden="true"
    });
    return card
    
}
