<h1 align="center">🦞 OpenClaw Deployer (OCD)</h1>

<p align="center">
<strong>Um assistente web interativo, moderno e bilíngue (PT-BR / EN-US) desenvolvido para guiar a instalação e o provisionamento do <a href="https://github.com/openclaw/openclaw">OpenClaw</a> (IA Autônoma).</strong>
</p>

<p align="center">
🌐 <strong>Acesso ao vivo:</strong> <a href="https://www.google.com/search?q=https://openclaw.aurorabi.com.br">openclaw.aurorabi.com.br</a> &nbsp; | &nbsp; 🐙 <strong>Repositório:</strong> <a href="https://github.com/lucasrmonteiro07/openclaw-deployer">lucasrmonteiro07/openclaw-deployer</a>
</p>

<p align="center">
<a href="https://www.google.com/search?q=https://vercel.com/new/clone%3Frepository-url%3Dhttps://github.com/lucasrmonteiro07/openclaw-deployer"><img src="https://www.google.com/search?q=https://vercel.com/button" alt="Deploy with Vercel"/></a>
</p>

✨ O que este projeto faz?

Este projeto funciona como um gerador visual de infraestrutura. Ele cria dinamicamente comandos de terminal, manifestos docker-compose.yml e Dockerfiles seguros baseados no ambiente alvo escolhido. Tudo isso numa interface gráfica moderna, eliminando a necessidade de copiar e colar comandos complexos de documentações longas e mitigando erros de instalação.

🚀 Funcionalidades Principais

🌍 Multilingue em Tempo Real: Suporte nativo para Português (PT-BR) e Inglês (EN-US) com alternância instantânea.

💻 Multi-Ambiente (Cross-Platform): Instruções e sintaxes ajustadas automaticamente para:

Linux CLI (apt-get, nano, Docker puro)

Windows (PowerShell, Winget, Docker Desktop)

WSL2 Nativo (Ubuntu/Debian, Node.js Bare metal, sem Docker)

Easypanel PaaS (Instalação via 1-Click Template Oficial)

🔐 Segurança Zero-Trust: Ensina e implementa as melhores práticas recomendadas, como manter portas em loopback (127.0.0.1), usar túneis SSH para acesso remoto seguro e lidar com a arquitetura de Gateway Tokens (gerados localmente via WebCrypto API).

🐳 Integração Portainer: Opção de 1 clique para plugar o Portainer CE (interface gráfica de gestão do Docker) diretamente no manifesto gerado.

🛠️ Como Rodar Localmente

Este projeto foi construído num ambiente moderno com React e Vite, e perfeitamente estilizado com TailwindCSS. Para rodar na sua máquina local:

Clone o repositório:

git clone [https://github.com/lucasrmonteiro07/openclaw-deployer.git](https://github.com/lucasrmonteiro07/openclaw-deployer.git)
cd openclaw-deployer


Instale as dependências:

npm install


Inicie o servidor de desenvolvimento:

npm run dev


Abra http://localhost:5173 no seu navegador.

🌐 Deploy Rápido (Vercel)

O projeto está otimizado como uma Single Page Application (SPA), ideal para um alojamento gratuito e ultrarrápido na Vercel.

Faça o Fork ou Push deste código para a sua conta no GitHub.

Faça login na Vercel.

Clique em "Add New" > "Project".

Importe o seu repositório openclaw-deployer.

Em "Framework Preset", o sistema detetará automaticamente o Vite.

Clique em Deploy! Em 30 segundos o seu painel de instalação estará online globalmente.

Desenvolvido com ❤️, React e TailwindCSS.