const user = document.querySelector("#user");
const pass = document.querySelector("#password");
const message = document.querySelector(".message");

const data = {
	user: "Uberaupe",
	pass: "Uberaupe33343900",
};

const openPage = () => {
	if (user.value === data.user && pass.value === data.pass) {
		window.location.href = "../pages/garantia.html";
	} else {
		message.innerHTML = "Nome do usuario ou senha incorreto. Tente novamente.";
	}
};
