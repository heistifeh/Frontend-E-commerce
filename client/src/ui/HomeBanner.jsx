import React from 'react'
import Container from './Container'
import { homeBanner } from '../assets'
import LinkButton from './LinkButton'
const HomeBanner = () => {
  return (
    <Container className="relative py-5 overflow-hidden">
        <div className='relative'>
            <img src={homeBanner}  alt=""
            className='w-full h-full object-cover rounded-md' />
            <div className='w-full h-full absolute top-0 left-0 bg-black/10'>
            </div>
            <div className='absolute inset-0 flex flex-col justify-center px-10'>
                <h2 className='text-xl md:4xl lg:6xl text-white font-bold'>Mi Air Purifer</h2>
                <p className='text-base md:TEXT-LG font-semibold leading-6 text-white/90 max-w-[250px]'>
                    the new tech gify you are wishing for right here
                </p>
                <LinkButton className='w-44 items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mt-4'/>
            </div>
        </div>
    </Container>
  )
}

export default HomeBanner