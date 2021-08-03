const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';

const setCurrentProduct = (product) => ({
	type: SET_CURRENT_PRODUCT,
	product,
});

export const setProduct = (code) => (dispatch, getState) => {
	try {
		const { productList } = getState();
		let product;
		for (let i = 0; i < productList.length; i++) {
			product = productList[i].products.filter((el) => {
				return el.productCode === code;
			});
		}
		console.log(product, 'PRODUCT');
		dispatch(setCurrentProduct(product));
	} catch (error) {
		console.error('Error', error);
	}
};

export default function currentProduct(state = [], { type, product }) {
	switch (type) {
		case SET_CURRENT_PRODUCT:
			return product;
		default:
			return state;
	}
}
