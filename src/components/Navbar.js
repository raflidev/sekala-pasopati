import React from 'react'
import logo from '../assets/images/logo-sekala.png'
import { NavLink } from 'react-router-dom';
export default function Navbar() {

  const showMenu = () => {
    const menu = document.querySelector('#hamburgerMenu');
    menu.classList.toggle('hidden');
  }
  return (
    <div className='font-roboto px-4 relative'>
      <div className='hidden lg:flex space-x-5'>
        <div className='w-28'>
          <div className='py-0 bg-primary-second text-white text-center'>
            Powered By:
          </div>
          <div className="bg-primary bg-logo h-20 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${logo})`}}>
          </div>
        </div>
        
        <div className='flex space-x-8 py-4'>
          <div className='text-primary font-bold text-xl'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'rounded-md bg-primary-second/40 px-2 py-2' : ''} >Tentang Kami</NavLink>
          </div>
          <div className='text-primary font-bold text-xl'>
            <NavLink to="/fitur" className={({ isActive }) => isActive ? 'rounded-md bg-primary-second/40 px-2 py-2' : ''}>Fitur</NavLink>
          </div>
          <div className='text-primary font-bold text-xl'>
            <NavLink to="/kontak" className={({ isActive }) => isActive ? 'rounded-md bg-primary-second/40 px-2 py-2' : ''}>Kontak</NavLink>
          </div>
        </div>
      </div>

      <div className='flex justify-between lg:hidden'>
        <div className='w-1/2'>
          <div className='w-24'>
            <div className='py-0 bg-primary-second text-white text-center'>
              Powered By:
            </div>
            <div className="bg-primary bg-logo h-16 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${logo})`}}>
            </div>
          </div>
        </div>
        <div>
          <div className='py-2'>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => showMenu()} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </div>
        </div>
      </div>

      <div id="hamburgerMenu" className='hidden absolute top-0 right-0 w-full'>
        <div className='flex bg-primary-second text-white w-full relative z-30'>
        <div className='w-full'>
          <div className='flex justify-end w-full'>
            <div className='px-4 pt-4'>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={() => showMenu()} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:bg-red-600 hover:text-white hover:rounded-full text-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div className='flex-row px-4 space-y-3 text-center py-4 w-full divide-y-2 divide-black/40'>
            <div className='font-bold text-xl block w-full pt-2'>
              <NavLink to="/" className={({ isActive }) => isActive ? 'rounded-md block w-full bg-primary-second/40 px-2 py-2' : ''} >Tentang Kami</NavLink>
            </div>
            <div className='font-bold text-xl block w-full pt-2'>
              <NavLink to="/fitur" className={({ isActive }) => isActive ? 'rounded-md block w-full bg-primary-second/40 px-2 py-2' : ''}>Fitur</NavLink>
            </div>
            <div className='font-bold text-xl block w-full pt-2'>
              <NavLink to="/kontak" className={({ isActive }) => isActive ? 'rounded-md block w-full bg-primary-second/40 px-2 py-2' : ''}>Kontak</NavLink>
            </div>
          </div>
        </div>
          
        </div>
      </div>
    </div>
  )
}
