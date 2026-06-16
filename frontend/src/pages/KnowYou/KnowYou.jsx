import React, { useContext } from 'react'; 
import { ThemeContext } from '../../contexts/ThemeContext'; 
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import './KnowYou.css';

const Icons = {
  Back: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>,
  User: () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  Mail: () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
  Calendar: () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  Gender: () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m16.2 7.8-8.4 8.4M16.2 7.8H12M16.2 7.8V12" /></svg>,
  Education: () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>,
  Map: () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  Phone: () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
  ChevronDown: () => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
};

export default function KnowYou({ onBack, onNavigate }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`page-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className="form-content-wrapper">
        <header className="form-header">
          <div className="header-left">
            <button className="btn-back" onClick={onBack} aria-label="Voltar"><Icons.Back /></button>
          </div>
          <div className="header-center">
            <div className="progress-container">
              <span className="progress-text">Etapa <strong>1</strong> de 3</span>
              <div className="progress-bar"><div className="progress-fill"></div></div>
            </div>
          </div>
          <div className="header-right"><ThemeToggle /></div>
        </header>

        <main className="form-content">
          <h1 className="title">Vamos te conhecer melhor</h1>
          <p className="subtitle">Preencha seus dados para começarmos juntos.</p>

          <form onSubmit={(e) => e.preventDefault()} className="inputs-form">
            <div className="input-group"><span className="input-icon"><Icons.User /></span><input type="text" placeholder="Nome completo" /></div>
            <div className="input-group"><span className="input-icon"><Icons.Mail /></span><input type="email" placeholder="E-mail" /></div>
            <div className="input-group"><span className="input-icon"><Icons.Calendar /></span><input type="text" placeholder="Data de nascimento" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} /><span className="input-suffix"><Icons.Calendar /></span></div>
            
            <div className="input-group select-group"><span className="input-icon"><Icons.Gender /></span>
              <select defaultValue=""><option value="" disabled hidden>Gênero</option><option value="masculino">Masculino</option><option value="feminino">Feminino</option><option value="outro">Outro</option></select>
              <span className="input-suffix"><Icons.ChevronDown /></span>
            </div>

            <div className="input-group select-group"><span className="input-icon"><Icons.Education /></span>
              <select defaultValue=""><option value="" disabled hidden>Escolaridade</option><option value="fundamental">Ensino Fundamental</option><option value="medio">Ensino Médio</option><option value="superior">Ensino Superior</option></select>
              <span className="input-suffix"><Icons.ChevronDown /></span>
            </div>

            <div className="input-group"><span className="input-icon"><Icons.Map /></span><input type="text" placeholder="Continente" /></div>
            <div className="input-group"><span className="input-icon"><Icons.Map /></span><input type="text" placeholder="País" /></div>
            <div className="input-group"><span className="input-icon"><Icons.Map /></span><input type="text" placeholder="Estado (BR)" /></div>
            <div className="input-group"><span className="input-icon"><Icons.Map /></span><input type="text" placeholder="Cidade" /></div>
            <div className="input-group"><span className="input-icon"><Icons.Phone /></span><input type="tel" placeholder="WhatsApp" /></div>

            <button 
              type="button" 
              className="btn-submit" 
              onClick={onNavigate}
            >
              Continuar
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}