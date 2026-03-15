import { coreSkills } from '@/data/skills';

export default function TechPill({ name }: { name: string }) {
  const isCore = coreSkills.has(name);

  return (
    <span
      className={`inline-block rounded-md px-2.5 py-1 font-mono text-[11px] font-medium leading-none
        ${isCore
          ? 'bg-[var(--core-bg)] text-[var(--core-text)]'
          : 'bg-[var(--pill-bg)] text-[var(--pill-text)]'
        }`}
    >
      {name}
    </span>
  );
}
