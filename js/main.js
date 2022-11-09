var startBtn = document.querySelector('.start')
var elSel = document.querySelector('.game__level')
var gameInner = document.querySelector('.game__inner')
var gameList = document.querySelector('.game__list')
var gameTitle = document.querySelector('.game__title')


function random(max) {
    return Math.floor(Math.random() * max)

}
function randomTitle(array, node) {

    array.forEach((el) => {
        let item = array[random(100)];
        node.setAttribute('data-id', item.id);
        node.textContent = item.name;
    });

}
function gameRender() {

    array.forEach((element) => {
        var gameItems = document.createElement("li")
        gameItems.setAttribute("data-id", element.id)
        gameItems.classList.add("game__item")
        var gameImg = document.createElement("img")
        var gameImg = document.createElement("ul")
        var gameImg = document.createElement("img")
        gameImg.classList.add("game__img")
        randomTitle(array, gameTitle)
        gameImg.src = element.arrayImg
        gameList.appendChild(gameItems)
        gameItems.appendChild(gameImg)
    });
}
startBtn.addEventListener("click", function () {
    gameList.innerHTML = ""
    gameRender()

})

function whiteItem(){
    
     gameItems.backgroundColor = "#fff"
    
}

gameList.addEventListener("click", function (evt) {
    if (evt.target.matches(".game__item")) {
        if (evt.target.dataset.id == gameTitle.dataset.id) {
            
            evt.target.style.backgroundColor = "#08F543" 
            randomTitle(array, gameTitle)
            setTimeout(() => {
                
                evt.target.style.visibility = 'hidden';
                gameItems.style.backgroundColor = "fff"
               

            }, 1000);
           

        } 
        
        else {
            evt.target.style.backgroundColor = "#F50F39"
        }
    }
    
})



