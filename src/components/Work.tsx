import { motion } from 'framer-motion'
import type { Project } from '@/types'
import { Badge } from '@/components/ui/badge'
import { BidrTvMockup, KooraQ8Mockup, AlltrueMockup } from './ProjectMockups'

const projects: Project[] = [
    {
        number: '01',
        category: 'Live streaming',
        company: 'Niftonic · 2023–24',
        title: 'BiDR TV',
        description: 'A live auction platform where sellers stream products and buyers place real-time bids — with a live timeline and chat. I built the real-time bidding UI and streaming using GraphQL subscriptions on AWS AppSync.',
        tags: ['React Native', 'GraphQL', 'AppSync', 'Live streaming'],
    },
    {
        number: '02',
        category: 'Sports',
        company: 'Niftonic · 2023',
        title: 'KooraQ8',
        description: 'A football match-registration app where admins create matches and players join solo or as teams. I built Firebase phone authentication and integrated the Laravel REST APIs on the frontend.',
        tags: ['React Native', 'Firebase Auth', 'Laravel REST'],
    },
    {
        number: '03',
        category: 'Social · Current',
        company: 'Factum Est LLC · 2026–now',
        title: 'ALLTRUEistic',
        description: 'A production social app for iOS & Android. I own the frontend build — authentication via AWS Amplify, state with Redux Toolkit, and API integration through Apollo Client — and resolve rendering and jank issues across releases.',
        tags: ['React Native', 'AWS Amplify', 'Redux Toolkit', 'Apollo'],
    },
]

const mockups = [BidrTvMockup, KooraQ8Mockup, AlltrueMockup]

function DottedBackdrop({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex-1 rounded-3xl overflow-hidden bg-[#0f1b3d]/[0.02] dark:bg-[#fdf6f0]/[0.03] py-16 flex items-center justify-center">
            <div
                className="absolute inset-0 text-[#0f1b3d] dark:text-[#fdf6f0] opacity-[0.12]"
                style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    )
}

export default function Work() {
    return (
        <>
            <section id="work" className="py-24">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="flex items-end justify-between border-b border-[#0f1b3d]/10 dark:border-[#fdf6f0]/10 pb-6 mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="font-display text-4xl sm:text-5xl font-extrabold tracking-tighter"
                        >
                            Selected work.
                        </motion.h2>
                        <span className="text-xs tracking-widest uppercase text-[#0f1b3d]/50 dark:text-[#fdf6f0]/50">
                            {projects.length.toString().padStart(2, '0')} shipped apps
                        </span>
                    </div>

                    <div className="flex flex-col gap-24">
                        {projects.map((project, i) => {
                            const Mockup = mockups[i]
                            const reversed = i % 2 === 1
                            return (
                                <motion.div
                                    key={project.number}
                                    initial={{ opacity: 0, y: 32 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}
                                >
                                    <div className="flex-1 w-full">
                                        <Badge className="mb-4">{project.category}</Badge>
                                        <p className="text-xs text-[#0f1b3d]/50 dark:text-[#fdf6f0]/50 uppercase tracking-widest mb-2">
                                            {project.company}
                                        </p>
                                        <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tighter mb-4">
                                            {project.title}
                                        </h3>
                                        <p className="text-[#0f1b3d]/70 dark:text-[#fdf6f0]/70 leading-relaxed mb-6 max-w-xl">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="outline">{tag}</Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="w-full lg:flex-1">
                                        <DottedBackdrop>
                                            <Mockup />
                                        </DottedBackdrop>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <FeaturedProject />
        </>
    )
}

const stats = [
    { value: '3', label: 'Models compared' },
    { value: 'MSc', label: 'Distinction-level work' },
    { value: 'Flask', label: 'Web interface' },
    { value: 'Auth', label: '+ Prediction history' },
]

function FeaturedProject() {
    return (
        <section className="bg-[#0f1b3d] dark:bg-[#fdf6f0] py-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-xs tracking-widest uppercase text-[#ff8a5b] mb-4"
                >
                    MSc dissertation · 2025
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-display text-4xl sm:text-5xl font-extrabold tracking-tighter max-w-3xl mb-8 text-[#fdf6f0] dark:text-[#0f1b3d]"
                >
                    Personalized <span className="italic font-light text-[#ff8a5b]">medical</span> recommendation system.
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-12 justify-between">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-[#fdf6f0]/70 dark:text-[#0f1b3d]/70 leading-relaxed max-w-xl"
                    >
                        An AI web app predicting likely conditions from reported symptoms and returning personalized recommendations. Trained & compared Random Forest, Decision Tree and Neural Network models behind a Flask interface with auth and prediction history.
                    </motion.p>

                    <div className="grid grid-cols-2 gap-x-12 gap-y-6 shrink-0">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                            >
                                <p className="font-display italic font-light text-2xl text-[#ff8a5b] mb-1">{stat.value}</p>
                                <p className="text-xs uppercase tracking-widest text-[#fdf6f0]/60 dark:text-[#0f1b3d]/60">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap gap-2 mt-10"
                >
                    {['Python', 'Flask', 'Scikit-learn', 'Pandas', 'Random Forest', 'Neural Network'].map((tag) => (
                        <Badge key={tag} variant="outline" className="border-[#fdf6f0]/20 text-[#fdf6f0]/70 dark:border-[#0f1b3d]/20 dark:text-[#0f1b3d]/70">
                            {tag}
                        </Badge>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
