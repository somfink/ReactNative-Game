import { createContext, useState } from "react";

const ScreenContext = createContext({
  gameScreenShown: {
    startGameScreen: true,
    gameScreen: false,
    gameOverScreen: false,
  },
  showStartGame: () => {},
  showGameScreen: () => {},
  showGameOverScreen: () => {},
});

export const ScreenContextProvider = ({ children }) => {
  const [whichGameScreenShow, setWhichGameScreenShow] = useState({
    startGameScreen: true,
    gameScreen: false,
    gameOverScreen: false,
  });

  const goToStartGameHandler = () => {
    setWhichGameScreenShow({
      startGameScreen: true,
      gameScreen: false,
      gameOverScreen: false,
    });
  };
  const goToGameScreenHandler = () => {
    setWhichGameScreenShow({
      startGameScreen: false,
      gameScreen: true,
      gameOverScreen: false,
    });
  };
  const goToGameOverHandler = () => {
    setWhichGameScreenShow({
      startGameScreen: true,
      gameScreen: false,
      gameOverScreen: true,
    });
  };

  return (
    <ScreenContext.Provider
      value={{
        gameScreenShown: whichGameScreenShow,
        showStartGame: goToStartGameHandler,
        showGameScreen: goToGameScreenHandler,
        showGameOverScreen: goToGameOverHandler,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenContext;
