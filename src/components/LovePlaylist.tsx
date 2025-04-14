import React, { useState, useRef } from 'react';
import { Music2Icon, HeartIcon, PlayIcon, PauseIcon } from 'lucide-react';

const songs = [
  {
    title: 'Ai Calica',
    artist: 'Puma pjl',
    cover: '/public/puma.jpg',
    audio: '/public/calica.mp3'
  },
  {
    title: 'Ethereal',
    artist: 'Txmy',
    cover: '/public/eth.jpeg',
    audio: '/public/ethereal.mp4'
  },
  {
    title: 'Just the Two of Us',
    artist: 'Bill Withers, Grover Washington, Jr.',
    cover: '/public/just.jpeg',
    audio: '/public/just.mp3'
  },
  {
    title: 'Tardes que nunca acabam',
    artist: 'Baco Exu do Blues',
    cover: '/public/tardes.jpeg',
    audio: '/public/acabam.mp3'
  }
];

export function LovePlaylist() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<HTMLAudioElement[]>([]);

  const togglePlay = (index: number) => {
    const currentAudio = audioRefs.current[index];
    if (!currentAudio) return;

    if (playingIndex === index) {
      currentAudio.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null && audioRefs.current[playingIndex]) {
        audioRefs.current[playingIndex].pause();
      }
      currentAudio.play();
      setPlayingIndex(index);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-pink-50">
      <div className="text-center mb-12">
        <Music2Icon className="h-12 w-12 text-red-500 mx-auto mb-4 animate-bounce-slow" />
        <h2 className="text-3xl font-bold gradient-text mb-4">
          Playlist do Nosso Amor
        </h2>
        <p className="text-gray-600">As músicas que embalam nossa história</p>
      </div>

      <div className="max-w-2xl mx-auto">
        {songs.map((song, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm p-4 rounded-lg mb-4 flex items-center gap-4 hover:bg-white transition-all duration-300"
          >
            <img
              src={song.cover}
              alt={song.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">{song.title}</h3>
              <p className="text-gray-600">{song.artist}</p>
            </div>
            <button
              onClick={() => togglePlay(index)}
              className="text-red-500 hover:text-red-600"
            >
              {playingIndex === index ? (
                <PauseIcon className="w-6 h-6" />
              ) : (
                <PlayIcon className="w-6 h-6" />
              )}
            </button>
            <audio
              ref={(el) => (audioRefs.current[index] = el!)}
              src={song.audio}
              preload="auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
