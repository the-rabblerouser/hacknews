import { useRouter } from 'next/router';

import { Container } from 'reactstrap';

const index = () => {
	const router = useRouter();
	console.log(router.query.id);
	return (
		<>
			<Container>Hello World</Container>
		</>
	);
};

export default index;
