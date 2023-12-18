function generateName(event) {
  event.preventDefault();

  let apiKey = "t0cee57ed010o387a24333e4fba6d54e";
  let petType = document.querySelector("#pet-type");

  let prompt = "Please generate a pet name";
  let context = `You are very in tune with animals and love naming them funny things that reflect their whole vibe. With a species of ${petType.value} color, and the color that best represents them, please generate a name for the pet in basic HTML`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPetName);
}

function displayPetName(response) {
  new Typewriter("#typewriter", {
    strings: response.data.answer,
    autoStart: true,
  });
}

let formElement = document.querySelector("#pet-form");
formElement.addEventListener("submit", generateName);
