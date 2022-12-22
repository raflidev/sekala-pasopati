import React from 'react'
import Navbar from '../components/Navbar'

import security from '../assets/icons/security.png'
import kamar from '../assets/icons/kamar.png'
import dapur from '../assets/icons/dapur.png'
import masjid from '../assets/icons/masjid.png'
import air from '../assets/icons/air.png'

import denah from '../assets/images/denah.jpeg'
import bgHome from '../assets/images/bg-home.png'

function Fitur() {
  return (
    <div className='font-roboto'>
      <div className='h-screen bg-gradient-to-b from-sky-100 to-transparent font-roboto'>
        <Navbar/>
        <div id="fitur" className='min-h-screen'>
          <div className='text-[4rem] text-primary font-bold text-center py-5'>Fitur Sekala Pasopati</div>
          <div className='flex justify-center h-screen'>
            <div className='w-5/6'>
              <div className='grid grid-cols-2 place-content-center lg:grid-cols-5 gap-10 '>
                <div className='bg-primary pb-5 px-2 divide-y-4 hover:scale-110 duration-300 divide-white'>
                  <img src={security} alt="security" />
                  <div className='flex justify-center pt-5'>
                    <div className='text-3xl px-6 font-bold text-center text-white '>
                      Security Pos
                    </div>
                  </div>
                </div>
                <div className='bg-primary pb-5 px-2 divide-y-4 hover:scale-110 duration-300 divide-white'>
                  <img src={kamar} alt="kamar" /> 
                  <div className='flex justify-center pt-5'>
                    <div className='text-3xl px-6 font-bold text-center text-white '>
                      2 Kamar Tidur
                    </div>
                  </div>
                </div>
                <div className='bg-primary pb-5 px-2 divide-y-4 hover:scale-110 duration-300 divide-white'>
                  <img src={air} alt="air" />
                  <div className='flex justify-center pt-5'>
                    <div className='text-3xl px-6 font-bold text-center text-white '>
                      Air Sumersible
                    </div>
                  </div>
                </div>
                <div className='bg-primary pb-5 px-2 divide-y-4 hover:scale-110 duration-300 divide-white'>
                  <img src={dapur} alt="dapur" />
                  <div className='flex justify-center pt-5'>
                    <div className='text-3xl px-6 font-bold text-center text-white '>
                      Dapur
                    </div>
                  </div>
                </div>
                <div className='bg-primary pb-5 px-2 divide-y-4 hover:scale-110 duration-300 divide-white'>
                  <img src={masjid} alt="masjid" />
                  <div className='flex justify-center pt-5'>
                    <div className='text-3xl px-6 font-bold text-center text-white '>
                      Masjid
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="unggul" className='min-h-screen relative bg-gradient-to-b from-sky-100/40 via-primary-second/10 to-sky-100/40'>
          <div className='w-full lg:w-3/6 px-5 lg:px-20 pt-10'>
            <div className='relative z-10'>
              <div className='text-[4rem] font-extrabold py-10 leading-none text-primary'>
                Keunggulan
              </div>
              <div className='ml-5 text-primary-second'>
                <ol className='list-disc text-2xl'>
                  <li>Lokasi yang strategis</li>
                  <li>Desain rumah dengan konsep modern minimalis</li>
                  <li>Kawasan yang asri</li>
                  <li>1 Menit jalan baru lingkar Leles</li>
                  <li>3 Menit Polsek & Pasar Leles</li>
                  <li>5 Menit Alun-Alun & Puskesmas Leles</li>
                  <li>7 Menit SMAN 2 Garut</li>
                  <li>10 Menit Candi Cangkuang & Matta Waterpark</li>
                </ol>
              </div>
            </div>
              <div className='absolute bottom-0 right-0 w-full lg:w-7/12 3xl:w-8/12'>
                <img src={bgHome} alt="" />
              </div>
          </div>
        </div>
        <div id="material" className='min-h-screen relative bg-gradient-to-b from-sky-100/40 via-primary-second/10 to-sky-100/40'>
          <div className='w-full lg:w-3/6 px-5 lg:px-20 pt-10'>
            <div className='relative z-10'>
              <div className='text-[4rem] font-extrabold py-10 leading-none text-primary'>
                Bahan Material
              </div>
              <div className='text-primary-second'>
                <ol className='list-none text-2xl'>
                  <li>Pondasi&emsp;: Batu Belah</li>
                  <li>Struktur&emsp;: Beton Bertulang</li>
                  <li>Dinding&emsp;: Hebel</li>
                  <li>Kusen&emsp;: Alumunium</li>
                  <li>Kamar Mandi&emsp;: Kloset Jongkok</li>
                  <li>Rangka Atap&emsp;: Keramik 40x40</li>
                  <li>Genteng&emsp;: Metal Berpasir</li>
                  <li>Plafon&emsp;: GRC</li>
                  <li>Pintu&emsp;: Fabrikasi Pabrik</li>
                  <li>Dapur&emsp;: Bak Cuci dan Meja Kompor</li>
                </ol>
              </div>
            </div>
              <div className='absolute bottom-0 right-0 w-full lg:w-7/12 3xl:w-8/12'>
                <img src={bgHome} alt="" />
              </div>
          </div>
        </div>

        <div id="denah" className='min-h-screen bg-gradient-to-b py-5 from-transparent/10 via-sky-200/70 to-transparent/10'>
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
      </div>
    </div>
  )
}

export default Fitur