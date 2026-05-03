'use client';

import SkillCard from './SkillCard';
import {
  LogoHTML,
  LogoCSS,
  LogoJavaScript,
  LogoTailwind,
  LogoReact,
  LogoNode,
  LogoBootstrap,
  LogoSupabase,
  LogoPython,
  LogoJava,
  LogoVercel,
} from './TechLogos';

const skills = [
  { icon: <LogoHTML />, label: 'HTML' },
  { icon: <LogoCSS />, label: 'CSS' },
  { icon: <LogoJavaScript />, label: 'JavaScript' },
  { icon: <LogoTailwind />, label: 'Tailwind CSS' },
  { icon: <LogoReact />, label: 'ReactJS' },
  { icon: <LogoNode />, label: 'Node JS' },
  { icon: <LogoBootstrap />, label: 'Bootstrap' },
  { icon: <LogoSupabase />, label: 'Supabase' },
  { icon: <LogoPython />, label: 'Python' },
  { icon: <LogoJava />, label: 'Java' },
  { icon: <LogoVercel />, label: 'Vercel' },
];

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <SkillCard
          key={skill.label}
          icon={skill.icon}
          label={skill.label}
          delay={index * 0.05}
        />
      ))}
    </div>
  );
}
