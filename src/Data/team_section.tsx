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
    <div className={`relative h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-full ${ringClass} bg-white`}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes="96px"
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
    <section id="teams" className="py-16 bg-gradient-to-b from-blue-50 to-pink-50 relative overflow-hidden">
      {/* Marine Background Decorations - Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-10 animate-pulse">
          <Image src="/images/mermaid.png" alt="mermaid" width={40} height={40} />
        </div>
        <div className="absolute top-40 right-20 opacity-8 animate-bounce" style={{animationDuration: '6s'}}>
          <Image src="/images/shell.png" alt="shell" width={30} height={30} />
        </div>
        <div className="absolute bottom-40 left-20 opacity-10 animate-pulse" style={{animationDelay: '3s'}}>
          <Image src="/images/turtle_with_heart.png" alt="turtle" width={35} height={35} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-8 animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}>
          <Image src="/images/flower.png" alt="flower" width={30} height={30} />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet the Team
          </h2>
        </header>

        <div className="space-y-16">
          {ORDER.map((g) => {
            const list = grouped[g] ?? [];
            if (!list.length) return null;

            const meta = GROUP_META[g];

            const Card = ({ m }: { m: any }) => {
              const fallback = PLACEHOLDER_BY_TYPE[m.committeeType] || "/images/mermaid.png";
              return (
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-3">
                    <SafeImage
                      src={m.img}
                      alt={m.name}
                      fallback={fallback}
                      ringClass="ring-2 ring-white shadow-md"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">{m.name}</h4>
                  <p className="text-xs text-gray-600 leading-tight">{m.role ?? "Member"}</p>
                </div>
              );
            };

            return (
              <section key={g} id={meta.id} className="relative">
                <div className="text-center mb-8">
                  <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${g === 1 ? 'text-pink-600' : g === 2 ? 'text-blue-600' : g === 3 ? 'text-purple-600' : g === 4 ? 'text-cyan-600' : 'text-green-600'}`}>
                    {meta.title.toUpperCase()}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
                  {list.map((m) => <Card key={m.name} m={m} />)}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
