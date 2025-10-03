// src/app/privacy/page.tsx
export const metadata = {
  title: 'Privacy — The Ideal Professional Inc.',
  description: 'How we handle data with respect and restraint.',
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight">Privacy</h1>
      <p className="mt-3 text-[hsl(var(--ink-dim))]">
        We keep data collection minimal and purpose-driven. Payments occur on trusted third parties
        (e.g., Buy Me a Coffee), and we never store card details.
      </p>

      <div className="mt-6 space-y-4 text-sm">
        <section>
          <h2 className="text-base font-semibold">What we collect</h2>
          <ul className="mt-2 list-disc pl-5 text-[hsl(var(--ink-dim))]">
            <li>Anonymous device fingerprint for usage limits.</li>
            <li>Contact form submissions (name, email, message).</li>
            <li>Basic analytics to improve content and performance.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold">Why we collect it</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">
            To keep the platform sustainable, fair, and secure; and to respond to your requests.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold">Your choices</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">
            You can request data export or deletion by contacting us on the Contact page.
          </p>
        </section>
      </div>
    </main>
  );
}
