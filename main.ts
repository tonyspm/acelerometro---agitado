basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # . .
            . # # . .
            . . # . .
            `)
    } else {
        if (input.isGesture(Gesture.TiltRight)) {
            basic.showLeds(`
                . . # . .
                . . # # .
                . . # # #
                . . # # .
                . . # . .
                `)
        } else {
            if (input.isGesture(Gesture.Shake)) {
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # # # # #
                    . # # # .
                    . . # . .
                    `)
            }
        }
    }
})
