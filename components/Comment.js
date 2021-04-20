import React from 'react';

import useSWR from 'swr';

const Comment = ({ comment }) => {
	const fetcher = (url) => fetch(url).then((res) => res.json());

	const { data, error } = useSWR(
		`https://hacker-news.firebaseio.com/v0/item/${comment}.json?print=pretty`,
		fetcher
	);
	console.log(data);

	if (error) return <div>failed to load</div>;
	if (!data) return <>no data </>;
	const { by, text } = data;
	return <div>{by}</div>;
};

export default Comment;
