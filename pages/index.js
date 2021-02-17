import Head from 'next/head';

import { Container } from 'reactstrap';

import styles from '../styles/Home.module.css';

import Navbar from '../components/Navbar';
import List from '../components/List';

const Home = () => {
	return (
		<>
			<div className={styles.container}>
				<Head>
					<title>Hacker News</title>
					<link rel="icon" href="/y18.png" />
				</Head>
				<main className={styles.main}>
					<Navbar />
					<Container>
						<List />
					</Container>
				</main>
			</div>
		</>
	);
};

export default Home;
