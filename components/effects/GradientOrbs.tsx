export function GradientOrbs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="animate-pulse-glow absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(200,200,210,0.14)_0%,transparent_68%)] blur-2xl" />
      <div className="animate-float absolute right-[-80px] top-32 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(160,160,175,0.12)_0%,transparent_70%)] blur-2xl" />
      <div className="absolute bottom-0 left-1/3 h-[280px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(120,120,135,0.1)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
    </div>
  );
}
