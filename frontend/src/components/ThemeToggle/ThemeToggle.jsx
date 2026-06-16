import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./ThemeToggle.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Alternar tema"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;