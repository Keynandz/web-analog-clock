const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const switchModeBtn = document.querySelector(".switch-btn");

const setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

    hour.innerHTML = `<div style="position: absolute;">${day.getHours()}</div><div style="position: absolute; margin-top: 1em;">${day.getHours()}</div>`;
    min.innerHTML = `<div style="position: absolute">${("0" + day.getMinutes()).slice(-2)}</div><div style="position: absolute; margin-top: 1em;">${("0" + day.getMinutes()).slice(-2)}</div><div style="position: absolute; margin-top: 2em;">${("0" + day.getMinutes()).slice(-2)}</div>`;
    sec.innerHTML = `<div style="position: absolute">${("0" + day.getSeconds()).slice(-2)}</div><div style="position: absolute; margin-top: 1em;">${("0" + day.getSeconds()).slice(-2)}</div><div style="position: absolute; margin-top: 2em;">${("0" + day.getSeconds()).slice(-2)}</div><div style="position: absolute; margin-top: 3em;">${("0" + day.getSeconds()).slice(-2)}</div>`;

    hour.childNodes[1].style.marginRight = "0em";
    min.childNodes[1].style.marginRight = "0em";
    sec.childNodes[1].style.marginRight = "0em";

    hour.style.color = "#fff";
    min.style.color = "#fff";
    sec.style.color = "#fff";

};

setClock();
setInterval(setClock, 1000);

const switchTheme = () => {
    document.documentElement.setAttribute("data-theme", "light");
    switchModeBtn.textContent = "";
};

switchModeBtn.addEventListener("click", switchTheme);