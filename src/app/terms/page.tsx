// src/app/terms/page.tsx
export const metadata = {
  title: 'Terms — The Ideal Professional Inc.',
  description: 'Fair-use guidelines for our ecosystem.',
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight">Terms</h1>
      <p className="mt-3 text-[hsl(var(--ink-dim))]">
        By using our websites, tools, and content, you agree to fair use, no unauthorized scraping,
        and respect for usage limits. We may update these terms to reflect new features or legal requirements.
      </p>

      <div className="mt-6 space-y-4 text-sm">
        <section>
          <h2 className="text-base font-semibold">Use of services</h2>
          <ul className="mt-2 list-disc pl-5 text-[hsl(var(--ink-dim))]">
            <li>Don’t abuse free tiers, spam, or circumvent limits.</li>
            <li>Respect intellectual property and privacy laws.</li>
            <li>Donations are optional and non-refundable.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold">Liability</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">
            Services are provided “as is” without warranties. We’re not liable for indirect or incidental damages.
          </p>
        </section>
      </div>
    </main>
  );
}
