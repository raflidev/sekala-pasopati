import React from 'react'
import bgHome from '../assets/images/bg-home.png'
import bgHome2 from '../assets/images/bg-home2.png'
import bgHome3 from '../assets/images/bg-home3.png'
import bgHome4 from '../assets/images/bg-home4.png'
import logo from '../assets/images/logo.png'
import logo2 from '../assets/images/logo-qianzy.png'
import peta from '../assets/images/peta.png'

import foot1 from "../assets/images/foot1.png"
import foot2 from "../assets/images/foot2.png"

// icon
import homeIcon from "../assets/icons/home.png"
import mapIcon from "../assets/icons/map.png"
import priceIcon from "../assets/icons/price.png"

function Home() {
  return (
    <div>
      <div className='h-[90rem] bg-gradient-to-b from-sky-100 to-transparent font-larken text-primary bg-cover bg-left lg:bg-bottom' style={{backgroundImage: `url(${bgHome})`}}>
        <div className='relative z-10 flex justify-center text-5xl text-center pt-20'>
          <div className='space-y-8'>
            <div>
              <div className='flex justify-center'>
                  <img src={logo} alt="" />
              </div>
              <div className='font-medium text-7xl drop-shadow-[0_1.2px_1.2px_rgba(255,255,255)]'>Sekala Pasopati</div>
            </div>
            <div className='space-y-3'>
              <div>Perumahan Subsidi</div>
              <div>Dengan Konsep Modern Minimalis</div>
              <div className='font-circular text-4xl font-semibold'>Type 30 x 60</div>
              <a href="https://api.whatsapp.com/send/?phone=6282120190862&text=Halo, Saya tertarik dengan Perumahan Sekala Pasopati, bisa memberi detailnya?" target="_blank" rel="noreferrer" className='bg-gradient-to-bl from-yellow-200 to-yellow-400 py-2 px-4 text-2xl rounded-full font-circular'>Hubungi Kami Sekarang</a>
            </div>
          </div>
        </div>
      </div>

      <div className='relative'>
        <div className="flex justify-center bg-primary-second bg-cover" style={{backgroundImage: `url(${bgHome4})`}}>
          <div className='text-center w-full lg:w-7/12 text-white font-circular py-32 space-y-4'>
            <h2 className='text-6xl'>Sekala Pasopati</h2>
            <p className='text-2xl'>Merupakan kawasan perumahan yang terletak di jantung kota Leles garut. Dengan lokasi yang strategis dan Desain Modern Minimalis, Menciptakan Lingkungan yang nyaman dan sehat bagi pada penghuninya</p>
            <div className='pt-5'>
              <a href="https://api.whatsapp.com/send/?phone=6282120190862&text=Halo, Saya tertarik dengan Perumahan Sekala Pasopati, bisa memberi detailnya?" target="_blank" rel="noreferrer" className='bg-gradient-to-bl from-yellow-200 to-yellow-400 py-2 px-4 text-2xl rounded-full font-circular text-primary'>Saya Tertarik</a>
            </div>
          </div>
        </div>

        <div className='absolute right-0 bottom-0 bg-primary rounded'>
          <div className='text-xs -mb-8 px-2 text-white font-circular pt-2'>Powered by:</div>
          <img src={logo2} alt="" className='w-28 -mb-5' />
        </div>
      </div>

      <div className='min-h-screen bg-sky-100 py-20 lg:py-0'>
        <div className='flex h-screen'>
          <div className="m-auto w-full">
            <div className="grid gric-cols-1 lg:grid-cols-3 text-center text-4xl font-medium font-circular space-y-8 lg:space-y-0">
              <div className='space-y-5'>
                <div className='flex justify-center'>
                  <img src={mapIcon} alt=""/>
                </div>
                <div>Lokasi Strategis</div>
              </div>
              <div className='space-y-5'>
                <div className='flex justify-center'>
                  <img src={homeIcon} alt=""/>
                </div>
                <div>Konsep Modern Minimalis</div>
              </div>
              <div className='space-y-5'>
                <div className='flex justify-center'>
                  <img src={priceIcon} alt=""/>
                </div>
                <div>Harga Ideal</div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>

      <div className='min-h-screen font-circular px-6 lg:px-10 py-10 text-white bg-primary bg-cover bg-center' style={{backgroundImage: `url(${bgHome2})`}}>
        <div className='flex justify-center'>
          <div className='w-full lg:w-11/12 space-y-14'>
            <div className='block lg:flex items-center space-y-8 lg:space-y-0'>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className='text-5xl font-medium'>Lokasi Strategis</div>
                <div className='space-y-5'>
                  <div className='space-y-3'>
                    <div className='text-4xl'>Fasilitas Pendidikan</div>
                    <div className='text-2xl font-circular'>
                      <div>TK-SD-SMP Islam Terpadu Siliwangi &plusmn; 1km</div>
                      <div>SD Margaluyu 1 dan 2 &plusmn; 750 M</div>
                      <div>SMP Terpadu Bina Insani Leles &plusmn; 400 M</div>
                      <div>SMAN 2 Garut &plusmn; 2,1 KM</div>
                      <div>MTs Darul Fitri Leles</div>
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <div className='text-4xl'>Fasilitas Umum</div>
                    <div className='text-2xl'>
                      <div>Puskesmas Leles &plusmn; 1,6 KM</div> 
                      <div>Masjid Al-Istiqomah Leles &plusmn; 1,2 KM</div>
                      <div>SPBU Haruman Leles &plusmn; 1,7 KM</div>
                      <div>Kantor Polsek Leles &plusmn; 1,5 KM</div>
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <div className='text-4xl'>Tempat Hiburan</div>
                    <div className='text-2xl'>
                      <div>Alun-Alun Leles &plusmn; 1,6 KM</div>
                      <div>Cangkang Temple &plusmn; 3,6 KM </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex justify-center">
                  <a href="https://api.whatsapp.com/send/?phone=6282120190862&text=Halo, Saya tertarik dengan Perumahan Sekala Pasopati, boleh minta brosurnya?" target="_blank" rel="noreferrer" className='text-black bg-gradient-to-bl from-yellow-200 to-yellow-400 py-2 px-4 text-2xl rounded-full font-circular'>Mintai Brosur</a>
                </div>
              </div>
            </div>
            <div className='font-circular'>
              <div className='text-4xl font-medium'>Peta Lokasi</div>
              <img src={peta} className="w-full" alt="Peta Sekala Pasopati" />
              <div className='text-xl'>
                <div>Alamat:</div>
                <div>Kampung Cigastri Girang RT 1 RW 2</div>
                <div>Desa Margaluyu Kec Leles Kab.</div>
                <div>Garut Jawa Barat, Indonesia 44152</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative font-circular h-[40rem] lg:h-[80rem] bg-contain lg:bg-cover bg-bottom lg:bg-center bg-no-repeat lg:bg-repeat' style={{backgroundImage: `url(${bgHome3})`}}>
        <div className='flex justify-center font-circular pt-20'>
          <div className="w-full lg:w-1/2 text-center text-primary">
            <div className='text-5xl lg:text-7xl'>Konsep <br/>Modern Minimalis</div>
            <div className='text-xl lg:text-3xl flex justify-center'>
              <div className='w-full lg:w-11/12 mt-4'>
                  Memiliki pola ruangan yang maksimal. Menjadikan ruang keluarga menjadi nyaman
              </div>
            </div>
          </div>
          <div className='absolute bottom-20'>
            <a href="https://api.whatsapp.com/send/?phone=6282120190862&text=Halo, Saya tertarik dengan Perumahan Sekala Pasopati, boleh minta katalognya?" target="_blank" rel="noreferrer" className='bg-gradient-to-bl from-yellow-200 to-yellow-400 py-2 px-4 text-2xl rounded-full font-circular text-primary'>Mintai Katalog</a>
          </div>
        </div>
      </div>

      <div className='min-h-screen bg-slate-50'>
        <div className='flex h-screen justify-center font-circular text-primary'>
          <div className="m-auto w-full py-10 lg:py-0">
            <div className="block lg:flex justify-center text-center space-x-0 lg:space-x-20 space-y-10 lg:space-y-0">
              <div className="space-y-5">
                <div className='text-6xl'>Siap Huni</div>
                <div className='flex justify-center'>
                  <img src={foot1} alt="" />
                </div>
              </div>
              <div className="space-y-5">
                <div className='text-6xl'>Free Kanopi</div>
                <div className='flex justify-center'>
                  <img src={foot2} alt="" />
                </div>
              </div>
            </div>
            <div className='flex justify-center mt-20'>
              <a href="https://api.whatsapp.com/send/?phone=6282120190862&text=Halo, Saya tertarik dengan Perumahan Sekala Pasopati, bisa memberi detailnya?" target="_blank" rel="noreferrer" className='bg-gradient-to-bl from-yellow-200 to-yellow-400 py-2 px-4 text-2xl rounded-full font-circular text-primary'>Hubungi Kami Sekarang</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default Home