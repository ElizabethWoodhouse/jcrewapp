import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ProductList from '../component/category/productList';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>J.Crew App</title>
				<meta name='description' content='product information' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<ProductList />
			</main>

			<footer className={styles.footer}>
				<p>J.Crew Front-End Assessment</p>
			</footer>
		</div>
	);
}
