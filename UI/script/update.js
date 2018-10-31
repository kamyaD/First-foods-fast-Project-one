window.onload = function () {
    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }

    const ul = document.getElementById("orders");
    const id = localStorage.getItem('id');
    const url = `http://localhost:5000/api/v2/orders/${id}`;
    let token = localStorage.getItem("token");

    fetch(url, {
        headers: {
            "Access-Control-Request-Headers": "*",
            "content-type": "application/json",
            'Authorization': 'Bearer ' + token
        }

    })
        .then(resp => resp.json())
        .then(function (data) {
            console.log("dat", data);
            let order = data.order;
            let tr = createNode("tr"),
                td = createNode("tr");

            td.innerHTML = `<tr><td>${order.date}</td><td> ${order.id} </td><td>${order.name}</td><td> ${
                order.orderd_by
                }</td><td>${order.status}</td></tr>`;
            append(tr, td);
            append(ul, tr);

        })
        .catch(function (error) {
            console.log("errrr", error);
        });

    window.update = function () {
        const status = document.getElementById("status").value;
        fetch(url, {
            method: "PUT",
            headers: {
                "Access-Control-Request-Headers": "*",
                "content-type": "application/json",
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                "status": `${status}`,

            }),

        })
            .then(resp => resp.json())
            .then(function (data) {
                console.log("dat", data);

            })
            .catch(function (error) {
                console.log("errrr", error);
            });
    }
};