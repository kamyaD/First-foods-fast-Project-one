window.onload = function () {
    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }

    window.orderId = function (id) {
        localStorage.setItem('id', id)
        window.location.href = "orderStatus.html"
    }
    console.log(window);
    const ul = document.getElementById("orders");
    const url = "http://localhost:5000/api/v2/orders";
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
            let order = data.orders;

            order.map(function (current) {
                let tr = createNode("tr"),
                    td = createNode("tr");
                let Orders = document.querySelector(".facts1");

                let renderData = `
        <tr id="Orders">
              <td>${current.id}</td>
              <td>${current.date}</td>
              <td>${current.name}</td>
              <td>${current.orderd_by}</td>
              <td><a href="#" onclick=orderId(${current.id})> ${current.status} </a></td>
            </tr>
        `;

                Orders.insertAdjacentHTML('beforeend', renderData);
                //
            });
        })
        .catch(function (error) {
            console.log("errrr", error);
        });

};
