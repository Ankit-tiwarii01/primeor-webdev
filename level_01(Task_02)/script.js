const btn = document.getElementById("btn");

btn.addEventListener("click", function(){

    const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

    btn.style.backgroundColor = randomColor;
});