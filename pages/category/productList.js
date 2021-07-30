import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from '../../Redux/subReducers/category';
import ProductTile from './productTile';

function categoryPage(props) {
	const [productList, setProductList] = useState([]);
	useEffect(() => {
		try {
			props.loadCategory();
			setProductList(props.category.productList);
		} catch (error) {
			console.error('Error:', error);
		}
	}, []);

	return (
		<>
			<h1>Category Name</h1>
			{productList.map((product) => (
				<ProductTile />
			))}
		</>
	);
}

const mapState = (state) => ({
	category: state.category,
	// productList: state.productList,
});

const mapDispatch = (dispatch) => ({
	loadCategory: () => dispatch(fetchCategory()),
});

export default connect(mapState, mapDispatch)(categoryPage);
