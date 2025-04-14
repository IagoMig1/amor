import React from 'react';
import { HeartIcon, Music, Coffee, Film, Book, Plane, Pizza } from 'lucide-react';
const interests = [{
  icon: Music,
  text: 'Músicas'
}, {
  icon: Coffee,
  text: 'Cafés da manhã juntos'
}, {
  icon: Film,
  text: 'Filmes de terror'
}, {
  icon: Plane,
  text: 'Sonhos de viagens'
}, {
  icon: Pizza,
  text: 'Pizza'
}];
export function SharedInterests() {
  return <section className="py-16 px-4">
      <div className="text-center mb-12">
        <HeartIcon className="h-12 w-12 text-red-500 mx-auto mb-4 animate-floating" />
        <h2 className="text-3xl font-bold gradient-text mb-4">
          Nossos Gostos em Comum
        </h2>
        <p className="text-gray-600">
          As pequenas coisas que nos fazem sorrir juntos
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {interests.map((item, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-pink-50 rounded-full mb-4">
                <item.icon className="h-8 w-8 text-red-500" />
              </div>
              <p className="text-gray-800 font-medium">{item.text}</p>
            </div>
          </div>)}
      </div>
    </section>;
}