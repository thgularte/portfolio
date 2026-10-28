# Portfólio — Theodor Gularte

Portfólio com Next.js (App Router), TypeScript e Tailwind CSS, preparado para Vercel. Inclui Home, Experiências, Projetos, Sobre Mim e Contato.

## Executar localmente

Requer Node.js 20.9 ou superior.

```bash
npm ci
```

Copie `.env.example` para `.env.local` e preencha as variáveis necessárias. Em seguida:

```bash
npm run dev
```

Abra <http://localhost:3000>.

## Variáveis de ambiente

| Variável | Uso |
| --- | --- |
| `GITHUB_TOKEN` | Opcional. Aumenta o limite de requisições da API. Permanece no servidor. |
| `RESEND_API_KEY` | Chave do Resend, necessária para enviar mensagens. |
| `CONTACT_TO_EMAIL` | Endereço do proprietário que receberá as mensagens. |
| `CONTACT_FROM_EMAIL` | Remetente de um domínio verificado no Resend, por exemplo `Portfólio <contato@seu-dominio.com>`. |
| `SITE_URL` | URL pública canônica, por exemplo `https://seu-dominio.com`. |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Alternativa para manter o envio SMTP existente quando o Resend não estiver configurado. |
| `SMTP_SECURE`, `MAIL_FROM`, `MAIL_TO` | Opções SMTP; os endereços usam `SMTP_USER` por padrão. |

O formulário usa Resend quando as três variáveis desse serviço estão completas; caso contrário, usa SMTP se configurado. Sem nenhum provedor, o site continua funcionando e o formulário informa a indisponibilidade do envio. O botão de contato direto permanece disponível. Verifique a entrega real depois de configurar o provedor e, para Resend, o domínio do remetente.

`SITE_URL` usa `VERCEL_PROJECT_PRODUCTION_URL` como alternativa na Vercel e `http://localhost:3000` no desenvolvimento. Configure `SITE_URL` com seu domínio definitivo para canonical, Open Graph, robots e sitemap.

Não utilize prefixo `NEXT_PUBLIC_` para credenciais. `.env.local` está ignorado pelo Git.

## Conteúdo e componentes

- `src/data/contact.ts`: contato e redes sociais.
- `src/data/projects.ts`: URLs GitHub, destaques da Home e projetos corporativos.
- `src/data/experiences.ts`, `skills.ts`, `about.ts`, `testimonials.ts`: conteúdo editorial.
- `src/styles/tokens.css`: paleta oficial, espaçamentos e larguras compartilhadas.
- `src/components`: layout, elementos de UI e seções reutilizáveis.

Os projetos pessoais incluem todos os repositórios públicos pertencentes a `thgularte`, consultados no servidor em páginas de até 100 itens e revalidados a cada hora. As quatro URLs em `githubProjects`, em `src/data/projects.ts`, definem quais aparecem primeiro e em que ordem; `featured: true` seleciona o destaque. Repositórios privados ou respostas inválidas são omitidos. Se a listagem completa falhar, a página busca os quatro selecionados individualmente e mostra um aviso. A coluna de repositórios permite rolagem quando há mais itens, inclusive por teclado.

Os projetos corporativos são manuais e usam accordions nativos acessíveis. Acrescente `url` somente quando houver uma página pública válida do projeto.

A página de projetos também mostra o gráfico de contribuições fornecido por `ghchart.rshah.org`, sujeito à disponibilidade desse serviço externo, e oferece um link para abrir o perfil no GitHub. As URLs antigas `/experiences`, `/projects`, `/about` e `/contact` redirecionam permanentemente para as rotas atuais em português.

## Contato

`POST /api/contact` aceita JSON com `name`, `email`, `message` e o honeypot `website` vazio. O servidor valida tipos, campos obrigatórios, e-mail e tamanhos (nome: 100; e-mail: 254; mensagem: 5.000 caracteres; corpo: 24 KiB).

Pelo Resend, o envio usa a API HTTP, texto simples e o e-mail do visitante em `reply_to`. A chave de idempotência é derivada do conteúdo; mensagens idênticas são deduplicadas pelo Resend por 24 horas, inclusive entre instâncias serverless. A alternativa SMTP usa Nodemailer e preserva as variáveis da versão anterior. O frontend bloqueia envios simultâneos, preserva dados após falha e limpa o formulário após sucesso. Não há estado persistente em memória ou dependência de filesystem no servidor.

## Verificações

```bash
npm run lint
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Os testes de unidade verificam URLs, respostas públicas/privadas, paginação e falhas do GitHub, validação, limites de corpo, honeypot e contrato de envio ao Resend. O caminho SMTP é exercitado com um servidor local simulado; nenhum e-mail real é enviado nos testes.

Os testes de navegador usam o build de produção na porta 3100. Verificam as cinco rotas em 1440, 768, 390 e 320 px, imagens, overflow horizontal, metadados, menu mobile, teclado, accordions e estados do formulário. Capturas são gravadas em `docs/qa/`, ignorado pelo Git.

## Deploy na Vercel

1. Publique estes arquivos em um repositório Git e importe-o na Vercel.
2. Selecione o preset **Next.js** e uma versão suportada do Node.js (20.9+).
3. Configure as variáveis do provedor escolhido nos ambientes desejados. Use um domínio verificado para o remetente do Resend.
4. A Vercel executa `npm run build`. Não configure exportação estática: `/api/contact` precisa do runtime Node.js.
5. Após publicar, confira o domínio em `SITE_URL`, abra `/sitemap.xml` e teste o formulário com um endereço sob seu controle.

## Referências e assets

Layout orientado pelas referências visuais da versão local. Fotografias, monograma e ícones foram obtidos dos [assets públicos do portfólio de Theodor](https://github.com/thgularte/portfolio/tree/main/public). A fonte LXGW WenKai Mono TC é carregada localmente via `next/font/local` a partir de `@fontsource/lxgw-wenkai-mono-tc`. Os demais ícones usam Lucide.

Documentação das integrações: [cache do Next.js](https://nextjs.org/docs/app/api-reference/functions/fetch), [repositórios GitHub](https://docs.github.com/en/rest/repos/repos#get-a-repository), [envio no Resend](https://resend.com/docs/api-reference/emails/send-email) e [idempotência](https://resend.com/docs/dashboard/emails/idempotency-keys).
