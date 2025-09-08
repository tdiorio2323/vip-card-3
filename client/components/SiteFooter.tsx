import React from 'react';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
    </svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-2.199 1.564-4.044 3.493-4.044 1.936 0 3.541 1.845 3.541 4.044v8.399h4.988v-10.131c0-4.87-3.307-8.869-7.854-8.869-3.712 0-5.717 2.44-6.671 4.129h-.028v-3.498z"/>
    </svg>
);

const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-white/10 px-4 py-10 text-center text-xs text-white/60">
      <div className="flex justify-center items-center gap-6 mb-6">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 transition-colors hover:text-white">
          <InstagramIcon />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white/60 transition-colors hover:text-white">
          <TwitterIcon />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/60 transition-colors hover:text-white">
          <LinkedInIcon />
        </a>
      </div>
      <p>
        © 2025 Cabana. All Rights Reserved. 18+ creators only. Zero tolerance for non-consensual content.
      </p>
      <nav aria-label="Footer navigation" className="mt-2">
        <a href="/about" className="hover:text-white transition-colors px-1">About</a>
        <span className="text-white/30">•</span>
        <a href="/membership" className="hover:text-white transition-colors px-1">Membership</a>
        <span className="text-white/30">•</span>
        <a href="/contact" className="hover:text-white transition-colors px-1">Contact</a>
        <span className="text-white/30">•</span>
        <a href="/terms" className="hover:text-white transition-colors px-1">Terms</a>
        <span className="mx-1 text-white/30">&amp;</span>
        <a href="/privacy" className="hover:text-white transition-colors px-1">Privacy</a>
      </nav>
    </footer>
  );
};

export default SiteFooter;
