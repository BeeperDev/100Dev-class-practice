//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixShows{
    constructor(genre, episodeNum, [month, year], title){
        this.genre = genre
        this.numberOfEpisodes = episodeNum
        this.releaseDate = {month,year}
        this.title = title
    }
    play(){
        console.log('Plauing...')
    }
    stop(){
        console.log('Stopping...')
    }
    saveToList(){
        console.log('Saved to List')
    }
}

let bridgerton = new MakeNetflixShows('Drama', 12, ['May', 2020], 'Bridgerton')

//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NewShow {
    constructor(title, numOfSeasons, numOfEpisodes, yearReleased){
        this.title = title
        this.numOfSeasons = numOfSeasons
        this.numOfEpisodes = numOfEpisodes
        this.yearReleased = yearReleased
    }
    play() {
        console.log('play')
    }
    stop() {
        console.log('stop')
    }
    saveToList() {
        console.log('save')
    }
}

let Ozark = new NewShow('Ozark', 4, 42, 2018)
