input.onButtonPressed(Button.A, function () {
    basic.showString("" + (value))
})
let value = 0
value = pins.analogReadPin(AnalogPin.P0)
if (value < 100) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
basic.pause(5000)
basic.forever(function () {
	
})
