import React from 'react';
import { useRouter } from 'next/router';

import useSWR from 'swr';

import Comment from '../components/Comment';

const item = () => {
	const router = useRouter();
	const fetcher = (url) => fetch(url).then((res) => res.json());

	const { data, error } = useSWR(
		`https://hacker-news.firebaseio.com/v0/item/${router.query.id}.json?print=pretty`,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <></>;
	const { kids } = data;

	return (
		<div>
			{kids
				.filter((comment) => (comment.data === null ? false : true))
				.map((comment) => {
					return <Comment comment={comment} key={comment} />;
				})}
		</div>
	);
};

export default item;
