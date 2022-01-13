import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput,Alert } from 'react-native';
import server from '../../socket/conn';


export default function NewRoom(props) {
    const [text, setText] = useState(() => {

    });
    const [id, setId] = useState(() => {
        return Math.floor((Math.random()*100000000)+1).toString();

    });
    const meetingId = "Meeting ID: "+id;

    const serverConnection = ()=>{
        console.log("executed");
        server.on("connect",(stream)=>{
            console.log("trying to join");
            console.log(server);
            server.on("error",()=>{
                Alert.alert("Something Error","Please Connect to a wifi or open your internet connection")
            });
            server.emit("CreateRoom",{name:text,meetingId:id});
            stream.on("roomJoined");
        })
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.cancel} onPress={() => {
                    server.disconnect();
                    props.navigator.goBack();
                }}>
                    Cancel
                </Text>
                <Text style={styles.texts}>
                    Create New Meeting
                </Text>
            </View>
            <View style={styles.body}>
                <TextInput
                    style={{ height: 50, borderColor: "#2470b9", borderWidth: 2, borderRadius: 14, padding: 10, backgroundColor: "white",color:"black", }}
                    placeholder="Your Name:"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                /><TextInput
                    style={{ height: 50, borderColor: "#2470b9", borderWidth: 2, borderRadius: 14, padding: 10, marginTop: 15, color: "white" }}
                    placeholder="Meeting ID:"
                    editable={false}
                    defaultValue={meetingId}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    if(text === undefined){
                        Alert.alert("Error","Please Input Your Username");
                    }
                    else{
                        serverConnection();
                    }
                }}>
                    <Text style={{
                        color: "#efefef",
                        fontSize: 17,
                        fontWeight: "700",
                    }}>
                        Start New Meeting
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