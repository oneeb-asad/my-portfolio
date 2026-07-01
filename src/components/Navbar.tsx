import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { DarkModeProps } from '@/types'

const links = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, setDark }: DarkModeProps) {
    return (
        <motion.header
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 inset-x-0 z-50 bg-[#fdf6f0]/80 dark:bg-[#0f1b3d]/80 backdrop-blur-md border-b border-[#0f1b3d]/10 dark:border-[#fdf6f0]/10"
        >
            <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#hero" className="font-display font-bold tracking-tight text-lg text-[#0f1b3d] dark:text-[#fdf6f0]">
                    oneeb.
                </a>

                <div className="flex items-center gap-10">
                    <div className="hidden sm:flex items-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-[#0f1b3d]/70 dark:text-[#fdf6f0]/70 hover:text-[#0f1b3d] dark:hover:text-[#fdf6f0] transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Badge variant="pill" className="hidden sm:inline-flex normal-case tracking-normal">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            Open to work
                        </Badge>

                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => setDark(!dark)}
                            aria-label="Toggle dark mode"
                        >
                            {dark ? <Sun size={16} /> : <Moon size={16} />}
                        </Button>
                    </div>
                </div>
            </nav>
        </motion.header>
    )
}
