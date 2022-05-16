//Create a function that takes in an array of numbers. 
// Return a new array containing every even number from the original array 
// (do not use map or filter)

function thing(arr){
    let newArr = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            newArr.push(arr[i])
        }
    }

    arr.forEach(x => {
        if( x%2 === 0 ){
            newArr.push(x)        
        }  
    })

}