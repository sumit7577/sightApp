import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Camera } from 'expo-camera';
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Iconicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    RTCPeerConnection,
    RTCIceCandidate,
    RTCSessionDescription,
    RTCView,
    MediaStream,
    MediaStreamTrack,
    mediaDevices,
    registerGlobals
} from 'react-native-webrtc';

const servers = {
    iceServers: [
        {
            urls: [
                "stun:stun1.l.google.com:19302",
                "stun:stun2.l.google.com:19302",
            ],
        },
    ],
    iceCandidatePoolSize: 10,
};

const pc = new RTCPeerConnection(servers);

const rtc = () => {
    const setupSources = async () => {
        const localStream = await mediaDevices.getUserMedia({
            video: true,
            audio: true,
        });
        localStream.getTracks().forEach((track) => {
            pc.addStream(track, localStream);
        });
        const remoteStream = new MediaStream();

        pc.ontrack = (event) => {
            event.streams[0].getTracks().forEach((track) => {
                remoteStream.addTrack(track);
            });
        };
        const offerDescription = await pc.createOffer();
        await pc.setLocalDescription(offerDescription);
        const offer = {
            sdp: offerDescription.sdp,
            type: offerDescription.type,
        };

    }
    setupSources();

}

export default function VideoCall() {
    rtc();
    const heigth = Dimensions.get("window").height;
    const width = Dimensions.get("screen").width;
    const cameraHeight = (heigth / 100) * 80;
    const [hasPermission, setPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setPermission(status === 'granted');
        })();
    }, []);
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', backgroundColor: "black" }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => {
                        if (type === "front") {
                            setType("back");
                        }
                        else {
                            setType("front");
                        }
                    }}>
                        <Iconicons name="camera-reverse" size={30} color="#efefef" />
                    </TouchableOpacity>
                    <Text style={{ color: "#efefef", fontSize: 17, fontWeight: "700", }}>
                        Sight
                    </Text>
                    <TouchableOpacity style={{ backgroundColor: "red", borderRadius: 5, height: 25 }}>
                        <Text style={{ alignItems: "center", fontSize: 12, fontWeight: "700", color: "#efefef", padding: 3 }}>
                            Leave Meeting
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.body}>
                    <Camera style={{ width: "100%", height: cameraHeight }} type={type}>

                    </Camera>

                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.fontsBottom}>
                        <Octicons name="mute" size={30} color="#efefef" />
                        <Text style={styles.textFonts}>Unmute</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.fontsBottom}>
                        <Feather name="video" size={30} color="#efefef" />
                        <Text style={styles.textFonts}>Stop Video</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.fontsBottom}>
                        <MaterialIcons name="people" size={30} color="#efefef" />
                        <Text style={styles.textFonts}>Participants</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.fontsBottom}>
                        <Feather name="more-vertical" size={30} color="#efefef" />
                        <Text style={styles.textFonts}>More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        marginTop: 5,
    },
    texts: {
        color: "white"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
    },
    body: {
        marginTop: 50,
        justifyContent: "center"

    },
    footer: {
        borderWidth: 0.5,
        borderTopColor: "grey",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "black",
        height: 53,
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    fontsBottom: {
        marginLeft: 13,
        marginRight: 13,
        alignItems: "center",
    },
    textFonts: {
        fontSize: 10,
        color: "#efefef",
    }

})
