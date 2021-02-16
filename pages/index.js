import Head from 'next/head';
import Link from 'next/link';

import {
	Container,
	Button,
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText,
} from 'reactstrap';

import styles from '../styles/Home.module.css';

import Navbar from '../components/Navbar';
import useDataFetcher from '../components/hooks/useDataFetcher';
import timeAgo from '../utils/timeAgo';

const Home = () => {
	const type = 'top';
	const { isLoading, stories } = useDataFetcher(type);

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
						{isLoading ? (
							<p>Loading...</p>
						) : (
							<ListGroup className="mt-2">
								{stories.map(
									({
										data: { id, by, title, url, score, time, descendants },
									}) => {
										return (
											<>
												<ListGroupItem key={id} className="ps-5">
													<ListGroupItemHeading>
														<a href={url}>{title}</a>
													</ListGroupItemHeading>
													<ListGroupItemText className="text-muted">
														{score} points by {by} {timeAgo(time)} |{' '}
														{descendants} comments
													</ListGroupItemText>
												</ListGroupItem>
											</>
										);
									}
								)}
							</ListGroup>
						)}
						<Button className="mt-2 mb-2">More</Button>
					</Container>
				</main>
			</div>
		</>
	);
};

export default Home;
