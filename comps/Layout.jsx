import Footer from "./Footer"
import Header from "./Header"

const Layout = ({childres}) => {
  return (
   <>
   <Header />
    {childres}
   <Footer />
   </>
  )
}

export default Layout