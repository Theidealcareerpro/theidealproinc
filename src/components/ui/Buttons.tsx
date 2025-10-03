// src/components/ui/Buttons.tsx
import Link from 'next/link';

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="btn btn-primary !text-[hsl(var(--primary-foreground))]">
      {children}
    </Link>
  );
}
export function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="btn btn-ghost">{children}</Link>;
}
