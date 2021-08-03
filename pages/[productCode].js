import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { setProduct } from '../Redux/subReducers/product';
import styles from '../styles/productPage.module.css';
import Image from 'next/image';

function ProductPage(props) {
	const [products, setProducts] = useState([]);
	const [currentColor, setcurrentColor] = useState('');
	const [productDescription, setProductDescription] = useState('');
	const [listPrice, setListPrice] = useState({});
	const [colors, setColors] = useState([]);
	const [showColors, setShowColors] = useState(true);
	const router = useRouter();
	const { productCode } = router.query;
	useEffect(() => {
		try {
			props.loadProduct(productCode);
			if (
				products.length < 1 ||
				props.product.length < 1 ||
				products[0].productCode !== productCode
			) {
				setProducts(props.product);
				setcurrentColor(props.product[0].defaultColorCode);
				setProductDescription(props.product[0].productDescription);
				setListPrice(props.product[0].listPrice);
				setColors(props.product[0].colors);
				setShowColors(props.product[0]['show-all-colors']);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}, [products]);
	const updateColor = (color) => {
		setcurrentColor(color.colorCode);
	};
	/*
	Comment about color-swatches: 
	Single product page only shows other color swatches if 'show-all-colors' in json is true. 
	If this is incorrect, I can take ternary operation out.
	*/
	return (
		<div className={styles.product_page}>
			<div className={styles.product_container}>
				<Image
					src={`https://www.jcrew.com/s7-img-facade/${productCode}_${currentColor}`}
					alt='Photo of product'
					height='743px'
					width='500px'
				/>
				<div className={styles.product_info}>
					<div className={styles.swatches}>
						{showColors ? (
							colors.map((color) => (
								<div key={color.colorCode} className={styles.swatch}>
									<Image
										onClick={() => updateColor(color)}
										src={`https://www.jcrew.com/s7-img-facade/${productCode}_${color.colorCode}_sw`}
										alt='color swatch'
										height='40px'
										width='40px'
									/>
								</div>
							))
						) : (
							<div className={styles.swatches}>
								<Image
									className={styles.swatch}
									src={`https://www.jcrew.com/s7-img-facade/${productCode}_${currentColor}_sw`}
									alt='color swatch'
									height='40px'
									width='40px'
								/>
							</div>
						)}
					</div>
					<h3>{productDescription}</h3>
					<span>{listPrice.formatted}</span>
				</div>
			</div>
		</div>
	);
}

const mapState = (state) => ({
	product: state.product,
});

const mapDispatch = (dispatch) => ({
	loadProduct: (code) => dispatch(setProduct(code)),
});

export default connect(mapState, mapDispatch)(productPage);
