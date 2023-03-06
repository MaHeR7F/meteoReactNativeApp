import {Image, StyleSheet, Text, View} from "react-native";

export default function CurrentWeather({icon, currentWeather}) {

    return(
    <View style={styles.currentWeatherContainer}>
        <View style={styles.textIntro}>
            <Text style={styles.text}>Voici le temps qu'il fait :</Text>
        </View>

        <View style={styles.iconContainer}>
                <Image style={styles.icon} source={{uri :`https://openweathermap.org/img/wn/10d@4x.png`}}/>

        </View>
        <View style={styles.textContainer}>
            <Text style={styles.cityText}>{currentWeather.name}</Text>
            <Text style={styles.tempText}>{currentWeather.main && (currentWeather.main.temp - 273.15).toFixed(1)}&deg;C</Text>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 10,
    },
    headerText: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'blue',
        textTransform: 'uppercase'
    },
    container: {
            flex: 1,
            alignItems: 'center',
            height: '100%'
    },
    currentWeatherContainer:{
            flexDirection:'column',
            paddingTop:'20%',
            marginTop: '10%',
            width: '95%',
            backgroundColor: '#FEFEE2',
            borderWidth: 1,
            padding: 10
    },
    textIntro:{
        padding: 20,
    },
    text: {
        fontSize:20
    },
    icon:{
        height:100,
        width:100,
        borderWidth: 1,
        backgroundColor: 'white'
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    cityText:{
        fontSize:24
    },
    tempText:{
        fontSize:20
    },
    iconContainer: {
        alignItems: 'center'
    },
});