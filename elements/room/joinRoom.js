import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NewRoom() {
    const navigation = useNavigation();
    const [text, setText] = useState(() => {

    });
    const [id, setId] = useState(() => {

    });
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.cancel} onPress={() => {
                    navigation.goBack();
                }}>
                    Cancel
                </Text>
                <Text style={styles.texts}>
                    Join New Meeting
                </Text>
            </View>
            <View style={styles.body}>
                <TextInput
                    style={{ height: 50, borderColor: "#2470b9", borderWidth: 2, borderRadius: 14, padding: 10, backgroundColor: "white",color:"black" }}
                    placeholder="Your Name:"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                /><TextInput
                    style={{ height: 50, borderColor: "#2470b9", borderWidth: 2, borderRadius: 14, padding: 10, marginTop: 15,backgroundColor: "white", color: "black" }}
                    placeholder="Meeting ID:"
                    keyboardType='numeric'
                    onChangeText={id=>setId(id)}
                    defaultValue={id}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    console.log("Join new meeting");
                }}>
                    <Text style={{
                        color: "#efefef",
                        fontSize: 17,
                        fontWeight: "700",
                    }}>
                        Join New Meeting
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    texts: {
        color: "#efefef",
        fontSize: 18,
        fontWeight: "700",
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    body: {
        marginTop: 40,
        padding: 5,
    },
    footer: {
        marginTop: 30,

    },
    cancel: {
        color: "#2470b9",
        position: "absolute",
        fontSize: 16,
        fontWeight: "600",
        left: 3,
    },
    button: {
        width: "100%",
        height: 45,
        backgroundColor: "#00aaff",
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
    }
})