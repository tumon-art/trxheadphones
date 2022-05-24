import { Toaster } from 'react-hot-toast'

import Layout from '../comps/Layout'
import { Provider } from '../context/UC'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>

      <Layout>

        <Toaster />
        <Component {...pageProps} />
        
      </Layout>

    </Provider>
  )
}

export default MyApp
