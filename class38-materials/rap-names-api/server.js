const express = require('express')      // Make sure my server has access to express
const app = express()                   // using express and storing it in 'app'
const PORT = 8000                       // setting up a localhost port

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan, Dylan'
    }
}


//set up GET request for home
app.get('/', ( request, response ) => {             // app.get( <requestRoute>, <callBack(requestParam,responseParam)> )
    response.sendFile(__dirname + '/index.html')    // respond by sending a file
})  

app.get('/api/:rapperName', (request, response) => {    // '/:rapperName' says hey this is a query param holding whatever user types in url
    const theRappersName = request.params.rapperName.toLowerCase()                 // look at the query parameters
    if(rappers[theRappersName]) {                    // grab the object and use the key (can't use dot notation because of spaces in names)
        response.json(rappers[theRappersName])          // respond with specific rapper (entered in params)
    } else {
        response.json(rappers['dylan'])
    }
    // response.json(rappers)                                 //respond by sending json
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})