function orders() {
  const order = document.getElementById("order_name").value;
  const customer = document.getElementById("customer_name").value;


  const details = { order, customer };
  console.log(details);
  const url = "http://localhost:5000/api/v2/orders";
  let token = localStorage.getItem("token");

  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      "order": `${order}`,
      "customer": `${customer}`
    }),
    headers: {
      "Access-Control-Request-Headers": "*",
      "content-type": "application/json",
      'Authorization': 'Bearer ' + token

    },
  })
    .then(resp => resp.json())
    .then(function (data) {
      console.log("dat", data);
      message = document.getElementById("message");
      message.innerHTML += data.message
      // localStorage.setItem('token', data.data.token)
      if (data) {
        redirect: window.location.replace("order.html")
      } else {
        alert("invalid login")
      }
    })
    .catch(function (error) {
      console.log("errrr", error);
    });
}