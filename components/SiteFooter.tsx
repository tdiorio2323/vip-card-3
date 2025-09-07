import React from 'react';

const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-white/10 px-4 py-10 text-center text-xs text-white/50">
      © {new Date().getFullYear()} Cabana. All rights reserved.
    </footer>
  );
};

export default SiteFooter;