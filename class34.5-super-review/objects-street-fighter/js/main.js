//Create a street fighter constructor that makes fighting game characters with 
// 4 properties and 3 methods
function MakeFighter(name, height, weight, finishMove){
    this.name = name
    this.height = height
    this.weight = weight
    this.finishMove = finishMove
    this.punch = function(){
        console.log('Punch!')
    }
    this.kick = function(){
        console.log('Kick!')
    }
    this.choke = function(){
        console.log('Rear Naked Choke')
    }
}

let Erica = new MakeFighter('Erica', 5.8, 145, 'RNC')