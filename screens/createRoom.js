import React from 'react';
import { StyleSheet,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewRoom from '../elements/room/newRoom';

export default function CreateRoom({ navigation }) {
    return (
            <SafeAreaView styles={
                {
                    height: "100%",
                    margin: 10,
                    marginTop: 40,
                }
            }>
                <View style={styles.container}>
                <NewRoom navigator={navigation}/>
                </View>
            </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        width: "100%",
        height: "100%",
        padding: 10,
    },

});