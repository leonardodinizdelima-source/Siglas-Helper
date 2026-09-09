import React, { useState } from 'react';
import { ShieldCheck, Lock, EyeOff, UserCheck, FileText, Zap, Database, Server } from 'lucide-react';

/**
 * HOME OFFICE AI - PRIVACY HUB
 * Refatoração Completa: Segurança & LGPD
 * Data: Outubro 2023
 */

const PrivacySite = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Constantes de Texto (Lúdicas e Específicas)
  const privacySpecs = [
    {
      id: 'anonimizacao',
      title: 'O Escudo de Dados',
      description: 'Nossa IA nunca "vê" o nome do seu paciente. Antes de qualquer análise, os dados passam por uma câmara de anonimização que substitui identificadores por tokens criptográficos.',
      icon: <EyeOff className="w-6 h-6 text-indigo-400" />,
    },
    {
      id: 'criptografia',
      title: 'Criptografia de Elite',
      description: 'Dados em repouso e em trânsito utilizam o padrão AES-256. É o mesmo nível de proteção utilizado por instituições militares e bancárias globais.',
      icon: <Lock className="w-6 h-6 text-indigo-400" />,
    },
    {
      id: 'lgpd',
      title: 'Soberania do Usuário',
      description: 'Você é o dono dos dados. Em conformidade com a LGPD, oferecemos ferramentas de exportação total e deleção permanente com apenas um clique.',
      icon: <UserCheck className="w-6 h-6 text-indigo-400" />,
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Header / Nav */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Home Office <span className="text-indigo-500">AI</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#principios" className="hover:text-indigo-400 transition-colors">Princípios</a>
            <a href="#tecnologia" className="hover:text-indigo-400 transition-colors">Tecnologia</a>
            <a href="#direitos" className="hover:text-indigo-400 transition-colors">Seus Direitos</a>
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 px-5 py-2 rounded-full text-sm font-semibold transition-all border border-slate-700">
            Relatório de Impacto (DPIA)
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Privacidade não é opcional.<br/> É o nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">código fonte.</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-10">
            Na Home Office AI, construímos uma infraestrutura onde a inteligência artificial trabalha para você, 
            sem nunca comprometer a integridade dos dados sensíveis. Conheça nossa "Mesa de Segurança".
          </p>
        </div>
      </header>

      {/* Grid de Funcionalidades */}
      <section id="principios" className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {privacySpecs.map((spec) => (
              <div key={spec.id} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all group">
                <div className="mb-4 p-3 bg-slate-800 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{spec.title}</h3>
                <p className="text-slate-400 leading-relaxed">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detalhamento Técnico - "A Fábrica de Software" */}
      <section id="tecnologia" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] overflow-hidden">
            <div className="p-12">
              <div className="flex items-center gap-4 mb-8">
                <Zap className="text-yellow-400 w-8 h-8" />
                <h2 className="text-3xl font-bold text-white">Como nossa IA processa dados</h2>
              </div>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center font-bold text-indigo-400">1</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                      Sanitização de Input <Database className="w-4 h-4 text-slate-500" />
                    </h4>
                    <p className="text-slate-400">Qualquer arquivo enviado passa por um scanner de PII (Personally Identifiable Information). Se detectarmos um CPF ou nome de paciente, o sistema aplica o <i>Hashing</i> antes de prosseguir.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center font-bold text-indigo-400">2</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                      Processamento Efêmero <Server className="w-4 h-4 text-slate-500" />
                    </h4>
                    <p className="text-slate-400">Nossa IA opera em instâncias voláteis. Uma vez concluída a tarefa de engenharia ou análise, o contexto é destruído da memória RAM do servidor, não deixando rastros de prompts residuais.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Direitos */}
      <footer id="direitos" className="py-20 px-6 border-t border-slate-800 text-center">
        <div className="max-w-2xl mx-auto">
          <FileText className="w-12 h-12 text-slate-700 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Compromisso Transparência</h2>
          <p className="text-slate-500 mb-8">
            Este site de privacidade foi gerado pela Mesa de Segurança da Fábrica de IA. 
            Nenhum dado real foi utilizado para a criação deste template. 
            Para exercer seus direitos LGPD, entre em contato com dpo@homeofficeai.io.
          </p>
          <div className="flex justify-center gap-6 text-xs font-mono uppercase tracking-widest text-slate-600">
            <span>Versão 2.0.4</span>
            <span>Security Stack: AES-256 + TLS 1.3</span>
            <span>Region: Brazil-South</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacySite;