import React, { useEffect, useRef } from 'react';
import { MapPinIcon } from 'lucide-react';
const cities = [{
  name: 'Caçapava',
  image: '/public/caçapava.jpg',
  description: ''
}, {
  name: 'São José dos Campos',
  image: '/public/sjc.jpg',
  description: ''
}, {
  name: 'São Paulo',
  image: '/public/sp.jpg',
  description: ''
}, {
  name: 'Curitiba',
  image: '/public/cwb.png',
  description: ''
}, {
  name: 'Joinville',
  image: '/public/jlle.jpeg',
  description: ''
}];
export function Journey() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.3
    });
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);
  return <section className="py-16">
      <h2 className="text-3xl text-center font-bold text-red-600 mb-10 animate-fade-in">
        Meu Primeiro Caminho Até Você
      </h2>
      {cities.map((city, index) => <div key={city.name} ref={el => sectionRefs.current[index] = el} className="city-section min-h-screen relative flex items-center justify-center mb-16 opacity-0 transition-all duration-1000">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40 transition-opacity duration-700" style={{
        backgroundImage: `url(${city.image})`
      }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center transform transition-all duration-700">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-center gap-3 mb-6">
                <MapPinIcon className="h-8 w-8 text-red-500 animate-bounce-slow" />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  {city.name}
                </h3>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 fade-in-up">
                {city.description}
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full" />
            </div>
          </div>
        </div>)}
    </section>;
}