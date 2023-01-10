const loginBtn = document.getElementById("loginBtn");
const loginTitle = document.getElementById("loginTitle");
const loginStatus = localStorage.getItem("loginStatus");
const forgotPassword = document.getElementById("forgotPassword");

/*i ovanstående använder vi inloggningsfunktionerna, och nu förbereder vi koden som om användarnamnet och lösenordet är korrekt ger välkomstmeddelandet.*/
function checkLoginStatus() {
    if (loginStatus == "true") {
        hideHTMLTag("username");
        hideHTMLTag("password");
        hideHTMLTag("forgotPassword");

        loginBtn.innerHTML = "Logga ut";
        loginTitle.innerHTML = "Välkommen,du är nu inloggad!";
    }
}
/*för att byta mellan användarnamn och lösenordsfält till välkomst- eller felmeddelanden.*/
function hideHTMLTag(id) {
    document.getElementById(id).style.display = "none";
}
/*Användaren loggar in data som sparats i LocalStorage, och om loggning info är fel ger felmeddelandet*/
checkLoginStatus();

loginBtn.onclick = function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (loginStatus == "true") {
        localStorage.setItem("loginStatus", false);

        localStorage.removeItem("username");

        location.reload();
    } 
    else if (username == "Sara" && password == "qwe123") {
        localStorage.setItem("loginStatus", true);

        localStorage.setItem("username", username);

        location.reload();
    } 
    else {
        alert("Inloggning fel");
    }
};
