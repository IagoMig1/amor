import React, { useEffect } from 'react';
import { HeartIcon } from 'lucide-react';
export function Splash({
  onFinish
}: {
  onFinish: () => void;
}) {
  useEffect(() => {
    setTimeout(onFinish, 2000);
  }, [onFinish]);
  return <div className="fixed inset-0 bg-gradient-to-b from-red-50 to-pink-50 flex items-center justify-center z-50">
      <div className="text-center">
        <HeartIcon className="h-16 w-16 text-red-500 animate-bounce mx-auto mb-4" />
        <div className="text-2xl text-red-600 font-bold animate-pulse">
          Iago & Julia
        </div>
      </div>
    </div>;
}