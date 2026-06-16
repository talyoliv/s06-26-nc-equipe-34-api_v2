import { useState } from "react";

import Welcome from "./pages/Welcome/Welcome";
import KnowYou from "./pages/KnowYou/KnowYou";

function App() {
  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [history, setHistory] = useState([]);

  const navigateTo = (nextScreen) => {
    setHistory((prev) => [...prev, currentScreen]);
    setCurrentScreen(nextScreen);
  };

  const navigateBack = () => {
    const lastScreen = history[history.length - 1];

    if (lastScreen) {
      setHistory((prev) => prev.slice(0, -1));
      setCurrentScreen(lastScreen);
    } else {
      setCurrentScreen("welcome");
    }
  };

  return (
    <>
      {/* WELCOME */}
      {currentScreen === "welcome" && (
        <Welcome onNavigate={navigateTo} />
      )}   
          
      {/* KNOW YOU — etapa 1 do cadastro */}
      {currentScreen === "knowyou" && (
        <KnowYou
          onBack={navigateBack}
          onNavigate={() => navigateTo("aboutyou")}
        />
      )}
         
    </>
  );
}

export default App;
