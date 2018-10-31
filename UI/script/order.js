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

      return menu.map(function (menu) {
        let li = createNode("li"),
          span = createNode("span");

        span.innerHTML = `<table><tr><td>${menu.id}</td><td> ${menu.name} </td><td>${menu.description}</td><td> ${
          menu.price
          }</td></tr></table>`;
        append(li, span);
        append(ul, li);
      });
    })
    .catch(function (error) {
      console.log("errrr", error);
    });
};