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

## 📌 Referência (Instalação Oficial OpenClaw — 2026)

As instruções deste projeto foram alinhadas com a documentação oficial:

- Instalação: https://openclaw.ia.br/instalacao/
- Tutoriais: https://openclaw.ia.br/tutoriais/

### Requisitos (resumo)

- Node.js **22+** (recomendado: **24 LTS**)
- Windows: preferencialmente via **WSL2**
- Uma **API Key** (Anthropic/Claude ou OpenAI)

### TL;DR — instalar e iniciar

```bash
# 1) instalar o CLI
npm install -g openclaw@latest

# 2) wizard (configura gateway, workspace, canais e autenticação)
openclaw onboard --install-daemon
```

Depois, conecte um canal (ex.: WhatsApp) e teste enviando uma mensagem.

### Comandos essenciais (guia oficial)

```bash
# Conectar canal (ex.: WhatsApp)
openclaw channel add whatsapp

# QR não aparece?
openclaw gateway restart

# Verificar status / logs / diagnóstico
openclaw gateway status
openclaw gateway logs -f
openclaw doctor

# Atualizar
openclaw update --channel stable
```

### Referências importantes (API/CLI/Config/Skills)

- CLI (comandos): https://openclaw.ia.br/api/cli/
- Config (config.yaml): https://openclaw.ia.br/api/config/
- Skills (conceitos e guias): https://openclaw.ia.br/skills/
- API REST (HTTP): https://openclaw.ia.br/api/rest/
- API WebSocket (streaming): https://openclaw.ia.br/api/websocket/
- Segurança de Skills (permissões/sandbox/auditoria): https://openclaw.ia.br/skills/seguranca/
- Templates de config (mínima/completa):
	- https://openclaw.ia.br/templates/config-minimo/
	- https://openclaw.ia.br/templates/config-completa/

Notas rápidas (docs oficiais):

- Base URL padrão da API: `http://localhost:18789` (porta pode mudar via config)
- WebSocket padrão: `ws://localhost:18789/ws`
- Se você expuser a porta para fora do servidor, considere configurar token no `config.yaml` e manter `bind: localhost` quando possível (use túnel SSH para acesso remoto).

Exemplo (API protegida com token no `config.yaml`):

```yaml
gateway:
	auth:
		token: "seu_token_secreto"
```

E envie o token no header:

```text
Authorization: Bearer seu_token_aqui
```

Exemplos úteis da CLI (doc oficial):

```bash
# Ver a configuração atual
openclaw config get

# Skills (plugins)
openclaw skill list
openclaw skill install browser-control
```

🌐 Deploy Rápido (Vercel)

O projeto está otimizado como uma Single Page Application (SPA), ideal para um alojamento gratuito e ultrarrápido na Vercel.

Faça o Fork ou Push deste código para a sua conta no GitHub.

Faça login na Vercel.

Clique em "Add New" > "Project".

Importe o seu repositório openclaw-deployer.

Em "Framework Preset", o sistema detetará automaticamente o Vite.

Clique em Deploy! Em 30 segundos o seu painel de instalação estará online globalmente.

Desenvolvido com ❤️, React e TailwindCSS.