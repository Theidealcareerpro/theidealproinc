// src/components/visual/GradientText.tsx
import * as React from 'react';

export default function GradientText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`bg-gradient-to-r from-[hsl(220,90%,60%)] via-[hsl(250,90%,65%)] to-[hsl(280,85%,65%)] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
