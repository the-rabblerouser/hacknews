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
	const { by, time, text, kids } = data;
	return (
		<>
			<div>
				{by} said: {time}
			</div>
			<div style={{ marginBottom: '2rem' }}>{text}</div>

			{kids &&
				kids.map((kid) => (
					<Comment comment={kid} key={kid} style={{ marginLeft: '3rem' }} />
				))}
		</>
	);
};

export default Comment;
