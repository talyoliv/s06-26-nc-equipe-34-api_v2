import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";

const Icons = {
  Back: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
};
import "./Login.css";

function Login({ onBack, onNavigate }) {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`login-page ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <section className="login-container">
        
        <header className="form-header">
          <div className="header-left">
            <button className="btn-back" onClick={onBack} aria-label="Voltar">
              <Icons.Back />
            </button>
          </div>
          <div className="header-center">
            <div className="progress-container">
              <span className="progress-text">Etapa <strong>2</strong> de 3</span>
              <div className="progress-bar"><div className="progress-fill" style={{ width: "66%" }}></div></div>
            </div>
          </div>
          <div className="header-right">
            <ThemeToggle />
          </div>
        </header>

        <div className="login-content">
          <h2>Acesse sua conta</h2>
          <p>Por favor, entre com seus dados.</p>
        </div>

        <form className="login-form">
          <input type="email" placeholder="E-mail" className="input-field" />
          <input type="password" placeholder="Senha" className="input-field" />
          
          <div className="forgot-password">
            <a href="#">Esqueceu sua senha?</a>
          </div>

          <button type="button" className="btn btn-primary" onClick={onNavigate}>
            Entrar
          </button>
        </form>

        <div className="divider-container">
          <div className="divider-line"></div>
          <span className="divider-text">ou entrar com</span>
          <div className="divider-line"></div>
        </div>

        <button className="btn-google">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
            alt="Google" 
          />
          Entrar com Google
        </button>

      </section>
    </main>
  );
}

export default Login;