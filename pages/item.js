import React from 'react';
import { useRouter } from 'next/router';

const item = () => {
	const router = useRouter();

	return <div>{router.query.name}</div>;
};

export default item;
