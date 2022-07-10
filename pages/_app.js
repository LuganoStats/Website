import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import { isProd } from '../basepath'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href={`${isProd}/favicon.ico`} />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
