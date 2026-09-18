import Image from "next/image";
import { QuoteForm } from "@/components/sections/QuoteForm";

const phone = "5514998602872";
const wa = (text: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

const models = [
  {
    title: "Lisa",
    image: "/images/model-lisa.webp",
    alt: "Aliança lisa em metal de moeda com acabamento artesanal",
    text: "Linhas limpas, perfil confortável e a beleza do metal em primeiro plano.",
  },
  {
    title: "Com friso",
    image: "/images/model-friso.webp",
    alt: "Aliança em metal de moeda com friso central",
    text: "Um detalhe preciso que cria contraste sem perder a elegância do conjunto.",
  },
  {
    title: "Acabamentos",
    image: "/images/model-acabamento.webp",
    alt: "Aliança larga em metal de moeda com acabamento escovado",
    text: "Texturas e proporções para dar ao par uma presença só de vocês.",
  },
];

const faqs = [
  [
    "As alianças são feitas de qual material?",
    "Nossas alianças são produzidas a partir de moedas. Fale com a gente para conhecer as opções de material e acabamento disponíveis para o seu pedido.",
  ],
  [
    "Como descubro o tamanho certo?",
    "Use o guia como ponto de partida ou peça ajuda pelo WhatsApp. Nosso atendimento orienta a forma mais segura de confirmar a medida.",
  ],
  [
    "Qual é o prazo de fabricação?",
    "O prazo é informado no orçamento, de acordo com o modelo, os tamanhos e os detalhes escolhidos.",
  ],
  [
    "Podemos escolher modelos diferentes?",
    "Sim. Conte o que cada pessoa imagina e vamos orientar as possibilidades para compor o par.",
  ],
];

function Ornament() {
  return (
    <span className="ornament" aria-hidden="true">
      <i />
      <b />
      <i />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <nav className="nav nav-left" aria-label="Navegação principal">
            <a href="#modelos">Modelos</a>
            <a href="#atelier">Ateliê</a>
          </nav>

          <a
            className="brand-medallion"
            href="#inicio"
            aria-label="Alianças Moedas Bauru, início"
          >
            <Image
              src="/images/amb-medallion-v2.png"
              alt="AMB — Alianças Moedas Bauru"
              width={124}
              height={124}
              priority
            />
          </a>

          <nav className="nav nav-right" aria-label="Atalhos">
            <a href="#medidas">Medidas</a>
            <a href="#duvidas">Dúvidas</a>
            <a
              className="nav-contact"
              href={wa("Olá! Quero pedir um orçamento para alianças.")}
              target="_blank"
              rel="noreferrer"
            >
              Contato
            </a>
          </nav>

          <a
            className="mobile-header-link"
            href={wa("Olá! Quero pedir um orçamento para alianças.")}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">
                Uma aliança
                <br />
                com <em>significado.</em>
              </h1>
              <p className="hero-lead">
                Moedas ganham uma nova história em alianças feitas com cuidado,
                personalidade e atendimento próximo em Bauru.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-engraved"
                  href={wa("Olá! Quero pedir um orçamento para alianças.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Peça seu orçamento
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-outline" href="#modelos">
                  Ver modelos
                </a>
              </div>
              <p className="hero-note">
                Atendimento consultivo em Bauru e região pelo WhatsApp.
              </p>
            </div>

            <figure className="hero-portrait">
              <div className="portrait-frame">
                <Image
                  src="/images/atelier-hero.webp"
                  alt="Duas alianças artesanais sobre base de madeira, acompanhadas de moedas antigas"
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 54vw"
                />
                <div className="portrait-vignette" aria-hidden="true" />
              </div>
              <figcaption>
                Imagem ilustrativa. Cada detalhe começa com uma conversa.
              </figcaption>
            </figure>
          </div>
          <div className="hero-border" aria-hidden="true">
            <Ornament />
          </div>
        </section>

        <section className="process" aria-labelledby="process-title">
          <div className="process-paper">
            <div className="wrap">
              <h2 id="process-title" className="sr-only">
                Como começa a escolha das alianças
              </h2>
              <svg
                className="process-line"
                viewBox="0 0 940 120"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M70 69 C210 5 330 118 470 62 S740 9 870 72" />
              </svg>
              <div className="process-grid">
                <article>
                  <span className="coin-badge">1</span>
                  <h3>Escolha o modelo</h3>
                  <p>Comece pelo estilo que combina com a história de vocês.</p>
                </article>
                <article>
                  <span className="coin-badge">2</span>
                  <h3>Converse com a gente</h3>
                  <p>Tire dúvidas sobre acabamento, medidas e possibilidades.</p>
                </article>
                <article>
                  <span className="coin-badge">3</span>
                  <h3>Deixe do seu jeito</h3>
                  <p>Defina os detalhes do par com orientação próxima.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="modelos" className="showcase" aria-labelledby="models-title">
          <div className="wrap">
            <div className="section-heading section-heading-split">
              <h2 id="models-title">
                Modelos para começar a <em>imaginar.</em>
              </h2>
              <p>
                Conheça pontos de partida. As opções disponíveis e os detalhes
                de cada pedido são confirmados no atendimento.
                <span className="image-note">
                  Imagens ilustrativas; confirme os modelos disponíveis.
                </span>
              </p>
            </div>

            <div className="model-grid">
              {models.map((model) => (
                <article className="model-card" key={model.title}>
                  <div className="model-image">
                    <Image
                      src={model.image}
                      alt={model.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                    />
                  </div>
                  <div className="model-copy">
                    <h3>{model.title}</h3>
                    <p>{model.text}</p>
                    <a
                      href={wa(
                        `Olá! Tenho interesse nas alianças ${model.title.toLowerCase()}.`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Quero conhecer
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="section-ornament" aria-hidden="true">
            <Ornament />
          </div>
        </section>

        <section id="atelier" className="atelier" aria-labelledby="atelier-title">
          <div className="wrap atelier-grid">
            <div className="atelier-copy">
              <h2 id="atelier-title">
                Do primeiro “e se?” ao <em>sim.</em>
              </h2>
              <p>
                Uma escolha importante não precisa ser complicada. A gente
                escuta, orienta e confirma cada detalhe antes do pedido.
              </p>
              <a
                className="button button-engraved"
                href={wa("Olá! Quero entender como funciona o pedido de alianças.")}
                target="_blank"
                rel="noreferrer"
              >
                Falar com a AMB
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="atelier-board">
              <div className="draft-sheet" aria-hidden="true">
                <svg viewBox="0 0 300 190">
                  <circle cx="110" cy="96" r="55" />
                  <circle cx="110" cy="96" r="35" />
                  <path d="M34 35h155M42 153h168M220 35v120" />
                  <path d="m102 19 8 12 8-12M102 173l8-12 8 12" />
                </svg>
              </div>
              <div className="brass-compass" aria-hidden="true">
                <i />
                <i />
              </div>
              <div className="sealed-letter" aria-hidden="true">
                <i />
              </div>

              <ol className="atelier-steps">
                <li>
                  <span>01</span>
                  <div>
                    <h3>Conte sua ideia</h3>
                    <p>Ocasião, estilo e o que vocês imaginam.</p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <h3>Definam o par</h3>
                    <p>Modelo, acabamento e tamanhos com orientação.</p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <h3>Confirmem o pedido</h3>
                    <p>Prazo e condições alinhados diretamente no atendimento.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section id="medidas" className="measure" aria-labelledby="measure-title">
          <div className="wrap measure-grid">
            <div className="measure-image">
              <Image
                src="/images/guia-medidas.webp"
                alt="Lupa vintage sobre uma aliança e um mapa antigo"
                fill
                sizes="(max-width: 767px) 100vw, 52vw"
              />
            </div>
            <div className="measure-panel">
              <h2 id="measure-title">
                Não sabe o número? <em>A gente ajuda.</em>
              </h2>
              <p>
                Medir com segurança faz parte da escolha. Se ficar na dúvida,
                receba uma orientação antes de definir seu pedido.
              </p>
              <a
                className="measure-link"
                href={wa("Olá! Preciso de ajuda para descobrir o tamanho da aliança.")}
                target="_blank"
                rel="noreferrer"
              >
                Preciso de ajuda com a medida
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section id="duvidas" className="faq" aria-labelledby="faq-title">
          <div className="wrap faq-grid">
            <div className="faq-intro">
              <h2 id="faq-title">
                Dúvidas que merecem <em>resposta.</em>
              </h2>
              <p>
                Se a sua pergunta não estiver aqui, a conversa pode continuar
                direto com a gente.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <span className="faq-toggle" aria-hidden="true" />
                  </summary>
                  <div className="faq-answer">
                    <p>{answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="contact" aria-labelledby="contact-title">
          <div className="desk-light" aria-hidden="true" />
          <div className="banker-lamp" aria-hidden="true">
            <i className="lamp-shade" />
            <i className="lamp-stem" />
            <i className="lamp-base" />
          </div>
          <div className="wrap contact-grid">
            <div className="contact-copy">
              <h2 id="contact-title">
                O próximo capítulo começa <em>aqui.</em>
              </h2>
              <p>
                Conte o que vocês procuram. A gente ajuda a transformar a ideia
                em uma aliança para guardar na memória.
              </p>
              <a
                className="contact-phone"
                href={wa("Olá! Quero falar sobre alianças.")}
                target="_blank"
                rel="noreferrer"
              >
                (14) 99860-2872
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <QuoteForm phone={phone} />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <a className="footer-brand" href="#inicio">
            <Image
              src="/images/amb-medallion-v2.png"
              alt=""
              width={70}
              height={70}
            />
            <span>
              Alianças
              <strong>Moedas Bauru</strong>
            </span>
          </a>
          <p>Alianças de moedas em Bauru.</p>
          <a
            className="footer-link"
            href="https://www.instagram.com/baurualiancas_whats14998602872/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
        </div>
      </footer>

      <a
        className="mobile-cta"
        href={wa("Olá! Quero pedir um orçamento para alianças.")}
        target="_blank"
        rel="noreferrer"
      >
        Peça seu orçamento
        <span aria-hidden="true">↗</span>
      </a>
    </>
  );
}
