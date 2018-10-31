

function register() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    const details = { name, email, password };
    console.log(details);
    const url = "http://localhost:5000/api/v2/user";

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "name": `${name}`,
            "email": `${email}`,
            "password": `${password}`
        }),
        headers: {
            "Access-Control-Request-Headers": "*",
            "content-type": "application/json",

        },
    })
        .then(resp => resp.json())
        .then(function (data) {


            let message = data.message

            console.log(message)

            if (message === "enter valid username") {
                document.querySelector(".facts").innerHTML = "Enter valid name:";
                document.querySelector(".facts").style.color = "red";

            }

            if (message === "enter valid email") {
                document.querySelector(".facts").innerHTML = "enter valid email:";
                document.querySelector(".facts").style.color = "red";

            }

            if (message === "enter valid password") {
                document.querySelector(".facts").innerHTML = "enter valid password:";
                document.querySelector(".facts").style.color = "red";

            }

            if (message === "user already exists") {
                document.querySelector(".facts").innerHTML = `user ${name} already exists:`;
                document.querySelector(".facts").style.color = "red";

            }

            if (message === "registration successful") {
                document.querySelector(".facts").innerHTML = "registration successful:";
                document.querySelector(".facts").style.color = "green";


                setTimeout(() => {
                    redirect: window.location.replace("login.html")

                }, 3000)

            }
        })
        .catch(function (error) {
            console.log("errrr", error);
        });
}