import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import React, { useState, useEffect }
    from "react";
import * as Location from 'expo-location';
import Header from "./Components/Header";
import CurrentWeather from "./Components/CurrentWeather";
import Forecast from "./Components/Forecast";

const API_KEY = "89188fd5cadee3143713df91f6b88aad"

export default function App() {

    // State : stock localisation
    const [location, setLocation] = useState({latitude: 0, longitude: 0});

    //const [icon, setIcon] = useState('');

    const [currentWeather, setCurrentWeather] = useState('');

    //const [city, setCity] = useState('');

    const [forecast, setForecast] = useState([]);

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
            .then(() => console.log(location))
            .catch(error => console.log(error));
    }, [])

    useEffect(() => {
        if (location) {

            // Get City
            //const getCity = async () => {
            //const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${location.latitude}&lon=${location.longitude}&limit=5&&appid=${API_KEY}`);
            //const data = await response.json();
            //data && data[0] && await setCity(data[0].name);
        }
        // Get current weather
        const getCurrentWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            //setIcon(data.weather[0].icon);
            console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`)
            data && await setCurrentWeather(data);
        }
        getCurrentWeather()
            .then(() => console.log(({currentWeather})))
        //.catch(error => console.log(error));
        const getForecast = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            setForecast(data.list); // On récupère une prévision toutes les 8 heures, pour les 3 prochains jours
            console.log(forecast);
        }
        //getCity()
        //.then(() => console.log(city))
        //.catch(error => console.log(error));
        getForecast()
            .then(() => {
                console.log('Forecast retrieved successfully.');
            })
            .catch((error) => {
                console.error('An error occurred while retrieving the forecast:', error);
            });

    }, [location])


    return (
        //<ImageBackground source={require("./assets/eau.jpeg")} resizeMode="cover" style={styles.image} alt="background image here">
        <View style={styles.container}>
            <StatusBar style="auto"/>

            <Header/>
            <View>
                <CurrentWeather styles={styles}
                                icon={{uri: `https://openweathermap.org/img/wn/${currentWeather.weather && currentWeather.weather[0].icon}@4x.png`}}
                                currentWeather={currentWeather}/>
            </View>
            <View>
                <Forecast styles={styles}
                          icon={{uri: `https://openweathermap.org/img/wn/${currentWeather.weather && currentWeather.weather[0].icon}@4x.png`}}
                          forecast={forecast}/>
            </View>
        </View>
        //</ImageBackground>
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
        marginTop: '20%',
        paddingTop:'20%',
        width: '95%',
        backgroundColor: '#FEFEE2',
        borderWidth: 1,
        padding: 10,
    },
    textIntro:{
        padding: 20,
        textAlign: "center"
    },
    text: {
        fontSize:20,
        textAlign: "center"
    },
    icon:{
        height:100,
        width:100,
        borderWidth: 1,
        backgroundColor: '#FFFFFF'
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    cityText:{
        fontSize:24,
        textAlign: "center"
    },
    tempText:{
        fontSize:20,
        paddingTop: 10,
        textAlign: "center"
    },
    iconContainer: {
        alignItems: 'center'
    },
    forecastContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    item: {
        alignItems: 'center',
        paddingHorizontal: 10
    },
    time: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    temp: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    scrollview: {
        flex: 1
    }
});