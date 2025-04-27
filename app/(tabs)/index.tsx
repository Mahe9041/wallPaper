import { View, Text, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import liked from '../Like';
import saved from '../Save';
import suggestion from '../Suggestion';

const Tab = createMaterialTopTabNavigator();

export default function forYour() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator style={{ flex: 1 }}>
                <Tab.Screen name="liked" component={liked} />
                <Tab.Screen name="saved" component={saved} />
                <Tab.Screen name="suggestion" component={suggestion} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}