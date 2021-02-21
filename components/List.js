import React from 'react';
import Link from 'next/link';

import {
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText,
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
	return (
		<>
			<ListGroup className="mt-2">
				{stories
					.filter((str) => (str.data === null ? false : true))
					.map(({ data: { by, title, url, score, time, descendants, id } }) => {
						return (
							<div key={uuidv4()}>
								<ListGroupItem
									className="ps-5"
									style={{ backgroundColor: '#F6F6EF' }}>
									<ListGroupItemHeading>
										<a href={url} style={{ color: 'inherit' }}>
											{title}
										</a>
									</ListGroupItemHeading>
									<ListGroupItemText className="text-muted">
										{score} points by{' '}
										<span>
											<Link href={{ pathname: '/user', query: { name: by } }}>
												<a style={{ color: 'inherit' }}>{by}</a>
											</Link>
										</span>{' '}
										{timeAgo(time)} |{' '}
										<span>
											<Link href={`/${type}/[$id]`} as={`/${type}/${id}`}>
												<a style={{ color: 'inherit' }}>
													{descendants} comments
												</a>
											</Link>
										</span>
									</ListGroupItemText>
								</ListGroupItem>
							</div>
						);
					})}
			</ListGroup>
		</>
	);
};

export default List;
