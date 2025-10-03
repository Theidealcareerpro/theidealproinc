'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  /** Milliseconds (e.g., 80, 120). */
  delay?: number;
  /** Initial translateY in px. Default: 12 */
  y?: number;
  /** Optional extra classes on the wrapper */
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  y = 12,
  className,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: delay / 1000, // ms -> s
      }}
    >
      {children}
    </motion.div>
  );
}
