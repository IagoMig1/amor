import React from 'react';
import { CalendarHeartIcon, HeartIcon, StarIcon, SparklesIcon } from 'lucide-react';
const events = [{
  date: '19/08/2023',
  title: 'Primeiro Beijo',
  description: '',
  icon: HeartIcon
}, {
  date: 'Setembro 2023',
  title: 'Descobertas',
  description: 'Descobrindo o quanto tínhamos em comum',
  icon: SparklesIcon
}, {
  date: 'Outubro 2023',
  title: 'Momentos',
  description: 'Cada momento juntos, mesmo que só jogassemos ou assistissimos coisas juntos, isso me marcou muito',
  icon: StarIcon
}, {
  date: '11/12/2023',
  title: 'Início do Namoro',
  description: 'Dia mais feliz da minha vida, mal posso esperar pra casar com você logo',
  icon: CalendarHeartIcon
}];
export function DetailedTimeline() {
  return <section className="py-16 px-4">
      <h2 className="text-3xl text-center font-bold gradient-text mb-16">
        Nossa Linha do Tempo
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-red-300 to-pink-300" />
        {events.map((event, index) => <div key={index} className={`relative flex items-center gap-8 mb-12 opacity-0 animate-fade-in`} style={{
        animationDelay: `${index * 0.3}s`,
        animationFillMode: 'forwards',
        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
      }}>
            <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <p className="text-lg font-bold text-red-500 mb-2">
                  {event.date}
                </p>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-pink-400 flex items-center justify-center">
              <event.icon className="h-6 w-6 text-red-500" />
            </div>
          </div>)}
      </div>
    </section>;
}