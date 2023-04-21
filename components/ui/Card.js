import { Dimensions, StyleSheet, View } from 'react-native';
import Colors from '../../utils/colors';

const Card = ({ children }) => {
    return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
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
});
