import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";


const names = [
    {
        "name": "Sumit Kumar",
        "profie_picture": "user",
        "id": 1,
    },
    {
        "name": "Harsh Kumar",
        "profie_picture": "user",
        "id": 2,
    },
]
export default function Recent() {
    return (
        <View style={styles.container}>
            <Text style={{ color: "#efefef", fontSize: 20, fontWeight: "700", margin: 10, marginTop: 40 }}>
                Recent Meetings
            </Text>
            {names.map((value) => {
                return( 
                <View style={styles.recents} key={value.id}>
                    <TouchableOpacity style={styles.custom}>
                        <FontAwesome name={value.profie_picture} size={29} color={"white"} />
                    </TouchableOpacity>
                    <Text style={styles.texts}>
                        {value.name}
                    </Text>
                </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight:"40%",

    },

    texts: {
        marginLeft: 10,
        color: "#efefef",
        fontSize: 14,
        fontWeight: "600",
    },
    recents: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",

    },
    custom: {
        height: 50,
        width: 50,
        marginLeft: 10,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        borderWidth:2,
        borderColor: "thistle",
    },


});
