export default function AvisLandingPage() {
  const sections = [
    {
      title: "Cos'è AVIS?",
      content:
        "AVIS è la più grande organizzazione italiana di volontariato del sangue e contribuisce a garantire circa il 70% del fabbisogno nazionale.",
      items: ["Solidarietà", "Gratuità", "Anonimato", "Periodicità"],
    },
    {
      title: "Perché donare il sangue?",
      content:
        "Una donazione può salvare fino a 3 vite. Il sangue è fondamentale per emergenze, interventi chirurgici, terapie oncologiche e malattie croniche.",
    },
    {
      title: "Chi può donare?",
      content:
        "Puoi donare se hai tra 18 e 60 anni, pesi più di 50 kg e hai uno stile di vita sano.",
    },
    {
      title: "Come ottenere l'idoneità",
      content:
        "Contatta la sede AVIS più vicina, svolgi visita medica ed esami e ricevi la conferma del medico.",
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
  ];

  return (
    <div className="bg-[#005bbb] text-white min-h-screen font-sans overflow-x-hidden">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-white rounded-t-[100%] opacity-90"></div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl uppercase tracking-tight z-10">
          Il sangue <span className="text-red-500">salva vite.</span>
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mt-6 max-w-4xl uppercase z-10">
          La tua scelta può fare la differenza.
        </h2>

        <button className="mt-10 bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-full text-xl font-bold shadow-2xl z-10">
          Diventa Donatore
        </button>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl hover:scale-[1.02] transition"
          >
            <h3 className="text-3xl font-black mb-6 uppercase">
              {section.title}
            </h3>

            <p className="text-lg leading-relaxed text-white/90">
              {section.content}
            </p>

            {section.items && (
              <div className="mt-6 flex flex-wrap gap-3">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="bg-red-500/90 px-4 py-2 rounded-full font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="bg-white text-[#005bbb] py-24 px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-black uppercase">
          1 Donazione = Fino a 3 vite salvate
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
          {[
            "Emergenze",
            "Interventi chirurgici",
            "Terapie oncologiche",
            "Malattie croniche",
          ].map((item) => (
            <div
              key={item}
              className="bg-[#005bbb] text-white rounded-3xl p-8 text-xl font-bold shadow-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-5xl font-black uppercase text-center mb-16">
          La donazione
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 rounded-3xl p-10 shadow-xl">
            <p className="text-5xl font-black">450 ml</p>
            <p className="mt-4 text-xl">Volume del prelievo</p>
          </div>

          <div className="bg-white/10 rounded-3xl p-10 shadow-xl">
            <p className="text-5xl font-black">10/15 min</p>
            <p className="mt-4 text-xl">Durata media</p>
          </div>

          <div className="bg-white/10 rounded-3xl p-10 shadow-xl">
            <p className="text-5xl font-black">90 giorni</p>
            <p className="mt-4 text-xl">Tra due donazioni di sangue</p>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#005bbb] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-10">
            FAQ
          </h2>

          <div className="space-y-6 text-left">
            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-[#005bbb] text-white rounded-2xl p-6 shadow-xl"
              >
                <h3 className="text-2xl font-bold">{item.q}</h3>
                <p className="mt-3 text-lg text-white/90">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black uppercase max-w-5xl mx-auto leading-tight">
          Dona il tuo tempo.
          <br />
          Diventa volontario AVIS.
        </h2>

        <p className="text-xl mt-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
          Partecipa ad eventi, attività sul territorio e iniziative dedicate ai giovani.
        </p>

        <button className="mt-12 bg-white text-[#005bbb] hover:scale-105 transition px-10 py-5 rounded-full text-xl font-black shadow-2xl">
          Unisciti ad AVIS
        </button>
      </section>

      <footer className="border-t border-white/20 py-10 text-center text-white/70 text-sm">
        AVIS Calabria — Consulta Giovani Regionale
      </footer>
    </div>
  );
}
