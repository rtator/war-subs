namespace SpriteKind {
    export const Opponent = SpriteKind.create()
    export const Extra = SpriteKind.create()
    export const Display = SpriteKind.create()
}
function GFAGG () {
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    timer.background(function () {
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Half))
    })
    music.playTone(880, music.beat(BeatFraction.Eighth))
    music.playTone(880, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Sixteenth))
}
function UpdateTextDisplay () {
    if (CursorPosition == "C") {
        ObjectLabel1.setText(CannonNames1[OwnedCannons[SelectedObjectCannon]])
        ObjectLabel2.setText(cannonNames2[OwnedCannons[SelectedObjectCannon]])
    } else if (CursorPosition == "B") {
        ObjectLabel1.setText(BaseNames1[OwnedBases[SelectedObjectBase]])
        ObjectLabel2.setText(BaseNames2[OwnedBases[SelectedObjectBase]])
    } else {
        ObjectLabel1.setText(PropellerNames1[OwnedPropellers[SelectedObjectPropeller]])
        ObjectLabel2.setText(PropellerNames2[OwnedPropellers[SelectedObjectPropeller]])
    }
}
function MakeArraysPropeller () {
    Propellers = [
    img`
        . . . . 
        . . 8 . 
        . . 8 . 
        9 9 8 9 
        . . 8 . 
        . . 8 . 
        . . . . 
        `,
    img`
        . . . . 
        . . 9 . 
        . 9 9 . 
        8 6 6 8 
        . 9 9 . 
        . . 9 . 
        . . . . 
        `,
    img`
        . . . . 
        . 9 . . 
        . a 9 . 
        8 b b 8 
        . 9 a . 
        . . 9 . 
        . . . . 
        `,
    img`
        . . . . 
        . . . . 
        . 9 9 . 
        9 . . 9 
        . 9 9 . 
        . . . . 
        . . . . 
        `,
    img`
        . . . . 
        . 8 8 . 
        . . 8 . 
        9 9 8 9 
        . . 8 . 
        . 8 8 . 
        . . . . 
        `,
    img`
        . 8 . . 
        . 8 8 . 
        . . 8 . 
        9 9 8 9 
        . . 8 . 
        . 8 8 . 
        . 8 . . 
        `,
    img`
        6 6 6 6 
        6 6 6 6 
        6 6 6 6 
        7 7 7 7 
        7 7 7 7 
        7 7 7 7 
        7 7 7 7 
        `,
    img`
        6 7 7 7 
        . . . . 
        7 6 6 6 
        . . . . 
        7 7 7 7 
        . . . . 
        7 7 7 7 
        `,
    img`
        6 . 7 7 
        . . . . 
        7 6 . 6 
        . . . . 
        7 . 7 7 
        . . . . 
        7 7 . 7 
        `,
    img`
        . . . . 
        . 8 9 . 
        . 8 9 . 
        . 9 8 . 
        . 8 9 . 
        . 8 9 . 
        . . . . 
        `
    ]
    PropellerNames1 = [
    "Basic",
    "Arrow",
    "Gel",
    "Vent",
    "Closed",
    "Open",
    "Wall",
    "Comb",
    "Force",
    "Floating"
    ]
    PropellerNames2 = [
    "Spinner",
    "Spinner",
    "Spinner",
    "Spinner",
    "Spinner",
    "Spinner",
    "Filter",
    "Filter",
    "Filter",
    "Device"
    ]
    PropellerAValue = [
    0,
    3,
    3,
    9,
    3,
    5,
    1,
    1,
    1,
    0
    ]
    PropellerDValue = [
    0,
    2,
    5,
    1,
    5,
    3,
    7,
    5,
    3,
    0
    ]
    PropellerSValue = [
    19,
    18,
    18,
    20,
    25,
    25,
    25,
    27,
    29,
    33
    ]
    if (blockSettings.exists("OwnedPropellers")) {
        OwnedPropellers = blockSettings.readNumberArray("OwnedPropellers")
    } else {
        OwnedPropellers = [0]
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (EditorIsOpen) {
        if (CursorPosition == "B") {
            CursorPosition = "P"
            Cursor.setImage(img`
                7 7 7 7 . . . . 7 7 7 7 
                7 6 6 6 . . . . 6 6 6 7 
                7 . . . . . . . . . . 7 
                7 . . . . . . . . . . 7 
                7 . . . . . . . . . . 7 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                7 . . . . . . . . . . 7 
                7 . . . . . . . . . . 7 
                7 . . . . . . . . . . 7 
                7 7 7 7 . . . . 7 7 7 7 
                6 6 6 6 . . . . 6 6 6 6 
                `)
            Cursor.setPosition(47, 59)
        } else if (CursorPosition == "P") {
            CursorPosition = "C"
            Cursor.setImage(img`
                7777.................7777
                7666.................6667
                7.......................7
                7.......................7
                7.......................7
                .........................
                .........................
                .........................
                .........................
                7.......................7
                7.......................7
                7.......................7
                7777.................7777
                6666.................6666
                `)
            Cursor.setPosition(22, 56)
        } else {
            CursorPosition = "B"
            Cursor.setImage(img`
                7777....................................7777
                7666....................................6667
                7..........................................7
                7..........................................7
                7..........................................7
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                7..........................................7
                7..........................................7
                7..........................................7
                7777....................................7777
                6666....................................6666
                `)
            Cursor.setPosition(31, 25)
        }
        UpdateTextDisplay()
        UpdateStats()
    }
})
function CFDeFeDC () {
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    timer.background(function () {
        music.playTone(262, music.beat(BeatFraction.Half))
    })
    music.playTone(622, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.playTone(622, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    timer.background(function () {
        music.playTone(175, music.beat(BeatFraction.Half))
    })
    music.playTone(523, music.beat(BeatFraction.Quarter))
}
function GCbCDDDDeFeDCC () {
    music.playTone(466, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    timer.background(function () {
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Half))
    })
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    timer.background(function () {
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(196, music.beat(BeatFraction.Quarter))
    })
    music.playTone(622, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.playTone(622, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (EditorIsOpen) {
        blockMenu.setControlsEnabled(true)
        blockMenu.setColors(5, 1)
        blockMenu.showMenu(["Cancel", "Restart", "Rename Ship"], MenuStyle.List, MenuLocation.BottomRight)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (EditorIsOpen) {
        if (!(blockMenu.isMenuOpen())) {
            PlayerPropeller.setPosition(PlayerBase.x - 15, PlayerBase.y + 6)
            PlayerCannon.setPosition(PlayerBase.x + 6, PlayerBase.y + 8)
            EditorIsOpen = false
            for (let value of sprites.allOfKind(SpriteKind.Text)) {
                value.setFlag(SpriteFlag.Invisible, true)
            }
            PlayerCannon.image.replace(4, 0)
            color.setPalette(
            color.originalPalette
            )
            EnemyBase.setFlag(SpriteFlag.Invisible, false)
            PlayerPropeller.setFlag(SpriteFlag.Invisible, false)
            EnemyCannon.setFlag(SpriteFlag.Invisible, false)
            EnemyPropeller.setFlag(SpriteFlag.Invisible, false)
            PlayerBase.setPosition(23, 100)
            EnemyBase.setPosition(137, 20)
            EnemyStatusbar.setFlag(SpriteFlag.Invisible, false)
            PlayerStatusbar.setFlag(SpriteFlag.Invisible, false)
        }
    } else {
        if (!(APressed)) {
            APressed = true
            PlayerTorpedo = sprites.create(img`
                a a . a a a a a a a a a a . . . 
                a b a b a b a b a b a b a b a b 
                b b . b b b b b b b b b b . . . 
                `, SpriteKind.Projectile)
            PlayerTorpedo.setFlag(SpriteFlag.DestroyOnWall, true)
            PlayerTorpedo.z = 40
            PlayerTorpedo.setPosition(PlayerCannon.x, PlayerCannon.y + 2)
            PlayerTorpedo.setVelocity(10 + (GetTotal("S") + GetTotal("A")), 0)
            pause(7 * (122 + -1 * GetTotal("A")))
            APressed = false
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (EditorIsOpen) {
        if (CursorPosition == "B") {
            if (SelectedObjectBase == 0) {
                SelectedObjectBase = OwnedBases.length - 1
            } else {
                SelectedObjectBase += -1
            }
            PlayerBase.setImage(Bases[OwnedBases[SelectedObjectBase]])
        } else if (CursorPosition == "C") {
            if (SelectedObjectCannon == 0) {
                SelectedObjectCannon = OwnedCannons.length - 1
            } else {
                SelectedObjectCannon += -1
            }
            PlayerCannon.setImage(Cannons[OwnedCannons[SelectedObjectCannon]])
            PlayerCannon.image.replace(7, 4)
        } else {
            if (SelectedObjectPropeller == 0) {
                SelectedObjectPropeller = OwnedPropellers.length - 1
            } else {
                SelectedObjectPropeller += -1
            }
            PlayerPropellerDisplay.setImage(transformSprites.scale2x(Propellers[OwnedPropellers[SelectedObjectPropeller]]))
            PlayerPropeller.setImage(Propellers[OwnedPropellers[SelectedObjectPropeller]])
        }
        UpdateSubDisplay()
        UpdateTextDisplay()
        UpdateStats()
    }
})
function CBbAaGGbbbbbGeDCC () {
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    timer.background(function () {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Eighth))
    })
    music.playTone(932, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(932, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(932, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(932, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    timer.background(function () {
        music.playTone(247, music.beat(BeatFraction.Sixteenth))
        music.playTone(247, music.beat(BeatFraction.Eighth))
    })
    music.playTone(932, music.beat(BeatFraction.Sixteenth))
    music.playTone(932, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    timer.background(function () {
        music.playTone(233, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(220, music.beat(BeatFraction.Half))
        music.playTone(220, music.beat(BeatFraction.Sixteenth))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(208, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(196, music.beat(BeatFraction.Quarter))
    })
    music.playTone(622, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Eighth))
}
function MakeArraysBase () {
    Bases = [
    img`
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        .............9.8........................
        .............9.8........................
        .............8.9........................
        .............8.9........77..............
        .............9.9......777777............
        .............9.9.....77777777...........
        ...........667676..76767676677..........
        ............6767..676787777797..........
        ............6767.7777788898997..........
        ........69896767676767877777977.........
        ...7777779897779797977767676767.88......
        ..67..766999676969697777676767676889....
        .67....6667666666666666666666666698999..
        666....66777666666666666666666666889999.
        676....679967699767996769976799779899899
        767....798896988979889698897988968899989
        676....698897988969889798897988979899999
        777....779977799777997779977799778899999
        .77....777777777777777777777777778899999
        ..77..7777777799777997779977799778899999
        ...7777777777988979889798897988978899999
        ........7777798897988979889798897889999.
        .........77777997779977799777997788999..
        .............77777777777777777777889....
        ......................7777777...........
        `,
    img`
        ................9.......................
        ..............999.......................
        ...............9........................
        ...............9........................
        ...............8........................
        .............9.8........................
        .............9.8........................
        .............8.9........................
        .............8.9.....88898999...........
        .............9.9......8....9............
        .............9.9.....777777777abab......
        ...........667676..7676767667777ab......
        ............6767..676787777797..........
        ............6767.7777788898997..........
        ........69896767676767877777977.........
        ...7777779897779797977767676767.88......
        ..67....6999676969697777676767676889....
        .67....6667666666666666666666666698999..
        666....66777666666666666666666666889999.
        676....676799676997679967676767679899899
        767....767988969889798896767676768899989
        676....676988979889698897676767679899999
        777....777799777997779977777777778899999
        .77....777777777777777777777777778899999
        ..77....77777777777777777777777778899999
        ...7777777777777777777777777777778899999
        ........7777777777777777777777777889999.
        ...........777777777777777777777788999..
        ...............777777777777777777889....
        ......................7777777...........
        `,
    img`
        ................9.......................
        ..............999.......................
        ...............9........................
        ...............9........................
        ...............8........................
        .............9.8........................
        .............9.8........................
        .............8.9........................
        .............8.9.....88898999...........
        .............9.9......8....9............
        .............9.9.....aaaaaaaababab......
        ...........999999..bababababababab......
        ............9889..aaaaaaaaaaaa..........
        ............9889.babababababab..........
        .7......66669999aaaaaaaaaaaaaaa.........
        .777777777779779a7a7a7a6a6a6a6a.88......
        ..67..76666697696a6a7a7a6a6a6a6a6889....
        .67....6969999999996969999969696698999..
        666....69777666666666696669666966889999.
        676....696999999999699997999969679899899
        767....797989888989798896988979768899989
        676....696989888989698897988969679899999
        777....797999999999799997999979778899999
        .77....797777797777779777777779778899999
        ..77..7797999797779977799999979778899999
        .777777777777777798897777777779778899999
        .7......7777779779889779999997977889999.
        ...........777777799777777777777788999..
        ...............777777779999977777889....
        ......................7777777...........
        `,
    img`
        .................9......................
        .................8......................
        .................9......................
        .................8......................
        .................8......................
        .................8......................
        ...............9.8......................
        .....88898999..8.8......................
        ......8....9...9.8...88898999...........
        .....77777777..8.8....8....9............
        ....67676766777777777777777777abab......
        ....6787777797777666676767667777ab......
        ....77888989977667776787777797..........
        ....67877777977777777788898997..........
        ....777767676767676767877777977.........
        ...7777776767779797977767676767.88......
        ..67....6777676969697777676767676889....
        .67....6667666666666666666666666698999..
        666....66777666666666666666666666889999.
        696....696799676997679967699767679899899
        797....797988969889798896988976768899989
        696....696988979889698897988967679899999
        777....777799777997779977799777778899999
        .77....676767676767676767676767678899999
        ..77....67676767676767676767676768899999
        ...7777676767676767676767676777678899999
        ........6767676767676767777777676889999.
        ...........676767676777777767676788999..
        ...............767777777776767676889....
        ......................7676767...........
        `,
    img`
        ........................................
        ........................................
        ........................................
        ........................................
        ..........6776776776776776766667........
        .........68868868868868868696877........
        .........68868868868868868696877........
        ..........6776776776776776766667........
        ............766..........766............
        ............776..........776............
        ............766.bbbbbb...766............
        ............776..bbbbbb..776............
        ............766..bbbbbb..766............
        .........b7b7b7b7b7b7b7b7b7b7b..........
        ........b7b7b7b7b7b7b7b7b7b7b7b.........
        ...b7b7b7b7b7b7979797b7b7b7b7b7.88......
        ..b7....b7b7b7b9b9b9b7b7b7b7b7b7b889....
        .a7....a6a7a6a6b6b6b6a6a6a6a6a6a698999..
        666....66777666666666666666666666889999.
        676....676799676997679967676767679899899
        767....767988969889798896767676768899989
        676....676988979889698897676767679899999
        777....777799777997779977777777778899999
        .77....777777777777777777777777778899999
        ..77....77777777777777777777777778899999
        ...7777779999999999977777777777778899999
        ........7777777777777777777777777889999.
        ...........777777999997777777777788999..
        ...............777777777777777777889....
        ......................7777777...........
        `,
    img`
        ..........8.................8...........
        ..........9.................9...........
        ..........9.................9...........
        ..........9.................9...........
        ..........9.................9...........
        ..........9.................9...........
        ..........9.................9...........
        ..........9.................9...........
        ..........9.................9...........
        ..........9.776.776.776.776.9...........
        ..........9.766.766.766.766.9...........
        ..........9.776.776.776.776.9...........
        ..........9.766.766.766.766.9...........
        .........b7b7b7b7b7b7b7b7b7b7b..........
        ........b7b7b7b7b7b7b7b7b7b7b7b.........
        ...b7b7b7b7b7b7979797b7b7b7b7b7.88......
        ..b7....b7b7b7b9b9b9b7b7b7b7b7b7b889....
        .a7....a6a7a6a6b6b6b6a6a6a6a6a6a698999..
        666....66777666666666666666666666889999.
        676....676999999999999999999967679899899
        767....767989888988898889888976768899989
        676....676989888988898889888967679899999
        777....777999999999999999999977778899999
        .77....777777777777777777777777778899999
        ..77....77777777777777777777777778899999
        ...7777779999999999977777777777778899999
        ........7777777777777777777777777889999.
        ...........777777999997777777777788999..
        ...............777777777777777777889....
        ......................7777777...........
        `,
    img`
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        .............9.8........................
        .............9.8........................
        .............8.9........................
        .............8.9........77..............
        .............9.9......777777............
        .............9.9.....77777777...........
        ...........667676..76767676677..........
        ............6767..676787777797..........
        ............6767.7777788898997..........
        ........69896767676767877777977.........
        ...7777779897779797977767676767.88......
        ..67..76699967696969777767676767688.....
        .67....66676666666666666666666666989999.
        666....667776666666666666666666668899899
        676....679967699767996769976799779899989
        767....798896988979889698897988968899999
        676....698897988969889798897988979899999
        777....779977799777997779977799778899999
        .77....77777777777777777777777777889999.
        ..77..777777779977799777997779977889999.
        ...777777777798897988979889798897889999.
        ........777779889798897988979889788999..
        .........7777799777997779977799778899...
        .............7777777777777777777788.....
        ......................7777777...........
        `,
    img`
        ................9.......................
        ..............999.......................
        ...............9........................
        ...............9........................
        ...............8........................
        .............9.8........................
        .............9.8........................
        .............8.9........................
        .............8.9.....88898999...........
        .............9.9......8....9............
        .............9.9.....777777777abab......
        ...........667676..7676767667777ab......
        ............6767..676787777797..........
        ............6767.7777788898997..........
        ........69896767676767877777977.........
        ...7777779897779797977767676767.88......
        ..67....699967696969777767676767688.....
        .67....66676666666666666666666666989999.
        666....667776666666666666666666668899899
        676....676799676997679967676767679899989
        767....767988969889798896767676768899999
        676....676988979889698897676767679899999
        777....777799777997779977777777778899999
        .77....77777777777777777777777777889999.
        ..77....7777777777777777777777777889999.
        ...777777777777777777777777777777889999.
        ........777777777777777777777777788999..
        ...........77777777777777777777778899...
        ...............77777777777777777788.....
        ......................7777777...........
        `,
    img`
        ................9.......................
        ..............999.......................
        ...............9........................
        ...............9........................
        ...............8........................
        .............9.8........................
        .............9.8........................
        .............8.9........................
        .............8.9.....88898999...........
        .............9.9......8....9............
        .............9.9.....aaaaaaaababab......
        ...........999999..bababababababab......
        ............9889..babababababa..........
        ............9889.babababababab..........
        .7......66669999aaaaaaaaaaaaaaa.........
        .777777777779779a7a7a7a6a6a6a6a.88......
        ..67..76666697696a6a7a7a6a6a6a6a688.....
        .67....69699999999969699999696966989999.
        666....697776666666666966696669668899899
        676....696999999999699997999969679899989
        767....797989888989798896988979768899999
        676....696989888989698897988969679899999
        777....797999999999799997999979778899999
        .77....79777779777777977777777977889999.
        ..77..779799979777997779999997977889999.
        .77777777777777779889777777777977889999.
        .7......777777977988977999999797788999..
        ...........77777779977777777777778899...
        ...............77777777999997777788.....
        ......................7777777...........
        `,
    img`
        .................9......................
        .................8......................
        .................9......................
        .................8......................
        .................8......................
        .................8......................
        ...............9.8......................
        .....88898999..8.8......................
        ......8....9...9.8...88898999...........
        .....77777777..8.8....8....9............
        ....67676766777777777777777777abab......
        ....6787777797777666676767667777ab......
        ....77888989977667776787777797..........
        ....67877777977777777788898997..........
        ....777767676767676767877777977.........
        ...7777776767779797977767676767.88......
        ..67....677767696969777767676767688.....
        .67....66676666666666666666666666989999.
        666....667776666666666666666666668899899
        696....696799676997679967699767679899989
        797....797988969889798896988976768899999
        696....696988979889698897988967679899999
        777....777799777997779977799777778899999
        .77....67676767676767676767676767889999.
        ..77....6767676767676767676767676889999.
        ...777767676767676767676767677767889999.
        ........676767676767676777777767688999..
        ...........67676767677777776767678899...
        ...............76777777777676767688.....
        ......................7676767...........
        `
    ]
    BaseNames1 = [
    "Lounge",
    "Basic",
    "Army",
    "Radar",
    "Launch",
    "Armored",
    "Shielded",
    "Shielded",
    "Shielded",
    "Shielded"
    ]
    BaseNames2 = [
    "Sub(LS)",
    "Base(BB)",
    "Sub(AS)",
    "Sub(RS)",
    "Base(LB)",
    "Base(RB)",
    "LS",
    "BB",
    "AS",
    "RS"
    ]
    BaseAValue = [
    0,
    5,
    15,
    5,
    30,
    5,
    0,
    5,
    15,
    5
    ]
    BaseDValue = [
    6,
    10,
    15,
    12,
    6,
    27,
    13,
    17,
    20,
    17
    ]
    BaseSValue = [
    15,
    9,
    -3,
    13,
    -3,
    1,
    15,
    9,
    -3,
    13
    ]
    if (blockSettings.exists("OwnedBases")) {
        OwnedBases = blockSettings.readNumberArray("OwnedBases")
    } else {
        OwnedBases = [0]
    }
}
function ebCGGFGaG () {
    timer.background(function () {
        music.playTone(311, music.beat(BeatFraction.Whole))
    })
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Quarter))
    timer.background(function () {
        music.playTone(233, music.beat(BeatFraction.Sixteenth))
        music.playTone(233, music.beat(BeatFraction.Quarter))
    })
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.playTone(831, music.beat(BeatFraction.Eighth))
    timer.background(function () {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Eighth))
    })
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Whole))
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    EditorIsOpen = true
    if (Math.percentChance(50)) {
        LostWonBase = "You earned a " + BaseNames1[CurrentEnemyBase] + " " + BaseNames2[CurrentEnemyBase] + " (base). "
        OwnedBases.push(CurrentEnemyBase)
    } else {
        LostWonBase = ""
    }
    if (Math.percentChance(50)) {
        LostWonCannon = "You earned a " + CannonNames1[CurrentEnemyCannon] + " " + cannonNames2[CurrentEnemyCannon] + " (cannon). "
        OwnedCannons.push(CurrentEnemyCannon)
    } else {
        LostWonCannon = ""
    }
    if (Math.percentChance(50)) {
        LostWonPropeller = "You earned a " + PropellerNames1[CurrentEnemyPropeller] + " " + PropellerNames2[CurrentEnemyPropeller] + " (propeller). "
        OwnedPropellers.push(CurrentEnemyPropeller)
    } else {
        LostWonPropeller = ""
    }
    if ("" + LostWonBase + LostWonCannon + LostWonPropeller == "") {
        game.showLongText("You won Nothing :(", DialogLayout.Center)
    } else {
        game.showLongText("" + LostWonBase + LostWonCannon + LostWonPropeller, DialogLayout.Center)
    }
    blockSettings.writeNumberArray("OwnedBases", OwnedBases)
    blockSettings.writeNumberArray("OwnedCannons", OwnedCannons)
    blockSettings.writeNumberArray("OwnedPropellers", OwnedPropellers)
    game.reset()
})
function bDD () {
    timer.background(function () {
        music.playTone(233, music.beat(BeatFraction.Whole))
        music.playTone(233, music.beat(BeatFraction.Half))
    })
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Whole))
}
function bDDD () {
    timer.background(function () {
        music.playTone(233, music.beat(BeatFraction.Whole))
        music.playTone(233, music.beat(BeatFraction.Half))
        music.playTone(233, music.beat(BeatFraction.Quarter))
    })
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    EditorIsOpen = true
    if (Math.percentChance(50)) {
        LostWonBase = "You lost your base, which was a " + BaseNames1[OwnedBases[SelectedObjectBase]] + " " + BaseNames2[OwnedBases[SelectedObjectBase]] + ". "
        OwnedBases.removeAt(SelectedObjectBase)
    } else {
        LostWonBase = ""
    }
    if (Math.percentChance(50)) {
        LostWonCannon = "You lost your cannon, which was a " + CannonNames1[OwnedCannons[SelectedObjectCannon]] + " " + cannonNames2[OwnedCannons[SelectedObjectCannon]] + ". "
        OwnedCannons.removeAt(SelectedObjectCannon)
    } else {
        LostWonCannon = ""
    }
    if (Math.percentChance(50)) {
        LostWonPropeller = "You lost your propeller, which was a " + PropellerNames1[OwnedPropellers[SelectedObjectPropeller]] + " " + PropellerNames2[OwnedPropellers[SelectedObjectPropeller]] + ". "
        OwnedPropellers.removeAt(SelectedObjectPropeller)
    } else {
        LostWonPropeller = ""
    }
    if ("" + LostWonBase + LostWonCannon + LostWonPropeller == "") {
        game.showLongText("You lost nothing!", DialogLayout.Center)
    } else {
        game.showLongText("" + LostWonBase + LostWonCannon + LostWonPropeller, DialogLayout.Center)
    }
    blockSettings.writeNumberArray("OwnedBases", OwnedBases)
    blockSettings.writeNumberArray("OwnedCannons", OwnedCannons)
    blockSettings.writeNumberArray("OwnedPropellers", OwnedPropellers)
    game.reset()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (EditorIsOpen) {
        if (CursorPosition == "B") {
            if (SelectedObjectBase == OwnedBases.length - 1) {
                SelectedObjectBase = 0
            } else {
                SelectedObjectBase += 1
            }
            PlayerBase.setImage(Bases[OwnedBases[SelectedObjectBase]])
        } else if (CursorPosition == "C") {
            if (SelectedObjectCannon == OwnedCannons.length - 1) {
                SelectedObjectCannon = 0
            } else {
                SelectedObjectCannon += 1
            }
            PlayerCannon.setImage(Cannons[OwnedCannons[SelectedObjectCannon]])
            PlayerCannon.image.replace(7, 4)
        } else {
            if (SelectedObjectPropeller == OwnedPropellers.length - 1) {
                SelectedObjectPropeller = 0
            } else {
                SelectedObjectPropeller += 1
            }
            PlayerPropellerDisplay.setImage(transformSprites.scale2x(Propellers[OwnedPropellers[SelectedObjectPropeller]]))
            PlayerPropeller.setImage(Propellers[OwnedPropellers[SelectedObjectPropeller]])
        }
        UpdateSubDisplay()
        UpdateTextDisplay()
        UpdateStats()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Opponent, function (sprite, otherSprite) {
    if (Math.percentChance(50 - GetTotalForEnemy("D"))) {
        sprite.destroy()
        EnemyStatusbar.value += -5
    }
})
function MakeArraysCannon () {
    Cannons = [
    img`
        . . . . . . . . . . b b b b b b . . . . . 
        . . . . . . . . . . b a a a a b . . . . . 
        . . . . . . . . . . b b b b b b . . . . . 
        . . . . . . . . . . . b a a b . . . . . b 
        7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b 
        7 b b b 7 b b b 7 b a a a a a a a a a a b 
        7 b a b b b a b 7 b b b b b b b b b b b b 
        . b b b . b b b . . . . . . . . . . . . b 
        `,
    img`
        b b b . b b b . b b b b b b b b b . . . . 
        b a b . b a b . . . . . . . . . . . . . . 
        b a b . b a b . b b b b b b b b b . . . . 
        b a b . b a b . . . . . . . . . . . . . b 
        b a b 7 b a b 7 b b b b b b b b b b b b b 
        b a b 7 b a b 7 b a a a a a a a a a a a b 
        b a b 7 b a b 7 b b b b b b b b b b b b b 
        b b b . b b b . . . . . . . . . . . . . b 
        `,
    img`
        . . . . . . . . . b . . . . . . . . . . . 
        b b b b b b b b b b . . . . . . . . . . . 
        b a a a a a a a a b . . . . . . . . . . . 
        b b b b b b b b b b . . . . . . . . . . b 
        7 7 7 7 7 7 7 7 7 b 7 b b b b b b b b b b 
        b b b b b b b b 7 7 7 b a a a a a a a a b 
        b a a a a a a b 7 7 7 b b b b b b b b b b 
        b b b b b b b b . . . . . . . . . . . . b 
        `,
    img`
        b b b b b . b b b b b . b b b b b . . . . 
        . b a b . . . b a b . . . b a b . . . . . 
        . b a b . . . b a b . . . b a b . . . . . 
        . b a b . . . b a b . . . b a b . . . . b 
        b b b b b b b b b b b b b b b b b b b b b 
        b a a a a a a a a a a a a a a a a a a a b 
        b b b b b b b b b b b b b b b b b b b b b 
        . . . . . . . . . . . . . . . . . . . . b 
        `,
    img`
        . . . . . . . . . b . b . b . . . . . . . 
        . . . . . . . . . b . b . b . . . . . . . 
        . . . . . . . . . b . b . b . . . . . . . 
        . . . . . . . . . b . b . b . . . . . . b 
        b b b b b b b b b b b b b b b b b b b b b 
        b a a a a a a a a a a a a a a a a a a a b 
        b b b b b b b b b b b b b b b b b b b b b 
        . . . . . . . . . . . . . . . . . . . . b 
        `,
    img`
        . . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . . 9 . . . 9 . . . 9 . . . 9 . . 9 . . 
        . . 8 8 8 . 8 8 8 . 8 8 8 . 8 8 8 . 9 . . 
        . . 8 . 8 . 8 . 8 . 8 . 8 . 8 . 8 . 9 . b 
        b b b b b b b b b b b b b b b b b b b b b 
        b a a a a a a a a a a a a a a a a a a a b 
        b b b b b b b b b b b b b b b b b b b b b 
        . . . . . . . . . . . . . . . . . . . . b 
        `,
    img`
        . . . b . . . . . . . . . . . . . . . . . 
        . . . b b . . . . . . . . . . . . . . . . 
        . . . b b b b . . . . . . . . . . . . . . 
        . . . b a b b b b b b . . . . . . . . . b 
        b b b b a a a a a a b b b b b b b b b b b 
        b a a a a a a a a a a a a a a a a a a a b 
        b b b b a b b b b b b b b b b b b b b b b 
        . . . b b b . . . . . . . . . . . . . . b 
        `,
    img`
        . . b b b b b . . . b b b b b b . . . . . 
        . . b . . . b . . . b a a a a b . . . . . 
        . b b b . b b b . . b b b b b b . . . . . 
        . b a b . b a b . . . b a a b . . . . . b 
        7 b a b 7 b a b 7 b b b b b b b b b b b b 
        7 b a b 7 b a b 7 b a a a a a a a a a a b 
        7 b a b 7 b a b 7 b b b b b b b b b b b b 
        . b b b . b b b . . . . . . . . . . . . b 
        `,
    img`
        . . b b b . . . . b . b b . . . . . . . . 
        b b b a b b b b b b . b b b . . . . . . . 
        b a a a a a a a a b . b a b . . . . . . . 
        b b b b b b b b b b . b a b b . . . . . b 
        7 7 7 7 7 7 7 7 7 b 7 b a a b b b b b b b 
        b b b b b b b b 7 7 7 b a a a a a a a a b 
        b a a a a a a b 7 7 7 b a a b b b b b b b 
        b b b b b b b b . . . b b b b . . . . . b 
        `,
    img`
        b b b b b b b b b b b b b b b . . . . . . 
        b a a a a a a a a a a a a a b . . . . . . 
        b a b b b b b a b b b b b a b . . . . . . 
        b a b 7 7 7 b a b 7 7 7 b a b . . . . . b 
        b a b 7 7 7 b a b 7 7 7 b a b b b b b b b 
        b a b b b b b a b b b b b a a a a a a a b 
        b a a a a a a a a a a a a a b b b b b b b 
        b b b b b b b b b b b b b b b . . . . . b 
        `
    ]
    CannonNames1 = [
    "2H",
    "Battery",
    "Triple",
    "Diesel",
    "Battery",
    "Engine",
    "Crest",
    "Paracel",
    "Crest",
    "Chamber"
    ]
    cannonNames2 = [
    "Soaker",
    "2",
    "Soaker",
    "Launcher",
    "3",
    "Launcher",
    "Soaker",
    "2",
    "Bat 3",
    "Soaker"
    ]
    CannonAValue = [
    14,
    19,
    27,
    32,
    24,
    30,
    20,
    33,
    25,
    33
    ]
    CannonDValue = [
    8,
    3,
    4,
    4,
    2,
    10,
    6,
    4,
    10,
    12
    ]
    CannonSValue = [
    -1,
    2,
    -4,
    -6,
    7,
    -7,
    7,
    -4,
    -2,
    -12
    ]
    if (blockSettings.exists("OwnedCannons")) {
        OwnedCannons = blockSettings.readNumberArray("OwnedCannons")
    } else {
        OwnedCannons = [0]
    }
}
function UpdateStats () {
    if (CursorPosition == "B") {
        PartAttackAmount.setText("A: " + convertToText(BaseAValue[OwnedBases[SelectedObjectBase]]))
        PartDefendAmount.setText("D: " + convertToText(BaseDValue[OwnedBases[SelectedObjectBase]]))
        PartSpeedAmount.setText("S: " + convertToText(BaseSValue[OwnedBases[SelectedObjectBase]]))
    } else if (CursorPosition == "C") {
        PartAttackAmount.setText("A: " + convertToText(CannonAValue[OwnedCannons[SelectedObjectCannon]]))
        PartDefendAmount.setText("D: " + convertToText(CannonDValue[OwnedCannons[SelectedObjectCannon]]))
        PartSpeedAmount.setText("S: " + convertToText(CannonSValue[OwnedCannons[SelectedObjectCannon]]))
    } else {
        PartAttackAmount.setText("A: " + convertToText(PropellerAValue[OwnedPropellers[SelectedObjectPropeller]]))
        PartDefendAmount.setText("D: " + convertToText(PropellerDValue[OwnedPropellers[SelectedObjectPropeller]]))
        PartSpeedAmount.setText("S: " + convertToText(PropellerSValue[OwnedPropellers[SelectedObjectPropeller]]))
    }
    AttackAmountLabel.setText("Attack (A): " + convertToText(GetTotal("A")))
    DefenceAmountLabel.setText("Defense (D): " + convertToText(GetTotal("D")))
    SpeedAmountLabel.setText("Speed (S): " + convertToText(GetTotal("S")))
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (EditorIsOpen) {
        if (CursorPosition == "B") {
            CursorPosition = "C"
            Cursor.setImage(img`
                7777.................7777
                7666.................6667
                7.......................7
                7.......................7
                7.......................7
                .........................
                .........................
                .........................
                .........................
                7.......................7
                7.......................7
                7.......................7
                7777.................7777
                6666.................6666
                `)
            Cursor.setPosition(22, 56)
        } else if (CursorPosition == "C") {
            CursorPosition = "P"
            Cursor.setImage(img`
                7 7 7 7 . . . . 7 7 7 7 
                7 6 6 6 . . . . 6 6 6 7 
                7 . . . . . . . . . . 7 
                7 . . . . . . . . . . 7 
                7 . . . . . . . . . . 7 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                7 . . . . . . . . . . 7 
                7 . . . . . . . . . . 7 
                7 . . . . . . . . . . 7 
                7 7 7 7 . . . . 7 7 7 7 
                6 6 6 6 . . . . 6 6 6 6 
                `)
            Cursor.setPosition(47, 59)
        } else {
            CursorPosition = "B"
            Cursor.setImage(img`
                7777....................................7777
                7666....................................6667
                7..........................................7
                7..........................................7
                7..........................................7
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                ............................................
                7..........................................7
                7..........................................7
                7..........................................7
                7777....................................7777
                6666....................................6666
                `)
            Cursor.setPosition(31, 25)
        }
        UpdateTextDisplay()
        UpdateStats()
    }
})
function bbFbDGF () {
    timer.background(function () {
        music.playTone(233, music.beat(BeatFraction.Whole))
        music.playTone(233, music.beat(BeatFraction.Half))
        music.playTone(233, music.beat(BeatFraction.Quarter))
    })
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Quarter))
}
function GetTotalForEnemy (WhatToGet: string) {
    if (WhatToGet == "S") {
        return BaseSValue[CurrentEnemyBase] + (CannonSValue[CurrentEnemyCannon] + PropellerSValue[CurrentEnemyPropeller])
    } else if (WhatToGet == "A") {
        return BaseAValue[CurrentEnemyBase] + (CannonAValue[CurrentEnemyCannon] + PropellerAValue[CurrentEnemyPropeller])
    } else {
        return BaseDValue[CurrentEnemyBase] + (CannonDValue[CurrentEnemyCannon] + PropellerDValue[CurrentEnemyPropeller])
    }
}
function CreateTextSprites () {
    ObjectLabel1 = textsprite.create(BaseNames1[SelectedObjectBase], 0, 1)
    ObjectLabel2 = textsprite.create(BaseNames2[SelectedObjectBase], 0, 1)
    SubNameLabel = textsprite.create(SubName, 0, 1)
    AttackAmountLabel = textsprite.create("Attack (A): +5", 0, 1)
    DefenceAmountLabel = textsprite.create("Defense (D): +99", 0, 1)
    SpeedAmountLabel = textsprite.create("Speed (S): +5", 0, 1)
    ObjectLabel1.left = 7
    ObjectLabel2.left = 7
    ObjectLabel1.y = 102
    ObjectLabel2.y = 109
    ObjectLabel1.setMaxFontHeight(4)
    SubNameLabel.x = 105
    SubNameLabel.y = 109
    AttackAmountLabel.left = 59
    DefenceAmountLabel.left = 58
    SpeedAmountLabel.left = 59
    AttackAmountLabel.y = 11
    DefenceAmountLabel.y = 19
    SpeedAmountLabel.y = 27
    PartAttackAmount = textsprite.create("A:")
    PartDefendAmount = textsprite.create("D:")
    PartSpeedAmount = textsprite.create("S:")
    PartAttackAmount.left = 7
    PartDefendAmount.left = 7
    PartSpeedAmount.left = 7
    PartAttackAmount.y = 77
    PartDefendAmount.y = 84
    PartSpeedAmount.y = 91
}
function UpdateSubDisplay () {
    BaseDisplay.setImage(transformSprites.scale2x(Bases[OwnedBases[SelectedObjectBase]]))
    CannonDisplay.setImage(transformSprites.scale2x(Cannons[OwnedCannons[SelectedObjectCannon]]))
    CannonDisplay.image.replace(4, 0)
    PropellerDisplay2.setImage(PlayerPropellerDisplay.image.clone())
}
function GetTotal (WhatToGet: string) {
    if (WhatToGet == "S") {
        return BaseSValue[OwnedBases[SelectedObjectBase]] + (CannonSValue[OwnedCannons[SelectedObjectCannon]] + PropellerSValue[OwnedPropellers[SelectedObjectPropeller]])
    } else if (WhatToGet == "A") {
        return BaseAValue[OwnedBases[SelectedObjectBase]] + (CannonAValue[OwnedCannons[SelectedObjectCannon]] + PropellerAValue[OwnedPropellers[SelectedObjectPropeller]])
    } else {
        return BaseDValue[OwnedBases[SelectedObjectBase]] + (CannonDValue[OwnedCannons[SelectedObjectCannon]] + PropellerDValue[OwnedPropellers[SelectedObjectPropeller]])
    }
}
blockMenu.onMenuOptionSelected(function (option, index) {
    pause(10)
    if (option == "Cancel") {
        blockMenu.setControlsEnabled(false)
        blockMenu.closeMenu()
    } else if (option == "Restart") {
        color.setColor(1, color.rgb(247, 246, 26))
        RestartCover = sprites.create(img`
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            `, SpriteKind.Display)
        RestartCover.z = 100
        pause(10)
        if (!(Ask.AddQuestion("You'll lose all progress", "keep", "restart"))) {
            blockSettings.clear()
            game.reset()
        } else {
            game.reset()
        }
    } else if (option == "Rename Ship") {
        blockSettings.remove("Name")
        game.reset()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Math.percentChance((GetTotalForEnemy("D") + GetTotal("D")) / 2)) {
    	
    } else {
        sprite.destroy(effects.fire, 500)
        otherSprite.destroy(effects.disintegrate, 500)
    }
})
function FEeDGGaGGFF () {
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Eighth))
    timer.background(function () {
        music.playTone(175, music.beat(BeatFraction.Quarter))
        music.playTone(175, music.beat(BeatFraction.Eighth))
        music.playTone(175, music.beat(BeatFraction.Sixteenth))
    })
    music.playTone(831, music.beat(BeatFraction.Quarter))
    music.playTone(831, music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    timer.background(function () {
        music.playTone(165, music.beat(BeatFraction.Eighth))
    })
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    timer.background(function () {
        music.playTone(156, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(147, music.beat(BeatFraction.Quarter))
    })
    music.playTone(698, music.beat(BeatFraction.Eighth))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Math.percentChance(100 - GetTotal("D"))) {
        otherSprite.destroy()
        PlayerStatusbar.value += -5
    }
})
let EnemyTorpedo: Sprite = null
let EnemyAPressed = false
let RestartCover: Sprite = null
let SubNameLabel: TextSprite = null
let SpeedAmountLabel: TextSprite = null
let DefenceAmountLabel: TextSprite = null
let AttackAmountLabel: TextSprite = null
let PartSpeedAmount: TextSprite = null
let PartDefendAmount: TextSprite = null
let PartAttackAmount: TextSprite = null
let CannonSValue: number[] = []
let CannonDValue: number[] = []
let CannonAValue: number[] = []
let LostWonPropeller = ""
let LostWonCannon = ""
let LostWonBase = ""
let BaseSValue: number[] = []
let BaseDValue: number[] = []
let BaseAValue: number[] = []
let PlayerTorpedo: Sprite = null
let PropellerSValue: number[] = []
let PropellerDValue: number[] = []
let PropellerAValue: number[] = []
let PropellerNames2: string[] = []
let OwnedPropellers: number[] = []
let PropellerNames1: string[] = []
let BaseNames2: string[] = []
let OwnedBases: number[] = []
let BaseNames1: string[] = []
let cannonNames2: string[] = []
let ObjectLabel2: TextSprite = null
let OwnedCannons: number[] = []
let CannonNames1: string[] = []
let ObjectLabel1: TextSprite = null
let EnemyPropeller: Sprite = null
let EnemyCannon: Sprite = null
let EnemyBase: Sprite = null
let PropellerDisplay2: Sprite = null
let CannonDisplay: Sprite = null
let BaseDisplay: Sprite = null
let EnemyStatusbar: StatusBarSprite = null
let PlayerStatusbar: StatusBarSprite = null
let Cursor: Sprite = null
let PlayerPropellerDisplay: Sprite = null
let Cannons: Image[] = []
let PlayerCannon: Sprite = null
let Propellers: Image[] = []
let PlayerPropeller: Sprite = null
let Bases: Image[] = []
let PlayerBase: Sprite = null
let CurrentEnemyPropeller = 0
let CurrentEnemyBase = 0
let CurrentEnemyCannon = 0
let SelectedObjectPropeller = 0
let SelectedObjectBase = 0
let SelectedObjectCannon = 0
let CursorPosition = ""
let APressed = false
let SubName = ""
let EditorIsOpen = false
music.setTempo(30)
music.setVolume(40)
EditorIsOpen = true
game.setDialogCursor(img`
    . 
    `)
