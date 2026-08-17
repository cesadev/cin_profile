# 🎓 Portfólio Pessoal - CIn/UFPE

Este repositório contém o código-fonte da minha página pessoal e portfólio acadêmico, desenvolvido para a disciplina de **Desenvolvimento de Software (CIN0136-SI)** do Centro de Informática da UFPE.

---

## 🔗 Links de Entrega

* 🌐 **Página Pessoal Publicada (CIn/UFPE):** [https://cin.ufpe.br/~ccsl](https://cin.ufpe.br/~ccsl)
* 🐙 **Repositório do GitHub:** [https://github.com/cesadev/cin_profile](https://github.com/cesadev/cin_profile)

---

## 👤 Informações do Aluno

* **Nome Completo:** Caio Cesar Souza de Lira
* **Curso:** Sistemas de Informação (CIn-UFPE)
* **Disciplina:** Desenvolvimento de Software (CIN0136-SI)
* **Contato:** `ccsl@cin.ufpe.br`

---

## 🛠️ Tecnologias e Arquitetura

* **React (JSX):** Componentização da interface (`Home.jsx`, `Sobre.jsx`, `Portfolio.jsx`).
* **Vite:** Utilizado como motor de bundling, dev server e ferramenta de build.
* **Astro (v4):** Framework para orquestração da arquitetura e integração com React.
* **SSG (Static-Site Generation):** O projeto compila todas as páginas React em HTML/CSS estáticos durante o build.
* **MPA (Multi-Page Application):** Estrutura de múltiplas páginas independentes (`index.astro`, `sobre.astro`, `portfolio.astro`).
* **Identidade Visual CIn-UFPE:** Estilização inspirada nas cores institucionais do CIn (Vermelho `#DB1E2F` e Grafite `#231F20`).

---

## 📁 Estrutura do Site

1. **Página Inicial (`/`):** Apresentação objetiva, vínculo acadêmico com a disciplina, principais interesses em tecnologia e formas de contato.
2. **Página "Sobre" (`/sobre`):** Detalhamento da trajetória acadêmica, habilidades técnicas, interesses e objetivos profissionais.
3. **Página de Portfólio (`/portfolio`):** Galeria com projetos desenvolvidos nas disciplinas de IP e CAD, além de projetos pessoais.

---

## 📝 Documento de Reflexão e Aprendizado

### a) Sugestão de Abordagem de Construção (Vite + React + Astro SSG)
A combinação do Vite com o Astro permitiu utilizar componentes em React de forma simples, aproveitando a sintaxe do JSX e gerando páginas estáticas (SSG) de alta performance para a publicação no servidor do CIn.

### b) Principais Dificuldades
Minha principal dificuldade foi entender como estruturar o código, como subir o projeto no GitHub e como aplicar uma estilização útil sem desperdiçar as ferramentas que eu tinha em mãos.

### c) Principais Aprendizados
Compreensão do fluxo de produção de um site, por mais simples que seja. Utilizei bastante os commits do GitHub, entendi melhor a relação entre HTML e CSS, além de aprender conceitos práticos de React e Vite.

### d) Ferramentas de IA
Utilizei principalmente o Gemini para me ajudar a revisar os textos e a debruçar sobre a documentação do React e de sintaxes em geral. Foi minha maior consultoria de pesquisa — como tudo era muito novo, precisei pesquisar cada coisa que eu iria fazer. A maior ajuda que recebi da IA foi no entendimento da sintaxe e no aprendizado acelerado das ferramentas, permitindo afunilar o conteúdo necessário para colocá-lo em prática rapidamente.

---

## 🚀 Como Executar o Projeto Localmente

```bash
# 1. Clonar o repositório
git clone [https://github.com/cesadev/cin_profile.git](https://github.com/cesadev/cin_profile.git)
cd cin_profile

# 2. Instalar dependências
npm install

# 3. Executar o servidor local de desenvolvimento
npm run dev

# 4. Gerar os arquivos estáticos para produção (SSG)
npm run build

# 5. Testar a build gerada na pasta dist/
npm run preview