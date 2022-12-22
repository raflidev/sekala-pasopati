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
              <div className='absolute bottom-0 right-0 w-full lg:w-7/12 3xl:w-8/12'>
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
        <div className='absolute bottom-0 pt-36 w-full'>
          <img src={bgSection} className="w-full" alt=""/>
        </div>
      </div>
      <div className='bg-gradient-to-b from-sky-200/30 to-white/80'>
        <div id="denah" className='min-h-screen py-5 bg-sky-200/70'>
          <div className='px-4 lg:px-10'>
            <div className='block lg:flex items-center min-h-screen'>
              <div className="w-full lg:w-1/2">
                <div className='flex justify-end leading-none items-center'>
                  <div className='m-auto w-full lg:w-4/6'>
                    <div className='text-[4rem] text-primary font-bold'>Denah Rumah</div>
                    <div className='text-[3rem] text-primary-second font-medium'>Type 6 x 10</div>
                    <div className='text-2xl text-primary-second leading-tight pt-5'>Mengusung konsep modern minimalis dengan pola ruangan yang ideal untuk keluarga. Sehingga tiap ruangnya terkesan fungsional dan luas. Dilengkapi dengan taman depan dan belakang agar menambah kesan asri dan memaksimalkan sirkulasi udara agar tercipta hunian yang terkesan nyaman dan sehat</div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex justify-center items-center">
                  <div className="m-auto w-full lg:w-1/2">
                      <img src={denah} className="py-5" alt=""  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="rincianHarga" className='min-h-screen bg-sky-200/70'>
          <div className='text-[4rem] text-center text-primary font-bold py-10'>Rincian Biaya</div>
          <div className='mx-auto w-full lg:w-1/2 px-5'>
            <img src={harga} className='py-3' alt="" />
          </div>
        </div>

        <div id="site" className='py-10 min-h-screen bg-sky-200/70'>
          <div className='px-4 lg:px-10'>
            <div className='block lg:flex items-center min-h-screen'>
              <div className="w-full lg:w-1/2">
                <div className='flex justify-end leading-none items-center'>
                  <div className='m-auto w-full lg:w-4/6'>
                    <div className='text-[4rem] text-center lg:text-left pb-10 text-primary font-bold'>Site Plan Sekala Pasopati</div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex justify-center items-center">
                  <div className="m-auto w-5/6">
                      <img src={site} className="rounded" alt=""  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  

        <div id="peta" className='min-h-screen py-10 bg-sky-200/70'>
          <div className='px-4 lg:px-20 text-center lg:text-left'>
            <div className="block lg:flex justify-between">
              <div className='text-[4rem] text-primary font-bold'>Peta Lokasi</div>
              <div className='w-full lg:w-3/12 text-xl'>
                <div>Alamat:</div>
                <div>
                  Kampung Cigasti Girang Rt1 Rw2.
                  Desa Margaluyu Kec Leles Kab. 
                  Garut Jawa Barat, Indonesia 44152 
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-10">
              <img src={peta} className="w-full lg:w-5/6" alt="" />
            </div>
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default Home