game.setDialogFrame(img`
    . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 5 5 5 5 5 5 5 5 5 5 7 6 
    6 7 5 5 5 5 5 5 5 5 5 5 5 7 6 
    6 7 5 5 5 5 5 5 5 5 5 5 5 7 6 
    6 7 5 5 5 5 5 5 5 5 5 5 5 7 6 
    6 7 5 5 5 5 5 5 5 5 5 5 5 7 6 
    6 7 5 5 5 5 5 5 5 5 5 5 5 7 6 
    6 7 5 5 5 5 5 5 5 5 5 5 5 7 6 
    6 7 5 5 5 5 5 5 5 5 5 5 5 7 6 
    6 7 5 5 5 5 5 5 5 5 5 5 5 7 6 
    6 7 5 5 5 5 5 5 5 5 5 5 5 7 6 
    6 7 5 5 5 5 5 5 5 5 5 5 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    `)
if (!(blockSettings.exists("Name"))) {
    game.showLongText("Welcome! In this game, you are a submarine captain! Correction - war submarine captain! And, the more opponents you defeat, the more parts you get! Customize your sub to make it as good as possible in the three categories--Attack(A), Defense(D), and Speed(S). Have fun! (PS: There are 1000 possible subs!)", DialogLayout.Full)
    color.setColor(1, color.rgb(147, 136, 233))
    SubName = game.askForString("Name you Submarine", 12)
    if (SubName.isEmpty()) {
        SubName = "Unnamed Sub"
    }
    blockSettings.writeString("Name", SubName)
} else {
    SubName = blockSettings.readString("Name")
}
color.setPalette(
color.originalPalette
)
color.setColor(12, color.rgb(50, 70, 124))
color.setColor(13, color.rgb(58, 85, 158))
APressed = false
CursorPosition = "B"
SelectedObjectCannon = 0
SelectedObjectBase = 0
SelectedObjectPropeller = 0
CurrentEnemyCannon = randint(0, 9)
CurrentEnemyBase = randint(0, 9)
CurrentEnemyPropeller = randint(0, 9)
MakeArraysCannon()
MakeArraysBase()
MakeArraysPropeller()
let SubEditor = sprites.create(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd
    dc111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111cd
    dc155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555551cd
    dc155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555551cd
    dc155111111111111111111111111111111111111111111111111111511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111551cd
    dc1551ccccccccccccccccccccccccccccccccccccccccccccccccc151ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1221551cd
    dc1551ccc11111111111111111111111111111111111111111111cc151ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd1551cd
    dc1551cc212222222222222222222222222222222222222222221cc151ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2221551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1551cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1251cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1221cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1221cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1221cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1221cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1221cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1221cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc1511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111221cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc1555555555555555555555555555555555555555555555555555555555555555555522222222222222222222222222222222111cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc1511111111111111111111111111111111115111111111111111111111111111111111111111211111111111111111111111111cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151dddddddddddddddddddddddddddddddd151dddddddddddddddddddddddddddddddd155111211111111111111111111221111cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151d1d1dd1dd1d1dddd11dd1dddd1dd1d1d111d1d1d11dd1d1dddd1d1d111d111d1d1d155111111221111111111111122111111cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151d1d1d1d1d1d1d11d1d1d1ddd1d1d1d1d151d1d1d1d1d1d1d11d111d1ddd1d1d1d1d155111111221111111111111111111111cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151ddddd111dddddddd11dd1ddd111dd1dd111ddddd11ddddddddd111d11dd1d1d1d1d155111111122211111111111111221111cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151ddddd1d1ddddd11d1ddd1ddd1d1dd1dd151ddddd1d1ddddd11d1d1d1ddd1d1d1d1d155111111111111111111111111111111cd
    dc1551cc21dddddddddddddddddddddddddddddddddddddddddd1cc151ddddd1d1dddddddd1ddd111d1d1dd1dd111ddddd11ddddddddd1d1d111d1d1d111d155511111111222111111111111111111cd
    dc1551cc211111111111111111111111111111111111111111111cc151dddddddddddddddddddddddddddddddd151dddddddddddddddddddddddddddddddd155511111121112111111111111111111cd
    dc1551cc22222222222222222222222222222222222222222222ccc1511111111111111111111111111111111115111111111111111111111111111111111155511111111122111111111111111111cd
    dc1551ccccccccccccccccccccccccccccccccccccccccccccccccc1555555555555555555555555555555555555555555555555555555555555555555555555511111111111111111111111111111cd
    dc1551ccccccccccccccccccccccccccccccccccccccccccccccccc1211111115555555555555555555555555555555555555555555555555555555555555555555555111111111111111111111111cd
    dc1551ccccccccccccccccccccccccccccccccccccccccccccccccc121ddddd15555555555555555555555555555555555555555555555555555555555555555555555551111111111111111111111cd
    dc1551ccccccccccccccccccccccccccccccccccccccccccccccccc121d11dd15555555555555555555555555555555555555555555555555555555555555555555555555111111111111111111111cd
    dc1551ccccccccccccccccccccccccccccccccccccccccccccccccc121d1d1d15555555555555555555555555555555555555555555555555555555555555555555555555511111111111111111111cd
    dc1551ccccccccccccccccccccccccccccccccccccccccccccccccc121d11dd15555555555555555555555555555555555555555555555555555555555555555555555555551111111111111111111cd
    dc1551ccc1111111111111111111111111ccccccc111111111111cc151d1ddd15555555555555555555555555555555555555555555555555555555555555555555555555551111111111111111111cd
    dc1551cc21222222222222222222222221cccccc2122222222221cc151d1ddd15555555555555555555555555555555555555555555555555555555555555555555555555555111111111111112221cd
    dc1551cc21ddddddddddddddddddddddd1cccccc21dddddddddd1cc151ddddd15555555555555555555555555555555555555555555555555555555555555555555555555555111111111112222221cd
    dc1551cc21ddddddddddddddddddddddd1cccccc21dddddddddd1cc151d1ddd15555555555555555555555555555555555555555555555555555555555555555555555555555511111112222222221cd
    dc1551cc21ddddddddddddddddddddddd1cccccc21dddddddddd1cc151d1ddd15555555555555555555555555555555555555555555555555555555555555555555555555555551111112222222221cd
    dc1551cc21ddddddddddddddddddddddd1cccccc21dddddddddd1cc151d1ddd15555555555555555555555555555555555555555555555555555555555555555555555555555551111122222222221cd
    dc1551cc21ddddddddddddddddddddddd1cccccc21dddddddddd1cc151d1ddd15555555555555555555555555555555555555555555555555555555555555555555555555555555511222222222221cd
    dc1551cc21ddddddddddddddddddddddd1cccccc21dddddddddd1cc151d111d15555555555555555555555555555555555555555555555555555555555555555555555555555555552222222222221cd
    dc1551cc21ddddddddddddddddddddddd1cccccc21dddddddddd1cc151ddddd15555555555555555555555555555555555555555555555555555555555555555555555555555555522222222222211cd
    dc1551cc21ddddddddddddddddddddddd1cccccc21dddddddddd1cc151dd1dd15555555555555555555555555555555555555555555555555555555555555555555555555555555522222222222111cd
    dc1551cc21ddddddddddddddddddddddd1cccccc21dddddddddd1cc151d1d1d15555555555555555555555555555555555555555555555555555555555555555555555555555555522222222211111cd
    dc1551cc21ddddddddddddddddddddddd1cccccc21dddddddddd1cc151d111d15555555555555555555555555555555555555555555555555555555555555555555555555555555222222211111111cd
    dc1551cc21111111111111111111111111cccccc21dddddddddd1cc151d1d1d15555555555555555555555555555555555555555555555555555555555555555555555555555555211111111111111cd
    dc1551cc2222222222222222222222222ccccccc21dddddddddd1cc151d1d1d15555555555555555555555555555555555555555555555555555555555555555555555555555555111111111111111cd
    dc1551cccccccccccccccccccccccccccccccccc21dddddddddd1cc151ddddd15555554555455455555555555555555555555555555555555555555555555555555555555555555111111222221111cd
    dc1551cccccccccccccccccccccccccccccccccc21dddddddddd1cc151d1d1d15555555445454555555555555555555555555555555555555555555555555555555555555555555111122111111111cd
    dc1551cccccccccccccccccccccccccccccccccc21dddddddddd1cc151d1d1d15555555454544555555555555555555555555555555553555555555555555555555555555555555111111111111111cd
    dc1551cccccccccccccccccccccccccccccccccc21dddddddddd1cc151dd1dd15555554555545554555555555555555555555555555535555555555555555555555555555555555511111111111111cd
    dc1551cccccccccccccccccccccccccccccccccc2111111111111cc151dd1dd15555555555454545555555555555555555555555535355555555555555555555555555555555555551111111111111cd
    dc1551cccccccccccccccccccccccccccccccccc222222222222ccc151dd1dd15555555544444545555555555555555555555553353355555555555555555555555555555555555555111111121111cd
    dc1551ccccccccccccccccccccccccccccccccccccccccccccccccc151ddddd15555555545554455555555555555555555555555553555355555555555555555555555555555555555555511111111cd
    dc155111111111111111111111111111111111111111111111111111511111115555555554554455555555555555555555555555555353555555555555555555555555555555555555555555541111cd
    dc155122222222222222222222222222222222222222222222221221555151555555555554445555555555555555555555555553333353555535555555555555555555555555555555555555544111cd
    dc1551dddddddddddddddddddddddddddddddddddddddddddddd1dd1511111115555555554545544555555555555555555555555533535553355555555555555555555555555555555555555445111cd
    dc1551dddddddddddddddddddddddddddddddddddddddddddddd111151ddddd15555555545544455555555555555555555555555555335535555555555555555555555555555555555555555445511cd
    dc1551dddddddddddddddddddddddddddddddddddddddddddddd222151d1d1d15555555554545555555555555555555555555555555535355555555555555555555555555555555555555555555511cd
    dc1551ddddddddddddddddddddddddddddddddddddddddddddddddd151d1d1d15555555455455544555555555555555555555545533553555555555555555555555555555555555555555555555541cd
    dc1451ddddddddddddddddddddddddddddddddddddddddddddddddd151dd11d15555555545444455555555555555555555555554545333533555555555555555555555555555555555555555555441cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141ddd1d15555555545455555555555555555555555555555455553355555555555555555555555555555555555555555444451cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141ddd1d15555555544445555555555555555555555555555443535555555555555555555555555555555555533535555555551cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141ddddd15555555555455555555555555555555555555555455335555555555555555555555555555555555553535555555551cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd1411111114444444444444444455555555555555555555555455335533555555555555555555555555555555553335355555551cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd1444141444444444444444444444455555544555454545554445333355555555555555555555555555555555555535355554441cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd1411111114444444444444444444445555554554545554544535535555555555555555555555555555555555555535355554441cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141ddddd14444444444444444444444555555445455554554553535335555555555555555555555555555555555535355544441cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141d11dd14444444444444444343444455555444555555554545333555555555555555555555555555544444435533555444441cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141d1d1d14444444444444344433444444555444555555545345335555555555555555555555544444444444433335554444441cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141d11dd14444444444444433433444444455444455555545535353335555555555555555554444444444444443333444444441cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141d1ddd14444444444444433434444444445445445555544435355555555555555555555444444444444444444433444444441cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141d1ddd14444444444444433433444444444445545555545533553555555555555544444444444444443443444433444444441cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141ddddd14444444444444433334444444444444444444444433535555555555554444444444444444444343444433344444441cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141dd1dd14444444444444434344444444444444444444444443344444444444444444444444444444444344343433344444441cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141d1d1d14444444443334343444444444444444444444334434344444444444444444444444444444444433333334344444441cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141d111d14444444443343333444444444444444444444443333444444444444444444444444444444333333333343344444441cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141d1d1d14444444444343343444444444444444444444334434433444444444444444333333333333333333333334334443331cd
    dc1441ddddddddddddddddddddddddddddddddddddddddddddddddd141d1d1d13344444444443443444444444444444444444443334344443333333333333333333333333333333333333333333331cd
    dc1331ddddddddddddddddddddddddddddddddddddddddddddddddd131ddddd13333334444434443444444444444444444444444334333333333333333333333333333333333333333333333333331cd
    dc13311111111111111111111111111111111111111111111111111131d11dd13333333333333333334444444444444444444444333333333333333333333333333333333333333333333333333331cd
    dc13312222222222222222222222222222222222222222222222222131d1d1d13333333333333333333333333344444444444333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131d11dd13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131d1d1d13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131d1d1d13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131ddddd13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131d111d13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131dd1dd13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131dd1dd13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131dd1dd13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131dd1dd13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131ddddd13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131dd11d13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131d1ddd13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131dd11d13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131ddd1d13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131d11dd13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc1331ccccccccccccccccccccccccccccccccccccccccccccccccc131ddddd13333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc133111111111111111111111111111111111111111111111111111311111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331cd
    dc111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111cd
    dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `, SpriteKind.Text)
scene.setBackgroundImage(img`
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555522222222222
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555522222222222222222
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555552222222222222222222
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555222222222222222222222222222222222222222
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222
    5555555555555555555555552225555555555555555555555555555555555555555555555555555555555555555555555555555555555555555222222222222222222222222222222222222222222222
    5555552222222225555555522222555555555555555555555555555555555555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222
    2222222222222222222552222222255555555555555555555555555555555555555555555555555555555555555555555555555555222222222222222222222222222222222222222222222222222222
    2222222222222222222222112222225555555555555555555555555555555555555555555555555555555555555555555555555551111222211111122222222222222222222222222222222222222222
    2222222222222222222222221112222555555555555555555555555555555555555555555555555555555555555555555555555551111111111221111111111111111122222222222222222222222222
    2222222222222222222222222211122555555555555555555555555555555555555555555555555555555555555555555555555551111111111112222221111111111111111122222222222222222222
    2222222222222222222222222222222255555555555555555555555555555555555555555555555555555555555555555555555555111111111112111122222222222111111111111222222222222222
    1222222222222222222222222222222222555555555555555555555555555555555555555555555555555555555555555555555555551111111112111111111111111111111111111111111111222211
    1111222222222222222222222222222222222555555555555555555555555555555555555555555555555555555555555555555555555555551112111111111111111111112222222222222111222111
    1112222222222222222222222222222222222225555555555555555555555555555555555555555555555555555555555555555555555555551111112211111111111111221111111111111111222121
    1122222222222222222222222222222222222225555555555555555555555555555555555555555555555555555555555555555555555555551111112211111111111111111111111111112112221111
    1222222222222222222222222222222222222225555555555555555555555555555555555555555555555555555555555555555555555555551111111222111111111111112222222211112112221111
    2222222222222222222222222222222222222225555555555555555555555555555555555555555555555555555555555555555555555555551111111111111111111111111111111111121122111111
    2222211111222222222222222222222222222225555555555555555555555555555555555555555555555555555555555555555555555555555111111112221111111111111111111112111121111111
    2222211111111122222222222222222222222222555555555555555555555555555555555555555555555555555555555555555555555555555111111211121111111111111111111111111111111111
    2221111111111111111112222222222222222222255555555555555555555555555555555555555555555555555555555555555555555555555111111111221111111111111111111111111111121111
    2122221112111111111111222222222222222222222255555555555555555555555555555555555555555555555555555555555555555555555111111111111111111111111111111111111111121111
    1121111121111121221111122222222222222222222255555555555555555555555555555555555555555555555555555555555555555555555555551111111111111111111111111111111222221111
    1111111221111111111211122222222222222222222255555555555555555555555555555555555555555555555555555555555555555555555555555511111111111111111111111112211111111111
    1111111111111111222111222222222222222222222255555555555555555555555555555555555555555555555555555555555555555555555555555551111111111111111111111121111111111111
    1111111111111111111112222222222111222222222255555555555555555555555555555555555555555555555555555555555555555555555555555555111111111111111111111111111111111111
    1111111111111111111122222222111111122222222555555555555555555555555555555555555555555555555555555555555555555555555555555555511111111111111111111111111112222222
    1111111111111111112222222211111111111111115555555555555555555555555555555555555555555555555555555555555555555555555555555555511111111111111111111111111222222222
    1111111111111111112222111111122221211111155555555555555555555555555555555555555555555555555555555555555555555555555555555555551111111111111112222222222222222222
    1111111111111111112211112222211111121111555555555555555555555555555555555555555555555555555555555555555555555555555555555555551111111111122222222222222222222222
    1111111111111111111111121111111221111115555555555555555555555555555555555555555555555555555555555555555555555555555555555555555111111122222222222222222222222222
    1111111111111111111111111111111111111155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555511111122222222222222222222222222
    1111111111111111111111111111111111111155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555511111222222222222222222222222222
    2211111111111111111111111111111115555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555112222222222222222222222222222
    2222221111111111111111111111111115555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555522222222222222222222222222222
    2222222111111111111111111111111555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555222222222222222222222222222222
    2222222222222222222211111111155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555222222222221111222222222222222
    2222222222222222222222111111155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555222222222111111222222222222222
    2222222222222222222222221111555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555552222222111111112222222222222222
    1111122222222222222222222215555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555552111111111111112222222222222211
    1111122222222222112222222222225555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555551111111111121111111111111112111
    1121111122221222112222212222225555555555555555555555555545554554555555555555555555555555555555555555555555555555555555555555555551111112222221111111111111111211
    1121121222211222112222211222222555555555555555555555555554454545555555555555555555555555555555555555555555555555555555555555555551111221111122222211111111111211
    1221121222211112112222211122222555555555555555555555555554545445555555555555555555555555555555535555555555555555555555555555555551111111111111111222221112221211
    1221121222212111112222211122222555555555555555555555555545555455545555555555555555555555555555355555555555555555555555555555555555111111111111111111111111111211
    1121121222212121212222212122222222255555555555555555555555554545455555555555555555555555555353555555555555555555555555555555555555511111111111112112211111111211
    1121111222212111212222212122222222225544555555555555555555444445455555555555555555555555533533555555555555555555555555555555555555551111111211111211121111111111
    1121121222211211211222112222222222222544555555555555555555455544555555555555555555555555555535553555555555555555555555555555555555555555111111111121111111111111
    1122111122111211111121111211112222222544554555555555555555545544555555555555555555555555555553535555555555555555555555555555555555555555555411111121111111111111
    1112111122111211211121111212112121211554544555555555555555544455555555555555555555555555533333535555355555555555555555555555555555555555555455111121121111111111
    1112111112111221211121111211112121111554545444555555555555545455445555555555555555555555555335355533555555555555555555555555555555555555554445511111111111111111
    1112111112111121211111111211112121111554445555555555555555455444555555555555555555555555555553355355555555555555555555555555555555555555554454551111111111111111
    1111111112111111111111111111111111111554445555555555555555545455555555555555555555555555555555353555555555555555555555555555555555555555555544555511111111111111
    1111111112111111111111111111111111114444555555555555555554554555445555555555555555555555455335535555555555555555555555555555555555555555555554545511111111111111
    1111111111111111111111111111111111145554555555555555555555454444555555555555555555555555545453335335555555555555555555555555555555555555555554455111111111111111
    1111111111111111111111111111111111144444444455555555555555454555555555555555555555555555554555533555555555555555555555555555555555555555554455455111111111111111
    2211111111111111111111111111111111144444444444455555555555444455555555555555555555555555554435355555555555555555555555555555555555335355555544455111111111111111
    1122222221111111111111111111111111444444444444444555555555554555555555555555555555555555554553355555555555555555555555555555555555535355555555455511111122122221
    1111122222222221111111111111111114444444444444444444444444444444444555555555555555555555554553355335555555555555555555555555555555533353555555455511111222222222
    1122212222222222222222222222222222222222222444444444444444444444444444555555445554545455544453333555555555555555555555555555555555555353555555444411122222222222
    2222122222222222222222222222222222222222222224444444444444444444444444455555545545455545445355355555555555555555555555555555555555555353555544444422222222221111
    2222222222222222222222222222222222222222222222244444444444444444444444445555554454555545545535353355555555555555555555555555555555555353555444442222222222211121
    2222222222222222222222222222222222222222222222244444444444444444443434444555554445555555545453335555555555555555555555555555444444355335554422111211111121212121
    2222222211111111122222222222222222222222222222224444444444444443444334444445554445555555453453355555555555555555555555444444444444333355544111111111111121212121
    2222222111111111111111111122222222222222222222224444444444444444334334444444554444555555455353533355555555555555555544444444444444433334444411111112221121212121
    1111111111222222221111111222222222222222222222244444444444444444334344444444454454455555444353555555555555555555554444444444444444444334444444411111111122211121
    1122211112222222222222222222222222222111111122244444444444444444334334444444444455455555455335535555555555555444444444444444434434444334444444444411111122211121
    1111111112222222222222222222222222111122222221144444444444444444333344444444444444444444444335355555555555544444444444444444443434444333444444444444111112211111
    1111111111122222222222222222222211111211111111144444444444444444343444444444444444444444444433444444444444444444444444444444443443434333444444444444411112111111
    1112222211111122222222222222222111112111111111444444444444433343434444444444444444444443344343444444444444444444444444444444444333333343444444444444441111111111
    1111111111111111122222222222221111111111111114444444444444433433334444444444444444444444433334444444444444444444444444444443333333333433444444444444433111111111
    1111111111111111111222211111111111111111111444444444444444443433434444444444444444444443344344334444444444444443333333333333333333333343344444444433333111111111
    1111111112222111111111121111111111111111333333333333444444444434434444444444444444444444433343444433333333333333333333333333333333333333333333333333333111111111
    1111111111112221111112211111111111111333333333333333333344444344434444444444444444444444443343333333333333333333333333333333333333333333333333333333333111111111
    1111111111111122111112111111111111113333333333333333333333333333333344444444444444444444443333333333333333333333333333333333333333333333333333333333333111111111
    1111111111111111111111111111111111133333333333333333333333333333333333333333444444444443333333333333333333333333333333333333333333333333333333333333333111111111
    1111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111
    1111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111
    1111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111
    1111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111
    1111111111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333311111111111
    1111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333311111111111
    1111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333111111111111
    1111111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111111
    1111111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111111
    1111111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333111111111111111
    1111111111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333111111111111111
    1111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111111111
    1111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333311111111111111111
    1111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111111111111
    1111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333111111111111111111111
    1111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333111111111111111111111
    `)
PlayerBase = sprites.create(Bases[SelectedObjectBase].clone(), SpriteKind.Player)
PlayerPropeller = sprites.create(Propellers[SelectedObjectPropeller].clone(), SpriteKind.Extra)
PlayerCannon = sprites.create(Cannons[SelectedObjectCannon].clone(), SpriteKind.Extra)
PlayerPropellerDisplay = sprites.create(transformSprites.scale2x(PlayerPropeller.image), SpriteKind.Text)
Cursor = sprites.create(img`
    7777....................................7777
    7666....................................6667
    7..........................................7
    7..........................................7
    7..........................................7
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    ............................................
    7..........................................7
    7..........................................7
    7..........................................7
    7777....................................7777
    6666....................................6666
    `, SpriteKind.Text)
Cursor.setPosition(31, 25)
PlayerCannon.image.replace(7, 4)
PlayerPropeller.setFlag(SpriteFlag.Invisible, true)
PlayerBase.setPosition(31, 25)
PlayerCannon.setPosition(22, 56)
PlayerPropellerDisplay.setPosition(47, 59)
PlayerCannon.z = 50
PlayerBase.z = 45
PlayerBase.fx = 2
PlayerCannon.fx = 2
PlayerPropeller.fx = 2
CreateTextSprites()
PlayerStatusbar = statusbars.create(20, 4, StatusBarKind.Health)
PlayerStatusbar.setColor(6, 1, 7)
PlayerStatusbar.setBarBorder(1, 1)
PlayerStatusbar.left = 1
PlayerStatusbar.top = 1
PlayerStatusbar.setFlag(SpriteFlag.Ghost, true)
PlayerStatusbar.setFlag(SpriteFlag.Invisible, true)
PlayerStatusbar.max = 25
PlayerStatusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
EnemyStatusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
EnemyStatusbar.setColor(12, 1, 13)
EnemyStatusbar.setBarBorder(1, 1)
EnemyStatusbar.right = 159
EnemyStatusbar.top = 1
EnemyStatusbar.setFlag(SpriteFlag.Ghost, true)
EnemyStatusbar.setFlag(SpriteFlag.Invisible, true)
EnemyStatusbar.max = 25
EnemyStatusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
UpdateStats()
BaseDisplay = sprites.create(transformSprites.scale2x(Bases[SelectedObjectBase]), SpriteKind.Text)
CannonDisplay = sprites.create(transformSprites.scale2x(Cannons[SelectedObjectCannon]), SpriteKind.Text)
CannonDisplay.image.replace(4, 0)
PropellerDisplay2 = sprites.create(PlayerPropellerDisplay.image, SpriteKind.Text)
BaseDisplay.setPosition(110, 60)
PropellerDisplay2.setPosition(BaseDisplay.x - 30, BaseDisplay.y + 11)
CannonDisplay.setPosition(BaseDisplay.x + 18, BaseDisplay.y + 19)
animation.runMovementAnimation(
BaseDisplay,
animation.animationPresets(animation.bobbing),
5010,
true
)
animation.runMovementAnimation(
CannonDisplay,
animation.animationPresets(animation.bobbing),
5010,
true
)
animation.runMovementAnimation(
PropellerDisplay2,
animation.animationPresets(animation.bobbing),
5010,
true
)
EnemyBase = sprites.create(Bases[CurrentEnemyCannon].clone(), SpriteKind.Opponent)
EnemyBase.setFlag(SpriteFlag.Invisible, true)
EnemyBase.image.flipX()
EnemyBase.image.replace(6, 12)
EnemyBase.image.replace(7, 13)
EnemyBase.image.replace(10, 14)
EnemyBase.image.replace(11, 15)
EnemyCannon = sprites.create(Cannons[CurrentEnemyBase].clone(), SpriteKind.Extra)
EnemyCannon.setFlag(SpriteFlag.Invisible, true)
EnemyCannon.image.flipX()
EnemyCannon.image.replace(6, 12)
EnemyCannon.image.replace(7, 13)
EnemyCannon.image.replace(10, 14)
EnemyCannon.image.replace(11, 15)
EnemyPropeller = sprites.create(Propellers[CurrentEnemyPropeller].clone(), SpriteKind.Extra)
EnemyPropeller.setFlag(SpriteFlag.Invisible, true)
EnemyPropeller.image.flipX()
EnemyPropeller.image.replace(6, 12)
EnemyPropeller.image.replace(7, 13)
EnemyPropeller.image.replace(10, 14)
EnemyPropeller.image.replace(11, 15)
EnemyCannon.z = 50
EnemyBase.z = 45
game.onUpdate(function () {
    if (OwnedBases.length == 0 || (OwnedCannons.length == 0 || OwnedPropellers.length == 0)) {
        game.splash("You ran out of a certain part!", "Game Over")
        blockSettings.clear()
        game.over(false)
    }
})
game.onUpdate(function () {
    if (!(EditorIsOpen)) {
        PlayerCannon.setPosition(PlayerBase.x + 6, PlayerBase.y + 8)
        PlayerPropeller.setPosition(PlayerBase.x - 15, PlayerBase.y + 6)
        EnemyCannon.setPosition(EnemyBase.x - 6, EnemyBase.y + 8)
        EnemyPropeller.setPosition(EnemyBase.x + 15, EnemyBase.y + 6)
    }
})
game.onUpdate(function () {
    if (EditorIsOpen) {
        controller.moveSprite(PlayerCannon, 0, 0)
        controller.moveSprite(PlayerPropeller, 0, 0)
        controller.moveSprite(PlayerBase, 0, 0)
    } else {
        controller.moveSprite(PlayerCannon, 0, 30 + 1.5 * GetTotal("S"))
        controller.moveSprite(PlayerPropeller, 0, 30 + 1.5 * GetTotal("S"))
        controller.moveSprite(PlayerBase, 0, 30 + 1.5 * GetTotal("S"))
    }
})
game.onUpdateInterval(1000, function () {
    music.changeTempoBy(1)
})
forever(function () {
    if (!(EditorIsOpen)) {
        if (!(EnemyBase.y == PlayerBase.y)) {
            if (EnemyBase.y > PlayerBase.y + 5) {
                EnemyBase.vy = -1 * (30 + 1.5 * GetTotalForEnemy("S"))
            } else if (EnemyBase.y < PlayerBase.y - 5) {
                EnemyBase.vy = 30 + 1.5 * GetTotalForEnemy("S")
            } else {
                EnemyBase.vy = 0
                if (!(EnemyAPressed)) {
                    EnemyAPressed = true
                    EnemyTorpedo = sprites.create(img`
                        . . . e e e e e e e e e e . e e 
                        f e f e f e f e f e f e f e e f 
                        . . . f f f f f f f f f f . f f 
                        `, SpriteKind.Enemy)
                    EnemyTorpedo.setFlag(SpriteFlag.DestroyOnWall, true)
                    EnemyTorpedo.z = 40
                    EnemyTorpedo.setPosition(EnemyCannon.x, EnemyCannon.y - 2)
                    EnemyTorpedo.setVelocity(-1 * (10 + (GetTotalForEnemy("S") + GetTotalForEnemy("A"))), 0)
                    pause(7 * (122 + -1 * GetTotalForEnemy("A")))
                    EnemyAPressed = false
                }
            }
        }
    }
})
forever(function () {
    music.rest(music.beat(BeatFraction.Quarter))
    bbFbDGF()
    music.rest(music.beat(BeatFraction.Quarter))
    bbFbDGF()
    music.rest(music.beat(BeatFraction.Quarter))
    bDD()
    music.rest(music.beat(BeatFraction.Eighth))
    GCbCDDDDeFeDCC()
    music.rest(music.beat(BeatFraction.Eighth))
    CFDeFeDC()
    music.rest(music.beat(BeatFraction.Eighth))
    bDDD()
    GFAGG()
    music.rest(music.beat(BeatFraction.Eighth))
    CBbAaGGbbbbbGeDCC()
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    ebCGGFGaG()
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    FEeDGGaGGFF()
    music.rest(music.beat(BeatFraction.Eighth))
    GCbCDDDDeFeDCC()
})
