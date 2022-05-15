import Link from 'next/link'
import { RiShoppingCartLine } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className="   border-zinc-500 px-1 my-1 md:mx-24 flex justify-between">

      <h3>
        <Link href='/' >
          <a className=' flex items-end font-mono font-semibold '> HoverOver
            <svg className=' h-6 ml-1 w-auto'
              viewBox="0 0 24 26" stroke-width="1.5" stroke="currentColor" fill="none" >
              <path d="M3 17c3.333 -3.333 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.032 1.085 
-2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667
1.333 4 3 4c.53 0 2.639 -2 3 -2c.517 0 1.517 .667 3 2" />
            </svg>
          </a>
        </Link>
      </h3>

      {/* === CART LOGO  */}
      <button className=' relative  w-8 flex'>
        <RiShoppingCartLine className=' text-zinc-700 h-7 w-auto' />
        <span className=' bg-red-800 rounded-full absolute  text-white h-4 w-4 text-[10px]
    font-semibold font-mono grid items-center left-[-6px] '> 1 </span>
      </button>

    </div>
  )
}

export default Navbar