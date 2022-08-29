function dialogOeffnen(dialogId) {
  document.getElementById(dialogId).classList.add("sichtbar");
  document.getElementById("body-overlay").classList.add("sichtbar");
}

function dialogSchliessen(dialogId) {
  document.getElementById(dialogId).classList.remove("sichtbar");
  document.getElementById("body-overlay").classList.remove("sichtbar");
}

document.getElementById("anmelden").addEventListener("submit", handleform);
function handleform(event){
  event.preventDefault();

  let anmelden = event.target;
  let formData = new FormData(anmelden);

  formData.append("time",  Date.now());

  for(let key of formData.keys()){
    console.log(key, formData.get(key));

  }

  let url = "http://localhost3000/";

  let request = new Request(url, {
    body:formData,
    method:"POST",
  });
    
  fetch(request)
  .then((response) => response.json())
  .then((data) => {
    console-log("Antwort vom Server:", data);
  })
  .catch((error) => {
    console.warn(error);
  });
}