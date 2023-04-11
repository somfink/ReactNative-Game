import { Pressable, Text, View, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';

const PrimaryButton = ({ title, onPress }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: Colors.primary600 }}
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
            >
                <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: Colors.primary500,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
});
