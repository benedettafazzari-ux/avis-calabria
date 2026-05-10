export default function App() {
  const provinceLinks = {
    Catanzaro: "https://www.aviscalabria.it/sedi/catanzaro/",
    Cosenza: "https://www.aviscalabria.it/sedi/cosenza/",
    Crotone: "https://www.aviscalabria.it/sedi/crotone/",
    "Reggio Calabria": "https://www.aviscalabria.it/sedi/reggio-calabria/",
    "Vibo Valentia": "https://www.aviscalabria.it/sedi/vibo-valentia/",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        color: "#0f172a",
        lineHeight: 1.6,
      }}
    >
      {/* HERO */}
      <section
        style={{
          backgroundColor: "#005bbb",
          color: "white",
          padding: "90px 20px 130px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          IL SANGUE <span style={{ color: "#ff2b2b" }}>SALVA VITE</span>
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "750px",
            margin: "0 auto",
          }}
        >
          Donare sangue è un gesto semplice che può aiutare fino a tre persone.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a
            href="#donazione"
            style={{
              backgroundColor: "white",
              color: "#005bbb",
              padding: "16px 34px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Diventa donatore
          </a>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "38px", marginBottom: "30px" }}>
          ❤️ Cos'è AVIS?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "Associazione volontaria",
            "Presente in tutta Italia",
            "Promuove la donazione",
            "Aiuta migliaia di persone",
          ].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "#005bbb",
                color: "white",
                padding: "25px",
                borderRadius: "20px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PERCHÉ DONARE */}
      <section
        style={{
          backgroundColor: "#f8fafc",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "38px", marginBottom: "25px" }}>
            🩸 Perché donare <br /> il sangue?
          </h2>

          <p style={{ fontSize: "20px", maxWidth: "850px" }}>
            Ogni donazione può salvare fino a tre vite. Il sangue è fondamentale
            per interventi chirurgici, emergenze, cure oncologiche e malattie croniche.
          </p>
        </div>
      </section>

      {/* CHI PUÒ DONARE */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "38px", marginBottom: "30px" }}>
          ✅ Chi può donare
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {[
            "18-60 anni",
            "Peso superiore a 50kg",
            "Buona salute",
            "Stile di vita sano",
          ].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "#005bbb",
                color: "white",
                padding: "14px 22px",
                borderRadius: "999px",
                fontWeight: "bold",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* DONAZIONE */}
      <section
        id="donazione"
        style={{
          backgroundColor: "#f8fafc",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "38px", marginBottom: "40px" }}>
            📅 La donazione: quanto e quando
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "25px",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "20px",
              }}
            >
              <h3>Quanto dura?</h3>
              <p>La donazione dura circa 10 minuti.</p>
            </div>

            <div
              style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "20px",
              }}
            >
              <h3>Ogni quanto?</h3>
              <p>Gli uomini possono donare 4 volte l’anno, le donne 2.</p>
            </div>

            <div
              style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "20px",
              }}
            >
              <h3>Prima del prelievo</h3>
              <p>
                Cena leggera la sera prima e colazione semplice il giorno del prelievo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ALIMENTAZIONE */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "38px", marginBottom: "30px" }}>
          🍎 Cosa mangiare
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              backgroundColor: "#005bbb",
              color: "white",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3>La sera prima</h3>
            <p>
              Preferisci una cena leggera evitando alcolici e cibi troppo grassi.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#005bbb",
              color: "white",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3>La mattina</h3>
            <p>
              Sì a tè, caffè poco zuccherato, frutta, spremute e carboidrati semplici.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          backgroundColor: "#f8fafc",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "38px", marginBottom: "30px" }}>
            ❓ FAQ
          </h2>

          <div style={{ display: "grid", gap: "20px" }}>
            {[
              {
                q: "Se ho un tatuaggio posso donare?",
                a: "Sì, ma bisogna attendere 4 mesi dal tatuaggio.",
              },
              {
                q: "E se fumo?",
                a: "Si può donare, evitando di fumare subito prima e dopo.",
              },
              {
                q: "Donare è sicuro?",
                a: "Sì, il materiale utilizzato è sterile e monouso.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                style={{
                  backgroundColor: "white",
                  padding: "25px",
                  borderRadius: "20px",
                }}
              >
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVINCE */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "38px", marginBottom: "35px" }}>
          📍 Trova la tua AVIS provinciale
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {Object.entries(provinceLinks).map(([name, link]) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: "#005bbb",
                color: "white",
                padding: "14px 24px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              {name}
            </a>
          ))}
        </div>
      </section>

      {/* VOLONTARIO */}
      <section
        style={{
          backgroundColor: "#005bbb",
          color: "white",
          textAlign: "center",
          padding: "90px 20px",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          🎬 Dona il tuo tempo.
        </h2>

        <h3 style={{ fontSize: "30px" }}>
          Diventa volontario AVIS
        </h3>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#003f80",
          color: "white",
          textAlign: "center",
          padding: "25px",
          fontSize: "14px",
        }}
      >
        AVIS Regionale Calabria – Consulta Giovani AVIS Regionale Calabria
      </footer>
    </div>
  );
}
