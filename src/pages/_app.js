import Head from "next/head";
import {DefaultTemplate} from "common/templates";
// import {AppConfig} from 'config';


// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

    // console.log(AppConfig);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
                {/* <title>{AppConfig.name} - Chat</title> */}

            </Head>

            <DefaultTemplate>
                <Component {...pageProps} />
            </DefaultTemplate>
        </>
    );
}

export default MyApp;
