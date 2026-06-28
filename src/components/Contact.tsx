import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <section id="contact" className="py-24 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-5xl mx-auto px-6">

                <div className="max-w-xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight mb-4"
                    >
                        Let's build something
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-gray-500 dark:text-gray-400 mb-10"
                    >
                        Open to React Native roles in the UK. Feel free to reach out.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-3 mb-10"
                    >
                        <a href="mailto:sheikhoneeb@icloud.com" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                            sheikhoneeb@icloud.com
                        </a>
                        <a href="tel:+447729474256" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                            +44 7729 474256
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center gap-6 mb-12"
                    >
                        <a href="https://github.com/oneeb-asad" target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                            GitHub ↗
                        </a>
                        <a href="https://linkedin.com/in/oneeb-asad" target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                            LinkedIn ↗
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full border border-gray-200 dark:border-gray-700 bg-transparent rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full border border-gray-200 dark:border-gray-700 bg-transparent rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
                        />
                        <textarea
                            placeholder="Your message"
                            rows={4}
                            className="w-full border border-gray-200 dark:border-gray-700 bg-transparent rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors resize-none"
                        />
                        <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">
                            Send message
                        </button>
                    </motion.div>
                </div>

                <p className="text-xs text-gray-400 mt-16">
                    © 2026 Oneeb Asad — built with React Native energy. UK · PSW visa → Jan 2028
                </p>

            </div>
        </section>
    )
}