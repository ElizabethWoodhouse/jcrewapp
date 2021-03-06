import axios from 'axios';
import { getProductList } from './productList';

const GET_CATEGORY = 'GET_CATEGORY';

const getCategory = (category) => ({
	type: GET_CATEGORY,
	category,
});

export const fetchCategory = () => async (dispatch) => {
	try {
		const { data: category } = await axios.get('http://localhost:8000');
		dispatch(getCategory(category.categoryHeader));
		dispatch(getProductList(category.productList));
	} catch (error) {
		console.error('Error:', error);
	}
};

export default function category(state = {}, { type, category }) {
	switch (type) {
		case GET_CATEGORY:
			return category;
		default:
			return state;
	}
}
