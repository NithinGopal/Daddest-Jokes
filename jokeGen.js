//! fetch data from API 
//@ API URI for dad jokes
class JokeGenerator {
    //@ API and other custom variables
    constructor () {
        this.dadJokeURI = 'https://icanhazdadjoke.com';
        this.dadJokeAPIReq = {
            headers : {
                Accept: "application/json",                    
            },
        };
    }
    //@ methods to get data from URI above
    async getDadJoke () {
        const response = await fetch (this.dadJokeURI, this.dadJokeAPIReq);
        const data = await response.json();                 //? convert the response into json
        //console.log(data);
        return data.joke;                                   //? returns a promise, not data
    }
}
//@ API URI for puppy pics
class PuppyPicGenerator {
    //@ API and other custom variables
    constructor () {
        this.puppyPicURI = 'https://dog.ceo/api/breeds/image/random';
    }
    //@ methods to get data from URI above
    async getPuppyPics () {
        const response = await fetch (this.puppyPicURI);
        //console.log(response);
        const data = await response.json();
        return data.message;                                //? returns a promise, not data
    }
}

//! DOM bits
const jokeLine = document.querySelector('p');
const button = document.querySelector('.btn');
const dogImg = document.querySelector('.dog-img');
//@ variables for data from API
const dadJokeGenerator = new JokeGenerator ();              //$ don't forget to create a new object from the constructor
const puppyPicGenerator = new PuppyPicGenerator();          //$ don't forget to create a new object from the constructor
//@ button to update joke on click
button.addEventListener ('click', e => {
    //console.log(dadJokeGenerator.getDadJoke());
    dadJokeGenerator.getDadJoke().then(data => jokeLine.textContent = data);  //? .then gives data
    // dogImg.setAttribute('src', `${puppyPicGenerator.getPuppyPics()}`);
    puppyPicGenerator.getPuppyPics().then(data => dogImg.setAttribute('src', `${data}`));
})
