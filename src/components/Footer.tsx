import React from 'react';
import { HeartIcon } from 'lucide-react';
export function Footer() {
  return <footer className="text-center py-10">
      <div className="flex justify-center items-center gap-2 mb-4">
        <HeartIcon className="h-5 w-5 text-red-500" />
        <p className="text-pink-700">Iago & Julia</p>
        <HeartIcon className="h-5 w-5 text-red-500" />
      </div>
      <p className="text-gray-600 text-sm">Juntos desde 11/11/2023</p>
    </footer>;
}