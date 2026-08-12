const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
]

const buttonEl = document.getElementById("card-generate-btn")
let passLength = 15
let passOneEl = document.getElementById("pass-one-text")
let passTwoEl = document.getElementById("pass-two-text")

buttonEl.addEventListener("click", function() {
    let randomPassOne = ""
    let randomPassTwo = ""
    let randomIndexOne = 0
    let randomIndexTwo = 0

    for (let  i = 0; i < passLength; i++) {
        randomIndexOne = Math.floor(Math.random() * characters.length)
        randomIndexTwo = Math.floor(Math.random() * characters.length)
        randomPassOne += characters[randomIndexOne]
        randomPassTwo += characters[randomIndexTwo]
    }

    passOneEl.textContent = randomPassOne
    passTwoEl.textContent = randomPassTwo
})

