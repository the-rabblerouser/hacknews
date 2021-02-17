import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Hacker News</title>
				<link rel="icon" href="/y18.png" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
