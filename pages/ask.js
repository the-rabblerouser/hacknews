import { Container } from 'reactstrap';

import styles from '../styles/Home.module.css';

import Navbar from '../components/Navbar';
import List from '../components/List';

const Ask = () => {
	return (
		<>
			<div className={styles.container}>
				<main className={styles.main}>
					<Navbar />
					<Container>
						<List type="ask" />
					</Container>
				</main>
			</div>
		</>
	);
};

export default Ask;
