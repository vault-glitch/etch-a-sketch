const container = document.querySelector('.container')
let gridSize = document.getElementById('size').value
let sizeBox = document.getElementById('size')
const generate = document.getElementById('generate')
const resetbtn = document.getElementById('reset')

sizeBox.addEventListener('input', (e) => {
    gridSize = e.target.value    
})

generate.addEventListener('click', () => {
    reset()
})

resetbtn.addEventListener('click', () => {
    reset()

})

container.addEventListener('mouseover', function(e) {
    if (e.target.matches('.box')) {
        e.target.classList.add('active')
    }
})

function reset() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    createGrid(gridSize)
}

function createDiv(size) {
    const div = document.createElement('div')
    div.classList.add('box')
    div.style.width = `${size}px`
    div.style.height = `${size}px`

    return div
}


function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            container.appendChild(createDiv(container.clientWidth / gridSize))
        }
    }
}
