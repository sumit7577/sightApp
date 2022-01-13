import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

const item = [
    {
        Id: 1,
        name: "video-camera",
        title: "New Meeting",
    },
    {
        Id: 2,
        name: "plus-square",
        title: "Join Room",
    }

]
function Menu(props) {
    const navigator = useNavigation();
    return (
        <View style={style.container}>
            <View style={style.buttons}>
                <TouchableOpacity style={style.custom} onPress={() => {
                    //props.navigator.navigate("CreateRoom");
                    navigator.navigate("StartCall");
                }}>
                    <FontAwesome name={item[0].name} size={23} color={"white"} />
                </TouchableOpacity>
                <Text style={style.texts}>
                    {item[0].title}
                </Text>
            </View>

            <View style={style.buttons}>
                <TouchableOpacity style={style.custom} onPress={() => {
                    props.navigator.navigate("JoinRoom");
                }}>
                    <FontAwesome name={item[1].name} size={23} color={"white"} />
                </TouchableOpacity>
                <Text style={style.texts}>
                    {item[1].title}
                </Text>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttons: {
        alignItems: "center",
    },
    custom: {
        height: 60,
        width: 150,
        margin: 15,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
    },
    texts: {
        color: "#efefef",
    }
})
export default Menu;
