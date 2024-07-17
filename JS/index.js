function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var names = getParameterByName("name");
var sex = getParameterByName("sex");
var setName = document.getElementById("names");
var setSex = document.getElementById("sex");
var no = document.getElementById("no");
var si = document.getElementById("si");

setName.innerHTML = names;

if (sex == "h") {
  setSex.innerHTML = "novio?";
} else if (sex == "m") {
  setSex.innerHTML = "novia?";
} else {
  setSex.innerHTML = "novia?";
}

function changeSi() {
  no.innerHTML = "No";
  si.innerHTML = "Si";
}

function changeNo() {
  no.innerHTML = "Si";
  si.innerHTML = "No";
}

function clickButton() {
  Swal.fire({
    title: "¡¡Gracias por aceptar!!",
    text: "🥰 Te hare muy feliz(ɔˆ ³(ˆ⌣ˆc) 💖",
    imageUrl: "IMG/gif.gif",
    imageWidth: 370,
    imageHeight: 300,
    imageAlt: "Gatitos dandose un besito",
    confirmButtonText: 'cerrar',
  });
}

si.addEventListener("click", clickButton);
no.addEventListener("click", clickButton);
var siHover = si.addEventListener("mouseover", changeSi);
var noHover = no.addEventListener("mouseover", changeNo);
var siHover = si.addEventListener("touchstart", changeSi);
var noHover = no.addEventListener("touchstart", changeNo);

