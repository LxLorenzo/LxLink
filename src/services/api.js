import axios from "axios";

export const key = "5c852c40f2c832cd6e10fdd48e299859ab338ba9";

const api = axios.create({
	baseURL: "https://api-ssl.bitly.com/v4",
	headers: {
		Authorization: `Bearer ${key}`,
	},
});

export default api;
