import 'react-native-gesture-handler';
 
import * as React from 'react';
 
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
 
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
 
import Home from './src/bottomtabs/Home';
import Camera from './src/bottomtabs/Camera';
import Location from './src/bottomtabs/Location';
import Profile from './src/bottomtabs/Profile';
import Help from './src/bottomtabs/Help';
 
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
 
function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#444' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}/>
        
      </Stack.Navigator>
  );
}
 
function SelfieStack() {
  return (
    <Stack.Navigator
      initialRouteName="Camera"
      screenOptions={{
        headerStyle: { backgroundColor: '#138BDB' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Settings"
        component={Camera}
        options={{ title: 'Selfie' }}/>
      
    </Stack.Navigator>
  );
}
function LocationStack() {
  return (
    <Stack.Navigator
      initialRouteName="Location"
      screenOptions={{
        headerStyle: { backgroundColor: '#5DADE2' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Location"
        component={Location}
        options={{ title: 'Location' }}/>
      
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#C0392B' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile' }}/>
      
    </Stack.Navigator>
  );
}
function HelpStack() {
  return (
    <Stack.Navigator
      initialRouteName="Help"
      screenOptions={{
        headerStyle: { backgroundColor: '#376481' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Help"
        component={Help}
        options={{ title: 'Help' }}/>
      
    </Stack.Navigator>
  );
}
 
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  />
        
           
          <Tab.Screen
          name="SelfieStack"
          component={SelfieStack}
          options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="camera"
                color={color}
                size={size}
              />
            ),
          }} />
          <Tab.Screen
          name="LocationStack"
          component={LocationStack}
          options={{
            tabBarLabel: 'Location',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="map-marker-circle"
                color={color}
                size={size}
              />
            ),
          }} />
          <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={size}
              />
            ),
          }} />
          <Tab.Screen
          name="HelpStack"
          component={HelpStack}
          options={{
            tabBarLabel: 'Help',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="shield"
                color={color}
                size={size}
              />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
