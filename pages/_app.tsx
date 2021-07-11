import Head from 'next/head';
import type { AppProps } from 'next/app';

import Navbar from '../components/Navbar';

import '../styles/globals.css';

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
