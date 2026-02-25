/**
 * OpenClaw Deployer (OCD) - Landing Page + Installer
 * --------------------------------------------------------
 * Dependências: npm install lucide-react
 */

import React, { useState, useEffect } from 'react';
import { 
  Terminal, Settings, Server, ShieldAlert, Copy, CheckCircle2, 
  ChevronRight, Play, Box, Key, ExternalLink, AppWindow, 
  LayoutDashboard, Cloud, RefreshCw, Search, Rocket, 
  ShieldCheck, Layers, Github, ArrowLeft, BookOpen
} from 'lucide-react';

const OcdIcon = ({ size = 24, className = "" }) => (
  <div 
    className={`font-black tracking-tighter flex items-center justify-center leading-none ${className}`} 
    style={{ width: size, height: size, fontSize: size * 0.45 }}
  >
    OCD
  </div>
);

// ============================================================================
// COMPONENTE: PÁGINA INICIAL (LANDING PAGE)
// ============================================================================
const LandingPage = ({ onStart, lang, setLang, t }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-red-500/30 flex flex-col relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

      {/* Header Simples */}
      <header className="relative z-10 max-w-6xl w-full mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-red-600 p-2 rounded-lg text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            <OcdIcon size={24} />
          </div>
          <span className="font-bold text-xl text-white tracking-tight">OpenClaw <span className="text-red-500">Deployer</span></span>
        </div>
        <button 
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 px-3 py-1.5 rounded-full border border-slate-700 transition-colors"
        >
          <span className="text-base leading-none">{lang === 'pt' ? '🇧🇷' : '🇺🇸'}</span>
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">{lang === 'pt' ? 'PT-BR' : 'EN-US'}</span>
        </button>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-12 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-8 uppercase tracking-widest">
          <Rocket size={14} />
          {t("The Lobster Way 🦞", "The Lobster Way 🦞")}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          {t("A sua IA Autônoma,", "Your Autonomous AI,")} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
            {t("Online em Minutos.", "Online in Minutes.")}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl leading-relaxed">
          {t(
            "O OpenClaw é o seu assistente de IA pessoal. Qualquer SO. Qualquer Plataforma. Uma ferramenta de código aberto que lhe dá controlo total sobre os seus dados. O OpenClaw Deployer gera a infraestrutura de Gateway WebSocket, manifestos e comandos para instalar tudo num clique.",
            "OpenClaw is your personal AI assistant. Any OS. Any Platform. An open-source tool that gives you complete control over your data. OpenClaw Deployer generates the WebSocket Gateway infrastructure, manifests, and commands to install everything in one click."
          )}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button 
            onClick={onStart}
            className="group flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(220,38,38,0.4)]"
          >
            {t("Iniciar Configuração", "Start Configuration")} 
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="https://github.com/openclaw/openclaw" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg border border-slate-700 transition-colors"
          >
            <Github size={20} />
            {t("Ver Repositório Oficial", "View Official Repo")}
          </a>
        </div>
      </main>

      {/* Features Grid */}
      <section className="relative z-10 bg-slate-900/50 border-t border-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-blue-400 mb-4">
              <Layers size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t("Privacidade & Self-Hosted", "Privacy & Self-Hosted")}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("Implemente o seu assistente com total propriedade dos dados. Sem dependências de cloud, os seus dados continuam a ser seus.", "Deploy your assistant with complete data ownership. No cloud dependencies, your data stays yours.")}
            </p>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <div className="bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-400 mb-4">
              <Cloud size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t("Gateway WebSocket", "WebSocket Gateway")}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("Serviço gateway de alta performance para comunicação em tempo real com canais como WhatsApp, Telegram, Slack e Discord.", "High-performance gateway service for real-time communication with channels like WhatsApp, Telegram, Slack, and Discord.")}
            </p>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <div className="bg-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-amber-400 mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t("Segurança Zero-Trust", "Zero-Trust Security")}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("Geração de Gateway Tokens locais, isolamento de workspaces de IA e guias de aprovação de dispositivos nativos.", "Local Gateway Token generation, AI workspace isolation, and native device approval guides.")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// ============================================================================
