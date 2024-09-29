
let keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

let currentKeyIndex = 0 //saves current key
let keyElement = document.getElementById('key')

let newGameButton = document.getElementById('new-game')


function setNewKey() {
    currentKeyIndex = Math.floor(Math.random() * keys.length)
    keyElement.textContent = keys[currentKeyIndex]
}


document.addEventListener('keydown', function(event) {
    let pressedKey = event.key.toUpperCase()

    if (pressedKey === keys[currentKeyIndex]) {
        PNotify.success({
            text: ' Correct',
        })
        setNewKey()
    } else {
        PNotify.error({
            text: `ERROR. Try to press right button`,
        })
    }
})


newGameButton.addEventListener('click', function() {
    setNewKey()
    PNotify.info({
        text: 'New game is beggins.',
    })
})