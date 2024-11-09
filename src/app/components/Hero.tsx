// import React from 'react'

// const Hero = () => {
//   return (
//     <div>
//       <div className='w-[1486px] h-[960px] '>
//         <div className=' justify-center items-center w-[496px] h-[189px]'>
//        <h1 className='font-bold text-black text-[40px]  '>IMPECCABLE CRAFTSMANSHIP AND FINESS</h1>
//        <p className='w-[902px] h-[147px] text-center font-medium'>An example of intricate workmanship and detail, elegant necklaces and long and short chains 
//         form a part of our desirable collection.</p>
//        <button className='bg-[#A29875] w-[288px] h-[58px]'>Explore Now</button>

//         </div>
//         <div className='h-3/1'>
//         <image src={images}><image/>


//         </div>

//       </div>
//     </div>
//   )
// }

// export default Hero

import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='h-screen'>
       
       <div className='flex '>
        <div className='w-1/2 flex flex-col justify-center items-center m-12'>
          <h1 className='text-4xl font-bold w-[496px] mr-80 pr-10   '>IMPECCABLE CRAFTSMANSHIP AND FINESS</h1>
          <p className='text-3xl font-medium w-[850px] ml-[29px]'>An example of intricate workmanship and detail, elegant  </p>
          <p className='text-3xl font-medium w-[850px] ml-[29px]'>necklaces and long and short chains  form a part of our</p>
          <p className='text-3xl font-medium w-[850px]  ml-[29px] '>desirable collection.</p>
          <button className='bg-[#A29875] text-[#FFFFFF] w-[270px] h-[58px]  text-[30px] font-medium rounded-[10px] mt-16 -m-40 mr-96'>Explore Now</button>
        </div>
        <div className=' justify-center items-center top-[198px] left-[1164px] mt-32 ml-40'>
        <Image src={"/images/Gold.png.jpg"} alt="Gold Image" height={647} width={464}/>
        </div>
      </div>
  

    </div>
    
  )
}

export default Hero

