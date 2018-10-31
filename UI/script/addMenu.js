function addMenu() {


    const name = document.getElementById("food_name").value;
    const description = document.getElementById("food_desc").value;
    const price = document.getElementById("food_price").value;


    const details = { name, description, price };
    console.log(details);
    const url = "http://localhost:5000/api/v2/menu";
    let token = localStorage.getItem("token");

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "food_name": `${name}`,
            "food_desc": `${description}`,
            "food_price": `${price}`,

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

            if (message === "enter valid food name") {
                document.querySelector(".facts").innerHTML = "enter valid food name:";
                document.querySelector(".facts").style.color = "red";

            }

            if (message === "enter valid food description") {
                document.querySelector(".facts").innerHTML = "enter valid food description:";
                document.querySelector(".facts").style.color = "red";

            }
            if (message === "food created sucessfully") {
                document.querySelector("#message").innerHTML = "food created sucessfully:";
                document.querySelector("#message").style.color = "green";
            }

        })
        .catch(function (error) {
            console.log("errrr", error);
        });
}