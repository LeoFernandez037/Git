const createTarjeta = () => {
  const imagen = document.createElement("img");
  imagen.className = "redonda";
  imagen.src = "./ProyectoPresentacion/avatar-jessica.jpeg";
  const contImg = document.createElement("div");
  contImg.className = "contenedorImagen";

  const name = document.createElement("h1");
  name.className = "nombre";
  const nameText = document.createTextNode("Lorem ipsum");

  const ubication = document.createElement("p");
  ubication.className = "ubicacion";
  const ubicationText = document.createTextNode("La Paz Bolivia");

  const description = document.createElement("p");
  description.className = "descripcion";
  const text = document.createTextNode(
    '"Lorem ipsum dolor sit amet vel voluptas."'
  );

  const cont1 = document.createElement("div");
  cont1.className = "Contenedor1";
  name.appendChild(nameText);
  cont1.appendChild(name);
  ubication.appendChild(ubicationText);
  cont1.appendChild(ubication);
  description.appendChild(text);
  cont1.appendChild(description);

  const buttonGit = document.createElement("button");
  const buttonGitTexto = document.createTextNode("GitHub");
  buttonGit.appendChild(buttonGitTexto);

  const buttonFront = document.createElement("button");
  const buttonFrontTexto = document.createTextNode("Front Mentor");
  buttonFront.appendChild(buttonFrontTexto);

  const buttonInsta = document.createElement("button");
  const buttonInstaTexto = document.createTextNode("Instagram");
  buttonInsta.appendChild(buttonInstaTexto);

  const buttonLink = document.createElement("button");
  const buttonLinkTexto = document.createTextNode("Linkedln");
  buttonLink.appendChild(buttonLinkTexto);

  const buttonTwitter = document.createElement("button");
  const buttonTwitterTexto = document.createTextNode("Twitter");
  buttonTwitter.appendChild(buttonTwitterTexto);

  const contButtons = document.createElement("div");
  contButtons.className = "container";
  contButtons.appendChild(buttonInsta);
  contButtons.appendChild(buttonTwitter);
  contButtons.appendChild(buttonLink);
  contButtons.appendChild(buttonFront);
  contButtons.appendChild(buttonGit);

  const profileCard = document.createElement("div");
  profileCard.className = "contenedorDinamico";
  contImg.appendChild(imagen);
  profileCard.appendChild(contImg);
  cont1.appendChild(contButtons);
  profileCard.appendChild(cont1);
  return profileCard;
};

const mountNode = document.querySelector("#app");
const addCard = () => {
  mountNode.appendChild(createTarjeta());
};

const addCardButton = document.querySelector("button");
addCardButton.addEventListener("click", addCard);
