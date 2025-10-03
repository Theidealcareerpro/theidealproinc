import Reveal from '@/components/visual/Reveal';

type CaseStudy = {
  kpi: string;       // headline metric
  title: string;     // short title
  problem: string;
  action: string;
  outcome: string;
  cta?: { label: string; href: string };
};

const data: CaseStudy[] = [
  {
    kpi: '+48% CV→interview',
    title: 'ProGen — ATS uplift',
    problem: 'Strong candidates were getting silent rejections.',
    action: 'Reframed experience into ATS-friendly language with quantified wins.',
    outcome: 'Meaningful callback lift within two application cycles.',
    cta: { label: 'Try ProGen', href: 'https://grokpro.vercel.app/' },
  },
  {
    kpi: '2–6 week sprints',
    title: 'ProCoach — time-to-offer',
    problem: 'Portfolio lacked narrative & signal.',
    action: 'Mentor-led sprints: case studies, mock interviews, outreach scripts.',
    outcome: 'Interviews booked + offer confidence up.',
    cta: { label: 'Request mentorship', href: '/contact?subject=Mentorship%20Request' },
  },
  {
    kpi: '↑ SME reporting',
    title: 'ProBiz — ops clarity',
    problem: 'Manual processes & zero visibility.',
    action: 'Lean dashboards + process blueprints.',
    outcome: 'Decisions sped up; errors down.',
    cta: { label: 'Request a quote', href: '/contact?subject=ProBiz%20Consulting' },
  },
];

export default function CaseStudies() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {data.map((cs, i) => (
        <Reveal key={cs.title} delay={60 + i * 50}>
          <article className="card group overflow-hidden p-5">
            <div className="text-xs text-[hsl(var(--primary))]">{cs.kpi}</div>
            <h3 className="mt-1 text-base font-semibold">{cs.title}</h3>
            <dl className="mt-3 space-y-2 text-sm text-[hsl(var(--ink-dim))]">
              <div>
                <dt className="font-medium text-[hsl(var(--ink))]">Problem</dt>
                <dd>{cs.problem}</dd>
              </div>
              <div>
                <dt className="font-medium text-[hsl(var(--ink))]">Action</dt>
                <dd>{cs.action}</dd>
              </div>
              <div>
                <dt className="font-medium text-[hsl(var(--ink))]">Outcome</dt>
                <dd>{cs.outcome}</dd>
              </div>
            </dl>
            {cs.cta && (
              <a className="mt-4 inline-block text-sm underline opacity-80 hover:opacity-100" href={cs.cta.href}>
                {cs.cta.label} →
              </a>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  );
}
