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
      content:
        "Puoi donare se hai tra 18 e 60 anni, pesi più di 50 kg e hai uno stile di vita sano.",
      items: [
          "Età compresa tra 18 e 60 anni",
          "Peso corporeo superiore a 50 kg",
          "Buono stato di salute",
          "Stile di vita sano",
      ],
      emoji: "✅",
    },
    {
      title: "Come ottenere l'idoneità",
      content:
        "Contatta la sede AVIS più vicina, svolgi visita medica ed esami e ricevi la conferma del medico.",
      emoji: "📋",
    },
  ];

  const donationUses = [
    "Emergenze",
    "Interventi chirurgici",
    "Terapie oncologiche",
    "Malattie croniche",
  ];

  const stats = [
    {
      value: "10/15 min",
      label: "Durata della donazione",
    },
    {
      value: "450 ml",
      label: "Volume del prelievo",
    },
    {
      value: "90 giorni",
      label: "Tra due donazioni di sangue",
    },
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
    {
      q: "Fa male?",
      a: "Il fastidio è minimo e dura pochi secondi.",
    },
    {
      q: "Quanto dura una donazione?",
      a: "Circa 10-15 minuti.",
    },
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
      href: "https://www.avisprovincialecosenza.it/",
      top: "9%",
      left: "30%",
    },
    {
      name: "Crotone",
      sigla: "KR",
      href: "https://www.aviscrotone.it/",
      top: "34%",
      left: "58%",
    },
    {
      name: "Catanzaro",
      sigla: "CZ",
      href: "https://www.avisprovincialecatanzaro.it/",
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
      href: "https://www.avisprovincialerc.it/",
      top: "78%",
      left: "43%",
    },
  ];

  const idoneitaSteps = [
    "Contatta la sede AVIS più vicina.",
    "Compila il questionario e fai i controlli.",
    "Ricevi l’esito e la conferma del medico.",
  ];
  const socialLinks = ["Instagram", "TikTok", "Facebook"];

  console.assert(sections.length === 4, "Expected 4 info sections");
  console.assert(donationUses.length === 4, "Expected 4 donation use cards");
  console.assert(stats.length === 3, "Expected 3 donation stat cards");
  console.assert(foodTips.length === 2, "Expected 2 food tip cards");
  console.assert(faq.length >= 5, "Expected at least 5 FAQ items");
  console.assert(provinces.length === 5, "Expected 5 Calabria provinces");
  console.assert(socialLinks.length === 3, "Expected 3 social links");

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#005bbb] text-white font-sans selection:bg-white selection:text-[#005bbb]">
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#005bbb] border-b border-white/15">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
            <a
              href="https://www.aviscalabria.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-1/2 bottom-16 z-20 -translate-x-1/2 translate-y-1/2 inline-flex items-center justify-center bg-white text-[#005bbb] border-4 border-[#005bbb] hover:scale-105 transition-all duration-300 px-10 py-5 rounded-full text-xl font-black shadow-xl">
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

