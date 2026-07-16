'use client'

import SectionHeading from '@/components/SectionHeading'
import FeatureCard from '@/components/FeatureCard'
import { Zap, Target, Dumbbell, Shield, Brain, Award } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Full Contact Realism',
    description:
      'Train the way you fight. Shidokan tournaments allow strikes, kicks, knees, elbows, and grappling — no pads, no excuses.',
  },
  {
    icon: Target,
    title: 'Technical Precision',
    description:
      'Every technique is built on a foundation of classical karate. Precision, timing, and form are non-negotiable at every level.',
  },
  {
    icon: Dumbbell,
    title: 'Serious Conditioning',
    description:
      'Our training regimen forges real-world fitness. Expect to be pushed beyond what you thought was possible.',
  },
  {
    icon: Shield,
    title: 'Practical Self-Defense',
    description:
      'By combining striking and grappling, you develop well-rounded skills that work in any real-world situation.',
  },
  {
    icon: Brain,
    title: 'Discipline That Transfers',
    description:
      'The focus, resilience, and work ethic built on the mat carry directly into school, career, and life.',
  },
  {
    icon: Award,
    title: 'Earned Rank',
    description:
      'Every belt at Shidokan is tested under pressure. Our ranks mean something — because you had to fight for them.',
  },
]

export default function WhatIsShidokan() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <SectionHeading
          eyebrow="The System"
          title="Karate. Muay Thai. Grappling. One System."
          subtitle="Shidokan is the only martial art that combines the three pillars of combat into a single integrated system — tested in full-contact competition for over four decades."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={i}
          />
        ))}
      </div>
    </section>
  )
}
