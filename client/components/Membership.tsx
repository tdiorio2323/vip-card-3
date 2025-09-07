import React from 'react';
import Button from './ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { cn } from '../lib/utils';

// --- Icons for Creator Tier Benefits ---
const CommunityIcon = () => (
    <div className="w-10 h-10 rounded-lg bg-amber-900/50 border border-amber-500/30 flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962A3 3 0 013 10.5V18a3 3 0 01-3-3v-2.25m10.5 5.25c.938-1.123 2.541-1.465 4.087-1.332m-4.087-1.332c-1.546.133-3.149.475-4.087 1.332M5.25 10.5A3.375 3.375 0 002.25 12a3.375 3.375 0 003 1.5m0-1.5a3.375 3.375 0 013-1.5m0 1.5a3.375 3.375 0 013 1.5m0-1.5a3.375 3.375 0 003-1.5m0 1.5a3.375 3.375 0 00-3-1.5m-9 3.75a3.375 3.375 0 003 1.5m0-1.5a3.375 3.375 0 013-1.5m0 1.5a3.375 3.375 0 013 1.5m0-1.5a3.375 3.375 0 003-1.5m0 1.5a3.375 3.375 0 00-3-1.5m-9 3.75a3.375 3.375 0 013 1.5m0-1.5a3.375 3.375 0 00-3-1.5m-6-3a3 3 0 013-3h6a3 3 0 013 3v2.25a3 3 0 01-3 3h-6a3 3 0 01-3-3V10.5z" /></svg>
    </div>
);
const EventIcon = () => (
    <div className="w-10 h-10 rounded-lg bg-amber-900/50 border border-amber-500/30 flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /></svg>
    </div>
);
const NetworkIcon = () => (
    <div className="w-10 h-10 rounded-lg bg-amber-900/50 border border-amber-500/30 flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
    </div>
);

// --- Icons for Icon Tier Benefits ---
const VipIcon = () => (
    <div className="w-10 h-10 rounded-lg bg-red-900/50 border border-red-500/30 flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--brand-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
    </div>
);
const ConciergeIcon = () => (
    <div className="w-10 h-10 rounded-lg bg-red-900/50 border border-red-500/30 flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--brand-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
    </div>
);
const ReservationIcon = () => (
    <div className="w-10 h-10 rounded-lg bg-red-900/50 border border-red-500/30 flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--brand-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg>
    </div>
);


const membershipTiers = [
  {
    name: 'Creator',
    description: 'The essential Cabana experience.',
    features: [
      'Access to all club spaces',
      'Priority event invitations',
      'Creator networking portal',
      'Complimentary welcome beverage',
    ],
    cta: 'Select Creator',
    glowClasses: 'from-amber-400 to-yellow-600',
  },
  {
    name: 'Icon',
    description: 'Unparalleled luxury and access.',
    features: [
      'All Creator benefits',
      'Exclusive VIP lounge access',
      'Private concierge service',
      'Guaranteed reservations',
    ],
    cta: 'Become an Icon',
    glowClasses: 'from-[var(--brand-red)] to-fuchsia-600',
  },
];

const detailedBenefits = {
    Creator: [
        {
            icon: <CommunityIcon />,
            title: "Vibrant Community Spaces",
            description: "Gain full access to our main lounge, dynamic co-working areas, and sound-proof content booths, all meticulously designed for collaboration and creativity."
        },
        {
            icon: <EventIcon />,
            title: "Priority Event Access",
            description: "Receive early-bird invitations and preferential booking for our curated calendar of events, from exclusive industry panels to legendary nightlife experiences."
        },
        {
            icon: <NetworkIcon />,
            title: "Digital Networking Portal",
            description: "Connect with fellow members through our exclusive online portal. Showcase your work, discover collaborators, and forge meaningful professional connections."
        }
    ],
    Icon: [
        {
            icon: <VipIcon />,
            title: "The Sanctuary VIP Lounge",
            description: "An exclusive, opulent space reserved solely for Icon members. Enjoy top-shelf service, unparalleled privacy, and a private bar with a dedicated mixologist."
        },
        {
            icon: <ConciergeIcon />,
            title: "Personal Concierge Service",
            description: "Your dedicated concierge is on hand to manage everything from dinner reservations at impossible-to-book restaurants to bespoke travel arrangements."
        },
        {
            icon: <ReservationIcon />,
            title: "Guaranteed Reservations",
            description: "Never miss out. Icon members enjoy guaranteed table reservations for themselves and their guests, even on our busiest nights. Subject to fair use policy."
        }
    ]
};

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[var(--brand-red)]">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
    </svg>
);

const Membership: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Choose Your Experience
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Join a curated community of creators and connoisseurs at the heart of nightlife innovation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {membershipTiers.map((tier) => (
            <div key={tier.name} className="group relative">
                <div className={cn(
                    "absolute -inset-0.5 bg-gradient-to-r rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-1000 group-hover:duration-200",
                    tier.glowClasses
                )}></div>
                <Card className="relative h-full flex flex-col transition-all duration-300 group-hover:scale-101">
                <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <ul className="space-y-3 text-neutral-300">
                    {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
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
            <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    An Unrivaled Experience
                </h3>
                <p className="mt-4 text-lg text-neutral-400">
                    Discover the fine details that make each membership level a unique key to the world of Cabana.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
                {/* Creator Column */}
                <div className="space-y-10">
                    <h4 className="text-3xl font-bold holographic-text text-center lg:text-left">Creator Benefits</h4>
                    {detailedBenefits.Creator.map((benefit) => (
                        <div key={benefit.title} className="flex items-start gap-4">
                            {benefit.icon}
                            <div>
                                <h5 className="font-semibold text-lg text-white">{benefit.title}</h5>
                                <p className="mt-1 text-neutral-400">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Icon Column */}
                <div className="space-y-10">
                    <h4 className="text-3xl font-bold holographic-text text-center lg:text-left">Icon Benefits</h4>
                    {detailedBenefits.Icon.map((benefit) => (
                        <div key={benefit.title} className="flex items-start gap-4">
                            {benefit.icon}
                            <div>
                                <h5 className="font-semibold text-lg text-white">{benefit.title}</h5>
                                <p className="mt-1 text-neutral-400">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Membership;
