class Timer {
    constructor(hour, minute, second) {
        this.hour = hour
        this.minute = minute
        this.second = second
        this.flag = false

        this.hourNumber = 0
        this.minuteNumber = 0
        this.secondNumber = 0
    }

    // clear html input comonents
    clearInputValue() {
        this.hour.value = 0
        this.minute.value = 0
        this.second.value = 0
    }

    // show and hide the stop, resume and reset buttons
    showHideButton(visibility) {
        document.querySelector(".action-button").style.visibility = visibility
        document.querySelector("#reset").style.visibility = visibility
    }

    // show popup when time is up
    showPopup(message) {
        document.querySelector(".popup").style.top =  1 + "rem"
        document.querySelector("#popup-text").innerText = message
        let timeout = setTimeout(() => {
            document.querySelector(".popup").style.top =  -120 + "px"
        }, 4000)
    }

    // give updated values to previously initialized variables
    getTimeValue() {
        // if (this.hour.value === "" || this.minute.value === "" || this.second.value === "") {
            // return alert("Fill all the input field, every field is required to be filled!")
            // this.hourNumber = 0
            // this.minuteNumber = 0
            // this.secondNumber = 0
        // } else {
            this.hourNumber = Math.floor(parseInt(this.hour.value))
            this.minuteNumber = Math.floor(parseInt(this.minute.value))
            this.secondNumber = Math.floor(parseInt(this.second.value))

            this.totalSecond = Math.floor((this.hourNumber * 60 * 60) + (this.minuteNumber * 60) + (this.secondNumber))

            this.flag = true

            document.querySelector("nav").style.left = "-280px"

            document.querySelector("#set-time").innerText = "TIMER"

            this.showHideButton("visible")

            this.clearInputValue()
        // }
    }

    // stop and resume the watch according the switch condition
    stopResumeWatch(clickedElement) {
        switch (clickedElement.target.innerText) {
            case "STOP":
                this.flag = false
                clickedElement.target.innerText = "RESUME"
                clickedElement.target.id = "resume"
                break;

            case "RESUME":
                this.flag = true
                clickedElement.target.innerText = "STOP"
                clickedElement.target.id = "stop"
                break;
        
            default:
                break;
        }
    }

    // reset watch functionality
    resetWatch() {
        this.clearInputValue()

        this.flag = false

        this.hourNumber = 0
        this.minuteNumber = 0
        this.secondNumber = 0

        document.querySelector(".container h1").innerHTML = `00:00:00`

        this.showHideButton("hidden")
    }

    // main watch function in the entire module
    runWatch() {
        if (this.flag === true) {
            if (this.totalSecond === 0) {
                this.flag = false
                document.querySelector(".container h1").innerHTML = `00:00:00`

                this.showPopup("Time is up!")

                this.showHideButton("hidden")
            }

            this.secondToHour = Math.floor(this.totalSecond / 3600) % 24
            this.secondToMinute = Math.floor(this.totalSecond / 60) % 60 
            this.secondToSecond = Math.floor(this.totalSecond) % 60

            this.updatedHour = (this.secondToHour < 10) ? "0" + this.secondToHour : this.secondToHour
            this.updatedMinute = (this.secondToMinute < 10) ? "0" + this.secondToMinute : this.secondToMinute
            this.updatedSecond =  (this.secondToSecond < 10) ? "0" + this.secondToSecond : this.secondToSecond

            document.querySelector(".container h1").innerHTML = `${this.updatedHour}:${this.updatedMinute}:${this.updatedSecond}`

            this.totalSecond -= 1
        }
    }
}

// first instance of the class Timer
let TimerFirstInstace = new Timer(
    document.querySelector("#hour"), document.querySelector("#minute"), document.querySelector("#second")
)

// stop and resume functionality
document.querySelector("#stop").addEventListener("click", clickedElement => TimerFirstInstace.stopResumeWatch(clickedElement))

// reset functionality
document.querySelector("#reset").addEventListener("click", () => TimerFirstInstace.resetWatch())

// form submission functionality
document.querySelector("form").addEventListener("submit", prevention => {
    prevention.preventDefault()
    TimerFirstInstace.getTimeValue()
})

// interval that helps main runWatch function to run with certain condition
let interval = setInterval(() => TimerFirstInstace.runWatch(), 1000)
