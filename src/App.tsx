import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import { Declaration } from './components/Declaration';
import { Footer } from './components/Footer';
import { Journey } from './components/Journey';
import { Splash } from './components/Splash';
import { PhotoGallery } from './components/PhotoGallery';
import { DetailedTimeline } from './components/DetailedTimeline';
import { SharedInterests } from './components/SharedInterests';
import { LovePlaylist } from './components/LovePlaylist';
import { LoveStats } from './components/LoveStats';
import { FloatingHearts } from './components/FloatingHearts';
export function App() {
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <>
      {loading && <Splash onFinish={() => setLoading(false)} />}
      <FloatingHearts />
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-pink-50" style={{
      opacity: loading ? 0 : 1,
      transition: 'opacity 1s ease-in-out'
    }}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Header />
          <Timeline />
          <LoveStats />
          <DetailedTimeline />
          <SharedInterests />
          <PhotoGallery />
          <LovePlaylist />
          <Journey />
          <Declaration />
          <Footer />
        </div>
      </div>
    </>;
}