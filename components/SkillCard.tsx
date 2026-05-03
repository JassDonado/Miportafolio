'use client';

import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
  delay?: number;
}

export default function SkillCard({ icon, label, delay = 0 }: SkillCardProps) {
  return (
    <div
      className="group relative flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 backdrop-blur-sm border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 h-32"
      style={{
        animation: `fadeInUp 0.6s ease-out ${delay}s both`,
      }}
    >
      <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 text-violet-400">
        {icon}
      </div>
      <p className="text-sm font-semibold text-gray-200 group-hover:text-violet-400 transition-colors">
        {label}
      </p>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
