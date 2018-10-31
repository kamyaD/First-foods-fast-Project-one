

function login() {


  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  //const name = "Domnic";
  //const password = "Cow1";

  const details = { name, password };
  // console.log(details);
  const url = "http://localhost:5000/api/v2/login";

  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      "name": `${name}`,
      "password": `${password}`
    }),
    headers: {
      "Access-Control-Request-Headers": "*",
      "content-type": "application/json",

    },
  })
    .then(resp => resp.json())
    .then(data => {

      let message = data.message;

      if (message === "User not found") {
        document.querySelector(".facts").innerHTML = "User not found:";
        document.querySelector(".facts").style.color = "red";

      }
      let role = data.data.role;
      // console.log("dat", data);
      message = document.getElementById("message");
      message.innerHTML += data.message
      localStorage.setItem('token', data.data.token)
      localStorage.setItem('name', data.data.name)
      localStorage.setItem('role', data.data.role)

      if (role === 1) {
        redirect: window.location.replace("makeOrder.html");
      } else {
        redirect: window.location.replace("allOrders.html");
      }
    })
    .catch(function (error) {
      console.log("errrr", error);
    });
}

// window.onload = { login };
