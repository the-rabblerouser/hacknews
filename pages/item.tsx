import React from 'react';
import { useRouter } from 'next/router';
import { fetcher } from '../utils/fetcher';

import { ItemProps } from '../types/interfaces';

import useSWR from 'swr';

import Comment from '../components/Comment';

const item = () => {
	const router = useRouter();

	const { data, error } = useSWR<ItemProps, undefined>(
		`https://hacker-news.firebaseio.com/v0/item/${router.query.id}.json?print=pretty`,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <></>;

	const { kids } = data;

	return (
		<div>
			{kids?.map((comment) => {
				return <Comment comment={comment} key={comment} />;
			})}
		</div>
	);
};

export default item;
