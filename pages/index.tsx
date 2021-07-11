import { Container } from 'reactstrap';
import useSWR from 'swr';

import ListItem from '../components/ListItem';

import { fetcher } from '../utils/fetcher';

const Home = () => {
	const { data, error } = useSWR<number[], undefined>(
		`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div></div>;

	const items = data.slice(0, 30);

	return (
		<>
			<Container>
				{items.map((item) => {
					return <ListItem item={item} key={item} />;
				})}
			</Container>
		</>
	);
};

export default Home;
