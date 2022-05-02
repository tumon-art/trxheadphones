import MainBanner from "./MainBanner"
import Products from "./Products"

const Home = ({ products, bannerData }) => {
  return (
    <main>

      {/* === MAIN BANNER  */}
      <MainBanner banner={bannerData.length && bannerData[0]} />

      <section className=" my-2 flex items-center flex-col">
        <h1 className=" text-4xl text-cyan-900 font-sans font-extrabold">
        Best Selling Cats
        </h1>

        <p className=" text-base text-cyan-900">
        Best obeying cats
        </p>
      </section>

      {/* === SHOW PRODUCTS  */}
      <section name='products'
      className=" grid grid-cols-3"
      >

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