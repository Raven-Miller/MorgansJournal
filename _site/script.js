// LANDSCAPE REC
function landscapePop() {
  document.getElementById("pop-up").style.display = "none";
}

// PASSWORD

function getHint() {
  document.getElementById("hint").style.display = "block";
  console.log(
    "Clever! The password to the Personal section is 'gemini'. The password to Letters is '1096'."
  );
  document.getElementById("hintButton").style.display = "none";
}

const SubmitBtn = document.getElementById("SubmitBtn");
const inputPassword = document.getElementById("inputPassword");
const pageKey = "unlocked-" + window.location.pathname;

function unlock() {
  document.getElementById("ppContainer").style.display = "none";
  sessionStorage.setItem(pageKey, "true");
}

function enter() {
  const input = document.getElementById("inputPassword").value;
  if (input.toLowerCase() === correctPassword.toLowerCase()) {
    unlock();
  } else {
    alert("Incorrect Password");
  }
}

SubmitBtn.addEventListener("click", enter);
inputPassword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    enter();
  }
});

if (sessionStorage.getItem(pageKey) === "true") {
  unlock();
}
