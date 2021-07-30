import axios from 'axios';

const GET_CATEGORY = 'GET_CATEGORY';

const getCategory = (category) => ({
	type: GET_CATEGORY,
	category,
});

export const fetchCategory = () => async (dispatch) => {
	try {
		const { data: category } = await axios.get('http://localhost:8000');
		dispatch(getCategory(category));
	} catch (error) {
		console.error('Error:', error);
	}
};

export default function Category(state = {}, { type, category }) {
	switch (type) {
		case GET_CATEGORY:
			return category;
		default:
			return state;
	}
}
