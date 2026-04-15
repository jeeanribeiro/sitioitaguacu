# Plano de Melhorias SEO - Sítio Itaguaçú

## Diagnóstico Atual

### Pontos Positivos
- [x] Meta description presente em `app.html`
- [x] Title tag na página principal
- [x] Imagens hero com alt text descritivo
- [x] Google Analytics configurado
- [x] PWA manifest configurado
- [x] Imagens otimizadas em WebP com srcset responsivo
- [x] Presença em portais (Casamentos.com.br, TemporadaLivre)

### Problemas Críticos Identificados
- [x] ~~`lang="en"` no HTML (deveria ser `pt-BR`)~~ ✅ Corrigido
- [x] ~~Falta de Open Graph tags para compartilhamento social~~ ✅ Implementado
- [x] ~~Falta de Schema.org/JSON-LD structured data~~ ✅ Implementado
- [x] ~~Alt text do logo é apenas "Logo" (não descritivo)~~ ✅ Corrigido
- [x] ~~Não há canonical URL definida~~ ✅ Adicionado
- [x] ~~Múltiplos H1 em páginas (Estrutura, Natureza e Lazer)~~ ✅ Corrigido
- [ ] Site é single-page (poucos URLs indexáveis)
- [ ] Falta de páginas específicas para cada intenção de busca
- [ ] Google Analytics usando versão antiga (UA- em vez de GA4)

---

## Tarefas de Implementação

### Fase 1: Correções Técnicas Urgentes (Semana 1) ✅ CONCLUÍDA

#### 1.1 ✅ Corrigir idioma do HTML
**Status:** Implementado em commit `2a0b09d`

#### 1.2 ✅ Adicionar Open Graph e Twitter Cards
**Status:** Implementado em commit `e66104c`
- Open Graph tags completas na home e galeria
- Twitter Card tags implementadas

#### 1.3 ✅ Implementar Schema.org LocalBusiness + Event Venue
**Status:** Implementado em commit `b703ec3`
- JSON-LD com LocalBusiness, LodgingBusiness, EventVenue
- Amenidades, capacidade, coordenadas geo

#### 1.4 ✅ Corrigir alt text do logo
**Status:** Implementado em commit `eae5f06`

#### 1.5 ✅ Adicionar canonical URL
**Status:** Implementado em commit `b5ccb8f`

#### 1.6 ✅ Corrigir estrutura de headings (H1 único)
**Status:** Implementado em commit `675f46f`
- H1 único no Header (screen-reader accessible)
- Seções convertidas para H2

---

### Fase 2: Novas Páginas para SEO (Semana 2-3) ✅ CONCLUÍDA

#### 2.1 ✅ Criar página `/casamento`
**Status:** Implementado
**Keywords implementadas:**
- casamento no campo perto de SP
- sítio para casamento com cachoeira
- casamento rústico Embu-Guaçu
- espaço para casamento natureza SP

**Conteúdo implementado:**
- H1: "Casamento no Campo em Embu-Guaçu"
- Seções: intro, features, ceremony spaces, includes, FAQ (8 perguntas)
- Schema.org EventVenue structured data
- Open Graph e Twitter Cards
- CTA WhatsApp

#### 2.2 ✅ Criar página `/eventos-corporativos`
**Status:** Implementado
**Keywords implementadas:**
- evento corporativo natureza SP
- confraternização empresa sítio
- team building São Paulo

**Conteúdo:** Seções de benefícios, espaços, tipos de evento, diferenciais, logistics

#### 2.3 ✅ Criar página `/fim-de-semana`
**Status:** Implementado
**Keywords implementadas:**
- sítio para alugar fim de semana SP
- chácara com cachoeira perto de SP
- aluguel temporada Embu-Guaçu

**Conteúdo:** Amenidades, acomodações, usos ideais, regras, checklist interativo

#### 2.4 ✅ Criar página `/cachoeira`
**Status:** Implementado
**Keywords implementadas:**
- sítio com cachoeira privativa SP
- cachoeira Embu-Guaçu

**Conteúdo:** Features, usos (casamento, ensaios, família), preservação, tabela comparativa
**Estratégia especial:** Tabela comparativa posicionando Sítio Itaguaçú vs concorrentes

---

### Fase 3: Otimização de Conteúdo (Semana 3-4)

#### 3.1 ✅ Otimizar meta description
**Status:** Implementado em commit `e99df2f`

#### 3.2 ✅ Otimizar title tags por página
**Status:** Implementado
- Home: "Sítio Itaguaçú - Casamentos e Eventos com Cachoeira em Embu-Guaçu SP"
- Galeria: "Fotos do Sítio Itaguaçú - Cachoeira, Piscina, Eventos | Embu-Guaçu SP"

