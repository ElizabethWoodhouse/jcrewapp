const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';

export const getProductList = (productList) => ({
	type: GET_PRODUCT_LIST,
	productList,
});

export default function productList(state = {}, { type, productList }) {
	switch (type) {
		case GET_PRODUCT_LIST:
			return productList;
		default:
			return state;
	}
}
