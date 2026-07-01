import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { DarkModeProps } from '@/types'

const links = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, setDark }: DarkModeProps) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800"
        >
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

                <span className="text-lg font-semibold tracking-tight">Oneeb.</span>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:text-gray-900 dark:hover:text-white transition-colors">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => setDark(!dark)}
                        className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-gray-400 transition-colors"
                    >
                        {dark ? '☀' : '☾'}
                    </button>
                </div>

                {/* Mobile right side */}
                <div className="flex md:hidden items-center gap-3">
                    <button
                        onClick={() => setDark(!dark)}
                        className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400"
                    >
                        {dark ? '☀' : '☾'}
                    </button>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center gap-1.5"
                    >
                        <span className={`block w-4 h-0.5 bg-gray-600 dark:bg-gray-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-4 h-0.5 bg-gray-600 dark:bg-gray-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-4 h-0.5 bg-gray-600 dark:bg-gray-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>

            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm"
                    >
                        <ul className="flex flex-col px-6 py-4 gap-4">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.nav>
    )
}