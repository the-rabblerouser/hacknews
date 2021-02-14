import Head from 'next/head';

import Navbar from '../components/Navbar';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Hacker News</title>
				<link rel="icon" href="/y18.png" />
			</Head>
			<main className={styles.main}>
				<Navbar />
			</main>
		</div>
	);
}
