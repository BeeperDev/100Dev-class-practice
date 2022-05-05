//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeFighter (fighterName, fighterStyle, fighterWeight, fighterFinishMove) {
    this.name = fighterName
    this.style = fighterStyle
    this.weight = fighterWeight
    this.finishMove = fighterFinishMove
    this.punch = function() {
        alert('PUNCHHHH')
    }
    this.kick = function() {
        alert('KICKKKK')
    }
    this.taunt = function() {
        alert(`YOU CAN'T HANDLE MY ${this.finishMove}!`)
    }
}

let erica = new MakeFighter ('Erica', 'Sumo', 145, 'RNC')
let billy = new MakeFighter ('Billy', 'Kickboxer', 165, 'Teep')