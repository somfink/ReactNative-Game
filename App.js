import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { ScreenContextProvider } from './context/screen-context';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './utils/colors';

export default function App() {
    // const { gameScreenShown } = useContext(ScreenContext);
    // const { startGameScreen, gameScreen, gameOverScreen } = gameScreenShown;
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const pickedNumberHandler = pickedNumber => {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    };

    const gameOverHandler = (numOfRounds) => {
      setGameIsOver(true);
      setGuessRounds(numOfRounds);
    }

    const startNewGameHandler = () => {
        setUserNumber(null);
        setGuessRounds(0);
    };

    let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen choosenNumber={userNumber} onGameOver={gameOverHandler} />;
    }

    if (gameIsOver && userNumber) {
      screen = <GameOverScreen onStartNewGame={startNewGameHandler} userNumber={userNumber} roundsNumber={guessRounds} />
    }


    return (
        <ScreenContextProvider>
            <LinearGradient
                colors={[Colors.primary700, Colors.accent500]}
                style={styles.rootScreen}
            >
                <ImageBackground
                    source={require('./assets/images/background.png')}
                    style={styles.rootScreen}
                    resizeMode="cover"
                    imageStyle={styles.backgroundImage}
                >
                    <SafeAreaView style={styles.rootScreen}>
                        {screen}
                    </SafeAreaView>
                    <StatusBar style="light" />
                </ImageBackground>
            </LinearGradient>
        </ScreenContextProvider>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.2,
    },
});
