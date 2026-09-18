# Identidade visual

## Conceito

Ateliê clássico de joalheria e moedas antigas: vintage, artesanal e elegante, com calor humano suficiente para continuar acessível. A direção combina madeira escura, couro, pergaminho, latão envelhecido e luz concentrada de bancada.

O medalhão fornecido em `references/logo/logo3.png` é a marca oficial. Não deve ser redesenhado, simplificado ou substituído por monogramas tipográficos.

## Tokens primitivos

- Madeira escura `--bg-wood-dark: #17120F`.
- Pergaminho `--bg-parchment: #E8DFC8`.
- Vitrine escura `--bg-card-dark: #221B17`.
- Ouro envelhecido `--gold-primary: #D4AF37`.
- Latão escuro `--gold-dark: #9A7B2C`.
- Texto claro `--text-light: #F5EFE6`.
- Texto escuro `--text-dark: #2C221E`.

## Tipografia

- Títulos: Cinzel, pesos 500–700.
- Destaques editoriais e itálicos: Playfair Display.
- Texto e interface: Montserrat, pesos 300–600.
- O monograma caligráfico aparece apenas dentro do medalhão oficial.

## Composição e componentes

- Grid central de até 1180 px, com composições assimétricas e respiro editorial.
- Botão primário como placa de bronze gravada, com borda dupla, gradiente metálico e relevo interno discreto.
- Cards de produto como vitrines escuras: moldura dupla em latão, foco de luz superior e fotografia central.
- Seções claras usam pergaminho com marcas suaves e contraste suficiente para leitura.
- Ornamentos são geométricos e discretos; não competem com a marca ou com as alianças.
- Cantos quase retos. Bordas arredondadas ficam reservadas a peças naturalmente circulares, como moedas e rebites.

## Imagem e materiais

- Fotografia de produto em chiaroscuro, com metal quente, madeira real, couro e papel envelhecido.
- Evitar ouro amarelo excessivamente brilhante, fundos brancos de e-commerce, filtros artificiais e excesso de adereços.
- Imagens geradas para a página são autorais, não incluem marcas, textos ou moedas identificáveis e têm origem documentada em `docs/brand/generated-assets.md`.

## Movimento

- Uma entrada principal no hero combina recorte, foco e deslocamento curto.
- Interações usam 300 ms e a curva `cubic-bezier(0.22, 1, 0.36, 1)`.
- Respeitar `prefers-reduced-motion`.

## Acessibilidade

- Corpo com contraste mínimo WCAG AA.
- Foco dourado visível em links, controles, inputs e accordions.
- Alvos principais com no mínimo 44 px de altura.
- Imagens informativas recebem texto alternativo; adereços permanecem ocultos de tecnologias assistivas.

## Regras de uso

As referências em `references/insight/` orientam materiais, atmosfera e hierarquia, mas não autorizam copiar textos, marcas ou layouts. Dados comerciais e promessas continuam sujeitos à confirmação antes da publicação.
