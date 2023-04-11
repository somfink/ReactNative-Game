import { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import Colors from '../utils/colors';
import InstructionText from '../components/ui/InstructionText';

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ choosenNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, choosenNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (!(currentGuess === parseInt(choosenNumber))) {
            return;
        }
        onGameOver();
    }, [currentGuess, choosenNumber, onGameOver]);

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < choosenNumber) ||
            (direction === 'greater' && currentGuess > choosenNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that is wrong...', [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        }
        if (direction === 'greater') {
            minBoundary = currentGuess + 1;
        }
        const newRdnNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRdnNumber);
    };

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                    Higher or lower?
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler('greater')}
                        >
                            <Ionicons
                                name="add-circle"
                                size={24}
                                color={Colors.accent500}
                            />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler('lower')}
                        >
                            <Ionicons
                                name="remove-circle"
                                size={24}
                                color={Colors.accent500}
                            />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>{/* LOG ROUNDS */}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});

export default GameScreen;
