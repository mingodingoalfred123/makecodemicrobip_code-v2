enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P0, function () {
    faces.hideFace()
    soroban.showNumber(99)
    faces.showFace(faces.Eyes.Mad, faces.Mouth.Grin)
})
input.onPinReleased(TouchPin.P0, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    faces.showFace(faces.Eyes.Shut, faces.Mouth.Flat)
    basic.pause(2000)
    faces.showFace(faces.Eyes.Mad, faces.Mouth.Grin)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("" + (string))
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("Help!")
    faces.showFace(faces.Eyes.Open, faces.Mouth.Open, 30)
    faces.hideFace()
})
input.onGesture(Gesture.TiltLeft, function () {
    faces.showEyes(faces.Eyes.Left, 1000)
    faces.showFace(faces.Eyes.Mad, faces.Mouth.Grin)
})
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    faces.hideFace()
    basic.showString("v2")
    faces.showFace(faces.Eyes.Mad, faces.Mouth.Grin)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("G G G G G G G G ", 120), music.PlaybackMode.InBackground)
    faces.hideFace()
    basic.showString("S.O.S")
    basic.showIcon(IconNames.Yes)
    SOS()
    faces.showFace(faces.Eyes.Mad, faces.Mouth.Grin)
})
radio.onReceivedString(function (receivedString) {
    music.setVolume(255)
    music.play(music.stringPlayable("F F F F F F F F ", 120), music.PlaybackMode.LoopingInBackground)
    basic.showString("HELP is needed nearby!")
    radio.sendString("help is on the way!")
    list = 1
    radio.setGroup(list)
})
input.onButtonPressed(Button.B, function () {
    faces.hideFace()
    basic.showString(timeanddate.date(timeanddate.DateFormat.MD))
    faces.showFace(faces.Eyes.Mad, faces.Mouth.Grin)
    basic.showArrow(ArrowNames.North)
})
input.onPinPressed(TouchPin.P1, function () {
	
})
function SOS () {
    list = 1
    radio.setGroup(list)
    faces.hideFace()
    radio.sendString("HELP IS NEEDED AT MICROBIP V2 AT KEITH ORFIANO")
    radio.sendValue("KEITH ORFIANOS MICROBIP V2", 5)
}
input.onGesture(Gesture.Shake, function () {
    faces.showFace(faces.Eyes.Open, faces.Mouth.Open, 2000)
    faces.showFace(faces.Eyes.Mad, faces.Mouth.Grin)
})
function swaet () {
    basic.pause(100)
    led.plot(4, 0)
    basic.pause(100)
    led.plot(4, 1)
    basic.pause(100)
    led.plot(4, 2)
    basic.pause(100)
    led.plot(4, 3)
    basic.pause(100)
    led.plot(4, 4)
}
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
    faces.wink(true)
})
input.onGesture(Gesture.TiltRight, function () {
    faces.showEyes(faces.Eyes.Right, 1000)
    faces.showFace(faces.Eyes.Mad, faces.Mouth.Grin)
})
input.onGesture(Gesture.LogoDown, function () {
    faces.showFace(faces.Eyes.Open, faces.Mouth.Flat, 1000)
    faces.showFace(faces.Eyes.Mad, faces.Mouth.Grin)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    faces.showFace(faces.Eyes.Up, faces.Mouth.Grin, 500)
    faces.showFace(faces.Eyes.Mad, faces.Mouth.Grin)
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    record.setMicGain(record.AudioLevels.Medium)
    record.startRecording(record.BlockingState.Blocking)
    record.playAudio(record.BlockingState.Blocking)
    faces.showFace(faces.Eyes.Mad, faces.Mouth.Grin)
})
let list = 0
let string = 0
music.stopAllSounds()
music.setVolume(127)
string = 0
music.play(music.stringPlayable("F - D G A E F - ", 120), music.PlaybackMode.InBackground)
faces.showMouth(faces.Mouth.Grin)
faces.showEyes(faces.Eyes.Mad)
basic.forever(function () {
    if (record.audioStatus(record.AudioStatus.Playing)) {
        faces.showFace(faces.Eyes.Mad, faces.Mouth.Shout)
    }
})
basic.forever(function () {
    faces.blink(8000, 100, 125)
})
basic.forever(function () {
    music.play(music.stringPlayable("C - - - - - - - ", 258), music.PlaybackMode.UntilDone)
    basic.pause(8000)
})
loops.everyInterval(5000, function () {
    if (39 < input.temperature()) {
        swaet()
        basic.pause(500)
        faces.showFace(faces.Eyes.Mad, faces.Mouth.Grin)
    }
})
loops.everyInterval(5000, function () {
    if (200 < input.lightLevel()) {
        faces.showFace(faces.Eyes.Shut, faces.Mouth.Flat, 1000)
        faces.showFace(faces.Eyes.Mad, faces.Mouth.Grin)
    }
})
