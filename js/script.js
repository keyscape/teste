/*
	Sério que você chegou até aqui!?

	Se você quiser aprender como não construir um código,
	é só dar uma olhada aqui em baixo.

	Fiz tudo só pra funcionar estaticamente, 
	não para ser bom, tá tudo uma porcaria..

	Pra eu saber que você viu isso, da próxima vez que
	me encontrar, me fala que "o número 1 não é primo"..

	Tchaaau.. :)
*/

document.getElementById('show-pwd').addEventListener('mousedown', () => {
	document.getElementById('pwd').type = 'text';
	document.getElementById("eye").classList.add('d-none');
	document.getElementById("eye-slash").classList.remove('d-none');
});

document.getElementById('show-pwd').addEventListener('mouseup', () => {
	document.getElementById('pwd').type = 'password';
	document.getElementById("eye").classList.remove('d-none');
	document.getElementById("eye-slash").classList.add('d-none');
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('show-pwd').addEventListener('mousemove', () => {
	document.getElementById('pwd').type = 'password';
	document.getElementById("eye").classList.remove('d-none');
	document.getElementById("eye-slash").classList.add('d-none');
});

var pwdDefault = 'senha',
	attemptsDefault = 3,
	timeDefault = 10;

var attempts = attemptsDefault,
	time = timeDefault;

document.getElementById('attempts').innerHTML = attempts;

function attemptsLogin(){
	if(document.getElementById('pwd').value == pwdDefault){
		document.getElementById('pageMain').classList.remove("d-none");
		document.getElementById('pageLogin').classList.add("d-none");
	}

	else{
		attempts--;

		document.getElementById('attempts').innerHTML = attempts;		

		if(attempts == 0){
			document.getElementById("pwd").disabled = true;
			document.getElementById("login").disabled = true;
			intervalTime();
		}
	}
}

function intervalTime(){
	document.getElementById('time').classList.remove("d-none"); 

	var intervalTime = setInterval(function(){ 
		time--;	

		document.getElementById('time').innerHTML = time; 

		if(time == 0){
			attempts = attemptsDefault;
			time = timeDefault;

			document.getElementById("pwd").disabled = false;
			document.getElementById("login").disabled = false;

			document.getElementById('attempts').innerHTML = attempts;
			document.getElementById('time').innerHTML = timeDefault; 
			document.getElementById('time').classList.add("d-none"); 

			clearInterval(intervalTime);
		}
	}, 1000);
}

/*
var reloadStatus = false;

if(document.getElementById("attempts").innerText == 0){

	var thatInterval = setInterval(() => {
		var xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = () => {
			
			if(xhttp.readyState == 4 && xhttp.status == 200){

				if(xhttp.responseText != "0" && !reloadStatus){
					document.getElementById("time").innerHTML = "Suas tentativas acabaram!<br>Espere " + xhttp.responseText + " segundos para tentar novamente.";
					document.getElementById("time").className = "";
				}

				else{
					document.getElementById("time").innerHTML = "Recarregue a página";
					//clearInterval(thatInterval);
					document.location.reload(true);
				}
			}
		};

		xhttp.open("GET", "/attempt", true);
		xhttp.send();

	}, 1000);
}


app.get("/", (req, res) => {

	if(req.session.login){
		res.redirect('/main');
	}

	else{
		if(!req.session.attempts && req.session.attempts != 0)
			req.session.attempts = attempts;

		if(req.session.attempts != 0)
			res.render("login", {result: req.session.attempts}); //Passar o valor da sessão attempts

		else{
			res.render("login", {result: req.session.attempts, disabled: "disabled"}); //Passar o valor da sessão attempts e deixar os componentes input e button inválidos..
		}
	}

});
*/