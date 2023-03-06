import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import React, { useState, useEffect }
    from "react";
import * as Location from 'expo-location';
import Header from "./Components/Header";
import CurrentWeather from "./Components/CurrentWeather";

const API_KEY = '89188fd5cadee3143713df91f6b88aad'

export default function App() {

    // State : stock localisation
    const [location, setLocation] = useState({latitude:0, longitude:0});

    const [icon, setIcon] = useState("");

    const [currentWeather, setCurrentWeather] = useState('');

    //const [city, setCity] = useState('');

    useEffect(() => {
        // Get permissions
        const getPermissions = async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission denied');
                return;
            }

            // Fetch and set useState location
            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation({latitude: currentLocation.coords.latitude, longitude: currentLocation.coords.longitude});
            //setIcon(location.weather[0].icon); (Alain)
        };

        // Call Permissions
        getPermissions()
            .then(() => console.log("permission granted"))
            .then(()=> console.log(location))
            .catch(error => console.log(error));
    }, [])

    useEffect( ()=>{
        if (location) {

            // Get City
            //const getCity = async () => {
                //const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${location.latitude}&lon=${location.longitude}&limit=5&&appid=${API_KEY}`);
                //const data = await response.json();
                //data && data[0] && await setCity(data[0].name);
            }
            // Get current weather
            const getCurrentWeather = async () => {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}`);
                const data = await response.json();
                setIcon(data.weather[0].icon);
                console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}`)
                data && await setCurrentWeather(data);
            }

            //getCity()
                //.then(() => console.log(city))
                //.catch(error => console.log(error));

            getCurrentWeather()
                .then(() => console.log(({currentWeather})))
                //.catch(error => console.log(error));

    }, [location])

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Header/>

            <CurrentWeather icon={icon} currentWeather={currentWeather}/>

        </View>
    );
}

const styles = StyleSheet.create({
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