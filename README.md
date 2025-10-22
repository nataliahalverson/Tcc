# FORMA+ — Viagem de Formatura

Aplicação web moderna construída com **Next.js 14 + TypeScript** para gerenciar e promover pacotes de viagem de formatura.

## ✨ Características

- **🎨 Componentes React** — Todos os componentes foram migrados de HTML legado para componentes React modernos
- **📱 Responsivo** — Totalmente adaptado para dispositivos móveis, tablets e desktops
- **🔐 Type-Safe** — TypeScript em todo o projeto para máxima segurança de tipos
- **⚡ Performance** — Otimizado com Next.js App Router e Server Components
- **🎡 Carrossel interativo** — Componente Carousel com navegação, auto-play e indicadores
- **📋 Formulários** — Sistema de formulários reutilizável para Login, Registro e Contato

## 🚀 Começar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:3000

### Build

```bash
npm run build
npm start
```

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx           # Layout raiz
│   ├── page.tsx             # Página inicial (Home)
│   ├── globals.css          # Estilos globais
│   ├── inicio/
│   │   ├── page.tsx         # Página de Início
│   │   └── page.module.css
│   ├── pacotes/
│   │   ├── page.tsx         # Página de Pacotes
│   │   └── page.module.css
│   ├── roteiro/
│   │   ├── page.tsx         # Página de Roteiro
│   │   └── page.module.css
│   ├── login/
│   │   ├── page.tsx         # Página de Login
│   │   └── page.module.css
│   ├── registro/
│   │   ├── page.tsx         # Página de Registro
│   │   └── page.module.css
│   └── contato/
│       ├── page.tsx         # Página de Contato
│       └── page.module.css
├── components/
│   ├── Header.tsx           # Componente Header
│   ├── Header.module.css
│   ├── Footer.tsx           # Componente Footer
│   ├── Carousel.tsx         # Componente Carrossel
│   ├── Carousel.module.css
│   ├── Form.tsx             # Componente Formulário
│   └── FormInput.module.css
└── lib/                      # Utilitários (vazio por enquanto)
```

## 🎯 Páginas Disponíveis

- **/** — Página inicial com CTA para começar
- **/inicio** — Apresentação com carrossel de destinos
- **/pacotes** — Lista de pacotes disponíveis
- **/roteiro** — Detalhes do itinerário por destino
- **/login** — Formulário de login
- **/registro** — Formulário de cadastro
- **/contato** — Formulário de contato

## 🎨 Componentes

### Header
Navegação principal com links para todas as páginas.

### Footer
Rodapé com informações de copyright.

### Carousel
Componente reutilizável de carrossel com:
- Auto-play
- Navegação anterior/próximo
- Indicadores (dots)
- Transições suaves

### Form
Sistema de formulários flexível com:
- Validação básica
- Mensagens de sucesso/erro
- Loading state
- Suporte a múltiplos tipos de input

## 🔄 Próximos Passos

- [ ] Integrar com API backend para autenticação
- [ ] Implementar página de administração para gerenciar pacotes
- [ ] Adicionar sistema de pagamento
- [ ] Melhorar SEO com meta tags dinâmicas
- [ ] Implementar testes automatizados
- [ ] Adicionar suporte a múltiplos idiomas
- [ ] Substituir placeholders de imagem por imagens reais

## 📝 Notas

Todos os arquivos HTML legados foram convertidos para componentes React modernos. As imagens placeholder devem ser substituídas por imagens reais no diretório `public/`.

## 📄 Licença

Projeto desenvolvido para fins educacionais.
