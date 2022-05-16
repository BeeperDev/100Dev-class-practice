//Create a stopwatch object that has four properties and three methods
let stopwatch = {}

stopwatch.color = 'Black'
stopwatch.size = 'Small'
stopwatch.time = 12.25
stopwatch.brand = 'Sport'
stopwatch.start = function(time){
    console.log('start!')
}
stopwatch.stop = function(time){
    console.log('Stop!')
}
stopwatch.sound = function(){
    console.log('beep')
}