#### 3.3 Renomear arquivos de imagem
**Problema:** Imagens com nomes genéricos não ajudam SEO
**Ação:** Renomear para nomes descritivos com keywords
- `background_sitio_1080.webp` → `sitio-cachoeira-embu-guacu-vista-aerea.webp`
- `gallery/sitio-0.jpg` → `casamento-sitio-cachoeira-embu-guacu.jpg`
- etc.

#### 3.4 ✅ Adicionar alt text em todas as imagens da galeria
**Status:** Implementado em commit `87a5e06`
- Alt text descritivos com keywords para cada imagem

---

### Fase 4: SEO Técnico Avançado (Semana 4-5) ✅ PARCIALMENTE CONCLUÍDA

#### 4.1 ✅ Criar sitemap.xml
**Status:** Implementado em commit `ca58148`

#### 4.2 ✅ Criar robots.txt otimizado
**Status:** Implementado em commit `87c547a`

#### 4.3 Migrar para Google Analytics 4
**Status:** PENDENTE - Requer criação de propriedade GA4 no Google
**Motivo:** UA (Universal Analytics) está descontinuado
**Ação:** Criar propriedade GA4 e atualizar código de tracking

#### 4.4 ✅ Implementar lazy loading nas imagens
**Status:** Implementado em commit `87a5e06`
- Galeria (72 imagens) com loading="lazy"
- Iframe do mapa com loading="lazy"
- Vídeo com preload="metadata"

#### 4.5 ✅ Adicionar preconnect para recursos externos
**Status:** Implementado em commit `e66de4a`

---

### Fase 5: SEO Local e Off-Page (Contínuo)

#### 5.1 Google Meu Negócio
- [ ] Verificar/criar perfil no Google Business Profile
- [ ] Otimizar nome: "Sítio Itaguaçú - Eventos, Casamentos e Temporada"
- [ ] Adicionar todas as fotos com geotag
- [ ] Responder a todas as avaliações
- [ ] Postar atualizações semanais

#### 5.2 Cadastrar em diretórios
- [ ] Casamentos.com.br (já presente - manter atualizado)
- [ ] TemporadaLivre (já presente)
- [ ] Airbnb
- [ ] Booking.com
- [ ] TripAdvisor
- [ ] Guia de turismo da prefeitura de Embu-Guaçu
- [ ] AlugueChacara.com
- [ ] Sítios.com.br

#### 5.3 Link Building
- [ ] Parcerias com buffets locais (link no site deles)
- [ ] Parcerias com fotógrafos de casamento
- [ ] Parcerias com cerimonialistas
- [ ] Guest posts em blogs de casamento
- [ ] Menções em guias "melhores sítios para..."

#### 5.4 Avaliações
- [ ] Solicitar reviews de clientes satisfeitos no Google
- [ ] Responder TODAS as avaliações (positivas e negativas)
- [ ] Meta: 20+ avaliações com 4.5+ estrelas

---

### Fase 6: Conteúdo Estratégico - Blog (Médio Prazo) ✅ PARCIALMENTE CONCLUÍDA

#### 6.1 ✅ Criar seção de blog `/blog`
**Status:** Implementado com 3 posts iniciais

**Posts implementados:**

1. ✅ **"Quanto custa casar no campo em 2026?"**
   - URL: `/blog/quanto-custa-casar-no-campo`
   - Keywords: custo casamento campo, orçamento casamento sítio
   - Conteúdo: Tabela de custos, dicas de economia, FAQ
   - Schema.org Article structured data

2. ✅ **"Os 7 melhores sítios com cachoeira perto de São Paulo"**
   - URL: `/blog/melhores-sitios-cachoeira-sp`
   - Keywords: sítio cachoeira SP
   - Sítio Itaguaçú posicionado em #1
   - Tabela comparativa para featured snippet

3. ✅ **"O que levar para um fim de semana no sítio"**
   - URL: `/blog/o-que-levar-fim-de-semana-sitio`
   - Keywords: lista fim de semana sítio, o que levar chácara
   - Checklist interativo com checkboxes
   - Tráfego informacional → conversão

**Posts futuros sugeridos:**

4. **"Casamento rústico vs. casamento no campo: qual a diferença?"**
   - Keywords: casamento rústico, casamento campo

5. **"Como escolher o sítio perfeito para seu casamento"**
   - Keywords: como escolher sítio casamento
   - Checklist com Sítio Itaguaçú como exemplo

