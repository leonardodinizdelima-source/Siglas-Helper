import React from 'react';

// Definição de tipos para as props do componente
interface PrivacyPageProps {
  title: string;
  content: string;
  lastUpdated: Date;
}

// Componente funcional com TypeScript
const PrivacyPage: React.FC<PrivacyPageProps> = ({ title, content, lastUpdated }) => {
  // Função para formatar a data de atualização
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="privacy-page">
      <header>
        <h1>{title}</h1>
        <p>Última atualização: {formatDate(lastUpdated)}</p>
      </header>
      <main>
        <article>
          <p>{content}</p>
        </article>
      </main>
    </div>
  );
};

export default PrivacyPage;