const firePixelsArray = []
const fireWidth = 10;
const fireHeight = 10;

function start() {
    createFireDataStructure();
    createFireSource();
    renderFire();

    setInterval(calculateFirePropagation, 1000)
}

function createFireDataStructure() {
    const numberOfPixels = fireWidth * fireHeight;

    for (let i = 0; i <= numberOfPixels; i++) {
       firePixelsArray[i] = 0;
    }
}

function calculateFirePropagation() {
    for (let col = 0; col < fireWidth; col++) {
        for (let row = 0; row < fireHeight; row++) {
            const pixelIndex = col + (fireWidth * row)

            console.log(pixelIndex)
        }
    }
}

function updateFireIntesityPerPixel(currentPixelIndex) {
    
}

function renderFire() {
    let html = '<table cellpadding=0 cellspacing=0';

        for (let row = 0; row < fireHeight; row++) {
            html += '<tr>';
                for (let col = 0; col < fireWidth; col++) {
                    const pixelIndex = col + (fireWidth * row)
                    const fireIntensity = firePixelsArray[pixelIndex]

                    html += '<td>';
                        html += `<div class="pixel-index">${pixelIndex}</div>`;
                        html += fireIntensity
                    html += '</td>';
                }   
            html += '</tr>';
        }

    html += '</table>';

    document.getElementById('fireContainer').innerHTML = html
}

function createFireSource() {
    for (let col = 0; col < fireWidth; col++) {
        const overflowPixelIndex = fireWidth * fireHeight;
        const pixelIndex = col + (overflowPixelIndex - fireWidth) + col;

        firePixelsArray[pixelIndex] = 36;
    }
}

start()