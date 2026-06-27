import { Project } from '@/types'

const projects: Project[] = [
    {
        number: '01',
        company: 'Niftonic · 2023–24',
        year: '2023',
        title: 'BiDR TV',
        description:
            'A live auction platform where sellers stream products and buyers place real-time bids — with a live timeline and chat. I built the real-time bidding UI and streaming using GraphQL subscriptions on AWS AppSync.',
        tags: ['React Native', 'GraphQL', 'AppSync', 'Live streaming'],
    },
    {
        number: '02',
        company: 'Niftonic · 2023',
        year: '2023',
        title: 'KooraQ8',
        description:
            'A football match-registration app where admins create matches and players join solo or as teams. I built Firebase phone authentication and integrated the Laravel REST APIs on the frontend.',
        tags: ['React Native', 'Firebase Auth', 'Laravel REST'],
    },
    {
        number: '03',
        company: 'Factum Est LLC · 2026–present',
        year: '2026',
        title: 'ALLTRUEistic',
        description:
            'A production social app for iOS & Android. I own the frontend build — authentication via AWS Amplify, state with Redux Toolkit, and API integration through Apollo Client — and resolve rendering and jank issues across releases.',
        tags: ['React Native', 'AWS Amplify', 'Redux Toolkit', 'Apollo'],
    },
    {
        number: '04',
        company: 'MSc dissertation · data science',
        year: '2024',
        title: 'Medical Recommendation System',
        description:
            'An AI web app predicting likely conditions from reported symptoms and returning personalised recommendations. Trained and compared Random Forest, Decision Tree and Neural Network models behind a Flask interface.',
        tags: ['Python', 'Flask', 'Scikit-learn', 'Pandas'],
    },
]

function Work() {
    return (
        <section id="work" className="py-24 border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-6">

                {/* Section header */}
                <div className="flex items-end justify-between mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        Selected work
                    </h2>
                    <span className="text-sm text-gray-400">{projects.length} shipped apps</span>
                </div>

                {/* Project list */}
                <div className="divide-y divide-gray-100">
                    {projects.map((project) => (
                        <div key={project.number} className="py-10 flex flex-col sm:flex-row gap-6">

                            {/* Number */}
                            <span className="text-sm text-gray-300 font-mono w-8 shrink-0 pt-1">
                                {project.number}
                            </span>

                            {/* Content */}
                            <div className="flex-1">
                                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                                    {project.company}
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed mb-4 max-w-2xl">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Work