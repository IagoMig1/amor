import React from 'react';
import { HeartIcon, CalendarIcon, SmileIcon, StarIcon } from 'lucide-react';
export function LoveStats() {
  // Calculate days together
  const startDate = new Date('2023-12-11');
  const today = new Date();
  const daysTogether = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const stats = [{
    icon: CalendarIcon,
    value: daysTogether,
    label: 'Dias Juntos'
  }, {
    icon: HeartIcon,
    value: '∞',
    label: 'Amor Infinito'
  }, {
    icon: SmileIcon,
    value: daysTogether * 100,
    label: 'Sorrisos Compartilhados'
  }, {
    icon: StarIcon,
    value: "∞",
    label: 'Momentos Especiais'
  }];
  return <section className="py-16 px-4">
      <h2 className="text-3xl text-center font-bold gradient-text mb-12">
        Nossa História em Números
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {stats.map((stat, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-500 hover:scale-105">
            <div className="inline-flex items-center justify-center mb-4">
              <stat.icon className="h-8 w-8 text-red-500 animate-floating" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </div>)}
      </div>
    </section>;
}