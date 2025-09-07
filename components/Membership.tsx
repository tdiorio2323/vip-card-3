import React, { useRef } from 'react';
import Button from './ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { cn } from '../lib/utils';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

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
    highlight: false,
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
    highlight: true,
  },
];

const BulletIcon: React.FC = () => (
    <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500" />
);

const Membership: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  return (
    <section 
      ref={sectionRef}
      className={cn(
        "py-20 sm:py-32 px-4 bg-[#0A0A0A] transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
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
            <Card 
              key={tier.name}
              className={cn(
                'relative h-full flex flex-col backdrop-blur-xl',
                tier.highlight
                  ? "border-fuchsia-400/30 bg-fuchsia-400/5 shadow-[0_0_50px_rgba(255,0,200,.15)]"
                  : "border-white/10 bg-white/[0.03]"
              )}
            >
              <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                  <ul className="space-y-3 text-neutral-300">
                  {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                          <BulletIcon />
                          <span>{feature}</span>
                      </li>
                  ))}
                  </ul>
              </CardContent>
              <CardFooter>
                  <Button variant={tier.highlight ? 'primary' : 'outline'} className="w-full">
                  {tier.cta}
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;