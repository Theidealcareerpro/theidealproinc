// Simple laptop/phone frames using pure CSS
import { PropsWithChildren } from 'react';

export function LaptopFrame({ children }: PropsWithChildren) {
  return (
    <div className="relative mx-auto w-full max-w-[720px] rounded-2xl border bg-white shadow-card">
      <div className="absolute -top-2 left-1/2 h-3 w-24 -translate-x-1/2 rounded-b-xl bg-black/80" />
      <div className="rounded-2xl border bg-white p-3">{children}</div>
      <div className="h-2 rounded-b-2xl bg-gradient-to-b from-transparent to-black/5" />
    </div>
  );
}

export function PhoneFrame({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto w-[300px] rounded-[2rem] border bg-white p-3 shadow-card">
      <div className="mx-auto mb-2 h-1.5 w-20 rounded-full bg-black/80" />
      <div className="overflow-hidden rounded-[1.4rem] border">{children}</div>
    </div>
  );
}
