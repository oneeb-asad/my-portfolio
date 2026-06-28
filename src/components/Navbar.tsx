import { motion } from 'framer-motion'
import type { DarkModeProps } from '@/types'

export default function Navbar({ dark, setDark }: DarkModeProps) {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800"
        >
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <span className="text-lg font-semibold tracking-tight">Oneeb.</span>

                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
                        <li><a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</a></li>
                        <li><a href="#work" className="hover:text-gray-900 dark:hover:text-white transition-colors">Work</a></li>
                        <li><a href="#experience" className="hover:text-gray-900 dark:hover:text-white transition-colors">Experience</a></li>
                        <li><a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a></li>
                    </ul>

                    {/* Dark mode toggle */}
                    <button
                        onClick={() => setDark(!dark)}
                        className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-gray-400 transition-colors"
                    >
                        {dark ? '☀' : '☾'}
                    </button>
                </div>
            </div>
        </motion.nav>
    )
}