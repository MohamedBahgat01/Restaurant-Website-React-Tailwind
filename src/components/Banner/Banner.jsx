import React from 'react'
import BannerPng from '../../assets/banner.png'
import { motion } from 'framer-motion'
import { SlideUp } from '../Hero/Hero'
const Banner = () => {
  return (
    <section>
        <div className='container py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-14 place-item-center'>
                {/* Image section */}
                <div className='relative'>
                    <motion.img 
                    initial={{
                        opacity:0,
                        x : -100 ,
                        y : 100 
                    }}
                    whileInView={{
                        opacity:1, 
                        x : 0 , 
                        y : 0 
                    }}
                    whileHover={{
                        scale:1.2 ,  
                        x : 50 , 
                        y : -50 
                    }}
                    transition={{
                        duration:0.8 , 
                        delay :0.5 , 
                        scale :{duration :0.5}
                    }}

                    src={BannerPng} alt="" className='relative z-10 w-full lg:max-w-[320px] img-shadow '/>

                    <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{duration: 0.6 , delay: 0.5 , scale:{duration:0.5} }}
                    className='absolute top-1/2 right-1/2 
                    transform translate-x-1/2 -translate-y-1/2 
                    h-[320px] w-[320px] md:h-[400px] md:w-[400px] bg-ligthYellow 
                    z-0 rounded-full'>
                        
                    </motion.div>
                </div>
                {/* Text content section */}
                <div className='space-y-5 lg:max-w-[400px]'>
                    <motion.h1 
                    variants={SlideUp(0.4)}
                    initial="hidden"
                    whileInView="show"
                    className='text-6xl uppercase 
                    font-semibold font-leagueGothic'>The Best yummy food in the town</motion.h1>
                    <motion.p 
                    variants={SlideUp(0.8)}
                    initial="hidden"
                    whileInView="show"
                    >
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Tenetur 
                        accusantium voluptas! 
                    </motion.p>
                    <motion.button 
                    variants={SlideUp(1.2)}
                    initial="hidden"
                    whileInView="show"
                    className='btn-primary'>
                        Order Now
                    </motion.button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner