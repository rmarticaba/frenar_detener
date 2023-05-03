function ejercicio8 () {
    distance = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distance <= 30 && distance > 20) {
    	maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    } else if (distance <= 20 && distance > 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    } else if (distance <= 10) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
    }
    basic.pause(200)
}
let distance = 0
basic.showString("Hola")
basic.forever(function () {
    ejercicio8()
})
