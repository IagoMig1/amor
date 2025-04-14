import React from 'react';
import { HeartIcon } from 'lucide-react';
export function FloatingHearts() {
  return <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(10)].map((_, i) => <HeartIcon key={i} className="absolute text-pink-500/20 animate-floating" style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 20 + 10}px`,
      height: `${Math.random() * 20 + 10}px`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 5 + 5}s`
    }} />)}
    </div>;
}