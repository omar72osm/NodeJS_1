const form = document.getElementById("messageForm");
// const p = document.getElementsByTagName("p");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  let username = document.getElementById("username").value;
  // console.log(username);
  fetch("http://127.0.0.1:3000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username }),
  })
    .then((response) => response.json())
    .then((data) => {
      const p = document.getElementById("paragraph");

      p.textContent = data.message + " is " + data.msgValue;
      console.log(p.textContent);
      console.log("request accepted ", data);
    })
    .catch((error) => console.error("Error:", error));
});
