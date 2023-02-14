document.getElementById("btn-submit").addEventListener("click", function () {
    const userEmail = document.getElementById("user-email");
    const email = userEmail.value;

    const userPass = document.getElementById("user-pass");
    const pass = userPass.value;
    if (email === "sujan@gmail.com" && pass === "sujan1234") {
        location.href = "bank-practice.html";
    } else {
        alert("Wrong information . PLease provide Your valid information.");
    }
});
