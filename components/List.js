import React from 'react';

import ListItem from '../components/ListItem';

const List = ({ items }) => {
	return (
		<>
			{items.map((item) => (
				<ListItem item={item} key={item} />
			))}
		</>
	);
};

export default List;
