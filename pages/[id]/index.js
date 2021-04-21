import React from 'react';

import { useRouter } from 'next/router';

import { Container } from 'reactstrap';
import useSWR from 'swr';
import DOMPurify from 'isomorphic-dompurify';

const fetcher = (url) => fetch(url).then((res) => res.json());

const user = () => {
	const router = useRouter();

	const { data, error } = useSWR(
		`https://hacker-news.firebaseio.com/v0/user/${router.query.name}.json?print=pretty`,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	console.log(data);
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
							<td
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(!about ? '' : about),
								}}
							/>
						</tr>
					</tbody>
				</table>
			</Container>
		</>
	);
};

export default user;
