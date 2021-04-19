import { Container } from 'reactstrap';
import useSWR from 'swr';

import List from '../components/List';

const Home = () => {
	const fetcher = (url) => fetch(url).then((res) => res.json());

	const { data, error } = useSWR(
		`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	return (
		<>
			<Container>
				<List items={data.slice(0, 30)} />
			</Container>
		</>
	);
};

export default Home;
