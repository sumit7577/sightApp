import React from 'react';
import Home from './screens/home';
import CreateRoom from './screens/createRoom';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Room from './screens/room';
import VideoCall from './screens/videoCall';
import 'react-native-gesture-handler';


const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <stack.Navigator initialRouteName="Home">
      <stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <stack.Screen name="CreateRoom" component={CreateRoom} options={{ headerShown: false }}/>
      <stack.Screen name="JoinRoom" component={Room} options={{ headerShown: false }}/>
      <stack.Screen name="StartCall" component={VideoCall} options={{headerShown:false}} />
    </stack.Navigator>
    </NavigationContainer>
  );
}

