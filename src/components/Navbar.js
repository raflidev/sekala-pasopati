import React from 'react'
import logo from '../assets/images/logo-sekala.png'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='font-roboto px-4'>
      <div className='flex space-x-5'>
        <div className='w-28'>
          <div className='py-0 bg-primary-second text-white text-center'>
            Powered By:
          </div>
          <div className="bg-primary bg-logo h-20 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${logo})`}}>
          </div>
        </div>
        
        <div className='flex space-x-8 py-4'>
          <div className='text-primary font-bold text-xl'>
            <Link to="/home">Tentang Kami</Link>
          </div>
          <div className='text-primary font-bold text-xl'>
            <Link to="/fitur">Fitur</Link>
          </div>
          <div className='text-primary font-bold text-xl'>
            <Link to="/kontak">Kontak</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
