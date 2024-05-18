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