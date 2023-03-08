import {Image, StyleSheet, Text, View} from "react-native";

export default function CurrentWeather({icon, currentWeather, styles}) {

    return(
    <View style={styles.currentWeatherContainer}>
        <View style={styles.textIntro}>
            <Text style={styles.text}>Voici le temps qu'il fait :</Text>
        </View>

        <View style={styles.iconContainer}>
                <Image style={styles.icon} source={icon}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.cityText}>{currentWeather.name}</Text>
            <Text style={styles.tempText}>{currentWeather.main && (currentWeather.main.temp ).toFixed(1)}&deg;C</Text>
        </View>
    </View>
    )
};
