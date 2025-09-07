import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const imageUrl = "https://images.unsplash.com/photo-1618494950942-f80c6a2c3a47?q=80&w=1920&auto=format&fit=crop";

  // Opacity for the background image. Fades out over 600px of scroll.
  const bgOpacity = Math.max(0, 1 - offsetY / 600);

  // Opacity for the hero content. Fades out a bit faster, over 500px.
  const contentOpacity = Math.max(0, 1 - offsetY / 500);


  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden palm-overlay">
       <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: `url('${imageUrl}')`,
          opacity: bgOpacity,
          transform: `translateY(${offsetY * 0.4}px)`,
          willChange: 'transform, opacity',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent"></div>
      </div>
      
      <div 
        className="relative z-10 text-center px-4"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${offsetY * 0.2}px)`,
          willChange: 'opacity, transform',
        }}
      >
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase holographic-text">
          TD STUDIOS
        </h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-300 tracking-wide font-light">
          Luxury. Exclusivity. Connection.
        </p>
      </div>
    </section>
  );
};

export default Hero;
