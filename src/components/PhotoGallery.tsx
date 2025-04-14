import React from 'react';
import { HeartIcon, CameraIcon } from 'lucide-react';
const photos = [{
  url: '/1.jpg',
  caption: 'Primeiro Beijo'
}, {
  url: '/2.jpg',
  caption: 'Primeira vez na sua casa'
}, {
  url: '/3.jpg',
  caption: 'Passeio com sua Familia'
}, {
  url: '/4.jpg',
  caption: 'foto preferida'
}];
export function PhotoGallery() {
  return <section className="py-16 px-4">
      <div className="text-center mb-12">
        <CameraIcon className="h-12 w-12 text-red-500 mx-auto mb-4 animate-bounce-slow" />
        <h2 className="text-3xl font-bold gradient-text">Nossos Momentos</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {photos.map((photo, index) => <div key={index} className="group relative overflow-hidden rounded-xl shadow-xl hover-lift">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-lg font-semibold text-center">
                  {photo.caption}
                </p>
              </div>
            </div>
            <HeartIcon className="absolute top-4 right-4 h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>)}
      </div>
    </section>;
}