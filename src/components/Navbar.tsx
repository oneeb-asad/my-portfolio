function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo / Name */}
                <span className="text-lg font-semibold tracking-tight text-gray-900">
                    Oneeb.
                </span>

                {/* Nav Links */}
                <ul className="flex items-center gap-8 text-sm text-gray-500">
                    <li><a href="#about" className="hover:text-gray-900 transition-colors">About</a></li>
                    <li><a href="#work" className="hover:text-gray-900 transition-colors">Work</a></li>
                    <li><a href="#experience" className="hover:text-gray-900 transition-colors">Experience</a></li>
                    <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar