
var globalThemeAttr = localStorage.getItem("theme");
document.documentElement.setAttribute(
    "data-bs-theme",
    globalThemeAttr ? globalThemeAttr : "light"
);

toogleThemeForSwitchThemeButton();

function toogleTheme() {

    if (!globalThemeAttr) {
        globalThemeAttr = "light";
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-bs-theme", "light");

        return;
    }

    if (globalThemeAttr == "light") {
        document.documentElement.setAttribute("data-bs-theme", "dark")
        globalThemeAttr = "dark";
        localStorage.setItem("theme", "dark");
        // console.log(globalThemeAttr);
    }
    else {
        document.documentElement.setAttribute("data-bs-theme", "light");
        globalThemeAttr = "light";
        localStorage.setItem("theme", "light");
        // console.log(globalThemeAttr);
    }

    toogleThemeForSwitchThemeButton();
}

function toogleThemeForSwitchThemeButton() {

    // let toogleThemeButton = document.getElementById("toogleThemeButton");
    // toogleThemeButton.textContent = globalThemeAttr == "light" ?
    //     "White" :
    //     "Dark";

    let toogleThemeButton = document.getElementById("toogleThemeButton");
    if (globalThemeAttr == "light") {
        toogleThemeButton.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
        toogleThemeButton.classList = 'btn text-warning fs-1 border-0';
    }
    else {
        toogleThemeButton.innerHTML = '<i class="bi bi-moon-stars"></i>';
        toogleThemeButton.classList = 'btn text-info fs-1 border-0';
    }

    // toogleThemeButton.innerHTML = globalThemeAttr == "light" ?
    //     '<i class="bi bi-brightness-high-fill"></i>' :
    //     '<i class="bi bi-moon-stars"></i>';
}