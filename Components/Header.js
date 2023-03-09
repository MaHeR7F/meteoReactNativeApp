import {StyleSheet, Text, View} from "react-native";

export default function Header() {
    return(
    <View style={styles.header}>
        <Text style={styles.headerText}>MétéoAppMobile</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    header: {
        top: 0,
        left: 0,
        padding: 50,
    },
    headerText: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'blue',
        textTransform: 'uppercase'
    },
});