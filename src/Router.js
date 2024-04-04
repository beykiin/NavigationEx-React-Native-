import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import First from "./pages/First";
import Second from "./pages/Second";

const Stack = createNativeStackNavigator();


function App () {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="FirstPage" component={First}/>
                <Stack.Screen name="SecondPage" component={Second}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App