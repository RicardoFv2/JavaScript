document.addEventListener("DOMContentLoaded", () => {
  const contenedor1 = document.getElementById("contenedor1");
  const contenedor2 = document.getElementById("contenedor2");
  const contenedor3 = document.getElementById("contenedor3");

  contenedor1.style.height = "100px";
  contenedor1.style.width = "100px";
  contenedor1.style.backgroundColor = "red";

  contenedor2.style.height = "100px";
  contenedor2.style.width = "100px";
  contenedor2.style.backgroundColor = "blue";

  contenedor3.style.height = "100px";
  contenedor3.style.width = "100px";
  contenedor3.style.backgroundColor = "green";

  contenedor1.addEventListener("click", () => {
    contenedor1.style.backgroundColor = "black";
  });
  contenedor2.addEventListener("mouseover", () => {
    contenedor2.style.backgroundColor = "#00ff00";
  });
  contenedor2.addEventListener("mouseout", () => {
    contenedor2.style.backgroundColor = "#ffff00";
  });
  contenedor3.addEventListener("click", () => {
    contenedor1.style.display = "none";
    contenedor2.style.display = "none";
  });
});
