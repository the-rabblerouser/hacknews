import React from 'react';

import { useRouter } from 'next/router';

import { Container } from 'reactstrap';
import useSWR from 'swr';
import Parser from 'html-react-parser';

const fetcher = (url) => fetch(url).then((res) => res.json());

const user = () => {
	const router = useRouter();

	const { data, error } = useSWR(
		`https://hacker-news.firebaseio.com/v0/user/${router.query.id}.json?print=pretty`,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	const { id, created, karma, about } = data;
	return (
		<>
			<Container style={{ backgroundColor: '#F6F6EF' }}>
				<table>
					<tbody>
						<tr>
							<td>user:</td>
							<td>{id}</td>
						</tr>
						<tr>
							<td>created: </td>
							<td>
								{new Date(created * 1000)
									.toDateString('en-US')
									.split(' ')
									.slice(1)
									.join(' ')}
							</td>
						</tr>
						<tr>
							<td>karma:</td>
							<td>{karma}</td>
						</tr>
						<tr>
							<td valign="top">about:</td>
							<td>{!about ? '' : Parser(about)}</td>
						</tr>
					</tbody>
				</table>
			</Container>
		</>
	);
};

export default user;
