import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../utils/colors';

const StartGameScreen = ({ onConfirmNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const resetInputHandler = () => {
        setEnteredNumber('');
    };

    const numberInputHandler = enteredText => {
        setEnteredNumber(enteredText);
    };

    const confirmInputHandler = () => {
        const inputIsValid =
            parseInt(enteredNumber) > 0 && parseInt(enteredNumber) < 100;
        if (!inputIsValid || isNaN(parseInt(enteredNumber))) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'cancel', onPress: resetInputHandler }]
            );
            return;
        }
        onConfirmNumber(enteredNumber);
        resetInputHandler();
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton title="Reset" onPress={resetInputHandler} />
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        title="Confirm"
                        onPress={confirmInputHandler}
                    />
                </View>
            </View>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        // FOR ANDROID SHADOW
        elevation: 4,
        // FOR iOS box shadow styling
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});
