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

function Experience() {
    return (
        <section id="experience" className="py-24 border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-6">

                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-16">
                    Experience
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">

                    {/* Experience list */}
                    <div className="space-y-8">
                        {experiences.map((exp) => (
                            <div key={exp.company} className="flex gap-4">
                                <span className="text-xs text-gray-400 font-mono w-20 shrink-0 pt-1">
                                    {exp.period}
                                </span>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{exp.role}</p>
                                    <p className="text-sm text-gray-400">{exp.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Skills */}
                    <div className="space-y-8">
                        {skillCategories.map((category) => (
                            <div key={category.name}>
                                <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
                                    {category.name}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience