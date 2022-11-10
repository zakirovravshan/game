var startBtn = document.querySelector('.start')
var elSel = document.querySelector('.game__level')
var gameInner = document.querySelector('.game__inner')
var gameList = document.querySelector('.game__list')
var gameTitle = document.querySelector('.game__title')
var gamePoint = document.querySelector('.game__point')


function random(max) {
    return Math.floor(Math.random() * max)

}
function randomTitle(array, node) {

    array.forEach((el) => {
        var item = array[random(100)];
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
       
        gamePoint.classList.add("block")
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
var counter = 0
gameList.addEventListener("click", function (evt) {
    if (evt.target.matches(".game__item")) {
        if (evt.target.dataset.id == gameTitle.dataset.id) {
           
            counter = counter + 1 
            gamePoint.textContent = counter + "   Point"

            evt.target.style.backgroundColor = "#08F543" 
            randomTitle(array, gameTitle)
            setTimeout(() => {
                
                evt.target.style.visibility = 'hidden';
                gameItems.style.backgroundColor = "fff"
               

            }, 1000);
           

        } 
        
        else {
            
            evt.target.style.backgroundColor = "#F50F39"
            counter = counter - 1 
            gamePoint.textContent = counter + "   Point"

        }

        
    }
    if(counter == -5){
        gamePoint.classList.add("none")
        gameList.innerHTML = ""
       
        gameTitle.textContent = `GAME OVER YOUR POINT IS    ${counter} `
       
        

    }
    
})




