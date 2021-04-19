import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import useSWR from 'swr';

import {
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText,
} from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

import timeAgo from '../utils/timeAgo';

import styles from '../styles/list.module.css';

const ListItem = ({ item }) => {
	const fetcher = (url) => fetch(url).then((res) => res.json());

	const { data, error } = useSWR(
		`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <></>;

	const { by, title, url, score, time, descendants, id } = data;
	console.log(data);
	return (
		<>
			<ListGroup>
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
								<Link
									href={{
										pathname: '/item',
										query: { name: `${id}` },
									}}>
									<a style={{ color: 'inherit' }}>{descendants} comments</a>
								</Link>
							</span>
						</ListGroupItemText>
					</ListGroupItem>
				</div>
			</ListGroup>
		</>
	);
};

export default ListItem;
