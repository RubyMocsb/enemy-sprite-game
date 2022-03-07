input.onGesture(Gesture.LogoUp, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
let sprite: game.LedSprite = null
let enemysprite = game.createSprite(randint(1, 4), randint(1, 4))
sprite = game.createSprite(1, 2)
basic.forever(function () {
    if (sprite.isTouching(enemysprite)) {
        enemysprite.delete()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        enemysprite = game.createSprite(randint(1, 4), randint(1, 4))
    }
})
