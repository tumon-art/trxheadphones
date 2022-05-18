import styles from '../styles/Marquee.module.css'
import Products from './Products'

const Marquee = ({products}) => {

  return (
   <div className=' mt-20'>

     <h1 className=' text-center text-sky-900 text-xl font-extrabold'>
       You may also like 
     </h1>


     <section className=' relative h-96  w-full  overflow-hidden'>
       <div className={` ${styles.anim} flex gap-5 justify-center` } >
         {products.map((product)=><Products key={product._id} products={product} />)}
       </div>
     </section>

   </div>
  )
}

export default Marquee