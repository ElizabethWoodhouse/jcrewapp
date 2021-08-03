/*
Function Purpose:
 filter out duplicate productIds (non-main colors)

Additional considerations:
	Default sort seems to be by priority
	In the future I could sort use this function to sort products in a different way
*/
export const compressList = (list) => {
	let products = [];
	let productIdSeen = {};
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
