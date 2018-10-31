function mkOrder() {


    const name = document.getElementById("order_name").value;
    const customer = document.getElementById("customer_name").value;


    const details = { name, customer };
    console.log(details);
    const url = "http://localhost:5000/api/v2/orders";
    let token = localStorage.getItem("token");

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "order": `${name}`,
            "customer": `${customer}`,

        }),
        headers: {
            "Access-Control-Request-Headers": "*",
            "content-type": "application/json",
            'Authorization': 'Bearer ' + token

        },

    })
        .then(resp => resp.json())
        .then(function (data) {

            let message = data.message


            console.log(message)

            if (message === "enter valid order name") {
                document.querySelector(".facts").innerHTML = "enter valid order name:";
                document.querySelector(".facts").style.color = "red";

            }

            if (message === "enter valid customer Name ") {
                document.querySelector(".facts").innerHTML = "enter valid customer Name :";
                document.querySelector(".facts").style.color = "red";

            }
            if (message === "order place sucessfully") {
                document.querySelector("#message").innerHTML = "order place sucessfully:";
                document.querySelector("#message").style.color = "green";
            }



        })
        .catch(function (error) {
            console.log("errrr", error);
            message = document.getElementById("message");
            message.innerHTML += data.message
        });
}