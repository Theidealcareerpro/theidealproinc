// src/components/ContactForm.tsx
'use client';

import * as React from 'react';

export default function ContactForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [topic, setTopic] = React.useState('Request a quote');
  const [message, setMessage] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // TODO: wire to your API or email service.
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-lg border border-[hsl(var(--success))] bg-[hsl(var(--success))/0.1] p-4 text-sm">
        Thank you! We’ve received your message and will get back to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-1.5">
        <label className="text-sm font-medium">Name</label>
        <input
          className="input"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
        />
      </div>

      <div className="grid gap-1.5">
        <label className="text-sm font-medium">Email</label>
        <input
          className="input"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
        />
      </div>

      <div className="grid gap-1.5">
        <label className="text-sm font-medium">Topic</label>
        <select
          className="input"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option>Request a quote</option>
          <option>Partnership</option>
          <option>General question</option>
        </select>
      </div>

      <div className="grid gap-1.5">
        <label className="text-sm font-medium">Message</label>
        <textarea
          className="input min-h-32"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us a bit about your needs…"
        />
      </div>

      <div className="flex items-center gap-3">
        <button className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send message'}
        </button>
        <a
          className="btn btn-secondary"
          href={`mailto:hello@theidealprofessional.com?subject=${encodeURIComponent(
            topic,
          )}&body=${encodeURIComponent(`${name} <${email}>\n\n${message}`)}`}
        >
          Or email us directly
        </a>
      </div>
    </form>
  );
}
