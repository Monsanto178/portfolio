import { useRef } from 'react';
import bgMain from '@assets/background-main-1.webp';
import firstMontains from '@assets/Montains-first-1.webp';
import lastMontains from '@assets/Montains-last-2.webp';
import moon from '@assets/Moon-2.webp';
import { PresentCard } from '@/Components';
// import { PresentCard } from '../';
import {motion, useScroll, useTransform } from 'framer-motion';

export const Banner = () => {
        const portraitRef = useRef<HTMLElement | null>(null);
        const moonRef = useRef<HTMLDivElement | null>(null);

        const { scrollYProgress } = useScroll({
            target: portraitRef,
            offset: ["start start", "end start"],
        });
        const { scrollYProgress: scrollMontain } = useScroll({
            target: portraitRef,
            offset: ["start center", "end start"],
        });
        const { scrollYProgress: scrollMoon } = useScroll({
            target: moonRef,
            offset: ["start end", "end start"],
        });

        const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);
        const moonY = useTransform(scrollMoon, [0.6, 1], ["60%", "20%"]);
        const montainY = useTransform(scrollMontain, [1, 0], ["20%", "0%"]);


    return (
    <section 
        className='w-full min-h-screen overflow-hidden' id='home'>
        <div className='bg-sky-darker w-[100dvw] h-screen'></div>
        <div className='absolute inset-0 top-[30%] z-2 h-screen' ref={moonRef}>
            <motion.div className='w-full h-full' style={{y: moonY}}>
                <div className='relative w-full h-full flex justify-center items-center'>
                    <div
                        className='absolute z-3 w-20 h-20'
                        style={{
                            backgroundImage: `url(${moon})`,
                            backgroundPosition: 'bottom',
                            backgroundSize: 'cover',
                        }}>
                    </div>

                    <div className='absolute w-35 h-35 rounded-full bg-white/40 shadow-[0_0_10px_2px_rgba(255,255,255,0.4)] z-2'></div>
                    <div className='absolute w-50 h-50 rounded-full bg-white/20 shadow-[0_0_10px_2px_rgba(255,255,255,0.4)] z-1'></div>
                </div>
            </motion.div>
        </div>


        <PresentCard />

        <article className='relative h-full w-full grid place-items-center'
        ref={portraitRef}>
            <div className='bg-sky-light w-[100dvw] h-[130dvh]'></div>
            <motion.div
                className='absolute inset-0 z-20'
                style={{
                    backgroundImage: `url(${firstMontains})`,
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                    y: backgroundY
                }}>
            </motion.div>
            <div
                className='absolute inset-0 z-15 w-full'
                style={{
                    backgroundImage: `url(${bgMain})`,
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                }}>
            </div>
            <motion.div
                className='absolute inset-0 z-10 w-full'
                style={{
                    backgroundImage: `url(${lastMontains})`,
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                    y:montainY
                }}>
            </motion.div>

        </article>
    </section>
    )
}