const radios = document.querySelectorAll("input[name='lang']");
const button = document.querySelector(".dropbtn");

radios.forEach(radio => {
    radio.addEventListener("change", function () {
        button.innerHTML = "🌐 " + this.parentElement.innerText + " ▼";
    });
});