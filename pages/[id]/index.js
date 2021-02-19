import React from 'react';

import { useRouter } from 'next/router';

import { Container } from 'reactstrap';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const index = () => {
	const router = useRouter();
	console.log(router.query.id);

	const { data, error } = useSWR(
		`https://hacker-news.firebaseio.com/v0/user/${router.query.id}.json?print=pretty`,
		fetcher
	);

	console.log(data);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	return (
		<>
			<Container>
				<div className="mt-3">user: {data.id}</div>
				<div>created: {data.created}</div>
				<div>karma: {data.karma}</div>
				<div>about: {html_entity_decode(data.about)}</div>
				{/* <div>user: {data.submitted}</div> */}
			</Container>
		</>
	);
};

export default index;
