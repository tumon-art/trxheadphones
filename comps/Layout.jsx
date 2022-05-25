import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({children}) => {
    
    return (
        <div className=" overflow-hidden">

            <Head>
                <title> TRX Headphones </title>
                <meta name="description" content=" This is Cat's World!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Navbar />
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default Layout