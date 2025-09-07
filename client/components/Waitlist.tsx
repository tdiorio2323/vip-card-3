import React, { useState, useEffect } from 'react';

const Waitlist: React.FC = () => {
    const [utmParams, setUtmParams] = useState({ source: '', medium: '', campaign: '' });
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        // Capture UTM params from URL
        const params = new URLSearchParams(window.location.search);
        setUtmParams({
            source: params.get('utm_source') || '',
            medium: params.get('utm_medium') || '',
            campaign: params.get('utm_campaign') || '',
        });

        // Check for form status from server redirect
        const hash = window.location.hash;
        if (hash === '#waitlist-section-success') {
            setFormStatus('success');
        } else if (hash === '#waitlist-section-error') {
            setFormStatus('error');
        }
    }, []);

    if (formStatus === 'success') {
        return (
            <section id="waitlist-section" className="py-20 sm:py-32 px-4 bg-[#0A0A0A]">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-3xl font-bold holographic-text mb-4">Thank You!</h2>
                    <p className="text-lg text-neutral-300">You're on the list. We will be in touch soon.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="waitlist-section" className="py-20 sm:py-32 px-4 bg-[#0A0A0A]">
             <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                        Join The Waitlist
                    </h2>
                    <p className="mt-3 text-lg text-neutral-400">
                        Be the first to know when memberships become available.
                    </p>
                </div>

                <form action="/api/vip-waitlist" method="post" className="mt-8 space-y-4">
                    <div>
                        <label htmlFor="name-client" className="sr-only">Full name</label>
                        <input name="name" id="name-client" aria-label="Full name" placeholder="Your full name" required className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-fuchsia-500 transition" />
                    </div>
                    <div>
                        <label htmlFor="email-client" className="sr-only">Email address</label>
                        <input name="email" id="email-client" type="email" aria-label="Email" placeholder="Your primary email" required className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-fuchsia-500 transition" />
                    </div>
                    <div>
                        <label htmlFor="reason-client" className="sr-only">Reason for joining</label>
                        <textarea name="reason" id="reason-client" aria-label="Reason for joining (Optional)" placeholder="Tell us why you’d be a great fit…" rows={3} className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-fuchsia-500 transition" />
                    </div>
                    
                    {/* Honeypot: not visible to users */}
                    <input name="hp" tabIndex={-1} autoComplete="off" className="hidden" />
                    
                    {/* UTM capture */}
                    <input type="hidden" name="utm_source" value={utmParams.source} />
                    <input type="hidden" name="utm_medium" value={utmParams.medium} />
                    <input type="hidden" name="utm_campaign" value={utmParams.campaign} />
                    
                    <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-fuchsia-500 to-rose-500 px-4 py-3 text-sm font-semibold transition hover:opacity-90">
                        Join Now
                    </button>
                    
                    <div aria-live="polite" className="pt-2 text-center text-xs h-4">
                        {formStatus === "error" && <p className="text-rose-400">An error occurred. Please try again.</p>}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Waitlist;
