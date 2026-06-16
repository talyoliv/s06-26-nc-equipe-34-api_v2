import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import './Needs.css';

const Icons = {
  Back: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>,
  Clock: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
};

export default function Needs({ onBack, onNavigate }) {
  const { theme } = useContext(ThemeContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 'not-know', emoji: '🤔', text: 'Não sei por onde começar' },
    { id: 'study', emoji: '📚', text: 'Quero estudar' },
    { id: 'first-job', emoji: '💼', text: 'Quero conseguir meu primeiro emprego' },
    { id: 'pivot', emoji: '🔄', text: 'Quero mudar de área' },
    { id: 'grow', emoji: '📈', text: 'Quero crescer na carreira' },
    { id: 'confidence', emoji: '❤️', text: 'Preciso recuperar minha confiança' }
  ];

  return (
    <div className={`page-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className="form-content-wrapper">
        <header className="form-header">
          <div className="header-left">
            <button className="btn-back" onClick={onBack} aria-label="Voltar"><Icons.Back /></button>
          </div>
          <div className="header-center">
            <div className="progress-container">
              <span className="progress-text">Etapa <strong>3</strong> de 3</span>
              <div className="progress-bar"><div className="progress-fill stage-2"></div></div>
            </div>
          </div>
          <div className="header-right"><ThemeToggle /></div>
        </header>

        <main className="form-content">
          <h1 className="title">O que você precisa hoje?</h1>
          <p className="subtitle">Não importa em que momento você está. Vamos começar por onde faz sentido para você.</p>

          <div className="options-grid">
            {options.map((option) => (
              <button
                key={option.id}
                className={`option-card ${selectedOption === option.id ? 'active' : ''}`}
                onClick={() => setSelectedOption(option.id)}
              >
                <span className="option-emoji">{option.emoji}</span>
                <span className="option-text">{option.text}</span>
              </button>
            ))}
          </div>

          <div className="info-box">
            <span className="info-icon"><Icons.Clock /></span>
            <p className="info-text">
              Você pode mudar isso depois. <br />
              <strong>O importante é dar o primeiro passo.</strong>
            </p>
          </div>

          <button 
            className="btn-submit" 
            disabled={!selectedOption}
            onClick={onNavigate}
            style={{ marginTop: '24px', opacity: selectedOption ? 1 : 0.6 }}
          >
            Continuar
          </button>
        </main>
      </div>
    </div>
  );
}