import axios from 'axios'

export const API = axios.create({
	baseURL: 'http://localhost:5000',
	headers: {
		AccessControlAllowOrigin: true
	}
})

export default API
