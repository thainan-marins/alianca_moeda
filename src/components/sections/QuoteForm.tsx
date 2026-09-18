"use client";

import { FormEvent, useState } from "react";

export function QuoteForm({ phone }: { phone: string }) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `Olá! Meu nome é ${data.get("name")}. Sou de ${
      data.get("city") || "Bauru/região"
    }. Quero um orçamento para ${data.get("model") || "alianças"}.`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Seu nome <span className="required-note">(obrigatório)</span>
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Como podemos te chamar?"
          />
        </label>
        <label>
          Cidade
          <input
            name="city"
            autoComplete="address-level2"
            placeholder="Ex.: Bauru"
          />
        </label>
      </div>

      <label>
        O que você procura?
        <select name="model" defaultValue="">
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option>Alianças de namoro</option>
          <option>Alianças de noivado</option>
          <option>Alianças de casamento</option>
          <option>Quero orientação</option>
        </select>
      </label>

      <button className="button button-engraved" type="submit">
        Abrir conversa no WhatsApp
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">
        As informações serão usadas somente para iniciar seu atendimento.
      </p>
      {sent && (
        <p className="success" role="status">
          O WhatsApp foi aberto para você continuar o atendimento.
        </p>
      )}
    </form>
  );
}
