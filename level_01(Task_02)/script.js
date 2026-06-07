

const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {

    const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

    colorBtn.style.backgroundColor = randomColor;
});

function showGreeting() {

    let hour = new Date().getHours();
    let message = "";

    if (hour < 12) {
        message = "Good Morning ☀️";
    }
    else if (hour < 18) {
        message = "Good Afternoon 🌤️";
    }
    else {
        message = "Good Evening 🌙";
    }

    alert(message);
}



function calculate() {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {
        alert("Please enter both numbers");
        return;
    }

    let sum = Number(num1) + Number(num2);

    document.getElementById("result").innerHTML =
        "Result = " + sum;
}