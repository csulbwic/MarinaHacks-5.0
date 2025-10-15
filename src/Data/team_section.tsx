'use client';
import Image from "next/image";
import { useState } from "react";
import { members } from "./members";

// desired order to match your plan
type GroupKey = 1 | 2 | 3 | 4 | 5;
const ORDER: GroupKey[] = [1, 4, 3, 5, 2];

const GROUP_META: Record<GroupKey, { title: string; id: string; ring: string; badge: string }> = {
  1: { title: "Directors",            id: "directors",             ring: "ring-pink-300",    badge: "bg-pink-200 text-pink-800" },
  2: { title: "WiC Officers",         id: "officers",              ring: "ring-lime-300",    badge: "bg-lime-200 text-lime-800" },
  3: { title: "Website Committee",    id: "website-committee",     ring: "ring-rose-300",    badge: "bg-rose-200 text-rose-800" },
  4: { title: "Design Committee",     id: "design-committee",      ring: "ring-fuchsia-300", badge: "bg-fuchsia-200 text-fuchsia-800" },
  5: { title: "Sponsorship Committee",id: "sponsorship-committee", ring: "ring-cyan-300",    badge: "bg-cyan-200 text-cyan-800" },
};

// Placeholder art in /public/images/
const PLACEHOLDER_BY_TYPE: Record<string, string> = {
  director:    "/images/mermaid.png",
  officer:     "/images/shark.png",
  website:     "/images/mermaid.png",
  designer:    "/images/mermaid.png",
  sponsorship: "/images/shark.png",
};

// safe image that swaps to placeholder if 404
function SafeImage({
  src,
  alt,
  fallback,
  ringClass,
}: {
  src?: string;
  alt: string;
  fallback: string;
  ringClass: string;
}) {
  const initial = src ? (src.startsWith("/") ? src : `/${src}`) : fallback;
  const [imgSrc, setImgSrc] = useState(initial);

  return (
    <div className={`relative h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-full ring-4 ${ringClass} bg-white`}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes="112px"
        className="object-cover"
        onError={() => setImgSrc(fallback)}
      />
    </div>
  );
}

export default function TeamsSection() {
  // group by "group"
  const grouped = members.reduce<Record<GroupKey, typeof members>>((acc, m: any) => {
    const key = (m.group as GroupKey) ?? 3;
    (acc[key] ||= []).push(m);
    return acc;
  }, {} as any);

  return (
    <section id="teams" className="py-16 bg-sky-50">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sky-200 text-sky-900 text-sm font-semibold">
            🌊 Meet the Team
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-sky-900">
            Directors, Officers & Committees
          </h2>
          <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-pink-300 via-sky-300 to-fuchsia-300" />
        </header>

        <div className="space-y-14">
          {ORDER.map((g) => {
            const list = grouped[g] ?? [];
            if (!list.length) return null;

            const meta = GROUP_META[g];
            const leads = list.filter((m) => /lead/i.test(m.role ?? ""));
            const rest  = list.filter((m) => !/lead/i.test(m.role ?? ""));

            const Card = ({ m }: { m: any }) => {
              const fallback = PLACEHOLDER_BY_TYPE[m.committeeType] || "/images/mermaid.png";
              return (
                <li className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
                  <div className="flex flex-col items-center p-5">
                    <SafeImage
                      src={m.img}
                      alt={m.name}
                      fallback={fallback}
                      ringClass={meta.ring}
                    />
                    <h4 className="mt-3 text-base font-semibold text-center text-sky-900">{m.name}</h4>
                    {g === 2 ? (
                      <p className="text-sm text-gray-800">{m.role ?? "Officer"}</p>
                    ) : (
                      <p className="text-sm text-gray-600">{m.role ?? "Member"}</p>
                    )}
                  </div>
                </li>
              );
            };

            return (
              <section key={g} id={meta.id}>
                <h3 className={`inline-flex items-center rounded-full px-4 py-1 text-base md:text-lg font-bold ${meta.badge}`}>
                  {meta.title}
                </h3>

                {leads.length > 0 && (
                  <>
                    <p className="mt-3 text-sm text-gray-700">
                      <span className="font-semibold">Lead(s):</span> {leads.map((m) => m.name).join(", ")}
                    </p>
                    <ul className="mt-4 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                      {leads.map((m) => <Card key={`lead-${m.name}`} m={m} />)}
                    </ul>
                  </>
                )}

                <ul className="mt-6 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {rest.map((m) => <Card key={m.name} m={m} />)}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
