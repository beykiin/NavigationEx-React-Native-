import React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

function First (props) {

    console.log(props)
    function navigateToPage(){
        props.navigation.navigate("SecondPage",{username: 'Yasin Beken'})
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Hello from First!
            </Text>
            <Button title="Go To Second" onPress={navigateToPage}/>
        </SafeAreaView>
    )
}       

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:40,
        fontWeight: "bold",
        color:'black'
    }
})

export default First