#### 6.2 Criar Lead Magnet
**Ideia:** "Guia Completo: Como Planejar seu Casamento no Campo" (PDF)
- Capturar e-mail/WhatsApp em troca do download
- Nutrir leads com e-mail marketing
**Status:** ⏳ Pendente

---

## Métricas de Sucesso

### KPIs a Acompanhar
- [ ] Posição no Google para "sítio casamento Embu-Guaçu" (meta: top 3)
- [ ] Posição para "sítio com cachoeira SP" (meta: top 5)
- [ ] Tráfego orgânico mensal (meta: +100% em 6 meses)
- [ ] Taxa de conversão WhatsApp (meta: 5% dos visitantes)
- [ ] Número de avaliações Google (meta: 20+)
- [ ] Core Web Vitals (meta: todos "Good")

### Ferramentas Recomendadas
- Google Search Console (monitorar indexação e keywords)
- Google Analytics 4 (tráfego e conversões)
- PageSpeed Insights (performance)
- Ahrefs ou SEMrush (backlinks e keywords)

---

## Resumo de Prioridades

| Prioridade | Tarefa | Impacto | Esforço | Status |
|------------|--------|---------|---------|--------|
| 🔴 Alta | Corrigir lang="pt-BR" | Alto | Baixo | ✅ |
| 🔴 Alta | Adicionar Schema.org JSON-LD | Alto | Médio | ✅ |
| 🔴 Alta | Open Graph tags | Alto | Baixo | ✅ |
| 🔴 Alta | Google Meu Negócio otimizado | Muito Alto | Médio | ⏳ Manual |
| 🟡 Média | Criar página /casamento | Alto | Alto | ✅ |
| 🟡 Média | Criar página /fim-de-semana | Alto | Alto | ✅ |
| 🟡 Média | Criar página /eventos-corporativos | Alto | Alto | ✅ |
| 🟡 Média | Criar página /cachoeira | Alto | Alto | ✅ |
| 🟡 Média | Migrar para GA4 | Médio | Baixo | ⏳ Manual |
| 🟡 Média | Sitemap.xml | Médio | Baixo | ✅ |
| 🟢 Baixa | Blog com conteúdo SEO | Alto (longo prazo) | Alto | ✅ (3 posts) |
| 🟢 Baixa | Atualizar navegação | Médio | Baixo | ✅ |
| 🟢 Baixa | Lead magnet PDF | Médio | Alto | ⏳ Pendente |

---

## Implementações Concluídas (Janeiro 2026)

### Commits realizados:

**Fase 1 - Correções Técnicas:**
1. `2a0b09d` - fix: change HTML lang attribute from 'en' to 'pt-BR'
2. `e66104c` - feat: add Open Graph and Twitter Card meta tags
3. `b703ec3` - feat: add Schema.org JSON-LD structured data
4. `eae5f06` - fix: improve logo alt text for better SEO
5. `b5ccb8f` - feat: add canonical URL meta tag
6. `675f46f` - fix: correct heading hierarchy for SEO (single H1)
7. `e99df2f` - feat: optimize meta description for SEO
8. `ca58148` - feat: add sitemap.xml for search engine indexing
9. `87c547a` - feat: update robots.txt with sitemap reference
10. `e66de4a` - perf: add preconnect hints for external resources
11. `87a5e06` - perf: add lazy loading to images, video, and iframe
12. `170d4f4` - feat: add SEO meta tags to gallery page
13. `9c7d7e1` - feat: enhance PWA manifest with SEO-friendly metadata

**Fase 2 - Landing Pages:**
14. feat: add wedding landing page with SEO optimization
15. feat: add weekend rental landing page
16. feat: add corporate events landing page
17. feat: add waterfall attraction landing page

**Fase 6 - Blog:**
18. feat: add blog index page
19. feat: add blog post about wedding costs
20. feat: add blog post about best waterfall venues
21. feat: add blog post with weekend checklist
22. feat: update sitemap with new pages
23. feat: update navigation with new landing pages and blog

---

## Próximos Passos

1. **Manual:** Criar/otimizar Google Meu Negócio
2. **Manual:** Criar propriedade GA4 e atualizar tracking code
3. **Marketing:** Solicitar avaliações de clientes no Google
4. **Conteúdo:** Adicionar mais posts ao blog (sugestões na Fase 6)
5. **Conteúdo:** Criar lead magnet PDF para captura de leads

---

*Documento criado em: Janeiro 2026*
*Última atualização: Janeiro 2026*
*Baseado em análise de: sitioitaguacu.com.br, casamentos.com.br, temporadalivre.com e concorrentes da região*
