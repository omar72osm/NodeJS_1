const form = document.getElementById("messageForm");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  let message = document.getElementById("message").value;
  console.log(message);
  fetch("http://127.0.0.1:3000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: message }),
  })
    .then((response) => response.json())
    .then((data) => console.log("Responding to NODE server : ", data))
    .catch((error) => console.error("Error:", error));
});
