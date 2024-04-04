import React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

function Second (props) {
    console.log(props)

    const user = props.route.params.username

    function backToFirst(){
        props.navigation.goBack();
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Hello from Second!
            </Text>
            
            <Button title="Go Back" onPress={backToFirst}/>
            <Text style={styles.text}>
                {user}
            </Text>
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

export default Second