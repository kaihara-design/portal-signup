const STEPS = [
  {
    title: "Profile review",
    text: "Our sourcing team will match you to relevant tasks based on your background.",
  },
  {
    title: "First task invite",
    text: "You'll receive an invite with full instructions and compensation details.",
  },
];

const BADGE_GRADIENT = "linear-gradient(135deg, #403aea 0%, #381e9e 100%)";

export default function WelcomeEmailPreview() {
  return (
    <div className="min-h-screen bg-[#F6F6F6] flex flex-col items-center justify-start py-12 px-4 font-sans">
      {/* Preview label */}
      <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-8">
        Email Preview — Welcome Email
      </p>

      <div className="w-full max-w-[760px]">
        {/* Logo — outside card */}
        <div className="flex items-center justify-center mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/centaur-logo.svg" alt="Centaur" className="h-10 w-auto" />
        </div>

        {/* Email card */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#ede8f7]">

          {/* Hero */}
          <div className="px-10 pt-12 pb-10 flex flex-col items-center text-center">
            <p className="text-sm font-bold tracking-[0.12em] uppercase text-[#403aea] mb-3">
              Jane, YOU&apos;RE IN
            </p>
            <h1 className="text-[2.75rem] leading-[1.1] font-bold text-[#0f0a2e] mb-4">
              Welcome to the Specialist Network
            </h1>
            <p className="text-[15px] leading-relaxed text-[#4a4060] max-w-[500px]">
              You&apos;re now part of a vetted community of domain experts contributing
              to high-impact AI projects. Here&apos;s what comes next.
            </p>
          </div>

          {/* Divider */}
          <div className="mx-10 border-t border-[#F0EBF8]" />

          {/* What happens next */}
          <div className="px-10 py-8 space-y-6">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#0f0a2e] uppercase">
              What happens next
            </p>

            {STEPS.map(({ title, text }, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  className="mt-0.5 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-bold text-white"
                  style={{ background: BADGE_GRADIENT }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0f0a2e] mb-0.5">{title}</p>
                  <p className="text-sm text-[#4a4060] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="px-10 pb-10">
            <a
              href="/dashboard"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-colors"
              style={{ background: BADGE_GRADIENT }}
            >
              Go to your dashboard
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer — outside card */}
        <div className="py-7 text-center space-y-1">
          <p className="text-[13px] text-[#4a4060]">
            Questions? Reach out to your Centaur project manager at{" "}
            <a href="mailto:pm@centaurlabs.com" className="text-[#403aea] font-medium hover:underline">
              pm@centaurlabs.com
            </a>
          </p>
          <p className="text-[12px] text-[#94a3b8]">
            You&apos;re receiving this because you signed up as a specialist on Centaur.{" "}
            <a href="#" className="hover:underline">Unsubscribe</a>
          </p>
          <p className="text-[12px] text-[#94a3b8] pt-1">© 2025 Centaur Labs</p>
        </div>
      </div>
    </div>
  );
}
