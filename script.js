class Timer {
    constructor(hour, minute, second) {
        this.hour = hour
        this.minute = minute
        this.second = second
        this.flag = false

        this.hourNumber = 0
        this.minuteNumber = 0
        this.secondNumber = 0

        // console.log(this)
    }

    getTimeValue() {
        this.hourNumber = Number(this.hour.value),
            this.minuteNumber = Number(this.minute.value),
            this.secondNumber = Number(this.second.value),
            this.flag = true // this statement helps start the watch

        // console.log(this.hourNumber, this.minuteNumber, this.secondNumber, this.flag)

        document.querySelector("nav").style.left = "-280px"
        document.querySelector("#set-time").innerText = "TIMER"
    }

    runWatch() {
        /*
        if (this.flag === true) {
            if (this.hourNumber === 0 && this.minuteNumber === 0 && this.secondNumber === 0) {
                this.hourNumber = 0
                this.minuteNumber = 0
                this.secondNumber = 0

                this.flag = false
            }

            if (this.hourNumber === 0 && this.minuteNumber === 0 && this.secondNumber !== 0) {
                this.secondNumber -= 1

                if (this.secondNumber === 0) {
                    this.hourNumber = 0
                    this.minuteNumber = 0
                    this.secondNumber = 0

                    this.flag = false
                }
            }

            if (this.hourNumber === 0 && this.minuteNumber !== 0 && this.secondNumber !== 0) {
                this.secondNumber -= 1

                if (this.secondNumber === 0) {
                    this.minuteNumber -= 1
                    this.secondNumber = 59
                }

                if (this.minuteNumber === 0) {
                    this.hourNumber = 0
                    this.minuteNumber = 0
                    this.secondNumber = 0

                    this.flag = false
                }
            }

            if (this.hourNumber === 0 && this.minuteNumber !== 0 && this.secondNumber === 0) {
                this.secondNumber -= 1

                if (this.secondNumber === 0) {
                    this.minuteNumber -= 1
                    this.secondNumber = 59
                }

                if (this.minuteNumber === 0 && this.secondNumber === 0) {
                    this.hourNumber = 0
                    this.minuteNumber = 0
                    this.secondNumber = 0

                    this.flag = false
                }
            }

            if (this.hourNumber !== 0 && this.minuteNumber !== 0 && this.secondNumber !== 0) {
                this.secondNumber -= 1

                if (this.secondNumber === 0) {
                    this.minuteNumber -= 1
                    this.secondNumber = 59
                }

                if (this.minuteNumber === 0) {
                    this.hourNumber -= 1
                    this.minuteNumber = 59
                }

                if (this.hourNumber === 0) {
                    this.hourNumber = 0
                    this.minuteNumber = 0
                    this.secondNumber = 0

                    this.flag = false
                }
            }

            let updatedHour = (this.hourNumber < 10) ? "0" + this.hourNumber : this.hourNumber
            let updatedMinute = (this.minuteNumber < 10) ? "0" + this.minuteNumber : this.minuteNumber
            let updatedSecond = (this.secondNumber < 10) ? "0" + this.secondNumber : this.secondNumber

            document.querySelector("#show-time").innerHTML = `${updatedHour}:${updatedMinute}:${updatedSecond}` 
        } */
        if (this.flag === true) {
            this.secondNumber -= 1

            if (this.secondNumber === 0) {
                this.minuteNumber -= 1
                this.secondNumber = 59
            }

            if (this.minuteNumber === 0) {
                this.hourNumber -= 1
                this.minuteNumber = 59
            }

            if (this.hourNumber === 0) {
                this.hourNumber = 0
                this.minuteNumber = 0
                this.secondNumber = 0

                this.flag = false
            }

            let updatedHour = (this.hourNumber < 10) ? "0" + this.hourNumber : this.hourNumber
            let updatedMinute = (this.minuteNumber < 10) ? "0" + this.minuteNumber : this.minuteNumber
            let updatedSecond = (this.secondNumber < 10) ? "0" + this.secondNumber : this.secondNumber

            document.querySelector("#show-time").innerHTML = `${updatedHour}:${updatedMinute}:${updatedSecond}`
        }
    }
}

let TimerFirstInstace = new Timer(
    document.querySelector("#hour"), document.querySelector("#minute"), document.querySelector("#second")
)

document.querySelector("form").addEventListener("submit", (prevention) => {
    prevention.preventDefault()
    TimerFirstInstace.getTimeValue()
})

let interval = setInterval(() => TimerFirstInstace.runWatch(), 1000)