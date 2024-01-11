'use client'
import React,{useState} from 'react'
import Image from 'next/image';
// import { useRouter } from 'next/router';
import { useTheme } from "next-themes"
import { usePathname } from 'next/navigation'

import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to left, rgba(0,0,0,0) 10px, rgba(0,0,0,0) 50px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;


export default function Layout({children}){
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    const { theme = 'light' } = useTheme()
    const pathname = usePathname()

    return(
        <>
        <section>
            <motion.div
                initial={false}
                animate={
                isLoaded && isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
            >
                <div className='absolute h-full w-full opacity-70'>
                <Image src={pathname==='/' ? `/images/${theme}.jpg`: `/images${pathname}.jpg`} 
                    fill={true} sizes='100vw' alt=""
                     onLoad={() => setIsLoaded(true)} 
                    //  onClick={() => router.push('category')}
                     />
                </div>
                {children}
            </motion.div>
            </section>
        </>
    )
}

