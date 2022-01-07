import React from 'react'
import { StyleSheet, View,SafeAreaView } from 'react-native';
import Modal from './modal';
import Search from '../elements/search';
import Menu from '../elements/room';
import Recent from '../elements/recent';


export default function Home({ navigation }) {
    return (

        <SafeAreaView styles={
            {
                height: "100%",
                margin: 10,
            }
        }>
            <View style={styles.container}>
                <Modal />
                <Search />
                <Menu navigator={navigation} />
                <Recent />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        width: "100%",
        padding: 5,
        height: "100%",
    },

});