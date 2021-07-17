let Start = 0
let Time = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    Start = input.runningTime()
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    Time = input.runningTime() - Start
    basic.showNumber(Time / 1000)
})
