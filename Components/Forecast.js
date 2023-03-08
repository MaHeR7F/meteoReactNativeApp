
import {FlatList, Image, Text, View} from "react-native";


export default function Forecast({icon, forecast,styles}) {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.time}>
                    {new Date(item.dt * 1000).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                    })}
                </Text>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={icon} />
                </View>
                <Text>{item.weather[0].description}</Text>
                <Text style={styles.temp}>{Math.round(item.main.temp)}°C</Text>
            </View>
        );
    };

    return (
        <View style={styles.forecastContainer}>
            <FlatList
                style={styles.scrollView}
                data={forecast}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt.toString()}
                horizonta={true}
            />
        </View>
    );
};