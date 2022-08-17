class UI {
    static navigationHandler(clickedElement) {
        switch (clickedElement.target.innerText) {
            case "TIMER":
                clickedElement.target.innerText = "DONE"
                document.querySelector("nav").style.left = "0"
                break;

            case "DONE":
                clickedElement.target.innerText = "TIMER"
                document.querySelector("nav").style.left = "-280px"
                break;

            default:
                break;
        }
    }
}

document.querySelector("#set-time").addEventListener("click", (clickedElement) => UI.navigationHandler(clickedElement))