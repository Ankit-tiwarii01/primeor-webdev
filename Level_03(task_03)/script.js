const applyBtn = document.querySelector(".primary");
const learnBtn = document.querySelector(".secondary");

applyBtn.addEventListener("click", function (e) {
    e.preventDefault();

    alert("Thank you for your interest in the Primeor Solutions Internship Program!");
});

learnBtn.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(".highlights").scrollIntoView({
        behavior: "smooth"
    });
});