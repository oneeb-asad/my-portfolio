function Hero() {
    return (
        <section id="about" className="min-h-screen flex items-center pt-16">
            <div className="max-w-5xl mx-auto px-6 py-24">

                {/* Open to work badge */}
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-8">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Open to work
                </div>

                {/* Subtitle */}
                <p className="text-sm text-gray-400 tracking-widest uppercase mb-4">
                    React Native Engineer · TypeScript · GraphQL · AWS
                </p>

                {/* Main heading */}
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                    I build polished mobile apps{' '}
                    <span className="text-gray-400">people use every day.</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-500 max-w-xl mb-10 leading-relaxed">
                    3+ years shipping production iOS & Android across social, live-streaming
                    and healthcare. Currently consulting on a React Native social app end-to-end.
                </p>

                {/* CTA Buttons */}
                <div className="flex items-center gap-4 mb-12">
                    <a href="#work" className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
                        View work
                    </a>
                    <a href="#contact" className="border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:border-gray-400 transition-colors">
                        Get in touch
                    </a>
                </div>

                {/* Visa note */}
                <p className="text-xs text-gray-400">
                    🇬🇧 UK PSW visa — eligible to work without sponsorship through Jan 2028
                </p>

            </div>
        </section>
    )
}

export default Hero