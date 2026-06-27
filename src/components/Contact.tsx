function Contact() {
    return (
        <section id="contact" className="py-24 border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-6">

                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                        Let's build something
                    </h2>
                    <p className="text-gray-500 mb-10">
                        Open to React Native roles. Feel free to reach out.
                    </p>

                    {/* Contact details */}
                    <div className="space-y-3 mb-10">
                        <a href="mailto:sheikhoneeb@icloud.com" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                            sheikhoneeb@icloud.com
                        </a>
                        <a href="tel:+447729474256" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                            +44 7729 474256
                        </a>
                        <a href="tel:+923205429414" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                            +92 320 542 9414
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-6 mb-12">
                        <a href="https://github.com/oneeb-asad" target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/oneeb-asad" target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                            LinkedIn
                        </a>
                    </div>

                    {/* Message form */}
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                        />
                        <textarea
                            placeholder="Your message"
                            rows={4}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                        />
                        <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
                            Send message
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-xs text-gray-400 mt-16">
                    2026 Oneeb Asad — built with React Native energy. UK · PSW visa Jan 2028
                </p>

            </div>
        </section>
    )
}

export default Contact