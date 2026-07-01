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

export default function Experience() {
    return (
        <section id="experience" className="py-24 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-5xl mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold tracking-tight mb-16"
                >
                    Experience
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    <div className="space-y-8">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex gap-4"
                            >
                                <span className="text-xs text-gray-400 font-mono w-20 shrink-0 pt-1">
                                    {exp.period}
                                </span>
                                <div>
                                    <p className="text-sm font-medium">{exp.role}</p>
                                    <p className="text-sm text-gray-400">{exp.company}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="space-y-8">
                        {skillCategories.map((category, i) => (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
                                    {category.name}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span key={skill} className="text-xs border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 px-3 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}