import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="relative flex min-h-[calc(100vh-69px)] items-center justify-center py-20 px-4">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.stockcake.com/public/1/d/5/1d56e129-ac34-4afb-b7b9-d427a00d59f2_large/nighttime-coding-session-stockcake.jpg")',
            filter: "blur(4px)",
          }}
        ></div>
        <div
          className="relative z-10 text-center animate-fade-in-down"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em]">
            Diego Remicio
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-normal leading-normal mt-4 mb-8">
            Software Engineer | Building innovative solutions with code
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md h-12 px-8 bg-[var(--primary-color)] text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            View My Work
          </Link>
        </div>
      </section>
      <section className="py-24 px-10 bg-[#0D0D0D]" id="about">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-48 w-48 border-4 border-[var(--primary-color)] shadow-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCg6Lz6qGVbpPE9biHJQOZ4U39oVPP06DolTBE-xglpHAUqGL9aK95YirKxPGO5ppgU4WgOZ5FxAlZPvSg9w9D15TlknknPhwsEp7KHcgmrZPryGJ9YIZTPNUdz26BH-WdZLzNZWd3k3achdf50QaC_TFSK5U6JQyo0jtqUzhImIU1bnba9ZwrUk9Pj538AP7tP7v9IR4-zko0OG3gDJ-lsfSY6jLKtW-iUudCPXByXIukNTPxP64wk8y9WNf-gQJgfuhXZRqOC7-lE")',
              }}
            ></div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-white text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
              About Me
            </h2>
            <p className="text-[#9db0b9] text-lg font-normal leading-relaxed">
              I&apos;m an experienced software engineer with a deep passion for
              creating efficient, scalable, and user-friendly applications. My
              expertise lies in full-stack web development and exploring the vast
              potential of AI technologies. I&apos;m driven by the challenge of
              solving complex problems and turning innovative ideas into reality.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}