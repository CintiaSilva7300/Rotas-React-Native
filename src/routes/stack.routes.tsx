import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreanA } from '../screens/Home/ScreanA';
import { ScreanB } from '../screens/Home/ScreanB';

const { Screen,Navigator } = createNativeStackNavigator ();

export function StackRoutes() {
    return (
       <Navigator>
            <Screen 
                name="screanA"
                component={ScreanA}
                options={{
                    title:'Tela A',
                    headerTitleAlign:"center"
                }}
            />

            <Screen 
                name="screanB"
                component={ScreanB}
                options={{
                    title:'Tela B',
                    headerTitleAlign:"center"
                    
            }}
            />
        </Navigator>
    )
}