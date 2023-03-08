import {useEffect} from "react";
import {Image, StyleSheet, Text, View} from "react-native";


export default function Forecast({icon, forecast, styles}) {
    return(
        <View style={styles.nextContainer}>
        {forecast.map((item, index) => (
            <View style={styles.item} key={index}>
                <Text style={styles.time}>
                    {new Date(item.dt * 1000).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    })}
                </Text>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={icon}/>
                </View>
                <Text>{item.weather[0].description}</Text>
                <Text style={styles.temp}>
                    {Math.round(item.main.temp)}°C
                </Text>
            </View>
        ))}
    </View>)
};
