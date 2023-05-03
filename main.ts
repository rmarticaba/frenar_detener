function ejercicio8 () {
    avanzar()
    evitar_colision()
    basic.pause(200)
}
function evitar_colision () {
    if (distancia_de_colision()) {
        maqueen.motorStop(maqueen.Motors.All)
        speed = 0
    }
}
function distancia_de_frenado () {
    return maqueen.Ultrasonic(PingUnit.Centimeters) <= 25 && maqueen.Ultrasonic(PingUnit.Centimeters) > 6
}
function distancia_de_colision () {
    return maqueen.Ultrasonic(PingUnit.Centimeters) <= 6
}
function reducir_velocidad () {
    if (speed > vel_minima) {
        speed = speed - 20
    }
}
function avanzar () {
    if (distancia_de_frenado()) {
        reducir_velocidad()
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
}
let speed = 0
let vel_minima = 0
vel_minima = 10
speed = 90
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
basic.showString("Hola")
basic.forever(function () {
    ejercicio8()
})