<section className="relative min-h-[62vh] md:min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-4 pb-10">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
          <h1 className="text-[clamp(2rem,6.5vw,6rem)] font-black uppercase leading-none whitespace-nowrap tracking-tight">
            Il sangue <span className="text-red-500">salva vite.</span>
          </h1>

          <h2 className="mt-6 text-2xl md:text-4xl font-bold uppercase leading-tight text-white/95">
            La tua scelta può fare la differenza.
          </h2>
        </div>

       <div className="absolute bottom-0 left-0 w-full h-20 bg-white" />

        <a
          href="https://www.aviscalabria.it/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 bottom-16 z-20 -translate-x-1/2 translate-y-1/2 inline-flex items-center justify-center bg-white text-[#005bbb] border-4 border-[#005bbb] hover:scale-105 transition-all duration-300 px-10 py-5 rounded-full text-xl font-black shadow-xl"
        >
          Diventa Donatore
        </a>
      </section>

      <section
        id="avis"
        className="relative z-10 py-16 md:py-28 px-4 max-w-7xl mx-auto grid gap-6 md:gap-10 md:grid-cols-2"      >
        {sections.map((section) => (
          <article
            key={section.title}
            className="group bg-white text-[#005bbb] rounded-[1.5rem] p-5 md:p-8 shadow-xl hover:-translate-y-2 transition-all duration-300 text-left"
          >
            <div className="flex items-start justify-start gap-3 mb-4">
              <span className="text-xl leading-none mt-1 group-hover:scale-110 transition-transform duration-300 inline-block">
                {section.emoji}
              </span>
             <h3 className="text-xl md:text-3xl font-black uppercase leading-tight text-left">
                {section.title === "Perché donare il sangue?" ? (
                  <>
                    Perché donare
                    <br />
                    il sangue?
                  </>
                ) : section.title === "Chi può donare?" ? (
                  <span className="whitespace-nowrap">Chi può donare?</span>
                ) : section.title === "Come ottenere l'idoneità" ? (
                  <span className="whitespace-nowrap">Come ottenere l'idoneità</span>
                ) : (
                  section.title
                )}
              </h3>
            </div>

            {section.title !== "Chi può donare?" &&
            section.title !== "Come ottenere l'idoneità" ? (
              <p className="text-lg leading-relaxed text-[#005bbb]/90 text-justify">
                {section.content}
              </p>
            ) : null}
            
            {section.title === "Come ottenere l'idoneità" ? (
              <div className="mt-6 flex flex-col gap-3">
                {idoneitaSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 bg-[#005bbb] text-white rounded-2xl px-4 py-3 font-bold"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#005bbb] text-sm font-black">
                      {index + 1}
                    </span>
            
                    <span className="text-sm md:text-base leading-snug">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}

            {section.items ? (
              <div className="mt-6 flex flex-wrap justify-start gap-3">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="bg-[#005bbb] text-white px-5 py-3 rounded-full font-bold shadow-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </section>

      <section className="bg-white text-[#005bbb] py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
         <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
            Una donazione può salvare fino a 3 vite
          </h2>
          
          <p className="mt-10 mb-4 text-xl md:text-3xl text-[#005bbb]/80 font-black">
            Il sangue è fondamentale per:
          </p>

           <div className="grid md:grid-cols-4 gap-6 mt-6">
            {donationUses.map((item) => (
              <div
                key={item}
                className="bg-[#005bbb] text-white rounded-[2rem] p-10 text-xl font-bold shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="donazione" className="py-28 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-5xl font-black uppercase leading-tight whitespace-nowrap">
            La donazione di sangue
          </h2>
          
          <p className="mt-4 text-white/80 uppercase tracking-[0.12em] md:tracking-[0.3em] font-bold whitespace-nowrap text-sm md:text-base">
            Tempi, quantità e frequenza
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-white text-[#005bbb] rounded-[2rem] p-12 shadow-xl hover:scale-105 transition-all duration-300"
            >
              <p className="text-6xl font-black">{stat.value}</p>
              <p className="mt-4 text-xl text-[#005bbb]/85">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="mangiare" className="bg-white text-[#005bbb] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] font-bold text-[#005bbb]/70 mb-4">
              Preparati al meglio
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
              Cosa mangiare prima della donazione
            </h2>
            <p className="mt-6 text-xl text-[#005bbb]/80 max-w-3xl mx-auto leading-relaxed">
              Bastano poche attenzioni per arrivare al prelievo in modo sereno e sicuro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {foodTips.map((tip) => (
              <article
                key={tip.title}
                className="bg-[#005bbb] text-white rounded-[2rem] p-10 shadow-xl"
              >
                <h3 className="text-3xl font-black uppercase mb-5">
                  {tip.title}
                </h3>
                <p className="text-xl leading-relaxed text-white/90">{tip.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mappa" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-8">
              Trova la tua AVIS provinciale
            </h2>
            <p className="text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
              Clicca sulla provincia della mappa o sui bottoni per aprire la pagina ufficiale.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="text-center lg:text-left">
              <p className="text-xl md:text-3xl font-black uppercase leading-tight">
                Scegli la tua provincia e trova subito il riferimento AVIS più vicino a te.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-xl">
            <div className="relative mx-auto w-full max-w-[360px] h-[560px]">
              <svg
                viewBox="0 0 240 420"
                className="absolute inset-0 w-full h-full"
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
                  className="absolute -translate-x-1/2 -translate-y-1/2 bg-white text-[#005bbb] border-4 border-[#005bbb] rounded-full w-20 h-20 flex flex-col items-center justify-center font-black shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
                  style={{ top: province.top, left: province.left }}
                  aria-label={`Apri AVIS Provinciale ${province.name}`}
                  title={`AVIS Provinciale ${province.name}`}
                >
                  <span className="text-xl leading-none">{province.sigla}</span>
                  <span className="text-[10px] mt-1 font-bold uppercase">
                    Vai
                  </span>
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
              {provinces.map((province) => (
                <a
                  key={province.name}
                  href={province.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#005bbb] text-white rounded-full px-4 py-3 text-center text-sm font-bold hover:opacity-90 transition"
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
        className="bg-white text-[#005bbb] py-28 px-6 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-16">
            FAQ
          </h2>

          <div className="space-y-6 text-left">
            {faq.map((item) => (
              <article
                key={item.q}
                className="bg-[#005bbb] text-white rounded-[2rem] p-8 shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-2xl font-black">{item.q}</h3>
                <p className="mt-4 text-lg text-white/90 leading-relaxed">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="volontariato"
        className="relative py-36 px-6 text-center overflow-hidden"
      >
        <div className="relative max-w-5xl mx-auto">
         <h2 className="text-2xl md:text-5xl font-black uppercase leading-tight">
            Dona il tuo tempo.
            <br />
            <span className="whitespace-nowrap">Diventa volontario AVIS.</span>
          </h2>

          <p className="text-xl md:text-2xl mt-10 text-white/85 leading-relaxed max-w-3xl mx-auto">
            Partecipa ad eventi, attività sul territorio e iniziative dedicate ai giovani.
          </p>

          <a
            href="https://www.avis.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-14 bg-white text-[#005bbb] hover:scale-110 transition-all duration-300 px-12 py-6 rounded-full text-xl font-black shadow-xl"
          >
            Unisciti ad AVIS
          </a>
        </div>
      </section>

      <footer className="border-t border-white/15 py-8 text-center text-white/80 text-sm px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-black text-white uppercase mb-3">
            Seguici sui social
          </h3>

          <div className="flex justify-center gap-3 flex-wrap mb-5">
            {socialLinks.map((social) => (
              <a
                key={social}
                href="#"
                className="bg-white text-[#005bbb] hover:opacity-90 transition px-4 py-2 rounded-full font-bold text-xs"
              >
                {social}
              </a>
            ))}
          </div>

          <p>AVIS Regionale Calabria — Consulta Giovani AVIS Regionale Calabria</p>
        </div>
      </footer>
    </div>
  );
}
