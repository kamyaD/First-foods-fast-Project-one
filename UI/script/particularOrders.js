window.onload = function () {
  function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById("order");
  const name = localStorage.getItem('name');
  const url = `http://localhost:5000/api/v2/orders/${name}`;
  let token = localStorage.getItem("token");

  fetch(url, {
    headers: {
      "Access-Control-Request-Headers": "*",
      "content-type": "application/json",
      'Authorization': 'Bearer ' + token

    },
  })
    .then(resp => resp.json())
    .then(function (data) {
      console.log("dat", data);
      // message = document.getElementById("message");
      // message.innerHTML += data.message
      let order = data.user_histry;

      order.map(function (order) {
        let tr = createNode("tr"),
          td = createNode("tr");
        let Orders = document.querySelector(".facts1");
        // console.log(Orders)
        //     tr.innerHTML = `<tr><td>${order[0]}</td><td> ${order[1]} </td><td>${order[2]}</td><td> ${
        //       order[3]
        //       }</td><td>${order[4]}</td></tr>`;
        // append(tr, td);
        // append(ul, tr);
        let renderData = `
        <tr id="Orders">
              <td>${order[0]}</td>
              <td>${order[1]}</td>
              <td>${order[2]}</td>
              <td>${order[3]}</td>
              <td>${order[4]}</td>
            </tr>
        `;
        //Orders.innerHTML = renderData;
        Orders.insertAdjacentHTML('beforeend', renderData);
        //
      });
    })
    .catch(function (error) {
      console.log("errrr", error);
    });
};
