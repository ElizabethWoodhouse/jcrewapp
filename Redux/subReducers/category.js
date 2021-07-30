import axios from 'axios';

const GET_CATEGORY = 'GET_CATEGORY';

const getCategory = (category) => ({
	type: category,
	payload: category,
});

export const fetchCategory = () => (dispatch) => {
	// try {
	// 	const { data: category } = await axios.get('http://localhost:8000');
	// 	console.log('FETCH', category);
	// 	dispatch(getCategory(category));
	// } catch (error) {
	// 	console.error('Error:', error);
	// }
	fetch('http://localhost:8000')
		.then((response) => response.json())
		.catch((error) => console.log('Error:', error))
		.then((response) => console.log('Success:', JSON.stringify(response)));
};

export default function Category(state = {}, { type, payload }) {
	switch (type) {
		case GET_CATEGORY:
			return payload.category;
		default:
			return state;
	}
}
