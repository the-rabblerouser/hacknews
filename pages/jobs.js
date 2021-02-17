import { Container } from 'reactstrap';

import styles from '../styles/Home.module.css';

import Navbar from '../components/Navbar';
import List from '../components/List';

const Jobs = () => {
	return (
		<>
			<div className={styles.container}>
				<main className={styles.main}>
					<Navbar />
					<Container>
						<List type="job" />
					</Container>
				</main>
			</div>
		</>
	);
};

export default Jobs;
