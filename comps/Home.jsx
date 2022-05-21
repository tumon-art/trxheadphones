import MainBanner from "./MainBanner"
import Products from "./Products"

const Home = ({ products, bannerData }) => {
  return (
    <main>

      {/* === MAIN BANNER  */}
      <MainBanner banner={bannerData.length && bannerData[0]} />

      <section className="  my-4 flex items-center flex-col">
        <h1 className=" sm:text-4xl text-2xl text-cyan-900 font-sans font-extrabold">
        Best Selling Headphones
        </h1>

        <p className=" text-base text-cyan-900">
        Best in the Market
        </p>
      </section>

      {/* === SHOW PRODUCTS  */}
      <section name='products'
      className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
       lg:mx-20 overflow-hidden
      "
      >

      {/* === MAP PRODUCTS  */}
       {products?.map((products)=>{
         return (
          <Products 
          key={products._id}
          products={products} 
          />
         )
       })}

      </section>
    </main>
  )
}

export default Home