export default function App() {
  const BLUE = "#005bbb";

  const sections = [
    {
      title: "Cos'è AVIS?",
      content:
        "AVIS è la più grande organizzazione italiana di volontariato del sangue e contribuisce a garantire circa il 70% del fabbisogno nazionale.",
      items: ["Solidarietà", "Gratuità", "Anonimato", "Periodicità"],
      emoji: "🩸",
    },
    {
      title: "Chi può donare?",
      items: [
        "Età compresa tra\n18 e 60 anni",
        "Peso superiore\na 50 kg",
        "Buono stato di salute",
        "Stile di vita sano",
      ],
      emoji: "✅",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#005bbb] font-sans text-white">
      
      {/* HERO */}
      <section className="relative bg-[#005bbb] px-6 pt-10 pb-0 text-center">

        {/* LOGO */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <div className="text-5xl font-black tracking-tight leading-none">
            <span className="text-white">AV</span>
            <span className="text-red-500">I</span>
            <span className="text-white">S</span>
          </div>

          <div className="text-left leading-none">
            <p className="text-white text-lg font-black">
              Regionale
            </p>

            <p className="text-white text-lg font-black">
              Calabria
            </p>
          </div>
        </div>

        {/* TITOLI */}
        <h1 className="whitespace-nowrap text-[clamp(1.9rem,7vw,5rem)] font-black uppercase tracking-tight leading-none">
          Il sangue <span className="text-red-500">salva vite.</span>
        </h1>

        <h2 className="mt-10 text-[clamp(1.7rem,6vw,3.5rem)] font-black uppercase leading-tight max-w-[360px] mx-auto">
          La tua scelta può fare
          <br />
          la differenza.
        </h2>

        {/* STRISCIA BIANCA */}
        <div className="mt-20 bg-white rounded-t-[3.5rem] h-[180px] relative">

          {/* BOTTONE */}
          <a
            href="https://www.aviscalabria.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[280px] h-[100px] rounded-full border-[6px] border-[#005bbb] bg-white text-[#005bbb] text-2xl font-black shadow-2xl"
          >
            Diventa
            <br />
            Donatore
          </a>
        </div>
      </section>

      {/* CARDS */}
      <section className="bg-[#005bbb] px-6 pt-10 pb-12 space-y-8">

        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-[2rem] bg-white px-7 py-8 text-[#005bbb] shadow-2xl"
          >

            {/* HEADER */}
            <div className="mb-7 flex items-center gap-4">
              <span className="text-4xl">
                {section.emoji}
              </span>

              <h3 className="text-3xl font-black uppercase leading-none">
                {section.title}
              </h3>
            </div>

            {/* TESTO */}
            {section.content && (
              <p className="text-[1.28rem] leading-relaxed">
                {section.content}
              </p>
            )}

            {/* BOTTONI */}
            {section.items && (
              <div className="mt-9 grid grid-cols-2 gap-5">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="flex min-h-[72px] items-center justify-center whitespace-pre-line rounded-full bg-[#005bbb] px-3 text-center text-[1rem] font-black leading-snug text-white shadow-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}
