import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import "./Welcome.css";

function Welcome({ onNavigate }) {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`welcome-page ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <section className="welcome-container">
        
        <header className="welcome-header">
          <div className="header-left"></div>
          <div className="logo-group">
            <span className="logo-icon">🌱</span>
            <h1>APP BiT</h1>
          </div>
          <div className="header-right">
            <ThemeToggle />
          </div>
        </header>

        <div className="hero-content">
          <h2>Você não está começando do zero.</h2>
          <p>
            Você não precisa fazer essa jornada sozinho(a).
            <br />
            Vamos descobrir juntos o próximo passo para o seu futuro.
          </p>
        </div>

        <div className="illustration">
          <img
            src={
              theme === "light"
                ? "/illustrations/welcome-light.png"
                : "/illustrations/welcome-dark.png"
            }
            alt="Jornada profissional"
          />
        </div>

        <div className="actions">
          {/* Este botão leva para o cadastro */}
          <button
            id="btn-criar-conta"
            className="btn btn-primary"
            onClick={() => onNavigate("knowyou")} 
          >
            Criar conta
          </button>

          {/* Este botão agora leva para o login */}
          <button
            id="btn-entrar"
            className="btn btn-secondary"
            onClick={() => onNavigate("login")}
          >
            Entrar
          </button>
        </div>
      </section>
    </main>
  );
}

export default Welcome;