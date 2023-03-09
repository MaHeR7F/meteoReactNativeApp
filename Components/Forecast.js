import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';


/*const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
        <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={backgroundColor}
            textColor={color}
        />
    );
};*/
/*const renderItem = (item) => {

    const date = new Date(item.dt * 1000);
    const dayOfWeek = date.toLocaleDateString('fr-FR', {weekday: 'short'});
    const time = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
    console.log('item')
console.log(item)
    return (
            <View style={styles.item}>
                <Text style={styles.time}>{`${dayOfWeek} ${time}`}</Text>
              <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={{uri :`https://openweathermap.org/img/wn/${item.item.weather && item.item.weather[0].icon}@4x.png`}}/>
                </View>
                <Text>{item.item.weather[0].description}</Text>
               <Text style={styles.temp}>{Math.round(item.item.main.temp)}°C</Text>
            </View>

    )
}*/
export default function Forecast({forecast}) {


        return (
        <View style={styles.nextContainer}>
            <View style={styles.titleNextContainer}>
                <Text>Et la météo des jours suivants:</Text>
            </View>
            <View>
                <FlatList
                    horizontal={true}
                    data={forecast}
                    keyExtractor={(item) => item.dt.toString()}
                    renderItem={({item}) => (
                        <View style={styles.forecastItem}>
                            <Text>{new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short', day:'2-digit' })}</Text>
                            <Text>{new Date(item.dt_txt).getHours()}:00</Text>
                            <Image style={styles.icon} source={{uri :`http://openweathermap.org/img/wn/${item.weather && item.weather[0].icon}@4x.png`}}/>
                                <Text>{(item.main.temp ).toFixed(1)}&deg;C</Text>
                                </View>
                                )}
                                />
            </View>
        </View>
    )
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
        margin: 20,
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    item: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom:10
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
    },
    flatList: {
        flex: 1,
        width: '100%'
    },
    nextContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    titleNextContainer: {
        padding: 10,
        textAlign: "center"
    }
});