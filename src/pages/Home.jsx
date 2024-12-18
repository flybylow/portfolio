import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function Home() {
  const previewProjects = projectsData.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
        <img 
          src="/images/home/bg-hero.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 -z-10"
        />
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Ward De Muynck
        </h1>
        <p className="mt-3 text-xl text-gray-500">
          UX Researcher & UI Prototyper
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
          <Link 
            to="/projects"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            View All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {previewProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link 
                to={`/project/${project.id}`}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}