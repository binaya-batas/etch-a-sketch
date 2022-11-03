const container = document.querySelector('.container');
const colorCode = document.querySelector('.color-code');

console.log(colorCode.value);

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
            box.style.backgroundColor = colorCode.value;
        })
    }
}

createCanvas(16);

// function takeScreenshot() {
//     html2canvas(container).then((canvas) => {
//         const base64image = canvas.toDataURL("image/png");
//         window.location.href = base64image;
//     })
// }