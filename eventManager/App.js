import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ManageScreen from './screens/ManageScreen';
import ReserveScreen from './screens/ReserveScreen';
import StatusScreen from './screens/StatusScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Gerenciar" component={ManageScreen} />
    </Tab.Navigator>
);

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={TabNavigator} />
                <Stack.Screen name="Reserve" component={ReserveScreen} />
                <Stack.Screen name="Status" component={StatusScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;