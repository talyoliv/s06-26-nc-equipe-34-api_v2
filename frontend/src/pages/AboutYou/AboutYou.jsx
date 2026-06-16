import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import "./AboutYou.css";

const Icons = {
  Back: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
};

function AboutYou({ onBack, onNavigate }) {
  const { theme } = useContext(ThemeContext);

  const [level, setLevel] = useState("Iniciante");
  const [area, setArea] = useState("QA");
  const [goal, setGoal] = useState("Estudar");

  return (
    <main className={`about-page ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <section className="about-container">
        
        {/* Header preservado exatamente como você enviou */}
        <header className="about-header">
          <button className="btn-back" onClick={onBack} aria-label="Voltar"><Icons.Back /></button>
          <div className="progress-container">
            <span className="progress-text">Etapa 2 de 3</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "100%" }}></div>
            </div>
          </div>
          <div className="header-right">
            <ThemeToggle />
          </div>
        </header>

        <div className="about-content">
          <h2>Conte mais sobre você</h2>
          <p>Essas informações nos ajudam a entender seu perfil e te orientar melhor.</p>
        </div>

        {/* Seção Nível Profissional */}
        <div className="selection-group">
          <label>Qual seu nível profissional?</label>
          <div className="options-row">
            {["Iniciante", "Júnior", "Pleno", "Sênior"].map((item) => (
              <button
                key={item}
                className={`opt-btn ${level === item ? "active" : ""}`}
                onClick={() => setLevel(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Seção Área de Interesse */}
        <div className="selection-group">
          <label>Qual sua área de interesse?</label>
          <div className="options-grid">
            {[
              { id: "QA", icon: "🔍", label: "QA" },
              { id: "Dev", icon: "</>", label: "Desenvolvimento" },
              { id: "Dados", icon: "📊", label: "Dados" },
              { id: "UX", icon: "🎨", label: "UX/UI" },
              { id: "Produto", icon: "📦", label: "Produto" },
              { id: "Infra", icon: "☁️", label: "Infraestrutura" },
              { id: "Outra", icon: "✨", label: "Outra" },
            ].map((item) => (
              <button
                key={item.id}
                className={`grid-btn ${area === item.id ? "active" : ""}`}
                onClick={() => setArea(item.id)}
              >
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Seção O que busca */}
        <div className="selection-group">
          <label>O que você busca?</label>
          <div className="options-wrap">
            {["Estudar", "Definir um caminho", "Buscar emprego", "Mudar de emprego"].map((item) => (
              <button
                key={item}
                className={`opt-btn wrap ${goal === item ? "active" : ""}`}
                onClick={() => setGoal(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Botão para chamar a navegação do App.jsx */}
        <button className="btn btn-primary btn-finish" onClick={onNavigate}>
          Continuar
        </button>

      </section>
    </main>
  );
}

export default AboutYou;