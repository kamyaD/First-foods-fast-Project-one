
window.onload = function () {
  function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById("menu");
  const url = "http://localhost:5000/api/v2/menu";

  fetch(url)
    .then(resp => resp.json())
    .then(function (data) {
      console.log("dat", data);
      let menu = data.menu;
      console.log(menu)

      menu.map(function (current) {
        let tr = createNode("tr"),
          td = createNode("tr");
        let menu = document.querySelector(".facts1");
        console.log(menu)
        //   td.innerHTML = `<table><tr><td>${menu.id}</td><td> ${menu.name} </td><td>${menu.description}</td><td> ${
        //     menu.price
        //     }</td></tr></table>`;
        //   append(tr, td);
        //   append(ul, tr+);
        let renderData = `
        <tr id="menu">
        <td>${current.id}</td>
        <td>${current.name}</td>
        <td>${current.description}</td>
        <td>${current.price}</td>
        
        

        `;
        menu.insertAdjacentHTML('beforeend', renderData);
      });
    })
    .catch(function (error) {
      console.log("errrr", error);
    });
};

// fetch("http://127.0.0.1:5000/api/v2/orders", {
//   method: "POST",
//   // body: JSON.stringify({
//   //   client_adress: adress
//   // }),
//   mode: "cors",
//   crossdomain: true,
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//     Authorization: "Bearer " + token
//   }
// })
//   .then(response => response.json())
//   .then(data => {});
