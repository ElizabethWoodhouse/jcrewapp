import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from '../../styles/productList.module.css';
import { fetchCategory } from '../../Redux/subReducers/category';
import { compressList } from './compressProductList';
import ProductTile from './productTile';

function productListPage(props) {
	const [productList, setProductList] = useState([]);
	const [header, setHeader] = useState('');
	useEffect(() => {
		try {
			if (productList.length < 1) {
				props.loadCategory();
				let compressedList = compressList(props.productList);
				setProductList(compressedList);
				setHeader(props.category.seo_h1);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}, [productList, header]);
	return (
		<>
			<h1 className={styles.title}>{header}</h1>
			<div className={styles.product_tiles}>
				{productList.map((product) => (
					<ProductTile key={product.productId} product={product} />
				))}
			</div>
		</>
	);
}


const mapState = (state) => ({
	category: state.category,
	productList: state.productList,
});

const mapDispatch = (dispatch) => ({
	loadCategory: () => dispatch(fetchCategory()),
});

export default connect(mapState, mapDispatch)(productListPage);
