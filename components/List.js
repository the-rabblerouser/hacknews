import React from 'react';

import {
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText,
	Button,
} from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

import useDataFetcher from '../components/hooks/useDataFetcher';
import timeAgo from '../utils/timeAgo';

const List = () => {
	const type = 'top';
	const { isLoading, stories } = useDataFetcher(type);

	if (isLoading) {
		return <p>Loading...</p>;
	}
	return (
		<>
			<ListGroup className="mt-2">
				{stories.map(
					({ data: { by, title, url, score, time, descendants } }) => {
						return (
							<div key={uuidv4()}>
								<ListGroupItem className="ps-5">
									<ListGroupItemHeading>
										<a href={url}>{title}</a>
									</ListGroupItemHeading>
									<ListGroupItemText className="text-muted">
										{score} points by {by} {timeAgo(time)} | {descendants}{' '}
										comments
									</ListGroupItemText>
								</ListGroupItem>
							</div>
						);
					}
				)}
			</ListGroup>
			<Button className="mt-2 mb-2">More</Button>
		</>
	);
};

export default List;
