import { Text, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 12,
        borderWidth: 2,
        borderColor: 'white',
    },
});

export default Title;
