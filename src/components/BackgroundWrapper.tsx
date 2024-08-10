import React, { useEffect, useRef } from 'react';

interface PageProps {
  children: React.ReactNode;
}

const BackgroundWrapper = ({ children }: PageProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.9;
      audioRef.current.play().catch(error => console.log("Audio playback failed:", error));
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/image4.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        {children}
      </div>
      <audio ref={audioRef} loop>
        <source src="/GOODNESS.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
export default BackgroundWrapper