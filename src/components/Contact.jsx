import React from 'react';
import Title from './Title';
import assets from '../assets/assets';
import toast from 'react-hot-toast';
import {motion} from 'motion/react';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "7a3f702e-973b-446f-95c4-c147ad728a61");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Message sent successfully!');
                event.target.reset();
            } else {
                toast.error(error.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };



    return (
        <motion.div
        
        initial='hidden'
        whileInView='visible'
        viewport={{once: true}}
        transition={{staggerChildren: 0.2}}
        
        
        id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <Title title="Let's Connect"
                desc="We'd love to hear from you. Reach out to us with any questions or feedback." />

            <motion.form
            
            initial={{opacity:0, y: 30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.5, delay: 0.4}}
            viewport={{once: true}}
            
            onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
                <div>
                    <p className='mb-2 text-sm font-medium'>Your Name</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300
                dark:border-gray-600'>
                        <img src={assets.person_icon} alt="" />
                        <input name='name' type="text" placeholder='Enter your name' className='w-full
                    p-3 text-sm outline-none' required />
                    </div>
                </div>

                <div>
                    <p className='mb-2 text-sm font-medium'>Email</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300
                dark:border-gray-600'>
                        <img src={assets.email_icon} alt="" />
                        <input name='email' type="email" placeholder='Enter your email' className='w-full
                    p-3 text-sm outline-none' required />
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>
                    <textarea name="message" id="message" required rows="8" className='w-full p-3 text-sm outline-none
                rounded-lg border border-gray-300 dark:border-gray-600' placeholder='Enter your message' />
                </div>

                <button type="submit" className='w-max flex gap-2 bg-primary text-white
            text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                    Submit <img src={assets.arrow_icon} width={14} alt="" />
                </button>

            </motion.form>

        </motion.div>
    );
}

export default Contact;
