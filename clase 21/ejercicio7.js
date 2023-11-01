let textarea = document.getElementById("textoarea");
let contador = document.getElementById("contador");

textarea.addEventListener("input", () => {
  let contar = textarea.value.length;
  contador.innerHTML = contar;
});