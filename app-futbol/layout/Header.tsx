import { LoadRemove, LoadStart } from '@/components/Loading'
import Link from 'next/link'

import Image from 'next/image'
import Logo from "../public/img/logo.png"

function transition () {
    LoadStart()

}




export const Header = () => {
    return (
        <div>
            
            <nav className='bg-header flex md:justify-end md:pl-10   md:h-20 justify-center items-center  shadow-amber-400 '>
            
            <ul className="flex  md:flex-row  flex-col  gap-4 pb-4 md:pb-0 font-bold  ">

            <li className='  text-cyan-800 font-mono  md:border-r-2 md:border-black md:px-2 hover:text-blue-400' onClick={transition}>
            <Link href={"/"}>
    <Image src={Logo} alt="logo" className='md:absolute md:w-1/12 md:left-1 md:top-0 w-40 flex  md:justify-start' onClick={transition}></Image>
    </Link>
    </li>


            <li className='  text-cyan-800 font-mono  md:border-r-2 md:border-black md:px-2 hover:text-blue-400' onClick={transition}>
                    <Link href={"/primera"}> 
                        Primera Argentina
                        </Link>
                    </li>

                    <li className=' text-cyan-800 font-mono  md:border-r-2 md:border-black md:px-2 hover:text-blue-400' onClick={transition}>
                    <Link href={"/premierleague"}>
                        Premier League
                        </Link>
                    </li>

                    <li className=' text-cyan-800 font-mono  md:border-r-2 md:border-black md:px-2 hover:text-blue-400' onClick={transition}>
                    <Link href={"/laliga"}>
                        La Liga
                        </Link>
                    </li>     

                    <li className='  text-cyan-800 font-mono  md:border-r-2 md:border-black md:px-2 hover:text-blue-400' onClick={transition}>
                    <Link href={"/bundesliga"}>
                        Bundesliga
                        </Link>
                    </li>          

                    <li className=' text-cyan-800 font-mono  md:border-r-2 md:border-black md:px-2 hover:text-blue-400' onClick={transition}>
                    <Link href={"/ligue1"}>
                        Ligue 1
                        </Link>
                    </li>       

                    <li className='  text-cyan-800 font-mono  md:border-r-2 md:border-black md:px-2 hover:text-blue-400' onClick={transition}>
                    <Link href={"/serieA"}>
                        Serie A
                        </Link>
                    </li>     
</ul>

            </nav>
            </div>

    )
}

