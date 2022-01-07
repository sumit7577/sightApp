import React from 'react'
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import JoinRoom from '../elements/room/joinRoom'

export default function Room() {
    return (

        <SafeAreaView styles={
            {
                height: "100%",
                margin: 10,
                marginTop: 40,
            }
        }>
            <View style={styles.container}>
                <JoinRoom />
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        height: "100%",
        backgroundColor: "#1c1c1c",
    },

});
