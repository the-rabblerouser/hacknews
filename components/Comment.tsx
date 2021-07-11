import React from 'react';

import { Container } from 'reactstrap';
import useSWR from 'swr';
import DOMPurify from 'isomorphic-dompurify';

import { fetcher } from '../utils/fetcher';
import timeAgo from '../utils/timeAgo';

import { ItemProps, CommentProps } from '../types/interfaces';

import styles from '../styles/comments.module.css';

const Comment = ({ comment }: CommentProps) => {
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
				<div className={styles.commentSection}>
					<div className={styles.comment}>
						<div className={styles.meta}>
							{by === undefined ? 'deleted' : by}{' '}
							{by === undefined ? '' : timeAgo(time)}
						</div>
						<div
							className={styles.content}
							dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
						/>
					</div>
					{kids && kids.map((kid) => <Comment comment={kid} key={kid} />)}
				</div>
			</Container>
		</>
	);
};

export default Comment;
