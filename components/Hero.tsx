import React from 'react';

const Hero: React.FC = () => {
  const imageUrl = "https://images.unsplash.com/photo-1551523910-389851699f19?q=80&w=1920&auto=format&fit=crop";

  return (
    <section className="relative flex items-center justify-center min-h-[70vh] overflow-hidden">
      {/* Background Image and Overlays */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,0,230,0.15),transparent_60%)]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-[0_10px_30px_rgba(255,0,200,0.35)] text-white">
          CABANA VIP
        </h1>
        <p className="mt-3 text-sm md:text-base text-white/70">
          Luxury. Exclusivity. Connection.
        </p>
        <a href="#waitlist-section" className="mt-8 inline-block rounded-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-fuchsia-500 to-rose-500 hover:opacity-90 transition">
          Join the VIP Waitlist
        </a>
      </div>
    </section>
  );
};

export default Hero;