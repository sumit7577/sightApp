import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";

export default function Modal() {
    return (
        <View style={styles.conatainer}>
            <TouchableOpacity>
            <Entypo name="notification" size={30} color="#efefef" />
            </TouchableOpacity>
            <Text style={
                { color: "#efefef", fontSize: 20, fontWeight: "700" }
            }>
                Sight
            </Text>
            <TouchableOpacity>
            <Entypo name="new-message" size={30} color="#efefef" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    conatainer: {
        marginTop:20,
        padding:10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,

    }
})
