import Head from 'next/head';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Hacker News</title>
				<link rel='icon' href='/y18.png' />
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
