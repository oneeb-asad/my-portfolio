import { motion } from 'framer-motion'
import type { Experience, SkillCategory } from '@/types'

const experiences: Experience[] = [
    { role: 'React Native Engineer (Consultant)', company: 'ALLTRUEistic / Factum Est LLC · Remote', period: "'26 — Now" },
    { role: 'Software Engineer', company: 'Niftonic Pvt. Ltd · Islamabad', period: "'23 — '24" },
    { role: 'Mobile Application Developer', company: 'MTBC (healthcare) · Rawalpindi', period: "'22 — '23" },
    { role: 'React Native Developer', company: 'Friends IT Solutions · Rawalpindi', period: "'21 — '22" },
]

const skillCategories: SkillCategory[] = [
    { name: 'Languages & Mobile', skills: ['TypeScript', 'JavaScript', 'Python', 'React Native', 'React'] },
    { name: 'State & APIs', skills: ['Redux Toolkit', 'Zustand', 'GraphQL', 'Apollo', 'REST'] },
    { name: 'Cloud & Backend', skills: ['AWS Amplify', 'AppSync', 'Firebase', 'Flask'] },
    { name: 'Tools', skills: ['Git', 'GitHub', 'Xcode', 'Android Studio'] },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
})

export default function About() {
    return (
        <section id="about" className="py-24 border-t border-[#0f1b3d]/10 dark:border-[#fdf6f0]/10">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

                    <div>
                        <motion.p {...fadeUp()} className="text-xs tracking-widest uppercase text-[#0f1b3d]/50 dark:text-[#fdf6f0]/50 mb-4">
                            About
                        </motion.p>
                        <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl sm:text-5xl font-extrabold tracking-tighter mb-8">
                            I design for <span className="italic font-light text-[#0f1b3d] dark:text-[#ff8a5b]">stability</span>.
                        </motion.h2>
                        <motion.p {...fadeUp(0.2)} className="text-[#0f1b3d]/70 dark:text-[#fdf6f0]/70 leading-relaxed mb-4">
                            I'm a React Native engineer who likes owning features end-to-end — from frontend architecture and state management to the unglamorous work of killing jank and shipping stable releases.
                        </motion.p>
                        <motion.p {...fadeUp(0.3)} className="text-[#0f1b3d]/70 dark:text-[#fdf6f0]/70 leading-relaxed">
                            I've worked across social, real-time bidding/streaming and healthcare. Recently completed an MSc in Data Science at the University of Chester. Now based in the UK, looking for a team to build great mobile products with.
                        </motion.p>
                    </div>

                    <div>
                        <motion.p {...fadeUp()} className="text-xs tracking-widest uppercase text-[#0f1b3d]/50 dark:text-[#fdf6f0]/50 mb-4">
                            Experience
                        </motion.p>
                        <div className="space-y-6">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={exp.company}
                                    {...fadeUp(0.1 + i * 0.05)}
                                    className="flex items-start justify-between gap-4 border-b border-[#0f1b3d]/10 dark:border-[#fdf6f0]/10 pb-4"
                                >
                                    <div>
                                        <p className="font-semibold">{exp.role}</p>
                                        <p className="text-sm text-[#0f1b3d]/50 dark:text-[#fdf6f0]/50">{exp.company}</p>
                                    </div>
                                    <span className="text-xs font-mono text-[#0f1b3d]/40 dark:text-[#fdf6f0]/40 shrink-0 pt-1">
                                        {exp.period}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 pt-10 border-t border-[#0f1b3d]/10 dark:border-[#fdf6f0]/10">
                    {skillCategories.map((category, i) => (
                        <motion.div key={category.name} {...fadeUp(i * 0.1)}>
                            <p className="text-xs tracking-widest uppercase text-[#0f1b3d]/50 dark:text-[#fdf6f0]/50 mb-3">
                                {category.name}
                            </p>
                            <div className="space-y-1.5">
                                {category.skills.map((skill) => (
                                    <p key={skill} className="text-sm font-semibold">{skill}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
