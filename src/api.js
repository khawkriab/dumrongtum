// export const path = "http://172.16.63.129:3103/api/v1"
export const path = 'http://172.16.63.129:3103/api/v1';
// const path = "http://10.51.96.23:3102/api/v1"

function response(json) {
	return json.success ? Promise.resolve(json.result) : Promise.reject(json.message);
}

export const post = (url, data, formData) =>
	fetch(path + url, {
		method: 'POST',
		headers: 
		formData? {}
		:{
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: formData ? data : JSON.stringify(data)
	})
		.then((res) => res.json())
		.then(response);

export const get = (url) =>
	fetch(path + url, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})
		.then((res) => res.json())
		.then(response);
