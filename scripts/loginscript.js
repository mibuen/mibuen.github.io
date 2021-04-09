const userData = document.querySelector('form');
const btn = document.getElementById('login');
const alertMsg = document.getElementById('msgdisplay');

userData.addEventListener('submit', (e) => {
	e.preventDefault();
});

const baseUrl = 'https://jwtparts.herokuapp.com';
// const { userId, password } = userData;

btn.addEventListener('click', async () => {
	localStorage.removeItem('llave');
	const userId = userData.userId.value;
	const password = userData.password.value;
	const postOptions = {
		method: 'POST',
		//credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ userId, password }),
	};
	try {
		const response = await fetch(`${baseUrl}/login`, postOptions);
		if (!response.ok) {
			console.log(await response);
			//alertMsg.innerHTML = 'Wrong Credentials';
			M.toast({
				html: 'Wrong Credentials',
				classes: 'rounded indigo',
				displayLength: 2000,
			});
			return;
		}
		const data = await response.json();
		const llave = data.msg;
		localStorage.setItem('llave', llave);
		window.location = 'mainpage.html';
	} catch (error) {
		console.log(error);
	}
});
