import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native'

export function ScreanA() {
const navigation = useNavigation();
    
    function openScreen() {
    navigation.navigate('screanB')
}

    return (
        <View style={{flex:1, backgroundColor:'red', justifyContent:"center"}}>
            <Button title="ir para tela B"
            onPress={openScreen}
            />
        </View>
    )
}