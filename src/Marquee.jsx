import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-5 md:py-10 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl overflow-hidden'>
      <div className='text border-t-[1px] border-b-[1px] border-zinc-400 flex whitespace-nowrap overflow-hidden text-white'>
        
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            className='flex-shrink-0 flex items-center'
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          >
            <h1 className='text-[10vw] md:text-[15vw] lg:text-[20vw] leading-none font-extrabold px-4 md:px-8'>
              SAMSUNG INNOVATION!
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Marquee