

const developerText = document.querySelector('#developer-text');
const engineerText = document.querySelector('#engineer-text');

const textLoad = () => {
    setTimeout(() => {
        developerText.textContent = "Developer";
        engineerText.textContent = "Engineer";
    }, 0);
    setTimeout(() => {
        developerText.textContent = "Engineer";
        engineerText.textContent = "Developer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 16000);


"use strict";
let sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
let upload = document.querySelector(".upload");
let uploadBtn = document.querySelector(".upload__button");
uploadBtn.addEventListener("click", async () => {
    upload.classList.add("uploading");
    await sleep(3000);
    upload.classList.add("uploaded");
    await sleep(2000);
    upload.classList.remove("uploading");
    upload.classList.add("uploaded-after");
    await sleep(1000);
    upload.className = "upload";
});


// change 'web' and 'software'

//Box zooming in
// document.addEventListener('DOMContentLoaded', () => {
//     const boxes = document.querySelectorAll('.box');

//     boxes.forEach(box => {
//         box.addEventListener('click', () => {
//             box.classList.toggle('zoomed');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    let currentlyZoomedBox = null;

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            if (currentlyZoomedBox && currentlyZoomedBox !== box) {
                currentlyZoomedBox.classList.remove('zoomed');
            }
            
            if (box.classList.contains('zoomed')) {
                box.classList.remove('zoomed');
                currentlyZoomedBox = null;
            } else {
                box.classList.add('zoomed');
                currentlyZoomedBox = box;
            }
        });
    });
});
