export const apiReq = async (path, payload) => {
	try {
		const res = await fetch(process.env.REACT_APP_PROD_URL + path, payload);

		return await res.json();
	} catch (error) {
		console.log(error);
	}
};
