import React from 'react'
import Food1 from '../../assets/food.png'
import Food2 from '../../assets/food2-plate.png'
import Food3 from '../../assets/banner.png'
import { motion } from 'framer-motion'
import { SlideUp } from '../Hero/Hero'

const PopularRecipeData = [
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

const PopularRecipe = () => {
  return (
    <section>
        <div className="container py-24">
            <motion.h3 
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="show"
            className='text-4xl text-center font-leagueGothic 
            font-semibold uppercase py-8'>Our Popular Recipes</motion.h3>

            {/* Card section */}
            <motion.div 
            variants={SlideUp(0.5)} initial="hidden" whileInView="show"
            className='grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-3 gap-6 place-items-center'>
                {PopularRecipeData.map((item) => {
                    return( 
                        <motion.div className='group space-y-3 text-center 
                        bg-white/50 shadow-xl p-3 ' variants={SlideUp(item.delay)} initial="hidden" whileInView="show">
                            <img src={item.image} alt="" className='w-44 mx-auto 
                            img-shadow group-hover:scale-x-110 
                            group-hover:translate-y-[-50px] 
                            group-hover:translate-x-10 
                            group-hover:rotate-y-[-50deg] transition-all duration-600'/>
                            <div className='text-center'>
                                <motion.button 
                                variants={SlideUp(0.5)} initial="hidden" whileInView="show"
                                className='btn-primary group-hover:mb-3 opacity-0 
                                group-hover:opacity-100 '>
                                    Buy Now
                                </motion.button>
                                <h4 className='text-lg font-bold'>{item.name}</h4>
                                <p className='text-lg'>{item.price}</p>
                            </div>
                        </motion.div>
                    )})}
            </motion.div>
        </div>  
    </section>
  )
}

export default PopularRecipe