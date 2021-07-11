import { Container } from 'reactstrap';
import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

import { DataProps } from '../types/interfaces';

import ListItem from '../components/ListItem';

const Ask = () => {
	const { data, error }: DataProps = useSWR(
		`https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div></div>;

	const items: number[] = data.slice(0, 30);

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

export default Ask;
