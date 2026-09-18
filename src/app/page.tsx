import Image from "next/image";
import { QuoteForm } from "@/components/sections/QuoteForm";

const phone = "5514998602872";
const wa = (text: string) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

const models = [
  ["Lisas", "Linhas limpas para deixar o significado falar mais alto."],
  ["Com frisos", "Detalhes que dão personalidade ao par."],
  ["Acabamentos", "Converse sobre textura e visual que combinam com vocês."],
];

const faqs = [
  ["As alianças são feitas de qual material?", "Nossas alianças são produzidas a partir de moedas. Fale com a gente para entender as opções de material e acabamento disponíveis para o seu pedido."],
  ["Como sei o tamanho?", "Use nosso guia como ponto de partida ou peça ajuda pelo WhatsApp. O atendimento orienta a melhor forma de confirmar a medida."],
  ["Qual é o prazo?", "O prazo é informado no orçamento, de acordo com o modelo, tamanhos e detalhes escolhidos."],
  ["Posso escolher modelos diferentes?", "Sim. Conte o que cada pessoa imagina e vamos orientar as possibilidades para o par."],
];

export default function Home() {
  return (
    <main>
      <header className="header wrap">
        <a className="brand" href="#inicio" aria-label="Alianças Moedas Bauru, início">
          <Image src="/images/logo-amb.png" alt="Logo AMB" width={52} height={52} priority />
          <span>Alianças<br /><strong>Moedas Bauru</strong></span>
        </a>
        <nav aria-label="Navegação principal"><a href="#modelos">Modelos</a><a href="#como-funciona">Como funciona</a><a href="#medidas">Medidas</a></nav>
        <a className="text-link" href={wa("Olá! Quero pedir um orçamento para alianças.")} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden>↗</span></a>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-glow" aria-hidden />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Feitas para a história de vocês</p>
            <h1>Uma aliança<br />com <em>significado.</em></h1>
            <p className="lead">Transformamos moedas em alianças com personalidade, cuidado artesanal e um jeito mais próximo de escolher.</p>
            <div className="hero-actions">
              <a className="button button-gold" href={wa("Olá! Quero pedir um orçamento para alianças.")} target="_blank" rel="noreferrer">Peça seu orçamento <span>↗</span></a>
              <a className="button button-ghost" href="#modelos">Ver modelos</a>
            </div>
            <p className="microcopy">Atendimento em Bauru e região pelo WhatsApp.</p>
          </div>
          <div className="hero-art" aria-label="Representação decorativa de duas alianças">
            <div className="coin coin-back" /><div className="coin coin-front" />
            <p>Feito para marcar<br />o que importa.</p>
          </div>
        </div>
      </section>

      <section className="proof"><div className="wrap proof-grid">
        <article><span>01</span><h2>Escolha com calma</h2><p>Modelos, tamanhos e acabamentos explicados de forma simples.</p></article>
        <article><span>02</span><h2>Atendimento próximo</h2><p>Converse diretamente para tirar dúvidas antes de decidir.</p></article>
        <article><span>03</span><h2>Do seu jeito</h2><p>Uma peça com história para namoro, noivado, casamento ou bodas.</p></article>
      </div></section>

      <section id="modelos" className="section warm"><div className="wrap">
        <div className="section-head"><div><p className="eyebrow">Encontre o estilo de vocês</p><h2>Modelos para<br /><em>começar a imaginar.</em></h2></div><p>As opções são definidas no atendimento. Peça fotos e informações atualizadas antes de escolher.</p></div>
        <div className="model-grid">{models.map(([title, text], index) => <article className={`model-card model-${index + 1}`} key={title}><div className="ring-visual" aria-hidden><i /><b /></div><div><p className="card-number">0{index + 1}</p><h3>{title}</h3><p>{text}</p><a href={wa(`Olá! Tenho interesse nas alianças ${title.toLowerCase()}.`)} target="_blank" rel="noreferrer">Tenho interesse <span>→</span></a></div></article>)}</div>
      </div></section>

      <section id="como-funciona" className="section dark"><div className="wrap process-grid"><div><p className="eyebrow">Sem complicação</p><h2>Do primeiro<br />“e se?” ao <em>sim.</em></h2><a className="button button-gold" href={wa("Olá! Quero entender como funciona o pedido de alianças.")} target="_blank" rel="noreferrer">Falar com a AMB <span>↗</span></a></div><ol className="steps"><li><span>01</span><div><h3>Conte sua ideia</h3><p>Fale sobre a ocasião, estilo e o que vocês imaginam.</p></div></li><li><span>02</span><div><h3>Definam o par</h3><p>Escolham modelo, acabamento e tamanhos com orientação.</p></div></li><li><span>03</span><div><h3>Confirme o pedido</h3><p>Receba os detalhes de prazo e condições diretamente no atendimento.</p></div></li></ol></div></section>

      <section id="medidas" className="section measure"><div className="wrap measure-grid"><div className="measure-graphic" aria-hidden><div className="measure-ring" /><span>Seu tamanho<br />também importa.</span></div><div><p className="eyebrow">Guia de medidas</p><h2>Não sabe o número?<br /><em>A gente ajuda.</em></h2><p className="body-copy">Medir com segurança faz parte da escolha. Se ficar na dúvida, fale no WhatsApp e receba uma orientação antes de definir seu pedido.</p><a className="text-link dark-link" href={wa("Olá! Preciso de ajuda para descobrir o tamanho da aliança.")} target="_blank" rel="noreferrer">Preciso de ajuda com a medida <span>↗</span></a></div></div></section>

      <section className="section faq"><div className="wrap faq-grid"><div><p className="eyebrow">Antes de escolher</p><h2>Dúvidas que<br /><em>merecem resposta.</em></h2><p className="body-copy">Se não encontrar o que procura, nosso atendimento orienta você.</p></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section id="contato" className="contact"><div className="wrap contact-grid"><div><p className="eyebrow">Vamos conversar</p><h2>O próximo capítulo<br />começa <em>aqui.</em></h2><p>Conte o que vocês estão procurando. A gente ajuda a transformar a ideia em uma aliança para guardar na memória.</p><a className="phone" href={wa("Olá! Quero falar sobre alianças.")} target="_blank" rel="noreferrer">(14) 99860-2872 <span>↗</span></a></div><QuoteForm phone={phone} /></div></section>

      <footer className="footer wrap"><div className="brand"><Image src="/images/logo-amb.png" alt="Logo AMB" width={44} height={44} /><span>Alianças<br /><strong>Moedas Bauru</strong></span></div><p>Alianças de moedas em Bauru.</p><a href="https://www.instagram.com/baurualiancas_whats14998602872/" target="_blank" rel="noreferrer">Instagram ↗</a></footer>
      <a className="mobile-cta" href={wa("Olá! Quero pedir um orçamento para alianças.")} target="_blank" rel="noreferrer">Peça seu orçamento <span>↗</span></a>
    </main>
  );
}
