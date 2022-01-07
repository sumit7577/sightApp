import React from 'react'
import { View,Text,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fontisto from "react-native-vector-icons/Fontisto";

function Search() {
    return (
        <View style={style.container}>
            <TouchableOpacity>
            <Fontisto name="search" size={20} color={"#858585"} padding={10} style={
                {
                    marginLeft:8,
                }
            } />
            </TouchableOpacity>
            <Text style={style.searchbar}>
                Search
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#333333",
        borderRadius:10,
        margin:5,
        
    },
    searchbar:{
        padding:10,
        fontSize:15,
        fontWeight:"600",
        color:"#efefef",
    }
})
export default Search;