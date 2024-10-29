// Define os usuários e senhas em JSON
const users = [
    { username: "leonardo", password: "ts@123!" },
    { username: "robson", password: "ts@123!" },
    { username: "priscila", password: "ts@123!" }
];


document.getElementById("loginForm").addEventListener("submit", login);

function login(event) {
    event.preventDefault(); 

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    const user = users.find(user => user.username === usernameInput && user.password === passwordInput);

    const messageElement = document.getElementById("message");
    if (user) {
        messageElement.style.color = "green";
        messageElement.textContent = "Login bem-sucedido! Redirecionando...";
        setTimeout(() => {
            window.location.href = "gerenciador.html";
        }, 2000);
    } else {
        messageElement.style.color = "red";
        messageElement.textContent = "Usuário ou senha incorretos.";
    }
}
