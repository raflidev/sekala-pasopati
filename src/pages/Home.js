import React from 'react'
import Navbar from '../components/Navbar'
import bgHome from '../assets/images/bg-home.png'
import bgSection from '../assets/images/bg-section.png'
import logo from '../assets/images/logo-qianzy.png'
import denah from '../assets/images/denah.jpeg'
import harga from '../assets/images/harga.png'
import site from '../assets/images/site.jpeg'
import peta from '../assets/images/peta.png'

function Home() {
  return (
    <div>
      <div className='h-screen bg-gradient-to-b from-sky-100 to-transparent font-larken text-primary'>
        <div className='flex justify-center text-5xl text-center'>
          <div className='space-y-5'>
            <div>Perumahan Subsidi</div>
            <div>Dengan Konsep Modern Minimalis</div>
            <div className='font-circular text-4xl font-semibold'>Type 30 x 60</div>
            <button className='bg-gradient-to-bl from-yellow-200 to-yellow-400 py-2 px-4 text-2xl rounded-full font-circular'>Hubungi Kami Sekarang</button>
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default Home