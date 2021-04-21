import { Container } from 'reactstrap';
import useSWR from 'swr';

import ListItem from '../components/ListItem';

const News = () => {
	const fetcher = (url) => fetch(url).then((res) => res.json());

	const { data, error } = useSWR(
		`https://hacker-news.firebaseio.com/v0/newsstories.json?print=pretty`,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

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

export default News;
