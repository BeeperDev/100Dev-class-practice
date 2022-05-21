//Code 01
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(){
//     console.log('Paper delivered to house 2')
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo()
// houseThree()

// Paper delivered to house 1
// Paper delivered to house 2
// Paper delivered to house 3

//----------------------------------------------------------------------------------------------------------------------

//Code 02
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(){
//     setTimeout(() => console.log('Paper delivered to house 2'), 0)
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo()
// houseThree()

// Paper delivered to house 1
// Paper delivered to house 3
// Paper delivered to house 2

// * even if you get rid of the wait, same outcome prints because of the event loop. House two is given to the browser and back but JS keeps going

//----------------------------------------------------------------------------------------------------------------------

//Code 03
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(callback){
//     setTimeout(() => {
//         console.log('Paper delivered to house 2')
//         callback()
//     }, 3000)
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo(houseThree)


// Paper delivered to house 1       *delay...then....
// Paper delivered to house 2
// Paper delivered to house 3

//----------------------------------------------------------------------------------------------------------------------

//Code 04
// function houseOne(){
//     setTimeout(() => {
//         console.log('Paper delivered to house 1')
//         setTimeout(() => {
//             console.log('Paper delivered to house 2')
//             setTimeout(() => {
//                 console.log('Paper delivered to house 3')
//             }, 3000)
//         }, 4000)
//     }, 5000)
// }
// houseOne()

// 3 sec delay for each console.log
// Paper delivered to house 1       
// Paper delivered to house 2
// Paper delivered to house 3

// Callback hell. So terrible!

//----------------------------------------------------------------------------------------------------------------------

//Code 05
// const promiseObj = new Promise((resolve, reject) => {
//     const error = false
//     if(!error){
//         resolve('Promise has been fullfilled')
//     }else{
//         reject('Error: Operation has failed')
//     }
// })
// console.log(promiseObj)
// promiseObj.then(data => console.log(data)).catch(err => console.log(err))


//Promise {<fulfilled>: 'Promise has been fullfilled'}
//Promise has been fullfilled



//----------------------------------------------------------------------------------------------------------------------

//Code 06 - each function returns a promise object
// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 1')
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 2')
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 3')
//         }, 2000)
//     })
// }
// houseOne()
//     .then(data => console.log(data))
//     .then(houseTwo)
//     .then(data => console.log(data))
//     .then(houseThree)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// prints in order with proper browser delays
// Paper delivered to house 1       
// Paper delivered to house 2
// Paper delivered to house 3


//----------------------------------------------------------------------------------------------------------------------

//Code 07
// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 1')
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 2')
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 3')
//         }, 2000)
//     })
// }

// // We have an async function that works the same as the promise chain
// async function getPaid(){
//     const houseOneWait = await houseOne()
//     const houseTwoWait = await houseTwo()
//     const houseThreeWait = await houseThree()
//     console.log(houseOneWait)
//     console.log(houseTwoWait)
//     console.log(houseThreeWait)
// }

// getPaid()

// prints in order all at once
// Paper delivered to house 1       
// Paper delivered to house 2
// Paper delivered to house 3


//----------------------------------------------------------------------------------------------------------------------

//Code 08
// async function getACuteDogPhoto(){
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }
// getACuteDogPhoto()

// Fetch finished loading: GET "https://dog.ceo/api/breeds/image/random".


//----------------------------------------------------------------------------------------------------------------------

//Code 09 - add a try/catch block
// async function getACuteDogPhoto(){
//     try{
//         const res = await fetch('https://dog.ceo/api/breeds/image/random')
//         if(!res.ok){
//             throw new Error(`HTTP error: ${res.status}`)
//         }
//         const data = await res.json()
//         console.log(data)
//     }
//     catch(error) {
//         console.error(`Could not get products: ${error}`)
//     }    
// }
// getACuteDogPhoto()

// Fetch finished loading: GET "https://dog.ceo/api/breeds/image/random".
// {message: 'https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_982.jpg', status: 'success'}