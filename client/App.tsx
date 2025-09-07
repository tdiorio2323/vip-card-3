import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Membership from './components/Membership';
import SiteFooter from './components/SiteFooter';
import Waitlist from './components/Waitlist';

// --- PublicProfile component is now defined inside App.tsx to simplify imports ---
const PublicProfile: React.FC<{ slug: string }> = ({ slug }) => {
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
    if (slug) {
      fetch(`/api/public/${slug}`)
        .then(r => r.ok ? r.json() : null)
        .then(setData);
    }
  }, [slug]);

  if(!data) {
    return <div className="min-h-screen" style={{ background:"#0b0b0b" }}></div>;
  }
  
  const t = data.theme ?? { bg:"#0b0b0b", text:"#fff", primary:"#ffffff", accent:"#888", radius:16 };

  const getContrastColor = (hex: string) => {
    if (!hex) return '#000000';
    const c = hex.startsWith("#") ? hex.substring(1) : hex;
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#FFFFFF';
  };

  return (
    <div style={{ background: t.bg, color: t.text, fontFamily: 'sans-serif' }} className="min-h-screen antialiased">
      <div className="mx-auto max-w-md px-5 py-10">
        <header className="flex flex-col items-center gap-4 text-center">
          {data.avatarUrl && <img src={data.avatarUrl} className="h-24 w-24 rounded-full object-cover" alt={data.displayName} />}
          <h1 className="text-2xl font-semibold" style={{ color: t.text }}>{data.displayName}</h1>
          {data.bio && <p className="text-sm opacity-80" style={{ color: t.text }}>{data.bio}</p>}
        </header>
        <main className="mt-6 space-y-3">
          {data.links.map((l:any)=>(
            <a
              key={l.id}
              href={l.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => navigator.sendBeacon("/api/track/click",
                new Blob([JSON.stringify({ slug, linkId:l.id })], { type: "application/json" }))}
              className="block"
              aria-label={l.label ?? l.type}
            >
              <div
                className="w-full px-5 py-4 text-center font-medium transition-transform hover:scale-[1.02]"
                style={{
                  borderRadius: `${t.radius}px`,
                  background: t.primary,
                  color: getContrastColor(t.primary)
                }}
              >
                {l.label ?? l.type}
              </div>
            </a>
          ))}
        </main>
      </div>
    </div>
  );
};


const App: React.FC = () => {
  const path = window.location.pathname;
  const slug = path.substring(1);

  // Simple routing: if path is a slug (no file extension), show profile.
  // Otherwise (e.g., '/', '/index.html'), show the main landing page.
  if (slug && !slug.includes('.')) {
    return <PublicProfile slug={slug} />;
  }

  return (
    <div className="relative overflow-x-hidden font-sans">
      <main>
        <Hero />
        <Waitlist />
        <Membership />
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
