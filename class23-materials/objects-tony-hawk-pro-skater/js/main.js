//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakeSkater(boardColor, name, trickMove, speed){
    this.boardColor = boardColor
    this.name = name
    this.trickMove = trickMove
    this.speed = speed
    this.one80 = function(){
        console.log('flip!')
    }
    this.skateForward = function() {
        console.log('pedal!')
    }
    this.flipInAir = function() {
        console.log('get some air!')
    }
}
let ericaLayton = new MakeSkater('blue', 'Erica', 'kickflip', 'fast')