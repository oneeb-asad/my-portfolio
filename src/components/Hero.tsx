import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ticker = ['GRAPHQL', 'APPSYNC', 'AWS AMPLIFY', 'REDUX TOOLKIT', 'APOLLO CLIENT', 'FIREBASE', 'IOS', 'ANDROID', 'TYPESCRIPT', 'REACT NATIVE']

const badgeText = 'TYPESCRIPT · GRAPHQL · REACT NATIVE · '

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-between pt-16 overflow-hidden">

            {/* Main content */}
            <div className="relative max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center py-24">

                {/* Circular rotating badge */}
                <div className="hidden lg:flex absolute top-8 right-6 w-32 h-32 items-center justify-center">
                    <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
                        <defs>
                            <path id="badge-circle" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                        </defs>
                        <text className="fill-[#0f1b3d] dark:fill-[#fdf6f0]" fontSize="10.5" letterSpacing="1.5">
                            <textPath href="#badge-circle">{badgeText.repeat(2)}</textPath>
                        </text>
                    </svg>
                    <span className="absolute w-2 h-2 rounded-full bg-[#ff8a5b]" />
                </div>

                {/* Top label */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="w-8 h-px bg-[#0f1b3d] dark:bg-[#fdf6f0]" />
                    <span className="text-xs tracking-widest uppercase text-[#0f1b3d]/60 dark:text-[#fdf6f0]/60">
                        React Native Engineer · 03
                    </span>
                </motion.div>

                {/* Heading */}
                <div className="mb-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[0.88] text-[#0f1b3d] dark:text-[#fdf6f0]"
                    >
                        BUILDING
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[0.88]"
                    >
                        <span className="italic font-light text-[#0f1b3d] dark:text-[#ff8a5b] mr-[0.25em]">polished</span>
                        <span className="text-[#0f1b3d] dark:text-[#fdf6f0]">mobile</span>
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[0.88] text-[#0f1b3d] dark:text-[#fdf6f0]"
                    >
                        experiences.
                    </motion.h1>
                </div>

                {/* Bottom row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mb-8"
                >
                    <p className="text-base text-[#0f1b3d]/60 dark:text-[#fdf6f0]/60 max-w-md leading-relaxed">
                        3+ years shipping production iOS & Android across social, live-streaming and healthcare. Currently consulting on a React Native social app, end-to-end.
                    </p>

                    <div className="flex items-center gap-4">
                        <Button asChild>
                            <a href="#work">
                                View work <ArrowRight size={16} />
                            </a>
                        </Button>
                        <Button asChild variant="outline">
                            <a href="#contact">Get in touch</a>
                        </Button>
                    </div>
                </motion.div>

                {/* Metadata row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex items-center gap-2 text-xs tracking-wide text-[#0f1b3d]/50 dark:text-[#fdf6f0]/50"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0f1b3d]/50 dark:bg-[#fdf6f0]/50" />
                    <span>UK PSW · eligible to Jan 2028</span>
                    <span className="mx-1">·</span>
                    <span>Based in the UK</span>
                </motion.div>
            </div>

            {/* Ticker */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-[#0f1b3d] dark:bg-[#ff8a5b] py-4 overflow-hidden"
            >
                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="flex gap-8 whitespace-nowrap w-max"
                >
                    {[...ticker, ...ticker].map((item, i) => (
                        <span key={i} className="font-display text-xs tracking-[0.25em] text-[#fdf6f0] dark:text-[#0f1b3d] uppercase font-extrabold">
                            {item} <span className="mx-2">·</span>
                        </span>
                    ))}
                </motion.div>
            </motion.div>

        </section>
    )
}
