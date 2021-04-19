import React from 'react';
import { useRouter } from 'next/router';

import useSWR from 'swr';

const item = () => {
	const router = useRouter();
	const fetcher = (url) => fetch(url).then((res) => res.json());

	const { data, error } = useSWR(
		`https://hacker-news.firebaseio.com/v0/item/${router.query.id}.json?print=pretty`,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <></>;

	console.log(data);
	const { kids } = data;

	return <div>Hello</div>;
};

export default item;
