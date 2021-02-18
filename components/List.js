import React from 'react';

import {
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText,
	Button,
	Spinner,
} from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

import styles from '../styles/list.module.css';

import useDataFetcher from '../components/hooks/useDataFetcher';
import timeAgo from '../utils/timeAgo';

const List = ({ type }) => {
	const { isLoading, stories } = useDataFetcher(type);

	if (isLoading) {
		return (
			<div className={styles.spinner}>
				<Spinner children="" />
			</div>
		);
	}

	console.log(stories);
	return (
		<>
			<ListGroup className="mt-2">
				{stories
					.filter((str) => (str.data === null ? false : true))
					.map(({ data: { by, title, url, score, time, descendants } }) => {
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
					})}
			</ListGroup>
			<Button className="mt-2 mb-2">More</Button>
		</>
	);
};

export default List;
