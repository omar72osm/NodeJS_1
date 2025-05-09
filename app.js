const form = document.getElementById("messageForm");
const ul = document.getElementById("userList");
let li;

// const p = document.getElementsByTagName("p");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  let username = document.getElementById("username").value;
  let url = "http://127.0.0.1:3000";
  // -----------------------------------------------------
  if (username.trim()) {
    url += "/users";
  }
  // console.log(url);
  //------------------------------------------------------
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username }),
  })
    .then((response) => response.json())
    .then((data) => {
      const p = document.getElementById("paragraph");
      p.textContent = data.message + data.msgValue;
      console.log(p.textContent);
      console.log("request accepted ", data);
      if (data.msgValue !== "no one") {
        li = document.createElement("li");
        li.textContent = data.msgValue;
        ul.appendChild(li);
      }
    })
    .catch((error) => console.error("Error:", error));
});
