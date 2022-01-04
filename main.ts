input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Angry)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Surprised)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Confused)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
input.setSoundThreshold(SoundThreshold.Loud, 191)
