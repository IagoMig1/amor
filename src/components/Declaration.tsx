import React from 'react';
import { HeartIcon, SparklesIcon } from 'lucide-react';
export function Declaration() {
  return <section className="py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border-2 border-pink-200 relative overflow-hidden">
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full border-2 border-pink-200">
          <HeartIcon className="h-8 w-8 text-red-500 animate-scale" />
        </div>
        <SparklesIcon className="absolute top-4 left-4 h-6 w-6 text-pink-400 animate-floating" />
        <SparklesIcon className="absolute bottom-4 right-4 h-6 w-6 text-pink-400 animate-floating" style={{
        animationDelay: '-2s'
      }} />
        <h2 className="text-3xl text-center font-bold gradient-text mb-8 mt-4">
          Minha Declaração
        </h2>
        <div className="space-y-6 text-center relative">
          <p className="text-lg text-gray-700 hover:text-red-600 transition-colors duration-300">
            Amor, desde o momento em que te conheci em 17 de agosto de 2023,
            soube que tinha algo especial entre nós.
          </p>
          <p className="text-lg text-gray-700 hover:text-red-600 transition-colors duration-300">
            Cada momento ao seu lado é um presente. 
          </p>
          <p className="text-lg text-gray-700 hover:text-red-600 transition-colors duration-300">
            Quando começamos a namorar em 11 de dezembro, foi um dos dias mais
            felizes da minha vida.
          </p>
          <p className="text-xl font-medium text-pink-700 mt-8 animate-floating">
            Quero que saiba que meu amor por você cresce a cada dia, e sou
            eternamente grato por ter você em minha vida.
          </p>
          <p className="text-2xl font-bold gradient-text mt-8 animate-scale">
            Eu te amo, Julia! ❤️
          </p>
          <p className="text-xl italic text-right mt-4">- Iago</p>
        </div>
      </div>
    </section>;
}