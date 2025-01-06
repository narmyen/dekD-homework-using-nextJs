import Image from 'next/image'
import React from 'react'
import banner1 from './images/banner1.png'
import banner2 from './images/banner2.png'
import banner3 from './images/banner3.png'

function Banner() {
  return (
    <div className='flex gap-[8px] pb-[20px] overflow-y-scroll no-scrollbar'>
      <Image
        alt="banner"
        width={700}
        height={373}
        src={banner1}
      />
      <Image
        alt="banner"
        width={700}
        height={373}
        src={banner2}
      />
      <Image
        alt="banner"
        width={700}
        height={373}
        src={banner3}
      />
    </div>
  )
}

export default Banner
