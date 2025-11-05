'use client';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // ข้อมูลรูปภาพ (ใช้ placeholder images)
  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
      title: 'โปรเจค Modern Website',
      category: 'Web Design'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      title: 'Dashboard Design',
      category: 'UI/UX'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      title: 'Mobile App',
      category: 'Mobile'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop',
      title: 'Brand Identity',
      category: 'Branding'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop',
      title: 'E-commerce Platform',
      category: 'Web Design'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      title: 'Code Development',
      category: 'Development'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      title: 'Creative Design',
      category: 'UI/UX'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      title: 'Team Workspace',
      category: 'Office'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      title: 'Digital Marketing',
      category: 'Marketing'
    }
  ];

  const categories = ['ทั้งหมด', 'Web Design', 'UI/UX', 'Mobile', 'Branding', 'Development', 'Marketing', 'Office'];
  const [activeCategory, setActiveCategory] = useState('ทั้งหมด');

  const filteredImages = activeCategory === 'ทั้งหมด' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            แกลเลอรี่ผลงาน
          </h1>
          <p className="text-xl text-gray-600">
            คอลเลกชันผลงานที่เราภูมิใจนำเสนอ
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium mb-1">{image.category}</p>
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
            <p className="text-gray-600">โปรเจคสำเร็จ</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
            <p className="text-gray-600">ความพึงพอใจ</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
            <p className="text-gray-600">ลูกค้า</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">5+</div>
            <p className="text-gray-600">ปีประสบการณ์</p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[selectedImage].url}
              alt={filteredImages[selectedImage].title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="text-white text-center mt-4">
              <p className="text-sm opacity-75">{filteredImages[selectedImage].category}</p>
              <h3 className="text-2xl font-bold">{filteredImages[selectedImage].title}</h3>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1);
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors text-4xl font-bold"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0);
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors text-4xl font-bold"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}