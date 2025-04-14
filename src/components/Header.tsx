import React from 'react';
import { HeartIcon } from 'lucide-react';
export function Header() {
  return <header className="text-center py-16 opacity-0 animate-fade-in" style={{
    animationDelay: '2s',
    animationFillMode: 'forwards'
  }}>
      <div className="inline-flex items-center justify-center mb-6">
        <HeartIcon className="h-12 w-12 text-red-500" style={{
        animation: 'floatHeart 3s ease-in-out infinite'
      }} />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
        Iago & Julia
      </h1>
      <p className="text-xl md:text-2xl text-pink-700 italic opacity-0 animate-fade-in" style={{
      animationDelay: '2.5s',
      animationFillMode: 'forwards'
    }}>
        Uma história de amor para sempre...
      </p>
    </header>;
}