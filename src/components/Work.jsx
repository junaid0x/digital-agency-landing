import React from 'react';
import Title from './Title';
import assets from '../assets/assets';
import { motion } from 'motion/react';

const Work = () => {

    const workData = [
        {
            title: 'Mobile App Marketing',
            description: 'we turn bold ideas into powerful digital solutions that connect, engage and convert.',
            image: assets.work_mobile_app
        },
        {
            title: 'Dashboard Management',
            description: 'we turn bold ideas into powerful digital solutions that connect, engage and convert.',
            image: assets.work_dashboard_management
        },
        {
            title: 'Fitness App Promotion',
            description: 'we turn bold ideas into powerful digital solutions that connect, engage and convert.',
            image: assets.work_fitness_app
        },

    ];

    return (
        <motion.div
        
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true}}
            transition={{staggerChildren: 0.2}}
        
        id='our-work' className='flex flex-col items-center gap-7
    px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white '>
            <Title title="Our Work"
                desc="We have worked with some of the biggest companies in the world" />

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                {workData.map((item, index) => (
                    <motion.div
                    
                        initial={{opacity:0, y: 30}}    
                        whileInView={{opacity:1, y:0}}
                        transition={{duration: 0.5, delay: index * 0.2}}
                        viewport={{once:true}}
                    
                    key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>

                        <img src={item.image} alt="" className='w-full rounded-xl' />


                        <h3 className='mb-2 mt-3 text-lg font-semibold'>{item.title}</h3>
                        <p className='text-sm opacity-60 w-5/6'>{item.description}</p>


                    </motion.div>
                ))}
            </div>

        </motion.div>
    );
}

export default Work;
