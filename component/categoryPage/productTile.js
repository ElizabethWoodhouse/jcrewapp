import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/productList.module.css';

export default function categoryPage(props) {
	let { productDescription, listPrice, productCode, defaultColorCode } =
		props.product;
	return (
		<Link href={`/${productCode}`}>
			<div className={styles.product_tile}>
				<div>
					<Image
						src={`https://www.jcrew.com/s7-img-facade/${productCode}_${defaultColorCode}`}
						alt='Photo of product'
						height='435px'
						width='435px'
					/>
				</div>
				<h3 className={styles.product_name}>{productDescription}</h3>
				<span className={styles.price}>{listPrice.formatted}</span>
			</div>
		</Link>
	);
}
