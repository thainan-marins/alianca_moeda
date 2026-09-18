"use client";

import { FormEvent, useState } from "react";

export function QuoteForm({ phone }: { phone: string }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `Olá! Meu nome é ${data.get("name")}. Sou de ${data.get("city") || "Bauru/região"}. Quero um orçamento para ${data.get("model") || "alianças"}.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }
  return <form className="quote-form" onSubmit={submit}><label>Seu nome<input required name="name" autoComplete="name" placeholder="Como podemos te chamar?" /></label><label>Cidade<input name="city" autoComplete="address-level2" placeholder="Ex.: Bauru" /></label><label>O que você procura?<select name="model" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Alianças de namoro</option><option>Alianças de noivado</option><option>Alianças de casamento</option><option>Quero orientação</option></select></label><button className="button button-gold" type="submit">Abrir conversa no WhatsApp <span>↗</span></button><p className="form-note">Usaremos estas informações somente para iniciar seu atendimento.</p>{sent && <p className="success" role="status">Abrimos o WhatsApp para você continuar o atendimento.</p>}</form>;
}
