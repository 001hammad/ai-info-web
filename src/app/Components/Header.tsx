import React from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.png'

const Navbar = () => {
  return (
    <header className='w-full'>
        <div className='sm:flex sm:justify-between Sm:items-center text-black sm:p-4 sm:bg-[#2ecc71] bg-green-600'>

           <div>
                <Image src={logo} alt='logo' className='w-10 '/>
           </div>
            
            <div>
                <h3 className='sm:text-lg sm:font-bold animate-bounce duration-1000'>Got a Minute? Discover How Coding Can Transform Your Life</h3>
            </div>

           <div>
             <ul className='sm:flex flex space-x-4 sm:ml-0 ml-11 sm:space-x-7 sm:mr-28 sm:text-xs sm:mt-2'>
                <li>Home</li>
                <li>Apply</li>
                <li>Jobs</li>
                <li>Result</li>
                <li>Courses</li>
             </ul>
           </div>

        </div>
    </header>
  )
}

export default Navbar
