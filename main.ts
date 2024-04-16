let Score = 0
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P0)) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(20)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(20)
    }
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P0)) {
        Score = Score + 100
    }
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P1)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(20)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(20)
    }
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P1)) {
        Score = Score + 150
    }
})
