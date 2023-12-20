function generateName(event) {
  event.preventDefault();

  let apiKey = "t0cee57ed010o387a24333e4fba6d54e";
  let petType = document.querySelector("#pet-type");
  let vibe = document.querySelector("#color-vibe");

  let prompt = "Please generate a pet name";
  let context = `You love naming pets funny names that reflect their whole vibe. With a species of ${
    petType.value
  } and an aura with the color (in hex value form) of ${vibe.value.replace(
    "#",
    "%23"
  )} please generate a name for the pet in basic HTML. Please give only the name in your response and do not give any hex values. The name should be creative based off of the color and pet species provided`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPetName);

  let nameDisplayElement = document.querySelector(".pet-name");
  nameDisplayElement.classList.remove("hidden");
  new Typewriter(".pet-name", {
    strings: "Generating Name",
    autoStart: true,
    delay: 1,
  });
}

function displayPetName(response) {
  new Typewriter(".pet-name", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#pet-form");
formElement.addEventListener("submit", generateName);
