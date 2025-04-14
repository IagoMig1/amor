import React from 'react';
import { CalendarHeartIcon, HeartHandshakeIcon } from 'lucide-react';
export function Timeline() {
  return <section className="py-12">
      <h2 className="text-3xl text-center font-bold gradient-text mb-10">
        Nossa História
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-72 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="inline-flex items-center justify-center mb-4">
            <HeartHandshakeIcon className="h-12 w-12 text-pink-500 animate-bounce-slow" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Quando nos conhecemos
          </h3>
          <p className="text-2xl font-bold gradient-text">17/08/2023</p>
          <p className="mt-3 text-gray-600">
            
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-72 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="inline-flex items-center justify-center mb-4">
            <CalendarHeartIcon className="h-12 w-12 text-red-500 animate-bounce-slow" style={{
            animationDelay: '0.5s'
          }} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Quando começamos a namorar
          </h3>
          <p className="text-2xl font-bold gradient-text">11/12/2023</p>
          <p className="mt-3 text-gray-600">
           
          </p>
        </div>
      </div>
    </section>;
}