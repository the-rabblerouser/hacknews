import React from 'react';

import { Container } from 'reactstrap';
import useSWR from 'swr';
import DOMPurify from 'isomorphic-dompurify';
import { fetcher } from '../utils/fetcher';

import { ItemProps, Comment } from '../types/interfaces';

import timeAgo from '../utils/timeAgo';

const Comment = ({ comment }: Comment) => {
	const { data, error } = useSWR<ItemProps, undefined>(
		`https://hacker-news.firebaseio.com/v0/item/${comment}.json?print=pretty`,
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <></>;

	const { by, time, text, kids } = data;

	return (
		<>
			<Container>
				<div className='commentSection'>
					<div className='comment'>
						<div className='meta'>
							{by === undefined ? 'deleted' : by}{' '}
							{by === undefined ? '' : timeAgo(time)}
						</div>
						<div
							className='content'
							dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
						/>
					</div>
					{kids && kids.map((kid) => <Comment comment={kid} key={kid} />)}
				</div>
			</Container>

			<style jsx>{`
				.commentSection {
					width: 100%;
					background-color: #f6f6ef;
					border-left: 0.3px solid rgba(201, 201, 201, 0.7);
					border-right: 0.3px solid rgba(201, 201, 201, 0.7);
				}
				.comment {
					padding-bottom: 1rem;
				}

				.meta {
					background-color: #e0dede;
					padding: 0.2rem;
					margin-bottom: 0.15rem;
					color: #424242;
					font-size: 0.75rem;
				}

				.content {
					overflow-wrap: break-word;
					font-size: 0.85rem;
					padding-left: 1rem;
				}
			`}</style>
		</>
	);
};

export default Comment;
