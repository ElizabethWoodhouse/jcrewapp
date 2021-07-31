/*
Function Purpose:
 filter out duplicate productIds (non-main colors)

Additional considerations:
	default sort seems to be by priority
	I could sort here if we wanted to sort products in a different way
*/
export const compressList = (list) => {
	let products = [];
	let productIdSeen = {};
	//O(n^2), need to refactor to make more efficient
	for (let i = 0; i < list.length; i++) {
		for (let j = 0; j < list[i].products.length; j++) {
			let product = list[i].products[j];
			if (!productIdSeen[product.productId]) {
				productIdSeen[product.productId] = true;
				products.push(product);
			}
		}
	}
	return products;
};
