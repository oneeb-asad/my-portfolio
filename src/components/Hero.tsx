import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
})

export default function Hero() {
    return (
        <section id="about" className="min-h-screen flex items-center pt-16">
            <div className="max-w-5xl mx-auto px-6 py-16">

                <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 text-xs font-medium px-3 py-1 rounded-full mb-8">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Open to work
                </motion.div>

                <motion.p {...fadeUp(0.2)} className="text-sm text-gray-400 tracking-widest uppercase mb-4">
                    React Native Engineer · TypeScript · GraphQL · AWS
                </motion.p>

                <motion.h1 {...fadeUp(0.3)} className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
                    I build polished mobile apps{' '}
                    <span className="text-gray-400 dark:text-gray-500">people use every day.</span>
                </motion.h1>

                <motion.p {...fadeUp(0.4)} className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mb-10 leading-relaxed">
                    3+ years shipping production iOS & Android across social, live-streaming
                    and healthcare. Currently consulting on a React Native social app end-to-end.
                </motion.p>

                <motion.div {...fadeUp(0.5)} className="flex items-center gap-4 mb-12">
                    <a href="#work" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">
                        View work
                    </a>
                    <a href="#contact" className="border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                        Get in touch
                    </a>
                </motion.div>

                <motion.p {...fadeUp(0.6)} className="text-xs text-gray-400">
                    🇬🇧 UK PSW visa — eligible to work without sponsorship through Jan 2028
                </motion.p>

            </div>
        </section>
    )
}