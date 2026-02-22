import React from 'react';
import assets from '../assets/assets';
import Title from './Title';
import ServiceCard from './ServiceCard';
import { motion } from 'motion/react';

const Help = () => {
   const servicesData = [
        {
            title: "AI-Powered Chatbots",       
            desc: "Enhance customer support and engagement with intelligent chatbots that provide instant responses and personalized interactions.",
            icon: assets.ads_icon
        },
        {
            title: "AI-Driven Content Creation",       
            desc: "Generate high-quality content effortlessly using AI algorithms that understand your brand voice and target audience.",
            icon: assets.content_icon
        },
        {
            title: "AI-Based Data Analysis",       
            desc: "Unlock valuable insights from your data with AI-powered analytics that help you make informed business decisions.",
            icon: assets.social_icon
        },
        {
            title: "AI-Enhanced Marketing Strategies",       
            desc: "Optimize your marketing campaigns with AI-driven strategies that target the right audience at the right time.",
            icon: assets.marketing_icon
        },
        
    ];
  return (
    <motion.div 
    
    initial='hidden'
    whileInView='visible'
    viewport={{once:true}}
    transition={{staggerChildren: 0.2}}
    
    id='services' className='relative flex flex-col items-center gap-7
    px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt="AI Services" 
        className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

        <Title title={"Our AI Services"} 
        desc={"Discover our range of AI services designed to transform your business and drive innovation."}/>

       <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index}/>
        ))}
       </div>
        
    </motion.div>
  );
}

export default Help;
