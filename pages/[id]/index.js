import React from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { Container } from 'reactstrap';
import useSWR from 'swr';
import Parser from 'html-react-parser';

const fetcher = (url) => fetch(url).then((res) => res.json());

const index = () => {
	const router = useRouter();

	const { data, error } = useSWR(
		`https://hacker-news.firebaseio.com/v0/user/${router.query.name}.json?print=pretty`,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	return (
		<>
			<Container style={{ backgroundColor: '#F6F6EF' }}>
				<table>
					<tbody>
						<tr>
							<td>user:</td>
							<td>{data.id}</td>
						</tr>
						<tr>
							<td>created: </td>
							<td>
								{new Date(data.created * 1000)
									.toDateString('en-US')
									.split(' ')
									.slice(1)
									.join(' ')}
							</td>
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
				{/* <div className="mt-3">
					<Link
						href={`/[$id]/submissions`}
						as={`/${router.query.id}/submissions`}>
						<a style={{ textDecoration: 'underline' }}>submissions</a>
					</Link>
				</div> */}
			</Container>
		</>
	);
};

export default index;
