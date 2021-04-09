const apiUrl = 'https://jwtparts.herokuapp.com/parts';

const fetchOptions = () => {
	const llave = localStorage.getItem('llave');
	const h = new Headers();
	h.append('authorization', `Bearer ${llave}`);
	return new Request(`${apiUrl}`, {
		headers: h,
		method: 'GET',
		// credentials: 'same-origin',
	});
};

const fetchAllParts = async () => {
	try {
		const options = fetchOptions();
		const response = await fetch(options);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};
export { fetchAllParts };
