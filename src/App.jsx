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
  ShieldCheck, Layers, Github, ArrowLeft
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
          {t("Implantação Simplificada", "Simplified Deployment")}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          {t("A sua IA Autônoma,", "Your Autonomous AI,")} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
            {t("Online em Minutos.", "Online in Minutes.")}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
          {t(
            "O OpenClaw Deployer é um assistente interativo que gera manifestos, scripts e arquiteturas de segurança Zero-Trust para instalar o OpenClaw no seu servidor ou ambiente local.",
            "OpenClaw Deployer is an interactive assistant that generates manifests, scripts, and Zero-Trust security architectures to install OpenClaw on your server or local environment."
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
            <h3 className="text-lg font-bold text-white mb-2">{t("Multi-Ambiente", "Cross-Environment")}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("Suporta implementações nativas em VPS Linux, WSL2 para desenvolvimento local e Windows via Docker Desktop.", "Supports native deployments on Linux VPS, WSL2 for local development, and Windows via Docker Desktop.")}
            </p>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <div className="bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-400 mb-4">
              <Cloud size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t("Easypanel 1-Click", "Easypanel 1-Click")}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("Integração perfeita com o template oficial do Easypanel, transformando o seu servidor numa cloud privada moderna.", "Seamless integration with the official Easypanel template, turning your server into a modern private cloud.")}
            </p>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <div className="bg-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-amber-400 mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t("Segurança Zero-Trust", "Zero-Trust Security")}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("Geração de Gateway Tokens locais, isolamento de contentores e guias de aprovação de dispositivos nativos da IA.", "Local Gateway Token generation, container isolation, and native AI device approval guides.")}
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
  // Estados para os campos interativos
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
    ${installMethod === 'build' ? 'build:\n      context: .\n      dockerfile: Dockerfile' : 'image: openclaw/openclaw:latest'}
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
    let nodeSetup = `curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs`;

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
    { id: 4, title: t("Dashboard Link", "Dashboard Link"), icon: <LayoutDashboard size={20} /> },
    { id: 5, title: t("Aprovar Dispositivo", "Approve Device"), icon: <ShieldAlert size={20} /> },
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
        <nav className="space-y-1">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                activeStep === step.id
                  ? 'bg-red-600/10 text-red-400 border border-red-500/30 shadow-[inset_0_0_20px_rgba(220,38,38,0.05)]'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 border border-transparent'
              }`}
            >
              <div className={`${activeStep === step.id ? 'text-red-500' : 'text-slate-500'}`}>
                {step.icon}
              </div>
              <span className="font-medium text-sm">{step.id}. {step.title}</span>
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
                        <button onClick={() => copyToClipboard('curl -sSL https://get.easypanel.io | sh', 'req1_easy')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                          {copiedStates['req1_easy'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                      <p className="text-xs text-amber-500 mt-3 font-medium bg-amber-500/10 inline-block px-3 py-2 rounded-lg border border-amber-500/20">
                        {t("Após instalar, acesse", "After installing, access")} <strong className="font-mono">http://localhost:3000</strong> {t("(ou o IP do seu servidor) no navegador para criar a sua conta de Admin.", "(or your server's IP) in your browser to create your Admin account.")}
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
                          <button onClick={() => copyToClipboard(`wsl --install -d ${wslDistro}`, 'req1_wsl')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                            {copiedStates['req1_wsl'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                          </button>
                        </div>
                        <p className="text-xs text-amber-500 mt-2 font-medium bg-amber-500/10 inline-block px-2 py-1 rounded">{t("Nota: Se foi a primeira instalação, reinicie o computador. Depois, procure e abra a aplicação", "Note: If this was your first installation, reboot your computer. Then, search and open the application")} "{wslDistro.split('-')[0]}" {t("no menu Iniciar do Windows.", "in the Windows Start Menu.")}</p>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                        <h3 className="text-slate-200 font-medium mb-2 flex items-center gap-2">
                          <Terminal size={16} className="text-red-400" /> 2. {t("Instalar Node.js e Git no", "Install Node.js and Git on")} {wslDistro.split('-')[0]} (WSL)
                        </h3>
                        <p className="text-xs text-slate-500 mb-2">{t("A instalação nativa não usa Docker. Requer Node.js instalado diretamente no Linux. Execute no terminal do", "Native installation doesn't use Docker. It requires Node.js installed directly on Linux. Execute in the terminal of")} {wslDistro.split('-')[0]}:</p>
                        <div className="relative group">
                          <pre className="text-sm font-mono text-emerald-400 bg-black p-3 rounded overflow-x-auto">
                            sudo apt-get update && sudo apt-get install -y curl git build-essential python3{'\n'}
                            curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -{'\n'}
                            sudo apt-get install -y nodejs
                          </pre>
                          <button onClick={() => copyToClipboard('sudo apt-get update && sudo apt-get install -y curl git build-essential python3\ncurl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -\nsudo apt-get install -y nodejs', 'req2_wsl_native')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                            {copiedStates['req2_wsl_native'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                          </button>
                        </div>
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
                          <button onClick={() => copyToClipboard('sudo apt-get update && sudo apt-get install -y curl nano git', 'req1')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
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
                            sudo usermod -aG docker $USER
                          </pre>
                          <button onClick={() => copyToClipboard('curl -fsSL https://get.docker.com | sudo sh\nsudo usermod -aG docker $USER', 'req2')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                            {copiedStates['req2'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                          </button>
                        </div>
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
                        <button onClick={() => copyToClipboard('winget install Docker.DockerDesktop\nwinget install Git.Git', 'req1_win')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
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
                    <p className="text-slate-400 mb-4">{t("O Template Oficial do Easypanel requer um", "The Official Easypanel Template requires a")} <strong className="text-white">Gateway Token</strong> {t("em Base64 para garantir a segurança da API. Gerámos um de forma local e segura no seu navegador agora mesmo:", "in Base64 to ensure API security. We generated one locally and securely in your browser right now:")}</p>
                    
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
                      <p className="text-xs text-slate-500 mt-1">{t("O código-fonte do OpenClaw será clonado para esta pasta no seu Linux (WSL).", "OpenClaw's source code will be cloned to this folder on your Linux (WSL).")}</p>
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
                              <span className="text-xs font-mono text-emerald-500 truncate w-48">{easyToken || 'Token_Não_Gerado'}</span>
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
                            <p className="text-xs text-slate-500 mt-2">{t("O Easypanel fará o download da imagem oficial e criará o seu container automaticamente em alguns segundos.", "Easypanel will download the official image and automatically create your container in a few seconds.")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : os === 'wsl' ? (
                  <div className="space-y-6 max-w-2xl">
                    <p className="text-slate-400 mb-6">{t("Como estamos a usar instalação direta, não necessitamos de ficheiros YAML. Iremos descarregar o código e instalar os pacotes NPM.", "Since we are using direct installation, we don't need YAML files. We will download the code and install NPM packages.")}</p>
                    
                    <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 shadow-sm">
                      <h3 className="text-sm font-medium text-slate-200 mb-3">{t("Clonar repositório e instalar dependências", "Clone repository and install dependencies")}</h3>
                      <p className="text-sm text-slate-500 mb-4">{t("Execute no seu terminal", "Execute in your")} {wslDistro.split('-')[0]} {t("(WSL) os comandos abaixo:", "(WSL) terminal the commands below:")}</p>
                      
                      <div className="relative group">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800">
                          git clone https://github.com/openclaw/openclaw.git {installPath}{'\n'}
                          cd {installPath}{'\n'}
                          npm install
                        </pre>
                        <button onClick={() => copyToClipboard(`git clone https://github.com/openclaw/openclaw.git ${installPath}\ncd ${installPath}\nnpm install`, 'setup_wsl')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                          {copiedStates['setup_wsl'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                      <p className="text-xs text-amber-500 mt-3 font-medium bg-amber-500/10 inline-block px-3 py-2 rounded-lg border border-amber-500/20">
                        {t("Poderá demorar alguns minutos a instalar todos os pacotes Node.js necessários.", "It might take a few minutes to install all required Node.js packages.")}
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
                  {os === 'easypanel' ? t('Obter Link do Dashboard', 'Get Dashboard Link') : os === 'wsl' ? t('Execução Direta', 'Direct Execution') : t('Execução & Deploy', 'Execution & Deploy')}
                </h2>
                
                {os === 'easypanel' ? (
                  <div className="space-y-6 max-w-2xl">
                    <p className="text-slate-400 mb-6">{t("Após criar a aplicação, o Easypanel ligou o contêiner. O OpenClaw bloqueia o acesso à interface Web por defeito. Precisamos de um link mágico (token) para aceder à Web UI pela primeira vez.", "After creating the application, Easypanel started the container. OpenClaw blocks Web UI access by default. We need a magic link (token) to access the Web UI for the first time.")}</p>
                    
                    <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-sm relative">
                      <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
                        <Terminal size={18} className="text-emerald-400" /> {t("Aceder à Consola do Easypanel", "Access Easypanel Console")}
                      </h3>
                      <ol className="list-decimal list-inside text-sm text-slate-400 space-y-3 mb-6">
                        <li>{t("No Easypanel, clique no serviço recém-criado do", "In Easypanel, click on the newly created")} <strong className="text-white">OpenClaw</strong>.</li>
                        <li>{t("Clique no botão", "Click the")} <strong className="text-white bg-slate-800 px-2 py-1 rounded border border-slate-700">Console</strong> {t("no topo.", "button at the top.")}</li>
                        <li>{t("Selecione", "Select")} <strong className="text-white">Bash</strong> {t("ou", "or")} <strong className="text-white">sh</strong>.</li>
                        <li>{t("Cole o seguinte comando e dê", "Paste the following command and press")} <kbd className="bg-slate-800 px-1 rounded">Enter</kbd>:</li>
                      </ol>

                      <div className="relative group">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-4 rounded-lg overflow-x-auto border border-slate-800">
                          openclaw dashboard --no-open
                        </pre>
                        <button onClick={() => copyToClipboard('openclaw dashboard --no-open', 'exec_easy')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                          {copiedStates['exec_easy'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>

                      <div className="mt-6 p-4 bg-blue-900/10 border border-blue-500/20 rounded-lg">
                        <p className="text-sm text-blue-300">{t("A consola irá devolver um URL semelhante a este:", "The console will return a URL similar to this:")}<br/>
                          <code className="mt-2 block font-mono text-xs text-blue-200 bg-black/50 p-2 rounded">http://localhost:18789/?token=abc123xyz</code>
                        </p>
                        <p className="text-sm text-blue-300 mt-2 font-medium">{t("Copie APENAS a parte:", "Copy ONLY the part:")} <strong className="text-white">?token=abc123xyz</strong></p>
                      </div>
                    </div>
                  </div>
                ) : os === 'wsl' ? (
                  <div className="space-y-6 max-w-2xl">
                    <p className="text-slate-400 mb-6">{t("Com tudo instalado, inicie o processo do gateway do OpenClaw declarando as variáveis de ambiente necessárias.", "With everything installed, start the OpenClaw gateway process by declaring the necessary environment variables.")}</p>
                    
                    <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 shadow-sm">
                      <h3 className="text-sm font-medium text-slate-200 mb-3">{t("Iniciar a aplicação", "Start the application")}</h3>
                      <div className="relative group flex items-stretch">
                        <pre className="flex-1 text-sm font-mono text-emerald-400 bg-black p-4 rounded-l-lg overflow-x-auto border border-slate-800 border-r-0">
                          cd {installPath}{'\n'}
                          export OPENCLAW_GATEWAY_PORT={port}{'\n'}
                          npx openclaw gateway run
                        </pre>
                        <button onClick={() => copyToClipboard(`cd ${installPath}\nexport OPENCLAW_GATEWAY_PORT=${port}\nnpx openclaw gateway run`, 'exec_wsl')} className="bg-red-600 hover:bg-red-500 text-white px-6 rounded-r-lg font-medium flex flex-col items-center justify-center gap-1 transition-colors border border-red-600">
                          {copiedStates['exec_wsl'] ? <CheckCircle2 size={18} /> : <Play size={18} fill="currentColor" />}
                          <span className="text-xs">{copiedStates['exec_wsl'] ? t('Copiado', 'Copied') : 'Run'}</span>
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 mt-3">{t("Mantenha este terminal aberto para que o assistente continue ativo. (Para uso em background no futuro, considere utilizar o utilitário", "Keep this terminal open so the assistant stays active. (For background use in the future, consider using the utility")} <code className="text-slate-300 bg-slate-800 px-1 rounded">pm2</code>).</p>
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
                        <button onClick={() => copyToClipboard(os === 'linux' ? `mkdir -p ${installPath}/data ${installPath}/workspace\ncd ${installPath}` : `New-Item -ItemType Directory -Force -Path "${installPath}\\data", "${installPath}\\workspace"\nSet-Location -Path "${installPath}"`, 'exec1')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
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
                        <button onClick={() => copyToClipboard(os === 'linux' ? 'nano docker-compose.yml' : 'notepad docker-compose.yml', 'exec2')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
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
                          {copiedStates['exec3'] ? <CheckCircle2 size={18} /> : <Play size={18} fill="currentColor" />} {copiedStates['exec3'] ? t('Copiado', 'Copied') : t('Copiar', 'Copy') + ' Run'}
                        </button>
                      </div>
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
                  {os === 'easypanel' ? t('Entrar e Aprovar Dispositivo', 'Login and Approve Device') : t('Autenticação e Acesso', 'Authentication and Access')}
                </h2>
                
                {os === 'easypanel' ? (
                  <div className="space-y-6 max-w-2xl">
                    <p className="text-slate-400 mb-4">{t("Esta é a medida de segurança final de confiança Zero (Zero Trust) da arquitetura do OpenClaw.", "This is the final Zero Trust security measure of the OpenClaw architecture.")}</p>

                    <div className="bg-gradient-to-br from-red-900/20 to-slate-900 border border-red-500/20 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <ExternalLink size={20} className="text-red-400"/> 1. {t("Abrir a Web UI", "Open Web UI")}
                      </h3>
                      <p className="text-sm text-slate-300 mb-4">
                        {t("No Easypanel, clique no botão", "In Easypanel, click the")} <strong className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Open</strong> {t("do seu serviço. Ele vai abrir o URL público gerado (ex:", "button of your service. It will open the generated public URL (e.g:")} <code className="text-xs bg-black p-1 rounded">https://openclaw.seu-dominio.com</code>). {t("O ecrã dirá 'Unauthorized'.", "The screen will say 'Unauthorized'.")}
                      </p>
                      <p className="text-sm text-slate-300">
                        {t("Na barra de endereços do seu navegador, cole o token do Passo 4 no fim do URL e dê Enter:", "In your browser's address bar, paste the token from Step 4 at the end of the URL and hit Enter:")}
                      </p>
                      <div className="mt-3 p-3 bg-black/50 border border-slate-700 rounded text-sm font-mono text-emerald-400 break-all">
                        https://openclaw.seu-dominio.com/<span className="text-yellow-400 font-bold">?token=abc123xyz...</span>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-sm">
                      <h3 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                        <ShieldAlert size={18} className="text-emerald-400" /> 2. {t("Aprovar a sua Sessão", "Approve your Session")}
                      </h3>
                      <p className="text-sm text-slate-400 mb-4">
                        {t("A página agora dirá 'Pending Approval'. Volte à Consola do Easypanel (Bash) e liste os dispositivos que tentaram ligar-se:", "The page will now say 'Pending Approval'. Go back to the Easypanel Console (Bash) and list the devices that tried to connect:")}
                      </p>
                      <div className="relative group mb-4">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-3 rounded-lg overflow-x-auto border border-slate-800">
                          openclaw devices list
                        </pre>
                        <button onClick={() => copyToClipboard('openclaw devices list', 'auth1_list')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                          {copiedStates['auth1_list'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                      
                      <p className="text-sm text-slate-400 mb-4">
                        {t("Copie o", "Copy the")} <strong className="text-white">ID</strong> {t("listado, ou simplesmente aprove todos os dispositivos pendentes agora mesmo:", "listed, or simply approve all pending devices right now:")}
                      </p>
                      <div className="relative group">
                        <pre className="text-sm font-mono text-emerald-400 bg-black p-3 rounded-lg overflow-x-auto border border-slate-800">
                          openclaw devices approve
                        </pre>
                        <button onClick={() => copyToClipboard('openclaw devices approve', 'auth1_approve')} className="absolute top-2 right-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                          {copiedStates['auth1_approve'] ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                      <p className="text-xs text-emerald-500 font-medium mt-3">✅ {t("A sua Web UI atualizará automaticamente e a IA estará pronta a usar!", "Your Web UI will automatically update and the AI will be ready to use!")}</p>
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
                        <button onClick={() => copyToClipboard(os === 'wsl' ? `cat ~/.openclaw/openclaw.json | grep '"token":'` : os === 'linux' ? `cat ${installPath}/data/openclaw.json | grep '"token":'` : `Get-Content "${installPath}\\data\\openclaw.json" | Select-String '"token":'`, 'auth1')} className="absolute top-3 right-3 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
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
                              ssh -L {port}:127.0.0.1:{port} user@SEU_IP_VPS
                            </pre>
                            <button onClick={() => copyToClipboard(`ssh -L ${port}:127.0.0.1:${port} user@SEU_IP_VPS`, 'tunnel')} className="absolute top-2 right-2 p-1 bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
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
                          <p className="text-sm text-slate-300 mb-4">{t("Acesse pelo IP do seu servidor:", "Access via your server's IP:")}</p>
                          <span className="inline-block text-red-400 font-mono font-bold bg-red-400/10 px-3 py-1.5 rounded-lg border border-red-500/30">
                            http://IP_DO_SERVIDOR:{port}
                          </span>
                        </>
                      )}
                    </div>

                    {includePortainer && (os === 'linux') && (
                      <div className="bg-gradient-to-br from-emerald-900/20 to-slate-900 border border-emerald-500/20 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                          <LayoutDashboard size={20} className="text-emerald-400"/> {t("Acessar o Portainer (Gestão Visual)", "Access Portainer (Visual Management)")}
                        </h3>
                        <p className="text-sm text-slate-300 mb-4">{t("Acesse a interface web do Portainer para gerenciar visualmente o OpenClaw e os seus outros contentores:", "Access Portainer's web interface to visually manage OpenClaw and your other containers:")}</p>
                        
                        <span className="inline-block text-emerald-400 font-mono font-bold bg-emerald-400/10 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                          {os === 'wsl' ? 'https://127.0.0.1:9443' : 'https://IP_DO_SERVIDOR:9443'}
                        </span>
                        
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