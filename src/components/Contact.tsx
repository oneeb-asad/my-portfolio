import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function Contact() {
    return (
        <section id="contact" className="py-24 border-t border-[#0f1b3d]/10 dark:border-[#fdf6f0]/10">
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <Badge variant="pill">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Let's talk
                    </Badge>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.88] mb-10"
                >
                    GOT A<br />
                    <span className="italic font-light text-[#0f1b3d] dark:text-[#ff8a5b]">product</span> to ship?
                </motion.h2>

                <motion.a
                    href="mailto:sheikhoneeb@icloud.com"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl sm:text-2xl font-medium underline underline-offset-8 decoration-[#0f1b3d]/30 dark:decoration-[#fdf6f0]/30 hover:decoration-[#ff8a5b] transition-colors mb-4"
                >
                    sheikhoneeb@icloud.com
                </motion.a>

                <motion.a
                    href="tel:+447729474256"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-sm tracking-wide text-[#0f1b3d]/60 dark:text-[#fdf6f0]/60 hover:text-[#0f1b3d] dark:hover:text-[#fdf6f0] transition-colors mb-14"
                >
                    +44 7729 474256
                </motion.a>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-8 text-xs tracking-widest uppercase"
                >
                    <a href="https://github.com/oneeb-asad" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#ff8a5b] transition-colors">
                        GitHub <ArrowUpRight size={12} />
                    </a>
                    <a href="https://linkedin.com/in/oneeb-asad" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#ff8a5b] transition-colors">
                        LinkedIn <ArrowUpRight size={12} />
                    </a>
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-[#0f1b3d]/10 dark:border-[#fdf6f0]/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#0f1b3d]/50 dark:text-[#fdf6f0]/50">
                <p>© 2026 Oneeb Asad — built with React Native energy.</p>
                <p>UK · PSW visa → Jan 2028</p>
            </div>
        </section>
    )
}