// COMPONENTE: DEPLOYER (A FERRAMENTA INTERATIVA)
// ============================================================================
const DeployerApp = ({ onBack, lang, setLang, t }) => {
  const [installPath, setInstallPath] = useState('~/openclaw');
  const [port, setPort] = useState('18789');
  const [restartPolicy, setRestartPolicy] = useState('always');
  const [exposeExternally, setExposeExternally] = useState(false);
  const [installMethod, setInstallMethod] = useState('image');
  const [baseOs, setBaseOs] = useState('linux');
  const [os, setOs] = useState('linux');
  const [wslDistro, setWslDistro] = useState('Ubuntu');
  const [includePortainer, setIncludePortainer] = useState(false);
  
  const [easyToken, setEasyToken] = useState('');

  const generateSecureToken = () => {
    const array = new Uint8Array(24);
    window.crypto.getRandomValues(array);
    const token = btoa(String.fromCharCode.apply(null, array));
    setEasyToken(token);
  };

  useEffect(() => {
    if (os === 'windows' && installPath === '~/openclaw') {
      setInstallPath('C:\\openclaw');
    } else if ((os === 'linux' || os === 'wsl') && installPath === 'C:\\openclaw') {
      setInstallPath('~/openclaw');
    }
    if (os === 'windows' || os === 'easypanel') {
      setIncludePortainer(false);
    }
    if (os === 'easypanel' && !easyToken) {
      generateSecureToken();
    }
  }, [os, installPath, easyToken]);

  const [activeStep, setActiveStep] = useState(1);
  const [copiedStates, setCopiedStates] = useState({});

  const copyToClipboard = (text, id) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedStates({ ...copiedStates, [id]: true });
        setTimeout(() => setCopiedStates({ ...copiedStates, [id]: false }), 2000);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedStates({ ...copiedStates, [id]: true });
        setTimeout(() => setCopiedStates({ ...copiedStates, [id]: false }), 2000);
      } catch (error) {
        console.error('Falha ao copiar', error);
      }
      textArea.remove();
    }
  };

  const generateDockerCompose = () => {
    const portBinding = exposeExternally ? `"${port}:${installMethod === 'build' ? port : '18789'}"` : `"127.0.0.1:${port}:${installMethod === 'build' ? port : '18789'}"`;
    const normalizedPath = os === 'windows' ? installPath.replace(/\\/g, '/') : installPath;
    
    let yaml = `services:
  openclaw:
    ${installMethod === 'build' ? 'build:\n      context: .\n      dockerfile: Dockerfile' : 'image: ghcr.io/openclaw/openclaw:latest'}
    container_name: openclaw-gateway
    restart: ${restartPolicy}
    ports:
      - ${portBinding}
    volumes:
      - ${normalizedPath}/data:/home/node/.openclaw
      - ${normalizedPath}/workspace:/home/node/workspace
    environment:
      - NODE_ENV=production
      ${installMethod === 'build' ? `- OPENCLAW_GATEWAY_PORT=${port}` : ''}
      # - OPENCLAW_EXTRA_MOUNTS=... # ${t("Descomente para montar diretórios extras do host", "Uncomment to mount extra host directories")}`;

    if (includePortainer) {
      yaml += `

  portainer:
    image: portainer/portainer-ce:latest
    container_name: portainer
    restart: always
    ports:
      - "8000:8000"
      - "9443:9443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer_data:/data

volumes:
  portainer_data:`;
    }

    return yaml + '\n';
  };

  const generateDockerfile = () => {
    let pkgManager = 'apt-get';
    let installCmd = 'apt-get update && apt-get install -y';
    let cleanCmd = 'rm -rf /var/lib/apt/lists/*';
    let nodeSetup = `curl -fsSL https://deb.nodesource.com/setup_24.x | bash - && apt-get install -y nodejs`;

    if (baseOs.includes('alpine')) {
      installCmd = 'apk add --no-cache';
      cleanCmd = '';
      nodeSetup = 'apk add --no-cache nodejs npm';
    }

    const userCmd = baseOs.includes('alpine') 
      ? 'addgroup -S openclaw && adduser -S openclaw -G openclaw'
      : 'useradd -m -s /bin/bash openclaw';

    const cleanCmdStr = cleanCmd ? "&& \\\n    " + cleanCmd : "";

    return `FROM ${baseOs}

# 1. ${t("Instalar dependências do sistema", "Install system dependencies")}
RUN ${installCmd} curl git build-essential python3 ${baseOs.includes('alpine') ? '' : 'python3-pip'} && \\
    ${nodeSetup} ${cleanCmdStr}

# 2. ${t("Criar utilizador não-root por segurança", "Create non-root user for security")}
RUN ${userCmd}

# 3. ${t("Configurar diretório de trabalho", "Configure working directory")}
WORKDIR /opt/openclaw
RUN chown -R openclaw:openclaw /opt/openclaw

# 4. ${t("Alternar para o utilizador seguro", "Switch to secure user")}
USER openclaw

# 5. ${t("Clonar código-fonte e instalar dependências", "Clone source code and install dependencies")}
RUN git clone https://github.com/openclaw/openclaw.git . && \\
    npm install --omit=dev

ENV OPENCLAW_GATEWAY_PORT=${port}
EXPOSE ${port}

CMD ["npx", "openclaw", "gateway", "run"]`;
  };

  const steps = os === 'easypanel' ? [
    { id: 1, title: t("Pré-requisitos", "Prerequisites"), icon: <Server size={20} /> },
    { id: 2, title: t("Tokens e Segurança", "Tokens & Security"), icon: <Key size={20} /> },
    { id: 3, title: t("Deploy 1-Click", "1-Click Deploy"), icon: <Cloud size={20} /> },
    { id: 4, title: t("Onboarding", "Onboarding"), icon: <LayoutDashboard size={20} /> },
    { id: 5, title: t("Acesso Web", "Web Access"), icon: <ShieldAlert size={20} /> },
  ] : os === 'wsl' ? [
    { id: 1, title: t("Pré-requisitos", "Prerequisites"), icon: <Server size={20} /> },
    { id: 2, title: t("Configuração", "Configuration"), icon: <Settings size={20} /> },
    { id: 3, title: t("Download e Setup", "Download & Setup"), icon: <Box size={20} /> },
    { id: 4, title: t("Execução Nativa", "Native Execution"), icon: <Play size={20} /> },
    { id: 5, title: t("Autenticação e Acesso", "Auth & Access"), icon: <Key size={20} /> },
  ] : [
    { id: 1, title: t("Pré-requisitos", "Prerequisites"), icon: <Server size={20} /> },
    { id: 2, title: t("Configuração do Contêiner", "Container Config"), icon: <Settings size={20} /> },
    { id: 3, title: t("Geração do Compose", "Compose Generation"), icon: <Box size={20} /> },
    { id: 4, title: t("Execução & Deploy", "Execution & Deploy"), icon: <Play size={20} /> },
    { id: 5, title: t("Autenticação e Acesso", "Auth & Access"), icon: <Key size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-red-500/30">
      <header className="bg-slate-900 border-b border-red-500/20 sticky top-0 z-10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors flex items-center justify-center p-2 bg-slate-800 rounded-lg hover:bg-slate-700">
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-3 border-l border-slate-700 pl-4">
              <div className="bg-red-600 p-2 rounded-lg text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] flex items-center justify-center">
                <OcdIcon size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  OpenClaw <span className="text-red-500">Deployer</span>
                </h1>
                <p className="text-xs text-slate-400">{t("Instalação Oficial • Painel Administrativo", "Official Installation • Admin Panel")}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 px-3 py-1.5 rounded-full border border-slate-700 transition-colors"
            >
              <span className="text-base leading-none">{lang === 'pt' ? '🇧🇷' : '🇺🇸'}</span>
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">{lang === 'pt' ? 'PT-BR' : 'EN-US'}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-[250px_1fr] gap-8">
        {/* Sidebar Stepper */}
        <nav className="flex gap-2 overflow-x-auto pb-2 md:block md:space-y-1 md:overflow-visible md:pb-0">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`w-auto flex-shrink-0 flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 md:w-full md:px-4 md:py-3 ${
                activeStep === step.id
                  ? 'bg-red-600/10 text-red-400 border border-red-500/30 shadow-[inset_0_0_20px_rgba(220,38,38,0.05)]'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 border border-transparent'
              }`}
            >
              <div className={`${activeStep === step.id ? 'text-red-500' : 'text-slate-500'}`}>
                {step.icon}
              </div>
              <span className="font-medium text-sm whitespace-nowrap">{step.id}. {step.title}</span>
              {activeStep > step.id && (
                <CheckCircle2 size={16} className="ml-auto text-emerald-500" />
              )}
            </button>
          ))}
          
          <div className="mt-8 p-4 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-400 leading-relaxed">
            <p className="flex items-center gap-2 text-amber-500 font-semibold mb-2">
              <ShieldAlert size={14} /> {t("Aviso de Segurança", "Security Warning")}
            </p>
            {t(
              "O OpenClaw é um agente autônomo com alto poder de execução. Siga as etapas de autenticação com cuidado para não expor a IA na internet.",
              "OpenClaw is an autonomous agent with high execution capabilities. Follow the authentication steps carefully to avoid exposing the AI to the public internet."
            )}
          </div>
        </nav>

        {/* Content Area */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden flex flex-col">
          <div className="px-8 pt-6 pb-4 border-b border-slate-800/50 flex justify-between items-center bg-slate-900/50 flex-wrap gap-4">
            <span className="text-sm font-medium text-slate-400">{t("Ambiente de Instalação:", "Installation Environment:")}</span>
            <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 w-fit">
              <button 
                onClick={() => {setOs('linux'); setActiveStep(1);}}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${os === 'linux' ? 'bg-slate-800 text-white shadow-sm border border-slate-700' : 'text-slate-500 hover:text-slate-300'}`}
              >
                <Terminal size={14} /> Linux CLI
              </button>
              <button 
                onClick={() => {setOs('windows'); setActiveStep(1);}}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${os === 'windows' ? 'bg-slate-800 text-white shadow-sm border border-slate-700' : 'text-slate-500 hover:text-slate-300'}`}
              >
                <AppWindow size={14} /> Windows
              </button>
              <button 
                onClick={() => {setOs('wsl'); setActiveStep(1);}}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${os === 'wsl' ? 'bg-slate-800 text-white shadow-sm border border-slate-700' : 'text-slate-500 hover:text-slate-300'}`}
              >
                <Terminal size={14} /> {t("WSL2 (Nativo)", "WSL2 (Native)")}
              </button>
              <button 
                onClick={() => {setOs('easypanel'); setActiveStep(1);}}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${os === 'easypanel' ? 'bg-emerald-900/40 text-emerald-400 shadow-sm border border-emerald-500/30' : 'text-slate-500 hover:text-slate-300'}`}
              >
                <Cloud size={14} /> Easypanel (1-Click)
              </button>
            </div>
          </div>

          <div className="flex-1 relative overflow-y-auto">
            {/* --- STEP 1 --- */}
            {activeStep === 1 && (
              <div className="p-8 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-2xl font-bold text-white mb-2">{t("Pré-requisitos do Sistema", "System Prerequisites")}</h2>
                <p className="text-slate-400 mb-6">{t("Verifique se o seu servidor possui os pacotes fundamentais instalados antes de prosseguir.", "Ensure your server has the fundamental packages installed before proceeding.")}</p>
                
                <div className="space-y-4">
                  {os === 'easypanel' ? (
                    <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                      <h3 className="text-slate-200 font-medium mb-2 flex items-center gap-2">
                        <Cloud size={16} className="text-emerald-400" /> 1. {t("Instalar o Easypanel no seu VPS ou WSL", "Install Easypanel on your VPS or WSL")}
                      </h3>
                      <p className="text-xs text-slate-500 mb-3">{t("O Easypanel transforma um servidor Ubuntu/Debian limpo (ou o seu WSL) num PaaS moderno. Se já o tem instalado, pode saltar este passo. Se não, execute isto como root (no WSL, digite", "Easypanel transforms a clean Ubuntu/Debian server (or your WSL) into a modern PaaS. If you already have it installed, skip this step. Otherwise, execute this as root (on WSL, type")} <code className="bg-slate-800 px-1 rounded text-slate-300">sudo su</code> {t("primeiro):", "first):")}</p>
                      <div className="relative group">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800 shadow-inner">
                          curl -sSL https://get.easypanel.io | sh
                        </pre>
                        <button onClick={() => copyToClipboard('curl -sSL https://get.easypanel.io | sh', 'req1_easy')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['req1_easy'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                      <p className="text-xs text-amber-500 mt-3 font-medium bg-amber-500/10 inline-block px-3 py-2 rounded-lg border border-amber-500/20 mb-2">
                        {t("Após instalar, acesse", "After installing, access")} <strong className="font-mono">http://localhost:3000</strong> {t("(ou o IP do seu servidor) no navegador para criar a sua conta de Admin.", "(or your server's IP) in your browser to create your Admin account.")}
                      </p>
                      <p className="text-xs text-emerald-500 font-medium bg-emerald-500/10 inline-block px-3 py-2 rounded-lg border border-emerald-500/20 flex items-center gap-2">
                        <CheckCircle2 size={14} /> {t("Dica: O Easypanel possui um template oficial do OpenClaw pronto para usar!", "Tip: Easypanel has an official OpenClaw template ready to use!")}
                      </p>
                    </div>
                  ) : os === 'wsl' ? (
                    <>
                      <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                          <h3 className="text-slate-200 font-medium flex items-center gap-2">
                            <AppWindow size={16} className="text-blue-400" /> 1. {t("Instalar e Ativar o WSL2", "Install and Enable WSL2")}
                          </h3>
                          <select 
                            value={wslDistro}
                            onChange={(e) => setWslDistro(e.target.value)}
                            className="bg-slate-900 border border-slate-700 text-slate-200 rounded-md px-3 py-1.5 focus:outline-none focus:border-blue-500 text-xs font-mono"
                          >
                            <option value="Ubuntu">Ubuntu ({t("Padrão", "Default")})</option>
                            <option value="Ubuntu-24.04">Ubuntu 24.04</option>
                            <option value="Ubuntu-22.04">Ubuntu 22.04</option>
                            <option value="Debian">Debian GNU/Linux</option>
                            <option value="kali-linux">Kali Linux</option>
                          </select>
                        </div>
                        <p className="text-xs text-slate-500 mb-2">{t("Abra o", "Open")} <strong>PowerShell {t("como Administrador", "as Administrator")}</strong> {t("no seu Windows e execute:", "on your Windows and execute:")}</p>
                        <div className="relative group">
                          <pre className="text-sm font-mono text-emerald-400 bg-black p-3 rounded overflow-x-auto">
                            wsl --install -d {wslDistro}
                          </pre>
                          <button onClick={() => copyToClipboard(`wsl --install -d ${wslDistro}`, 'req1_wsl')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                            {copiedStates['req1_wsl'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                          </button>
                        </div>
                        <p className="text-xs text-amber-500 mt-2 font-medium bg-amber-500/10 inline-block px-2 py-1 rounded">{t("Nota: Se foi a primeira instalação, reinicie o computador. Depois, procure e abra a aplicação", "Note: If this was your first installation, reboot your computer. Then, search and open the application")} "{wslDistro.split('-')[0]}" {t("no menu Iniciar do Windows.", "in the Windows Start Menu.")}</p>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                        <h3 className="text-slate-200 font-medium mb-2 flex items-center gap-2">
                          <Terminal size={16} className="text-red-400" /> 2. {t("Instalar Node.js (22+) e Git no", "Install Node.js (22+) and Git on")} {wslDistro.split('-')[0]} (WSL)
                        </h3>
                        <p className="text-xs text-slate-500 mb-2">{t("O OpenClaw requer Node.js 22+ (recomendado: 24 LTS). No WSL, a forma mais estável é via nvm. Execute no terminal do", "OpenClaw requires Node.js 22+ (recommended: 24 LTS). On WSL, the most stable approach is via nvm. Run in the terminal of")} {wslDistro.split('-')[0]}:</p>
                        <div className="relative group">
                          <pre className="text-sm font-mono text-emerald-400 bg-black p-3 rounded overflow-x-auto">
                            sudo apt-get update && sudo apt-get install -y curl git build-essential{'\n'}
                            curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash{'\n'}
                            {'\n'}
                            {'# '}IMPORTANTE: feche e reabra o terminal, depois:{'\n'}
                            nvm install 24{'\n'}
                            nvm use 24{'\n'}
                            nvm alias default 24{'\n'}
                            {'\n'}
                            node --version{'\n'}
                            npm --version
                          </pre>
                          <button onClick={() => copyToClipboard('sudo apt-get update && sudo apt-get install -y curl git build-essential\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash\n\n# IMPORTANTE: feche e reabra o terminal, depois:\nnvm install 24\nnvm use 24\nnvm alias default 24\n\nnode --version\nnpm --version', 'req2_wsl_native')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                            {copiedStates['req2_wsl_native'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                          </button>
                        </div>
                        <p className="text-xs text-amber-500 mt-2 font-medium bg-amber-500/10 inline-block px-2 py-1 rounded">
                          {t("Deve exibir v24.x.x (ou superior).", "Should display v24.x.x (or higher).")}
                        </p>
                      </div>

                      <div className="mt-6 bg-gradient-to-r from-emerald-900/20 to-slate-900 border border-emerald-500/20 rounded-xl p-5 shadow-sm">
                        <h3 className="text-slate-200 font-medium mb-2 flex items-center gap-2">
                          <Cloud size={18} className="text-emerald-400" /> {t("Alternativa: Instalação Visual (Easypanel)", "Alternative: Visual Installation (Easypanel)")}
                        </h3>
                        <p className="text-sm text-slate-400 mb-4">
                          {t("Em vez de gerir os pacotes e configurações manualmente no terminal, pode transformar o seu WSL num mini-servidor Cloud instalando o Easypanel. Com ele, fará o deploy do OpenClaw com apenas 1 clique no navegador.", "Instead of managing packages and configurations manually in the terminal, you can transform your WSL into a mini Cloud server by installing Easypanel. With it, you deploy OpenClaw with just 1 click in your browser.")}
                        </p>
                        <button 
                          onClick={() => { setOs('easypanel'); setActiveStep(1); }}
                          className="bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 border border-emerald-500/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                        >
                          {t("Mudar para o Guia do Easypanel", "Switch to the Easypanel Guide")} <ChevronRight size={16} />
                        </button>
                      </div>
                    </>
                  ) : os === 'linux' ? (
                    <>
                      <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                        <h3 className="text-slate-200 font-medium mb-2 flex items-center gap-2">
                          <Terminal size={16} className="text-red-400" /> 1. {t("Atualizar e instalar dependências", "Update and install dependencies")}
                        </h3>
                        <div className="relative group">
                          <pre className="text-sm font-mono text-emerald-400 bg-black p-3 rounded overflow-x-auto">
                            sudo apt-get update && sudo apt-get install -y curl nano git
                          </pre>
                          <button onClick={() => copyToClipboard('sudo apt-get update && sudo apt-get install -y curl nano git', 'req1')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                            {copiedStates['req1'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                          </button>
                        </div>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                        <h3 className="text-slate-200 font-medium mb-2 flex items-center gap-2">
                          <Terminal size={16} className="text-red-400" /> 2. {t("Instalar Docker e Compose", "Install Docker and Compose")}
                        </h3>
                        <p className="text-xs text-slate-500 mb-2">{t("Caso ainda não tenha o Docker configurado no host:", "If you don't have Docker configured on the host yet:")}</p>
                        <div className="relative group">
                          <pre className="text-sm font-mono text-emerald-400 bg-black p-3 rounded overflow-x-auto">
                            curl -fsSL https://get.docker.com | sudo sh{'\n'}
                            sudo systemctl enable --now docker{'\n'}
                            sudo usermod -aG docker $USER{'\n'}
                            newgrp docker
                          </pre>
                          <button onClick={() => copyToClipboard('curl -fsSL https://get.docker.com | sudo sh\nsudo systemctl enable --now docker\nsudo usermod -aG docker $USER\nnewgrp docker', 'req2')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                            {copiedStates['req2'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                          </button>
                        </div>
                        <p className="text-xs text-amber-500 mt-2 font-medium bg-amber-500/10 inline-block px-2 py-1 rounded">{t("O 'newgrp docker' aplica o grupo na sessão atual sem precisar fazer logout. Se encerrar o terminal, repita-o.", "'newgrp docker' applies the group to the current session without needing to log out. If you close the terminal, repeat it.")}</p>
                      </div>
                    </>
                  ) : (
                    <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                      <h3 className="text-slate-200 font-medium mb-2 flex items-center gap-2">
                        <AppWindow size={16} className="text-red-400" /> 1. {t("Instalar Docker Desktop e Git", "Install Docker Desktop and Git")}
                      </h3>
                      <p className="text-xs text-slate-500 mb-2">{t("Abra o", "Open")} <strong>PowerShell {t("como Administrador", "as Administrator")}</strong> {t("e execute:", "and execute:")}</p>
                      <div className="relative group">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-3 rounded overflow-x-auto">
                          winget install Docker.DockerDesktop{'\n'}
                          winget install Git.Git
                        </pre>
                        <button onClick={() => copyToClipboard('winget install Docker.DockerDesktop\nwinget install Git.Git', 'req1_win')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['req1_win'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                      <p className="text-xs text-amber-500 mt-2 font-medium bg-amber-500/10 inline-block px-2 py-1 rounded">{t("Requer reinício e WSL2 ativado.", "Requires restart and enabled WSL2.")}</p>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex justify-end">
                  <button onClick={() => setActiveStep(2)} className="bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg shadow-red-900/20">
                    {t("Avançar", "Next")} <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* --- STEP 2 --- */}
            {activeStep === 2 && (
              <div className="p-8 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {os === 'easypanel' ? t('Tokens e Segurança', 'Tokens & Security') : t('Configuração do Ambiente', 'Environment Configuration')}
                </h2>
                
                {os === 'easypanel' ? (
                  <div className="space-y-6 max-w-2xl">
                    <p className="text-slate-400 mb-4">{t("O Template Oficial do Easypanel auto-gera um", "The Official Easypanel Template auto-generates a")} <strong className="text-white">Gateway Token</strong> {t("se deixado em branco, mas recomendamos usar este gerado localmente para manter o controlo da sua segurança:", "if left blank, but we recommend using this locally generated one to maintain control of your security:")}</p>
                    
                    <div className="bg-slate-950 p-6 rounded-xl border border-emerald-900/50 shadow-[0_0_30px_rgba(16,185,129,0.05)] relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                      <div className="flex justify-between items-center mb-4">
                        <label className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                          <Key size={16} /> {t("O seu Gateway Token", "Your Gateway Token")}
                        </label>
                        <button 
                          onClick={generateSecureToken}
                          className="text-xs flex items-center gap-1 text-slate-500 hover:text-white transition-colors"
                        >
                          <RefreshCw size={12} /> {t("Gerar Novo", "Generate New")}
                        </button>
                      </div>
                      
                      <div className="relative group flex items-stretch">
                        <input 
                          type="text" 
                          readOnly 
                          value={easyToken}
                          className="flex-1 bg-black border border-slate-700 rounded-l-lg px-4 py-3 text-emerald-300 font-mono text-sm focus:outline-none focus:border-emerald-500"
                        />
                        <button 
                          onClick={() => copyToClipboard(easyToken, 'easy_token')} 
                          className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 rounded-r-lg font-medium flex items-center gap-2 transition-colors"
                        >
                          {copiedStates['easy_token'] ? <CheckCircle2 size={16} /> : <Copy size={16} />} 
                          {copiedStates['easy_token'] ? t('Copiado', 'Copied') : t('Copiar', 'Copy')}
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 mt-3 flex items-start gap-2">
                        <ShieldAlert size={14} className="shrink-0 mt-0.5 text-amber-500" />
                        {t("Guarde este token. Ele é a password master da sua API. Se o perder, terá de entrar na consola do Easypanel para o recuperar.", "Save this token. It acts as the master password for your API. If you lose it, you will have to retrieve it from the Easypanel console.")}
                      </p>
                    </div>
                  </div>
                ) : os === 'wsl' ? (
                  <div className="space-y-6 max-w-2xl">
                    <p className="text-slate-400 mb-6">{t("Configure o diretório de instalação nativa e a porta local.", "Configure the native installation directory and local port.")}</p>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t("Diretório Base de Instalação", "Base Installation Directory")}</label>
                      <div className="flex bg-slate-950 border border-slate-700 rounded-lg focus-within:border-red-500 overflow-hidden transition-colors">
                        <span className="bg-slate-800 text-slate-400 px-4 py-2.5 border-r border-slate-700 flex items-center font-mono text-sm">Path</span>
                        <input 
                          type="text" 
                          value={installPath}
                          onChange={(e) => setInstallPath(e.target.value)}
                          className="w-full bg-transparent px-4 py-2.5 text-slate-200 focus:outline-none font-mono text-sm"
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{t("Opcional: use este diretório para guardar artefatos/ficheiros do seu deploy. O OpenClaw salva dados e configuração em ~/.openclaw por padrão.", "Optional: use this directory to store deployment artifacts/files. OpenClaw stores data and configuration in ~/.openclaw by default.")}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t("Porta do Gateway", "Gateway Port")}</label>
                      <div className="flex bg-slate-950 border border-slate-700 rounded-lg focus-within:border-red-500 overflow-hidden transition-colors w-1/2">
                        <span className="bg-slate-800 text-slate-400 px-4 py-2.5 border-r border-slate-700 flex items-center font-mono text-sm">Port</span>
                        <input 
                          type="number" 
                          value={port}
                          onChange={(e) => setPort(e.target.value)}
                          className="w-full bg-transparent px-4 py-2.5 text-slate-200 focus:outline-none font-mono text-sm"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 max-w-2xl">
                    <p className="text-slate-400 mb-6">{t("Personalize os caminhos e portas para a implantação do seu assistente autônomo.", "Customize the paths and ports for your autonomous assistant deployment.")}</p>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t("Diretório Base de Instalação", "Base Installation Directory")}</label>
                      <div className="flex bg-slate-950 border border-slate-700 rounded-lg focus-within:border-red-500 overflow-hidden transition-colors">
                        <span className="bg-slate-800 text-slate-400 px-4 py-2.5 border-r border-slate-700 flex items-center font-mono text-sm">Path</span>
                        <input 
                          type="text" 
                          value={installPath}
                          onChange={(e) => setInstallPath(e.target.value)}
                          className="w-full bg-transparent px-4 py-2.5 text-slate-200 focus:outline-none font-mono text-sm"
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{t("Este diretório hospedará os dados permanentes (/data) e os arquivos de trabalho (/workspace).", "This directory will host persistent data (/data) and working files (/workspace).")}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">{t("Porta do Gateway", "Gateway Port")}</label>
                        <div className="flex bg-slate-950 border border-slate-700 rounded-lg focus-within:border-red-500 overflow-hidden transition-colors">
                          <span className="bg-slate-800 text-slate-400 px-4 py-2.5 border-r border-slate-700 flex items-center font-mono text-sm">Port</span>
                          <input 
                            type="number" 
                            value={port}
                            onChange={(e) => setPort(e.target.value)}
                            className="w-full bg-transparent px-4 py-2.5 text-slate-200 focus:outline-none font-mono text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">{t("Política de Reinício", "Restart Policy")}</label>
                        <select 
                          value={restartPolicy}
                          onChange={(e) => setRestartPolicy(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-red-500 appearance-none font-mono text-sm"
                        >
                          <option value="always">always</option>
                          <option value="unless-stopped">unless-stopped</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 space-y-4">
                      <h3 className="text-sm font-medium text-slate-200 border-b border-slate-800 pb-2">{t("Método de Instalação", "Installation Method")}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${installMethod === 'image' ? 'bg-red-900/10 border-red-500/50' : 'bg-slate-900 border-slate-700 hover:border-slate-600'}`}>
                          <input 
                            type="radio" name="installMethod" value="image"
                            checked={installMethod === 'image'}
                            onChange={(e) => setInstallMethod(e.target.value)}
                            className="mt-1 accent-red-600 bg-slate-800 border-slate-600"
                          />
                          <div>
                            <div className="text-sm font-medium text-slate-200">{t("Imagem Oficial", "Official Image")}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{t("Mais rápido.", "Faster.")}</div>
                          </div>
                        </label>
                        <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${installMethod === 'build' ? 'bg-red-900/10 border-red-500/50' : 'bg-slate-900 border-slate-700 hover:border-slate-600'}`}>
                          <input 
                            type="radio" name="installMethod" value="build"
                            checked={installMethod === 'build'}
                            onChange={(e) => setInstallMethod(e.target.value)}
                            className="mt-1 accent-red-600 bg-slate-800 border-slate-600"
                          />
                          <div>
                            <div className="text-sm font-medium text-slate-200">Build Source</div>
                            <div className="text-xs text-slate-500 mt-0.5">{t("Criar Dockerfile.", "Create Dockerfile.")}</div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-3 p-4 bg-slate-950 border border-slate-800 rounded-lg cursor-pointer hover:border-slate-700 transition-colors">
                        <div className="flex items-center h-5 mt-0.5">
                          <input 
                            type="checkbox" 
                            checked={exposeExternally}
                            onChange={(e) => setExposeExternally(e.target.checked)}
                            className="w-4 h-4 rounded border-slate-600 text-red-600 focus:ring-red-600 focus:ring-offset-slate-950 bg-slate-800"
                          />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-slate-200">{t("Expor porta externamente (0.0.0.0)", "Expose port externally (0.0.0.0)")}</span>
                          <p className="text-xs text-slate-500 mt-1">{t("Se marcado, fica acessível a partir de qualquer IP. Recomendado manter desmarcado e usar Túnel SSH.", "If checked, it becomes accessible from any IP. Recommended to leave unchecked and use an SSH Tunnel.")}</p>
                        </div>
                      </label>
                    </div>

                    {(os === 'linux') && (
                      <div className="pt-2">
                        <label className="flex items-start gap-3 p-4 bg-slate-950 border border-emerald-900/50 rounded-lg cursor-pointer hover:border-emerald-700/50 transition-colors">
                          <div className="flex items-center h-5 mt-0.5">
                            <input 
                              type="checkbox" 
                              checked={includePortainer}
                              onChange={(e) => setIncludePortainer(e.target.checked)}
                              className="w-4 h-4 rounded border-slate-600 text-emerald-600 focus:ring-emerald-600 focus:ring-offset-slate-950 bg-slate-800"
                            />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-emerald-400 flex items-center gap-2">
                              <LayoutDashboard size={16} /> {t("Adicionar Portainer CE (Interface Web Docker)", "Add Portainer CE (Docker Web UI)")}
                            </span>
                          </div>
                        </label>
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  <button onClick={() => setActiveStep(1)} className="text-slate-400 hover:text-white px-4 py-2 font-medium transition-colors">{t("Voltar", "Back")}</button>
                  <button onClick={() => setActiveStep(3)} className="bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg shadow-red-900/20">
                    {t("Avançar", "Next")} <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* --- STEP 3 --- */}
            {activeStep === 3 && (
              <div className="p-8 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {os === 'easypanel' ? t('Deploy via 1-Click Template', '1-Click Template Deploy') : os === 'wsl' ? t('Download e Setup', 'Download & Setup') : t('Manifesto Gerado', 'Generated Manifest')}
                </h2>
                
                {os === 'easypanel' ? (
                  <div className="space-y-6 max-w-2xl">
                    <p className="text-slate-400 mb-6">{t("O Easypanel gere automaticamente o Docker Compose, os Volumes e as Redes por trás dos panos. Basta seguir estes 4 cliques na interface gráfica do Easypanel:", "Easypanel automatically manages Docker Compose, Volumes, and Networks behind the scenes. Just follow these 4 clicks in the Easypanel GUI:")}</p>
                    
                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                      <div className="p-5 border-b border-slate-800/50 bg-slate-900/30">
                        <h3 className="text-slate-200 font-bold flex items-center gap-2">
                          <Cloud size={18} className="text-emerald-400" /> {t("Fluxo de Instalação na Web UI", "Installation Flow in Web UI")}
                        </h3>
                      </div>
                      
                      <div className="p-6 space-y-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-sm text-slate-300">1</div>
                          <div>
                            <p className="text-sm text-slate-300 font-medium">{t("Abra o seu Projeto no Easypanel.", "Open your Project in Easypanel.")}</p>
                            <p className="text-xs text-slate-500 mt-1">{t("Se não tem um, crie um novo projeto (ex: 'ia').", "If you don't have one, create a new project (e.g. 'ai').")}</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-sm text-slate-300">2</div>
                          <div>
                            <p className="text-sm text-slate-300 font-medium flex items-center gap-2">{t("Vá à aba", "Go to the")} <strong className="text-white">Templates</strong> {t("e pesquise por", "tab and search for")} <strong className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700 text-emerald-400 flex items-center gap-1"><Search size={12}/> OpenClaw</strong>.</p>
                            <p className="text-xs text-slate-500 mt-1">{t("Clique no cartão do OpenClaw que aparecer.", "Click on the OpenClaw card that appears.")}</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-900/30 border border-emerald-500/30 flex items-center justify-center font-bold text-sm text-emerald-400">3</div>
                          <div className="flex-1">
                            <p className="text-sm text-emerald-100 font-medium">{t("Cole o seu Token gerado na caixa 'Gateway Token'.", "Paste your generated Token into the 'Gateway Token' input box.")}</p>
                            <div className="mt-3 p-3 bg-black rounded border border-emerald-900/50 flex items-center justify-between">
                              <span className="text-xs font-mono text-emerald-500 truncate w-48">{easyToken || t('Token ainda não gerado', 'Token not generated yet')}</span>
                              <button onClick={() => copyToClipboard(easyToken, 'easy_token_2')} className="text-xs bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 px-2 py-1 rounded transition-colors">
                                {copiedStates['easy_token_2'] ? t('Copiado!', 'Copied!') : t('Copiar', 'Copy')}
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-sm text-slate-300">4</div>
                          <div>
                            <p className="text-sm text-slate-300 font-medium">{t("Clique em", "Click on")} <strong className="text-white bg-blue-600 px-3 py-1 rounded text-xs ml-1 shadow-md shadow-blue-900/20">Create</strong>.</p>
                            <p className="text-xs text-slate-500 mt-2">{t("O Easypanel fará o download da imagem oficial e ligará o seu container com a porta e as configurações nativas do template.", "Easypanel will download the official image and start your container with the port and native settings from the template.")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : os === 'wsl' ? (
                  <div className="space-y-6 max-w-2xl">
                    <p className="text-slate-400 mb-6">{t("Instalação nativa do OpenClaw via instalador oficial (recomendado).", "Native OpenClaw installation via official installer (recommended).")}</p>
                    
                    <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 shadow-sm">
                      <h3 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                        <Box size={16} className="text-emerald-400" /> {t("Instalar OpenClaw", "Install OpenClaw")}
                      </h3>
                      <p className="text-sm text-slate-500 mb-4">{t("Execute no seu terminal", "Execute in your")} {wslDistro.split('-')[0]} {t("(WSL):", "(WSL):")}</p>
                      
                      <div className="relative group">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800">
                          npm install -g openclaw@latest{'\n'}
                          {'\n'}
                          {'# '}Verificar instalação{'\n'}
                          openclaw --version
                        </pre>
                        <button onClick={() => copyToClipboard('npm install -g openclaw@latest\nopenclaw --version', 'setup_wsl')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['setup_wsl'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 mt-3">
                        {t("Se o comando 'openclaw' não for encontrado, feche e reabra o terminal (ou faça logout/login no WSL) para atualizar o PATH.", "If the 'openclaw' command is not found, close and reopen the terminal (or logout/login in WSL) to refresh PATH.")}
                      </p>
                      <p className="text-xs text-emerald-500 mt-3 font-medium bg-emerald-500/10 inline-block px-3 py-2 rounded-lg border border-emerald-500/20 flex items-center gap-2">
                        <CheckCircle2 size={14} /> {t("A instalação permite executar 'openclaw' de qualquer diretório.", "The installation allows running 'openclaw' from any directory.")}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="relative group rounded-xl overflow-hidden border border-slate-700 bg-[#0d1117] shadow-2xl">
                      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900">
                        <span className="text-xs font-mono text-slate-400">docker-compose.yml</span>
                        <button 
                          onClick={() => copyToClipboard(generateDockerCompose(), 'yaml')} 
                          className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors"
                        >
                          {copiedStates['yaml'] ? <><CheckCircle2 size={14} className="text-emerald-500"/> {t("Copiado", "Copied")}</> : <><Copy size={14}/> {t("Copiar", "Copy")} YAML</>}
                        </button>
                      </div>
                      <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-slate-300">
                        {generateDockerCompose().split('\n').map((line, i) => {
                          let highlighted = line;
                          if (line.includes(':')) {
                            const parts = line.split(':');
                            highlighted = <><span className="text-red-400">{parts[0]}</span>:{parts.slice(1).join(':')}</>;
                          }
                          if (line.trim().startsWith('-')) highlighted = <span className="text-blue-400">{line}</span>;
                          if (line.trim().startsWith('#')) highlighted = <span className="text-slate-500">{line}</span>;
                          return <div key={i}>{highlighted}</div>;
                        })}
                      </pre>
                    </div>

                    {installMethod === 'build' && (
                      <div className="relative group rounded-xl overflow-hidden border border-slate-700 bg-[#0d1117] shadow-2xl animate-in fade-in slide-in-from-bottom-4">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900">
                          <span className="text-xs font-mono text-slate-400">Dockerfile</span>
                          <button onClick={() => copyToClipboard(generateDockerfile(), 'dockerfile')} className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors">
                            {copiedStates['dockerfile'] ? <><CheckCircle2 size={14} className="text-emerald-500"/> {t("Copiado", "Copied")}</> : <><Copy size={14}/> {t("Copiar", "Copy")} Dockerfile</>}
                          </button>
                        </div>
                        <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-slate-300">
                          {generateDockerfile().split('\n').map((line, i) => {
                            let highlighted = line;
                            if (line.match(/^(FROM|RUN|ENV|EXPOSE|CMD|WORKDIR|USER)/)) {
                              const parts = line.split(' ');
                              highlighted = <><span className="text-red-400 font-bold">{parts[0]}</span> {parts.slice(1).join(' ')}</>;
                            }
                            if (line.trim().startsWith('#')) highlighted = <span className="text-slate-500">{line}</span>;
                            return <div key={i}>{highlighted}</div>;
                          })}
                        </pre>
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  <button onClick={() => setActiveStep(2)} className="text-slate-400 hover:text-white px-4 py-2 font-medium transition-colors">{t("Voltar", "Back")}</button>
                  <button onClick={() => setActiveStep(4)} className="bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg shadow-red-900/20">
                    {t("Avançar", "Next")} <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* --- STEP 4 --- */}
            {activeStep === 4 && (
              <div className="p-8 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {os === 'easypanel' ? t('Assistente de Onboarding', 'Onboarding Wizard') : os === 'wsl' ? t('Execução Direta', 'Direct Execution') : t('Execução & Deploy', 'Execution & Deploy')}
                </h2>
                
                {os === 'easypanel' ? (
                  <div className="space-y-6 max-w-2xl">
                    <p className="text-slate-400 mb-6">{t("A documentação oficial do plugin indica que o serviço gateway inicia automaticamente com a flag ", "The official plugin documentation indicates that the gateway service starts automatically with the ")}<code className="text-emerald-400 bg-emerald-900/20 px-1 rounded">--allow-unconfigured</code>. {t("Para concluir o setup, devemos rodar o assistente nativo interativo.", "To complete setup, we must run the native interactive wizard.")}</p>

                    <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-sm relative">
                      <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
                        <Terminal size={18} className="text-emerald-400" /> {t("Executar o Onboarding Oficial", "Run Official Onboarding")}
                      </h3>
                      <ol className="list-decimal list-inside text-sm text-slate-400 space-y-3 mb-6">
                        <li>{t("No Easypanel, clique no serviço recém-criado do", "In Easypanel, click on the newly created")} <strong className="text-white">OpenClaw</strong>.</li>
                        <li>{t("Vá à aba", "Go to the")} <strong className="text-white bg-slate-800 px-2 py-1 rounded border border-slate-700">Console</strong>.</li>
                        <li>{t("Selecione", "Select")} <strong className="text-white">Bash</strong> {t("ou", "or")} <strong className="text-white">sh</strong>.</li>
                        <li>{t("Execute o seguinte comando e dê", "Run the following command and press")} <kbd className="bg-slate-800 px-1 rounded">Enter</kbd>:</li>
                      </ol>

                      <div className="relative group">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800">
                          node dist/index.js onboard --no-install-daemon
                        </pre>
                        <button onClick={() => copyToClipboard('node dist/index.js onboard --no-install-daemon', 'exec_onboard')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['exec_onboard'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>

                      <p className="text-sm text-slate-400 mt-5 flex items-start gap-2 bg-slate-900 p-3 rounded-lg border border-slate-800">
                        <span className="text-amber-500 font-bold">Nota:</span> 
                        {t("Siga as instruções interativas no terminal para definir o workspace e as configurações iniciais da IA. Depois, prossiga para o próximo passo.", "Follow the interactive instructions in the terminal to set up the workspace and initial AI configurations. Then, proceed to the next step.")}
                      </p>
                    </div>
                  </div>
                ) : os === 'wsl' ? (
                  <div className="space-y-6 max-w-2xl">
                    <p className="text-slate-400 mb-6">{t("Execute o wizard de onboarding oficial para configurar workspace, canais e autenticação.", "Run the official onboarding wizard to configure workspace, channels and authentication.")}</p>
                    
                    <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-xl p-6 mb-6">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Settings size={20} className="text-blue-400"/> 1. {t("Wizard de Configuração (Obrigatório)", "Configuration Wizard (Required)")}
                      </h3>
                      <p className="text-sm text-slate-300 mb-4">
                        {t("O wizard oficial guia passo a passo através da configuração do gateway, workspace, canais e skills. Este é o método recomendado.", "The official wizard guides step-by-step through gateway, workspace, channels and skills setup. This is the recommended method.")}
                      </p>
                      <div className="relative group mb-4">
                        <pre className="text-sm font-mono text-blue-400 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800">
                          openclaw onboard --install-daemon
                        </pre>
                        <button onClick={() => copyToClipboard('openclaw onboard --install-daemon', 'exec_wizard')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['exec_wizard'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                      <p className="text-xs text-blue-400 font-medium bg-blue-500/10 inline-block px-3 py-2 rounded-lg border border-blue-500/20">
                        {t("O wizard irá instalar o daemon do Gateway (systemd) para que execute automaticamente.", "The wizard will install the Gateway daemon (systemd) to run automatically.")}
                      </p>
                    </div>

                    <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 shadow-sm">
                      <h3 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                        <Search size={16} className="text-emerald-400" /> 2. {t("Verificar Status do Gateway", "Check Gateway Status")}
                      </h3>
                      <p className="text-sm text-slate-500 mb-4">{t("Depois do onboarding, confirme se o gateway está ativo:", "After onboarding, confirm the gateway is running:")}</p>
                      <div className="relative group">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800">
                          openclaw gateway status
                        </pre>
                        <button onClick={() => copyToClipboard('openclaw gateway status', 'exec_wsl_status')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['exec_wsl_status'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 shadow-sm">
                      <h3 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                        <Layers size={16} className="text-red-400" /> 3. {t("Conectar um Canal (WhatsApp)", "Connect a Channel (WhatsApp)")}
                      </h3>
                      <p className="text-sm text-slate-500 mb-4">{t("O guia oficial recomenda começar conectando o WhatsApp:", "The official guide recommends starting by connecting WhatsApp:")}</p>
                      <div className="relative group">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800">
                          openclaw channel add whatsapp
                        </pre>
                        <button onClick={() => copyToClipboard('openclaw channel add whatsapp', 'exec_wsl_channel_whatsapp')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['exec_wsl_channel_whatsapp'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 mt-3">{t("Se o QR não aparecer, reinicie o gateway:", "If the QR doesn't show up, restart the gateway:")}</p>
                      <div className="relative group">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800">
                          openclaw gateway restart
                        </pre>
                        <button onClick={() => copyToClipboard('openclaw gateway restart', 'exec_wsl_gateway_restart')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['exec_wsl_gateway_restart'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 shadow-sm">
                      <h3 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                        <Terminal size={16} className="text-emerald-400" /> 4. {t("Ver Logs em Tempo Real", "View Logs in Real Time")}
                      </h3>
                      <p className="text-sm text-slate-500 mb-4">{t("Se o bot não responder, veja os logs em tempo real:", "If the bot doesn't respond, view logs in real time:")}</p>
                      <div className="relative group">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800">
                          openclaw gateway logs -f
                        </pre>
                        <button onClick={() => copyToClipboard('openclaw gateway logs -f', 'exec_wsl_logs')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['exec_wsl_logs'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 shadow-sm">
                      <h3 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                        <ShieldCheck size={16} className="text-emerald-400" /> 5. {t("Diagnóstico", "Diagnostics")}
                      </h3>
                      <p className="text-sm text-slate-500 mb-4">{t("Para identificar problemas automaticamente:", "To automatically identify issues:")}</p>
                      <div className="relative group">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800">
                          openclaw doctor
                        </pre>
                        <button onClick={() => copyToClipboard('openclaw doctor', 'exec_wsl_doctor')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['exec_wsl_doctor'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 shadow-sm">
                      <h3 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                        <RefreshCw size={16} className="text-emerald-400" /> 6. {t("Atualizar", "Update")}
                      </h3>
                      <p className="text-sm text-slate-500 mb-4">{t("Para atualizar para a versão estável mais recente:", "To update to the latest stable version:")}</p>
                      <div className="relative group">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800">
                          openclaw update --channel stable
                        </pre>
                        <button onClick={() => copyToClipboard('openclaw update --channel stable', 'exec_wsl_update')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['exec_wsl_update'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-slate-400 mb-6">{t("Execute os comandos abaixo no terminal do seu servidor para iniciar a IA autônoma.", "Run the commands below in your server's terminal to start the autonomous AI.")}</p>
                    <div>
                      <h3 className="text-sm font-medium text-slate-300 mb-2">1. {t("Preparar os diretórios do OpenClaw", "Prepare OpenClaw directories")}</h3>
                      <div className="relative group">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800">
                          {os === 'linux' ? (
                            <>mkdir -p {installPath}/data {installPath}/workspace{'\n'}cd {installPath}</>
                          ) : (
                            <>New-Item -ItemType Directory -Force -Path "{installPath}\data", "{installPath}\workspace"{'\n'}Set-Location -Path "{installPath}"</>
                          )}
                        </pre>
                        <button onClick={() => copyToClipboard(os === 'linux' ? `mkdir -p ${installPath}/data ${installPath}/workspace\ncd ${installPath}` : `New-Item -ItemType Directory -Force -Path "${installPath}\\data", "${installPath}\\workspace"\nSet-Location -Path "${installPath}"`, 'exec1')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['exec1'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-slate-300 mb-2">2. {t("Criar o ficheiro de configuração", "Create the configuration file")}</h3>
                      <div className="relative group mb-4">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800">
                          {os === 'linux' ? 'nano docker-compose.yml' : 'notepad docker-compose.yml'}
                        </pre>
                        <button onClick={() => copyToClipboard(os === 'linux' ? 'nano docker-compose.yml' : 'notepad docker-compose.yml', 'exec2')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['exec2'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-slate-300 mb-2">3. {t("Iniciar o Gateway e o Agente", "Start Gateway and Agent")}</h3>
                      <div className="relative group flex items-stretch">
                        <pre className="flex-1 text-sm font-mono text-emerald-400 bg-black p-4 rounded-l-lg overflow-x-auto border border-slate-800 border-r-0">
                          docker compose up -d{installMethod === 'build' ? ' --build' : ''}
                        </pre>
                        <button onClick={() => copyToClipboard(`docker compose up -d${installMethod === 'build' ? ' --build' : ''}`, 'exec3')} className="bg-red-600 hover:bg-red-500 text-white px-6 rounded-r-lg font-medium flex items-center justify-center gap-2 transition-colors border border-red-600">
                          {copiedStates['exec3'] ? <CheckCircle2 size={18} /> : <Play size={18} fill="currentColor" />} {copiedStates['exec3'] ? t('Copiado', 'Copied') : t('Copiar', 'Copy')}
                        </button>
                      </div>
                      {os === 'linux' && (
                        <p className="text-xs text-amber-500 mt-3 font-medium bg-amber-500/10 px-3 py-2 rounded-lg border border-amber-500/20">
                          {t("Erro 'Permission denied'? Execute", "'Permission denied' error? Run")} <code className="bg-amber-900/30 px-1 rounded font-mono">newgrp docker</code> {t("no terminal e tente novamente. Ou use", "in the terminal and try again. Or use")} <code className="bg-amber-900/30 px-1 rounded font-mono">sudo docker compose up -d</code>.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  <button onClick={() => setActiveStep(3)} className="text-slate-400 hover:text-white px-4 py-2 font-medium transition-colors">{t("Voltar", "Back")}</button>
                  <button onClick={() => setActiveStep(5)} className="bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg shadow-red-900/20">
                    {t("Avançar", "Next")} <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* --- STEP 5 --- */}
            {activeStep === 5 && (
              <div className="p-8 animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {os === 'easypanel' ? t('Acesso e Dashboard Web', 'Access and Web Dashboard') : t('Autenticação e Acesso', 'Authentication and Access')}
                </h2>
                
                {os === 'easypanel' ? (
                  <div className="space-y-6 max-w-2xl">
                    <p className="text-slate-400 mb-4">{t("Após o onboarding, a medida de segurança final (Zero Trust) exige aprovação do dispositivo para aceder à Control UI web.", "After onboarding, the final security measure (Zero Trust) requires device approval to access the web Control UI.")}</p>

                    <div className="bg-gradient-to-br from-red-900/20 to-slate-900 border border-red-500/20 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <ExternalLink size={20} className="text-red-400"/> 1. {t("Obter Link Mágico", "Get Magic Link")}
                      </h3>
                      <p className="text-sm text-slate-300 mb-3">
                        {t("Ainda na consola do Easypanel, gere o seu link de acesso seguro (token de login):", "Still in the Easypanel console, generate your secure access link (login token):")}
                      </p>
                      <div className="relative group mb-4">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-3 rounded-lg overflow-x-auto border border-slate-800">
                          node dist/index.js dashboard --no-open
                        </pre>
                        <button onClick={() => copyToClipboard('node dist/index.js dashboard --no-open', 'exec_dash')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['exec_dash'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                      <p className="text-sm text-slate-300">
                        {t("Copie o URL devolvido e abra-o no seu navegador de internet. O ecrã dirá 'Pending Approval' ou 'Unauthorized'.", "Copy the returned URL and open it in your internet browser. The screen will say 'Pending Approval' or 'Unauthorized'.")}
                      </p>
                    </div>

                    <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-sm">
                      <h3 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                        <ShieldAlert size={18} className="text-emerald-400" /> 2. {t("Aprovar a sua Sessão", "Approve your Session")}
                      </h3>
                      <p className="text-sm text-slate-400 mb-4">
                        {t("Volte à consola do serviço para listar e aprovar o seu dispositivo/navegador pendente:", "Go back to the service console to list and approve your pending device/browser:")}
                      </p>
                      <div className="relative group mb-4">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-3 rounded-lg overflow-x-auto border border-slate-800">
                          node dist/index.js devices list
                        </pre>
                        <button onClick={() => copyToClipboard('node dist/index.js devices list', 'auth1_list')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['auth1_list'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                      
                      <div className="relative group mb-4">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-3 rounded-lg overflow-x-auto border border-slate-800">
                          node dist/index.js devices approve
                        </pre>
                        <button onClick={() => copyToClipboard('node dist/index.js devices approve', 'auth1_approve')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['auth1_approve'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                      <p className="text-xs text-emerald-500 font-medium">✅ {t("A sua Web UI atualizará automaticamente e a IA estará pronta a usar!", "Your Web UI will automatically update and the AI will be ready to use!")}</p>

                      {/* Manual Section Easypanel */}
                      <div className="mt-8 pt-6 border-t border-slate-800">
                        <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                          <BookOpen size={16} className="text-slate-400"/> {t("Manual de Comandos Essenciais", "Essential Commands Manual")}
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <span className="text-xs text-slate-400 font-medium">{t("Iniciar Gateway Manualmente:", "Start Gateway Manually:")}</span>
                            <div className="relative group mt-1">
                              <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">node dist/index.js gateway --bind lan --port {port} --allow-unconfigured</pre>
                              <button onClick={() => copyToClipboard(`node dist/index.js gateway --bind lan --port ${port} --allow-unconfigured`, 'cmd_easyp_start')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                {copiedStates['cmd_easyp_start'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                              </button>
                            </div>
                          </div>
                          <div>
                            <span className="text-xs text-slate-400 font-medium">{t("Diagnóstico e Reparação:", "Diagnostics and Fix:")}</span>
                            <div className="relative group mt-1">
                              <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">node dist/index.js doctor</pre>
                              <button onClick={() => copyToClipboard('node dist/index.js doctor', 'cmd_easyp_doc')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                {copiedStates['cmd_easyp_doc'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 max-w-2xl">
                    <p className="text-slate-400 mb-6">{t("Por motivos de segurança, o painel gera um token automático (Gateway Token) necessário para login no primeiro acesso.", "For security reasons, the panel generates an automatic token (Gateway Token) required for login on the first access.")}</p>
                    
                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 mb-6">
                      <h3 className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                        <Key size={16} className="text-amber-400" /> {t("Resgatar o Gateway Token", "Retrieve Gateway Token")}
                      </h3>
                      <p className="text-sm text-slate-500 mb-3">{t("Após o contêiner/processo iniciar, obtenha o token rodando:", "After the container/process starts, get the token by running:")}</p>
                      
                      <div className="relative group">
                        <pre className="text-sm font-mono text-amber-300 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800">
                          {os === 'wsl' ? (
                            `cat ~/.openclaw/openclaw.json | grep '"token":'`
                          ) : os === 'linux' ? (
                            `cat ${installPath}/data/openclaw.json | grep '"token":'`
                          ) : (
                            `Get-Content "${installPath}\\data\\openclaw.json" | Select-String '"token":'`
                          )}
                        </pre>
                        <button onClick={() => copyToClipboard(os === 'wsl' ? `cat ~/.openclaw/openclaw.json | grep '"token":'` : os === 'linux' ? `cat ${installPath}/data/openclaw.json | grep '"token":'` : `Get-Content "${installPath}\\data\\openclaw.json" | Select-String '"token":'`, 'auth1')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                          {copiedStates['auth1'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-900/20 to-slate-900 border border-red-500/20 rounded-xl p-6 mb-6">
                      <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <ExternalLink size={20} className="text-red-400"/> {t("Acessar o Control UI", "Access Control UI")}
                      </h3>
                      
                      {os === 'wsl' ? (
                        <>
                          <p className="text-sm text-slate-300 mb-4">{t("O WSL partilha a rede de", "WSL shares the")} <strong>localhost</strong> {t("com o seu Windows. Pode abrir o navegador normalmente acedendo a:", "network with your Windows. You can open your browser normally by accessing:")}</p>
                          <a href={`http://127.0.0.1:${port}`} target="_blank" rel="noreferrer" className="inline-block text-red-400 hover:text-red-300 font-mono font-bold bg-red-400/10 px-3 py-1.5 rounded-lg border border-red-500/30">
                            http://127.0.0.1:{port}
                          </a>
                        </>
                      ) : !exposeExternally ? (
                        <>
                          <p className="text-sm text-slate-300 mb-4">{t("Crie um túnel SSH do seu computador para o servidor:", "Create an SSH tunnel from your computer to the server:")}</p>
                          <div className="relative group mb-4">
                            <pre className="text-sm font-mono text-emerald-400 bg-black p-3 rounded overflow-x-auto border border-slate-800">
                              ssh -L {port}:127.0.0.1:{port} user@{t('SEU_IP_VPS', 'YOUR_VPS_IP')}
                            </pre>
                            <button onClick={() => copyToClipboard(`ssh -L ${port}:127.0.0.1:${port} user@${t('SEU_IP_VPS', 'YOUR_VPS_IP')}`, 'tunnel')} className="absolute top-2 right-2 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                              {copiedStates['tunnel'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                            </button>
                          </div>
                          <p className="text-sm text-slate-300">{t("Em seguida, abra o navegador em:", "Then, open your browser at:")}</p>
                          <a href={`http://127.0.0.1:${port}`} target="_blank" rel="noreferrer" className="inline-block mt-2 text-red-400 hover:text-red-300 font-mono font-bold bg-red-400/10 px-3 py-1.5 rounded-lg border border-red-500/30">
                            http://127.0.0.1:{port}
                          </a>
                        </>
                      ) : (
                        <>
                          <p className="text-sm text-slate-300 mb-4">{t("Acesse na máquina local onde o Docker está instalado:", "Access from the local machine where Docker is installed:")}</p>
                          <a href={`http://localhost:${port}`} target="_blank" rel="noreferrer" className="inline-block text-red-400 hover:text-red-300 font-mono font-bold bg-red-400/10 px-3 py-1.5 rounded-lg border border-red-500/30">
                            http://localhost:{port}
                          </a>
                        </>
                      )}
                    </div>

                    {/* Manual Section Outros OS */}
                    <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-sm">
                      <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                        <BookOpen size={16} className="text-slate-400"/> {t("Manual de Comandos Essenciais", "Essential Commands Manual")}
                      </h4>
                      <div className="space-y-4">
                        {os === 'wsl' ? (
                          <>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Conectar WhatsApp:", "Connect WhatsApp:")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">openclaw channel add whatsapp</pre>
                                <button onClick={() => copyToClipboard('openclaw channel add whatsapp', 'cmd_wsl_channel_whatsapp')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_wsl_channel_whatsapp'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("QR não aparece (reiniciar gateway):", "QR not showing (restart gateway):")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">openclaw gateway restart</pre>
                                <button onClick={() => copyToClipboard('openclaw gateway restart', 'cmd_wsl_gateway_restart')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_wsl_gateway_restart'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Status do Gateway:", "Gateway Status:")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">openclaw gateway status</pre>
                                <button onClick={() => copyToClipboard('openclaw gateway status', 'cmd_wsl_status')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_wsl_status'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Logs em tempo real:", "Real-time logs:")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">openclaw gateway logs -f</pre>
                                <button onClick={() => copyToClipboard('openclaw gateway logs -f', 'cmd_wsl_logs')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_wsl_logs'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Diagnóstico:", "Diagnostics:")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">openclaw doctor</pre>
                                <button onClick={() => copyToClipboard('openclaw doctor', 'cmd_wsl_doctor')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_wsl_doctor'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Atualizar (stable):", "Update (stable):")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">openclaw update --channel stable</pre>
                                <button onClick={() => copyToClipboard('openclaw update --channel stable', 'cmd_wsl_update')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_wsl_update'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Ajuda (ver todos os comandos):", "Help (see all commands):")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">openclaw --help</pre>
                                <button onClick={() => copyToClipboard('openclaw --help', 'cmd_wsl_help')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_wsl_help'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Ver configuração atual:", "View current config:")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">openclaw config get</pre>
                                <button onClick={() => copyToClipboard('openclaw config get', 'cmd_wsl_config_get')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_wsl_config_get'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Editar config.yaml (padrão):", "Edit config.yaml (default):")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">nano ~/.openclaw/config.yaml</pre>
                                <button onClick={() => copyToClipboard('nano ~/.openclaw/config.yaml', 'cmd_wsl_config_edit')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_wsl_config_edit'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Health check (API REST local):", "Health check (local REST API):")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">curl http://localhost:{port}/health</pre>
                                <button onClick={() => copyToClipboard(`curl http://localhost:${port}/health`, 'cmd_wsl_health')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_wsl_health'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Skills instaladas:", "Installed skills:")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">openclaw skill list</pre>
                                <button onClick={() => copyToClipboard('openclaw skill list', 'cmd_wsl_skill_list')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_wsl_skill_list'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Verificar skill (fonte/badge):", "Check skill (source/badge):")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">openclaw skill info nome-do-skill</pre>
                                <button onClick={() => copyToClipboard('openclaw skill info nome-do-skill', 'cmd_wsl_skill_info')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_wsl_skill_info'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Instalar skill (exemplo):", "Install a skill (example):")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">openclaw skill install browser-control</pre>
                                <button onClick={() => copyToClipboard('openclaw skill install browser-control', 'cmd_wsl_skill_install')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_wsl_skill_install'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Iniciar Container (Background):", "Start Container (Background):")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">docker compose up -d</pre>
                                <button onClick={() => copyToClipboard('docker compose up -d', 'cmd_docker_start')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_docker_start'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Parar Serviços:", "Stop Services:")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">docker compose down</pre>
                                <button onClick={() => copyToClipboard('docker compose down', 'cmd_docker_stop')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_docker_stop'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Ver Logs do OpenClaw:", "View OpenClaw Logs:")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">docker compose logs -f openclaw</pre>
                                <button onClick={() => copyToClipboard('docker compose logs -f openclaw', 'cmd_docker_logs')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_docker_logs'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-medium">{t("Health check (API REST):", "Health check (REST API):")}</span>
                              <div className="relative group mt-1">
                                <pre className="text-xs font-mono text-emerald-400 bg-black p-2.5 rounded border border-slate-800 overflow-x-auto">curl http://127.0.0.1:{port}/health</pre>
                                <button onClick={() => copyToClipboard(`curl http://127.0.0.1:${port}/health`, 'cmd_docker_health')} className="absolute top-1.5 right-1.5 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                  {copiedStates['cmd_docker_health'] ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {includePortainer && (os === 'linux') && (
                      <div className="bg-gradient-to-br from-emerald-900/20 to-slate-900 border border-emerald-500/20 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                          <LayoutDashboard size={20} className="text-emerald-400"/> {t("Acessar o Portainer (Gestão Visual)", "Access Portainer (Visual Management)")}
                        </h3>
                        <p className="text-sm text-slate-300 mb-4">{t("Acesse a interface web do Portainer para gerenciar visualmente o OpenClaw e os seus outros contentores:", "Access Portainer's web interface to visually manage OpenClaw and your other containers:")}</p>
                        
                        <a href="https://localhost:9443" target="_blank" rel="noreferrer" className="inline-block text-emerald-400 hover:text-emerald-300 font-mono font-bold bg-emerald-400/10 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                          https://localhost:9443
                        </a>
                        
                        <p className="text-xs text-amber-500 mt-4 font-medium flex items-start gap-2 bg-amber-500/10 p-3 rounded-lg">
                          <ShieldAlert size={16} className="shrink-0 mt-0.5" />
                          <span>
                            <strong>{t("Nota de Segurança:", "Security Note:")}</strong> {t("O Portainer usa HTTPS por padrão com um certificado autoassinado. Ao abrir a página pela primeira vez, ignore o aviso de segurança do navegador (ex: 'Avançar para o site não seguro') para conseguir definir a sua senha de administrador inicial.", "Portainer uses HTTPS by default with a self-signed certificate. When opening the page for the first time, ignore the browser's security warning (e.g., 'Proceed to unsafe site') to be able to set your initial administrator password.")}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-auto flex justify-between items-center">
                  <button onClick={() => setActiveStep(4)} className="text-slate-400 hover:text-white px-4 py-2 font-medium transition-colors">{t("Voltar", "Back")}</button>
                  <div className="text-sm text-slate-500 font-medium flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" /> {t("Concluído", "Completed")}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
};

// ============================================================================
// COMPONENTE PRINCIPAL (CONTROLADOR DE VISTAS)
// ============================================================================
export default function App() {
  const [lang, setLang] = useState('pt');
  const [isDeploying, setIsDeploying] = useState(false);

  const t = (ptText, enText) => lang === 'pt' ? ptText : enText;

  if (!isDeploying) {
    return (
      <LandingPage 
        onStart={() => setIsDeploying(true)} 
        lang={lang} 
        setLang={setLang} 
        t={t} 
      />
    );
  }

  return (
    <DeployerApp 
      onBack={() => setIsDeploying(false)} 
      lang={lang} 
      setLang={setLang} 
      t={t} 
    />
  );
}