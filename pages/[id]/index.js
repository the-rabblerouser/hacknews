import React from 'react';

import { useRouter } from 'next/router';

import { Container } from 'reactstrap';
import useSWR from 'swr';
import Parser from 'html-react-parser';

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
				<table>
					<tbody>
						<tr>
							<td>user:</td>
							<td>{data.id}</td>
						</tr>
						<tr>
							<td>created: </td>
							<td>{data.created}</td>
						</tr>
						<tr>
							<td>karma:</td>
							<td>{data.karma}</td>
						</tr>
						<tr>
							<td valign="top">about:</td>
							<td>{!data.about ? '' : Parser(data.about)}</td>
						</tr>
					</tbody>
				</table>
			</Container>
		</>
	);
};

export default index;
