import { useState } from "react";

import Welcome from "./pages/Welcome/Welcome";
import KnowYou from "./pages/KnowYou/KnowYou";
import AboutYou from "./pages/AboutYou/AboutYou";
import Needs from "./pages/Needs/Needs";
import Login from "./pages/Login/Login";

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
          
        {/* ABOUT YOU — etapa 2 do cadastro */}
        {currentScreen === "aboutyou" && (
            <AboutYou
                onBack={navigateBack}
                onNavigate={() => navigateTo("needs")}
            />
        )}
          
        {/* NEEDS — etapa 3: o que você precisa hoje */}
        {currentScreen === "needs" && (
            <Needs
                onBack={navigateBack}
                onNavigate={() => {
                    const veioDoLogin = history.includes("login");

                    if (veioDoLogin) {
                        navigateTo("home");
                    } else {
                        navigateTo("analysis");
                    }
                }}
            />
          )}
          
        {/* LOGIN */}
        {currentScreen === "login" && (
            <Login
                onBack={navigateBack}
                onNavigate={() => navigateTo("needs")}
            />
        )}         
    </>
  );
}

export default App;
