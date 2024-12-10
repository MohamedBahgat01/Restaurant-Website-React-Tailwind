import React from 'react'
import Food1 from '../../assets/food.png'
import Food2 from '../../assets/food2-plate.png'
import Food3 from '../../assets/banner.png'
import { delay, motion } from 'framer-motion'
import { SlideUp } from '../Hero/Hero'

const HotDessertData = [
    {
        id : 1,
        name : 'Hot Dessert',
        image : Food1,
        price : '$5.99',
        delay : 0.4,  
    },
    {
        id : 2,
        name : 'Hot Cake',
        image : Food2,
        price : '$5.99',
        delay : 0.8,  
    },
    {
        id : 3,
        name : 'Hot Cake',
        image : Food3,
        price : '$5.99',
        delay : 1.2,  
    },
]

const HotDessert = () => {
  return (
    <section className='container py-12'>

        {/* Heading section */}
        <motion.h3 
        variants={SlideUp(0)}
        initial="hidden"
        whileInView="show"
        className="text-2xl font-semibold 
         text-darkGreen uppercase py-8">
            Hot Dessert 
        </motion.h3>

        {/* Grid section  */}
        <div className='grid grid-cols-1 sm:grid-col-2
        md:grid-cols-3 gap-6'>

            {HotDessertData.map((item) => {
                return(
                    <motion.div 
                    variants={SlideUp(item.delay)}
                    initial="hidden"
                    whileInView="show"
                    className='group bg-white/50 shadow-md
                    p-3 flex items-center gap-3'>
                        <img src={item.image} alt="" 
                        className='w-24 rounded-full img-shadow 
                        group-hover:scale-125 transition-all
                        duration-700 group-hover:rotate-[50deg]'/>

                        <div>
                            <h3 className='text-xl font-semibold'>{item.name}</h3>
                            <p className='text-xl text-yellow-500'>{item.price}</p>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    </section>
  )
}

export default HotDessert
