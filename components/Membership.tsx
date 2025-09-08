import React from 'react';
import Button from './ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { cn } from '../lib/utils';


const membershipTiers = [
  {
    name: 'Creator',
    description: 'The essential Cabana experience.',
    features: [
      'Access to all core growth tools',
      'Priority strategy sessions',
      'Creator networking portal',
      'Starter legal & compliance templates',
    ],
    cta: 'Select Creator',
    glowClasses: 'from-amber-400 to-yellow-600',
  },
  {
    name: 'Icon',
    description: 'Unparalleled leverage and support.',
    features: [
      'All Creator benefits',
      'Dedicated account strategist',
      '24/7 fan-management (DMs, retention, upsells)',
      'Concierge for collabs, shoots, travel, booking',
      'Guaranteed campaign slots each month',
    ],
    cta: 'Become an Icon',
    glowClasses: 'from-[var(--brand-red)] to-fuchsia-600',
  },
];

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[var(--brand-red)]">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
    </svg>
);

const Membership: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Choose Your Experience
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Join a private network for adult creators and teams. Operations, growth, and concierge support to run a professional creator business.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {membershipTiers.map((tier) => (
            <div key={tier.name} className="group relative">
                <div className={cn(
                    "absolute -inset-0.5 bg-gradient-to-r rounded-2xl blur opacity-20 group-hover:opacity-75 group-hover:blur-lg transition-all duration-300 ease-out",
                    tier.glowClasses
                )}></div>
                <Card className="relative h-full flex flex-col transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:-translate-y-2">
                <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <ul className="space-y-3 text-neutral-300">
                    {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                            <CheckIcon />
                            <span>{feature}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button variant="primary" className="w-full">
                    {tier.cta}
                    </Button>
                </CardFooter>
                </Card>
            </div>
          ))}
        </div>

        {/* --- Detailed Benefits Section --- */}
        <div className="mt-24 pt-24 border-t border-white/10">
            <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    An Unrivaled Experience
                </h3>
                <p className="mt-4 text-lg text-neutral-400">
                    Operate like a top-tier creator brand. Built for speed, privacy, and measurable growth.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
                {/* Creator Column */}
                <div className="space-y-8">
                    <h4 className="text-2xl font-bold holographic-text text-center lg:text-left">Creator Benefits</h4>
                    
                    <div className="space-y-1">
                        <h5 className="font-semibold text-lg text-white">Growth Engine</h5>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-400 marker:text-white/40">
                            <li>Audience playbooks (organic + paid)</li>
                            <li>Link-in-bio builder with tracking</li>
                            <li>VIP waitlist + email/SMS capture</li>
                            <li>Weekly analytics and optimization</li>
                        </ul>
                    </div>
                    <div className="space-y-1">
                        <h5 className="font-semibold text-lg text-white">Operations</h5>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-400 marker:text-white/40">
                            <li>Content calendar &amp; posting workflows</li>
                            <li>Pricing, bundles, PPVs, promos</li>
                            <li>Template library: scripts, captions, offers</li>
                            <li>Brand kit and landing page</li>
                        </ul>
                    </div>
                    <div className="space-y-1">
                        <h5 className="font-semibold text-lg text-white">Compliance</h5>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-400 marker:text-white/40">
                            <li>18+ verification guidance &amp; checklists</li>
                            <li>DMCA notice/counter templates &amp; routing</li>
                            <li>Consent &amp; model release templates</li>
                        </ul>
                    </div>
                </div>

                {/* Icon Column */}
                <div className="space-y-8">
                    <h4 className="text-2xl font-bold holographic-text text-center lg:text-left">Icon Benefits</h4>
                     <div className="space-y-1">
                        <h5 className="font-semibold text-lg text-white">Concierge &amp; Scale</h5>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-400 marker:text-white/40">
                            <li>Dedicated strategist &amp; weekly revenue reviews</li>
                            <li>24/7 fan-management team</li>
                            <li>Guaranteed campaign slots and cross-promo</li>
                            <li>Done-for-you funnel builds and testing</li>
                        </ul>
                    </div>
                    <div className="space-y-1">
                        <h5 className="font-semibold text-lg text-white">Production &amp; Partnerships</h5>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-400 marker:text-white/40">
                            <li>Shoot planning, studios, editors, posting support</li>
                            <li>Collab sourcing and creator vetting</li>
                            <li>Sponsorship outreach &amp; negotiation support</li>
                        </ul>
                    </div>
                    <div className="space-y-1">
                        <h5 className="font-semibold text-lg text-white">Risk &amp; Legal</h5>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-400 marker:text-white/40">
                            <li>Priority takedowns and impersonation response</li>
                            <li>Escalations to platform contacts (when available)</li>
                            <li>KYC/2257 file hygiene reviews (creator-provided)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Membership;
