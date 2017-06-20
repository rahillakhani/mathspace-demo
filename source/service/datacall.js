import axios from 'axios';

const serviceCall = () => {
	axios.get('/data')
	.then((resp) => {
		return resp.data;
	})
	.catch(err => err.data);
};
export default serviceCall;