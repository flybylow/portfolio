import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';
import '../styles/ProjectDetail.css';
import { useState, useMemo } from 'react';
import ImageOverlay from '../components/ImageOverlay';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const allImages = useMemo(() => {
    if (!project) return [];
    const mainImage = {
      url: project.image,
      description: project.summary
    };
    const galleryImages = (project.gallery || []).map((image, index) => ({
      url: image.url || image,
      description: image.description || `Gallery image ${index + 1}`
    }));
    return [mainImage, ...galleryImages].filter(Boolean);
  }, [project]);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto lg:max-w-none pt-12 pb-16">
          {/* Hero Section */}
          <div className="mb-12">
            {project.image && (
              <div 
                className="relative h-[400px] rounded-2xl overflow-hidden mb-8 cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(0);
                  setShowOverlay(true);
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-500 mb-6">
              {project.summary}
            </p>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 min-h-[calc(100vh-600px)]">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>

              {/* Gallery Section */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-12">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {project.gallery.map((image, index) => (
                        <div 
                          key={index} 
                          className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                          onClick={() => {
                            setCurrentImageIndex(index + 1);
                            setShowOverlay(true);
                          }}
                        >
                          <img
                            src={image.url} 
                            alt={image.description}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 h-full">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showOverlay && (
        <ImageOverlay
          images={allImages}
          currentIndex={currentImageIndex}
          setCurrentIndex={setCurrentImageIndex}
          onClose={() => setShowOverlay(false)}
        />
      )}
    </div>
  );
} 