const container = document.querySelector('.container');
const colorCode = document.querySelector('.color-code');
const eraserBtn = document.querySelector('.btn-eraser');
const clearBtn = document.querySelector('.btn-clear')
let eraser = false;

eraserBtn.addEventListener('click', function() {
    console.log(!eraser);
    eraser = !eraser;
    if (eraser) {
        eraserBtn.classList.add('eraser-true');
    } else {
        eraserBtn.classList.remove('eraser-true');
    }
})

clearBtn.addEventListener('click', function() {
    location.reload();
})


function createCanvas(canvasSize) {
    const size = canvasSize*canvasSize;
    console.log(size);
    
    for (let i=0; i<size; i++) {
        const box = document.createElement("div");
        container.appendChild(box).classList.add('box');
        console.log("run");
        box.addEventListener('mousedown', function() {
            console.log("box-clicked.");
            // box.classList.add('box-color');
            if (eraser) {
                box.style.backgroundColor = "rgb(223, 223, 223)";
            } else {
                box.style.backgroundColor = colorCode.value;
            }
        })
    }
}

createCanvas(16);