//poem:

function writePoem(response) {
  let poem = response.data.answer;

  new Typewriter("#verses", {
    strings: poem,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let poemInput = document.querySelector("#poem-topic");
  let poemTopic = poemInput.value;

  let apiKey = "407bfao61470cbta2ae38d4403fe23ad";
  let context =
    "you are very creative, funny and a romantic poem expert and love to write profound poems. please be creative and behave. your mission is to generate a 4 line poem in basic HTML. make sure to follow the user instructions";
  let prompt = `user instructions: Please be so kind and compose a 4 line german poem about ${poemTopic}. Display lines in separate <br/>. No title. At the end sign the poem in a fifth and different line with "SheCodes AI" inside a <strong> element`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#verses");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛Generating german poem about ${poemTopic}...</div>`;
  axios.get(apiUrl).then(writePoem);
}

let poemButton = document.querySelector("#poem-form");
poemButton.addEventListener("submit", generatePoem);

//joke:

new Typewriter("#joke-heading", {
  strings: "Want to hear a joke? ",
  autoStart: true,
  cursor: "",
});

function tellJoke(response) {
  let joke = response.data.answer;
  //console.log(joke);
  new Typewriter("#joke", {
    strings: joke,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateJoke(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#topic");
  let topic = searchInput.value;
  let apiKey = "407bfao61470cbta2ae38d4403fe23ad";
  let context =
    "you have traveled the world and have a good sense of humor. please be creative and find good humor. your mission is to generate funny jokes and follow user instructions:";
  let prompt = `user instructions: Please generate a funny joke about ${topic}. Your answer displays only the joke`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.classList.remove("hidden");
  jokeElement.innerHTML = `<div class="generate">⌛Generating joke about ${topic}...</div>`;

  axios.get(apiUrl).then(tellJoke);
}

let jokeButton = document.querySelector("#topic-form");

jokeButton.addEventListener("submit", generateJoke);
