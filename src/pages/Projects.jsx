import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          My Projects
        </h3>
      </section>

      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 gap-8">
          {projectsData.map(project => (
            <Link 
              key={project.id}
              to={`/project/${project.id}`}
              className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.summary}
              </p>
            
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 