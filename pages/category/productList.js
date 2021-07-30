import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from '../../Redux/subReducers/category';
import ProductTile from './productTile';

function categoryPage(props) {
	useEffect(() => {
		try {
			props.loadCategory();
			console.log('category', props.category);
		} catch (error) {
			console.error('Error:', error);
		}
	});

	return (
		<>
			<h1>Category Name</h1>
			{/* {exampleArray.map((product) => (
				<ProductTile />
			))} */}
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
