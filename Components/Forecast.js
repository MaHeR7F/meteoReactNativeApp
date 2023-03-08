import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

export default function Forecast({ icon, forecast, styles }) {
    const renderItem = ({ item }) => {
        const date = new Date(item.dt * 1000);
        const dayOfWeek = date.toLocaleDateString('fr-FR', { weekday: 'short' });
        const time = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });

        return (
            <View style={ styles.item }>
                <Text style={ styles.time }>{ `${dayOfWeek} ${time}` }</Text>
                <View style={ styles.iconContainer }>
                    <Image style={ styles.icon } source={ icon } />
                </View>
                <Text>{ item.weather[0].description }</Text>
                <Text style={ styles.temp }>{ Math.round(item.main.temp) }°C</Text>
            </View>
        );
    };

    return (
        <View style={ styles.nextContainer }>
            <View style={ styles.titleNextContainer }>
                <Text>Et la météo des jours suivants:</Text>
            </View>
            <FlatList
                data={ forecast }
                renderItem={ renderItem }
                keyExtractor={ (item, index) => index.toString() }
                //horizontal={ true }
                style={styles.flatList}/>
        </View>
    );
}