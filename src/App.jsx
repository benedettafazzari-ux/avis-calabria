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
    {
      title: "Come ottenere l'idoneità",
      emoji: "📋",
    },
  ];

  const idoneitaSteps = [
    "Contatta la sede AVIS più vicina",
    "Svolgi colloquio medico e controlli",
    "Ricevi l’esito e la conferma finale",
  ];

  const donationUses = [
    "Emergenze",
    "Interventi chirurgici",
    "Terapie oncologiche",
    "Malattie croniche",
  ];

  const stats = [
    { value: "10/15 min", label: "Durata della donazione" },
    { value: "450 ml", label: "Volume del prelievo" },
    { value: "90 giorni", label: "Tra due donazioni di sangue" },
  ];

  const foodTips = [
    {
      title: "La sera prima",
      text: "Scegli una cena leggera, evita pasti troppo pesanti e bevi acqua a sufficienza.",
    },
    {
      title: "La mattina del prelievo",
      text: "Fai una colazione semplice: frutta fresca o spremute, tè o caffè poco zuccherati, pane o altri carboidrati leggeri. Evita latte e derivati.",
    },
  ];

  const faq = [
    { q: "Fa male?", a: "Il fastidio è minimo e dura pochi secondi." },
    { q: "Quanto dura una donazione?", a: "Circa 10-15 minuti." },
    {
      q: "È sicuro?",
      a: "Sì, tutto il materiale utilizzato è sterile e monouso.",
    },
    {
      q: "Se ho un tatuaggio posso donare?",
      a: "Sì, ma di solito bisogna attendere 4 mesi dal tatuaggio o dal piercing, per sicurezza.",
    },
    {
      q: "Se fumo posso donare?",
      a: "Sì, ma è meglio evitare di fumare subito prima e subito dopo la donazione.",
    },
  ];

  const provinces = [
    {
      name: "Cosenza",
      sigla: "CS",
      href: "https://www.aviscalabria.it/sedi/cosenza/",
      top: "9%",
      left: "30%",
    },
    {
      name: "Crotone",
      sigla: "KR",
      href: "https://www.aviscalabria.it/sedi/crotone/",
      top: "34%",
      left: "58%",
    },
    {
      name: "Catanzaro",
      sigla: "CZ",
      href: "https://www.aviscalabria.it/sedi/catanzaro/",
      top: "45%",
      left: "45%",
    },
    {
      name: "Vibo Valentia",
      sigla: "VV",
      href: "https://www.aviscalabria.it/sedi/vibo-valentia/",
      top: "61%",
      left: "32%",
    },
    {
      name: "Reggio Calabria",
      sigla: "RC",
      href: "https://www.aviscalabria.it/sedi/reggio-calabria/",
      top: "78%",
      left: "43%",
    },
  ];

  const socialLinks = ["Instagram", "TikTok", "Facebook"];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#005bbb] font-sans text-white">
      <nav className="fixed top-0 left-0 z-50 hidden w-full border-b border-white/15 bg-[#005bbb] md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4">
          <div className="flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
            <a
              href="https://www.aviscalabria.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition"
            >
              AVIS
            </a>
            <a href="#donazione" className="hover:text-white/70 transition">
              Donazione
            </a>
            <a href="#mangiare" className="hover:text-white/70 transition">
              Cosa mangiare
            </a>
            <a href="#mappa" className="hover:text-white/70 transition">
              Sedi
            </a>
            <a href="#faq" className="hover:text-white/70 transition">
              FAQ
            </a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-[#005bbb] px-6 pt-10 pb-44 text-white">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
         <div className="mb-8 flex items-center justify-center gap-3">
          <div className="text-5xl font-black leading-none tracking-tight">
            <span className="text-white">AV</span>
            <span className="text-[#e30613]">I</span>
            <span className="text-white">S</span>
          </div>
        
          <div className="text-left leading-none">
            <p className="text-xl font-black text-white">Giovani</p>
            <p className="text-xl font-black text-white">Calabria</p>
          </div>
        </div>

          <h1 className="whitespace-nowrap text-[clamp(1.8rem,7vw,5rem)] font-black uppercase leading-none tracking-tight">
            IL SANGUE <span className="text-[#e30613]">SALVA VITE.</span>
          </h1>

          <p className="mt-8 text-[clamp(1.2rem,5vw,2.4rem)] font-black uppercase leading-tight">
            LA TUA SCELTA PUÒ FARE
            <br />
            LA DIFFERENZA.
          </p>
        </div>

       <div className="absolute bottom-0 left-1/2 h-40 w-[88%] -translate-x-1/2 rounded-t-[4rem] bg-white" />

        <a
          href="https://www.aviscalabria.it/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 bottom-16 z-20 flex h-[76px] w-[250px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-[5px] border-[#005bbb] bg-white text-center text-[1.45rem] font-black leading-tight text-[#005bbb] shadow-2xl"
        >
          Diventa Donatore
        </a>
      </section>

      <section
        id="avis"
        className="bg-[#005bbb] px-6 pt-10 pb-12 space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 md:px-10"
      >
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-[2rem] bg-white px-7 py-8 text-left text-[#005bbb] shadow-2xl"
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="text-3xl">{section.emoji}</span>

              <h3 className="text-2xl font-black uppercase leading-tight">
                {section.title}
              </h3>
            </div>

            {section.content ? (
              <p className="text-[1.1rem] leading-snug text-[#005bbb]/90">
                {section.content}
              </p>
            ) : null}

            {section.title === "Come ottenere l'idoneità" ? (
              <div className="mt-6 flex flex-col gap-3">
                {idoneitaSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 rounded-2xl bg-[#005bbb] px-4 py-3 font-bold text-white"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-[#005bbb]">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-snug">{step}</span>
                  </div>
                ))}
              </div>
            ) : null}

            {section.items ? (
              <div className="mt-8 grid grid-cols-2 gap-4">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="flex min-h-[58px] items-center justify-center whitespace-pre-line rounded-full bg-[#005bbb] px-3 py-2 text-center text-[0.85rem] font-black leading-tight text-white shadow-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </section>

      <section className="bg-white px-6 py-20 text-center text-[#005bbb]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">
            Una donazione può salvare fino a 3 vite
          </h2>

          <p className="mt-10 mb-4 text-2xl font-black text-[#005bbb]/80 md:text-3xl">
            Il sangue è fondamentale per:
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-4">
            {donationUses.map((item) => (
              <div
                key={item}
                className="rounded-[2rem] bg-[#005bbb] p-8 text-xl font-bold text-white shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="donazione" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="whitespace-nowrap text-2xl font-black uppercase leading-tight md:text-5xl">
            La donazione di sangue
          </h2>

          <p className="mt-4 whitespace-nowrap text-sm font-bold uppercase tracking-[0.12em] text-white/80 md:text-base md:tracking-[0.3em]">
            Tempi, quantità e frequenza
          </p>
        </div>

        <div className="grid gap-8 text-center md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-[2rem] bg-white p-10 text-[#005bbb] shadow-xl"
            >
              <p className="text-5xl font-black">{stat.value}</p>
              <p className="mt-4 text-lg text-[#005bbb]/85">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="mangiare" className="bg-white px-6 py-24 text-[#005bbb]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-4 font-bold uppercase tracking-[0.3em] text-[#005bbb]/70">
              Preparati al meglio
            </p>

            <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">
              Cosa mangiare prima della donazione
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#005bbb]/80">
              Bastano poche attenzioni per arrivare al prelievo in modo sereno e
              sicuro.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {foodTips.map((tip) => (
              <article
                key={tip.title}
                className="rounded-[2rem] bg-[#005bbb] p-8 text-white shadow-xl"
              >
                <h3 className="mb-5 text-3xl font-black uppercase">
                  {tip.title}
                </h3>
                <p className="text-lg leading-relaxed text-white/90">
                  {tip.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mappa" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-8 text-4xl font-black uppercase leading-tight md:text-6xl">
              Trova la tua AVIS provinciale
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/90">
              Clicca sulla provincia della mappa o sui bottoni per aprire la
              pagina ufficiale.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <p className="text-xl font-black uppercase leading-tight md:text-3xl">
                Scegli la tua provincia e trova subito il riferimento AVIS più
                vicino a te.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-xl">
              <div className="relative mx-auto h-[560px] w-full max-w-[360px]">
                <svg
                  viewBox="0 0 240 420"
                  className="absolute inset-0 h-full w-full"
                  aria-label="Sagoma stilizzata della Calabria"
                >
                  <path
                    d="M72 8 C112 18 136 42 144 78 C152 116 184 132 196 164 C208 196 180 226 190 260 C200 292 220 312 204 344 C190 374 152 372 140 404 C112 392 108 356 88 332 C66 306 42 284 52 250 C62 214 36 190 42 154 C48 116 24 74 48 40 C54 30 62 18 72 8 Z"
                    fill={BLUE}
                    stroke={BLUE}
                    strokeWidth="8"
                    strokeLinejoin="round"
                  />
                </svg>

                {provinces.map((province) => (
                  <a
                    key={province.sigla}
                    href={province.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-[#005bbb] bg-white font-black text-[#005bbb] shadow-xl"
                    style={{ top: province.top, left: province.left }}
                    aria-label={`Apri AVIS Provinciale ${province.name}`}
                    title={`AVIS Provinciale ${province.name}`}
                  >
                    <span className="text-xl leading-none">
                      {province.sigla}
                    </span>
                    <span className="mt-1 text-[10px] font-bold uppercase">
                      Vai
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {provinces.map((province) => (
                  <a
                    key={province.name}
                    href={province.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#005bbb] px-4 py-3 text-center text-sm font-bold text-white"
                  >
                    {province.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="relative overflow-hidden bg-white px-6 py-24 text-[#005bbb]"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-14 text-5xl font-black uppercase md:text-6xl">
            FAQ
          </h2>

          <div className="space-y-6 text-left">
            {faq.map((item) => (
              <article
                key={item.q}
                className="rounded-[2rem] bg-[#005bbb] p-8 text-white shadow-lg"
              >
                <h3 className="text-2xl font-black">{item.q}</h3>
                <p className="mt-4 text-lg leading-relaxed text-white/90">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="volontariato"
        className="relative overflow-hidden px-6 py-28 text-center"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-black uppercase leading-tight md:text-5xl">
            Dona il tuo tempo.
            <br />
            <span className="whitespace-nowrap">Diventa volontario AVIS.</span>
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-white/85 md:text-2xl">
            Partecipa ad eventi, attività sul territorio e iniziative dedicate
            ai giovani.
          </p>

          <a
            href="https://www.avis.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 inline-block rounded-full bg-white px-12 py-6 text-xl font-black text-[#005bbb] shadow-xl"
          >
            Unisciti ad AVIS
          </a>
        </div>
      </section>

      <footer className="border-t border-white/15 px-6 py-8 text-center text-sm text-white/80">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-3 text-lg font-black uppercase text-white">
            Seguici sui social
          </h3>

          <div className="mb-5 flex flex-wrap justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social}
                href="#"
                className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#005bbb]"
              >
                {social}
              </a>
            ))}
          </div>

          <p>AVIS Regionale Calabria — Consulta Giovani AVIS Regionale Calabria</p>
        </div>
      </footer>
    </main>
  );
}
