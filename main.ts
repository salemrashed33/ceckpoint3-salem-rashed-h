input.onButtonPressed(Button.A, function () {
    basic.showString("+1")
    ANSWER += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (ANSWER))
    music.playTone(262, music.beat(BeatFraction.Double))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("-1")
    ANSWER += -1
})
let ANSWER = 0
basic.showString("calculator")
ANSWER = 0
basic.showString("" + (ANSWER))
