import React from 'react';
import { Container } from 'reactstrap';

import useSWR from 'swr';

import timeAgo from '../utils/timeAgo';

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
			<Container>
				<div className="commentSection">
					<div className="comment">
						<div className="meta">
							{by} said: {timeAgo(time)}
						</div>
						<div className="content">{text}</div>
					</div>
					{kids && kids.map((kid) => <Comment comment={kid} key={kid} />)}
				</div>
			</Container>

			<style jsx>{`
				.commentSection {
					background-color: #f6f6ef;
				}
				.comment {
					background-color: #f6f6ef;
					padding-top: 1rem;
				}

				.comment .comment {
					padding-left: 4rem;
				}

				.content {
					line-height: 1.6em;
				}
			`}</style>
		</>
	);
};

export default Comment;
