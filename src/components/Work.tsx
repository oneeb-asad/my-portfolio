import { motion } from 'framer-motion'
import type { Project } from '@/types'

const projects: Project[] = [
    {
        number: '01',
        company: 'Niftonic · 2023–24',
        year: '2023',
        title: 'BiDR TV',
        description: 'A live auction platform where sellers stream products and buyers place real-time bids — with a live timeline and chat. I built the real-time bidding UI and streaming using GraphQL subscriptions on AWS AppSync.',
        tags: ['React Native', 'GraphQL', 'AppSync', 'Live streaming'],
    },
    {
        number: '02',
        company: 'Niftonic · 2023',
        year: '2023',
        title: 'KooraQ8',
        description: 'A football match-registration app where admins create matches and players join solo or as teams. I built Firebase phone authentication and integrated the Laravel REST APIs on the frontend.',
        tags: ['React Native', 'Firebase Auth', 'Laravel REST'],
    },
    {
        number: '03',
        company: 'Factum Est LLC · 2026–present',
        year: '2026',
        title: 'ALLTRUEistic',
        description: 'A production social app for iOS & Android. I own the frontend build — authentication via AWS Amplify, state with Redux Toolkit, and API integration through Apollo Client — and resolve rendering and jank issues across releases.',
        tags: ['React Native', 'AWS Amplify', 'Redux Toolkit', 'Apollo'],
    },
    {
        number: '04',
        company: 'MSc dissertation · data science',
        year: '2024',
        title: 'Medical Recommendation System',
        description: 'An AI web app predicting likely conditions from reported symptoms and returning personalised recommendations. Trained and compared Random Forest, Decision Tree and Neural Network models behind a Flask interface.',
        tags: ['Python', 'Flask', 'Scikit-learn', 'Pandas'],
    },
]

export default function Work() {
    return (
        <section id="work" className="py-24 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-5xl mx-auto px-6">

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight"
                    >
                        Selected work
                    </motion.h2>
                    {/* <span className="text-sm text-gray-400">{projects.length} shipped apps</span> */}
                </div>

                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.number}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="py-10 flex flex-col sm:flex-row gap-6 group"
                        >
                            <span className="text-sm text-gray-300 dark:text-gray-600 font-mono w-8 shrink-0 pt-1">
                                {project.number}
                            </span>

                            <div className="flex-1">
                                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                                    {project.company}
                                </p>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4 max-w-2xl">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}