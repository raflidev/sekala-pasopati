import React from 'react'
import Navbar from '../components/Navbar'
import bgHome from '../assets/images/bg-home.png'
import bgSection from '../assets/images/bg-section.png'
import logo from '../assets/images/logo-qianzy.png'

function Home() {
  return (
    <div className=''>
      <div className='h-screen bg-gradient-to-b from-sky-100 to-transparent font-roboto'>
      <Navbar/>
        <div>
          <div className='w-full lg:w-3/6 px-5 lg:px-20 pt-10'>
            <div className='relative z-10'>
              <div className='text-[5rem] lg:text-[7rem] 3xl:text-[8rem] font-bold text-transparent bg-clip-text py-10 leading-none  bg-gradient-to-br from-primary-second via-primary to-primary-second'>
                Sekala Pasopati
              </div>
              <div className='text-primary text-xl w-full md:w-5/6 lg:w-5/6 3xl:w-7/12'>
                <span className='font-bold'>Sekala Pasopati </span>Merupakan kawasan yang terletak di jantung kota leles. Dengan lokasi yang strategis dan desain modern minimalis, dengan lingkungan yang asri membuat perumahan menjadi nyaman dan sehat bagi para penghuninya.
              </div>
            </div>
              <div className='absolute bottom-0 right-0 w-7/12 3xl:w-8/12'>
                <img src={bgHome} alt="" />
              </div>
              <div className='absolute bottom-0 right-2 lg:right-10'>
              <div className='w-28'>
                <div className='py-0 bg-primary-second text-white text-center'>
                  Powered By:
                </div>
                <div className="bg-primary bg-logo h-16 xl:h-20 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${logo})`}}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tipe" className='h-[40rem] md:h-[50rem] 3xl:h-[66rem] bg-sky-100 relative z-20'>
        <div className='pt-20 3xl:pt-36 text-center text-[5rem] font-bold text-transparent bg-clip-text py-10 leading-none  bg-gradient-to-br from-primary-second via-primary to-primary-second'>
          Sekala Pasopati
        </div>
        <div className='flex justify-center'>
          <div className='text-center text-2xl w-full px-4 lg:px-0 lg:w-1/2 3xl:w-5/12 text-primary'>
            Tipe 30/60 memiliki luas bangunan 30 meter persegi dan luas tanah 60 meter dengan pola ruangan yang ideal untuk keluarga memiliki kesan lebih fungsional dan luas.
          </div>
        </div>
        <div className='absolute bottom-0 pt-36'>
          <img src={bgSection} className="" alt=""/>
        </div>
      </div>

      <div id="denah" className='min-h-screen'>
        <div>asd</div>
      </div>
      
    </div>
  )
}

export default Home