import { StatusBar } from 'expo-status-bar';
import { FontAwesome5, Ionicons, Entypo, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import SchoolsScreen from '../screens/SchoolsScreen';
import ChatScreen from '../screens/ChatScreen';
import InstitutionScreen from '../screens/InstitutionScreen';
import CourseScreen from '../screens/CourseScreen';
import LessonScreen from '../screens/LessonScreen';
import TopicScreen from '../screens/TopicScreen';
import PresentationScreen from '../screens/PresentationScreen';
import { createStackNavigator } from '@react-navigation/stack';

export default function Navigation () {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}


const RootStack = createNativeStackNavigator();

function RootNavigator () {
  return (
    <RootStack.Navigator>
        <RootStack.Screen name='Root' component={BottomTabNavigator} options={{ headerShown: false }}/>
    </RootStack.Navigator>
  )
}




const HomeScreenStack = createStackNavigator();

function HomeScreenNavigator() {
  return (
    <HomeScreenStack.Navigator
      screenOptions={{headerStyle: {backgroundColor: '#2C7FA3', height: 80}, headerTitleStyle: {color: 'white', fontStyle: 'italic', fontWeight: 'bold'}, headerTintColor: 'white', headerTitleAlign: 'center', headerBackTitleVisible: 'true'}}>
      <HomeScreenStack.Screen
      name='HomeScreen'
      component={HomeScreen}
      options={{ headerTitle: 'Home' }}/>
      <HomeScreenStack.Screen
      name='CourseScreen'
      component={CourseScreen}
      options={{ headerTitle: 'Topics' }}/>
      <HomeScreenStack.Screen
      name='LessonScreen'
      component={LessonScreen}
      options={{ headerTitle: 'Lessons' }}/>
      <HomeScreenStack.Screen
      name='PresentationScreen'
      component={PresentationScreen}
      options={{ headerTitle: '' }}/>
    </HomeScreenStack.Navigator>
  )
}

const SchoolsScreenStack = createStackNavigator();

function SchoolsScreenNavigator() {
  return (
    <SchoolsScreenStack.Navigator
      screenOptions={{headerStyle: {backgroundColor: '#2C7FA3', height: 80}, headerTitleStyle: {color: 'white', fontStyle: 'italic', fontWeight: 'bold'}, headerTintColor: 'white', headerTitleAlign: 'center', headerBackTitleVisible: 'true'}}>
      <SchoolsScreenStack.Screen
      name='SchoolsScreen'
      component={SchoolsScreen}
      options={{ headerTitle: 'Schools' }}/>
    </SchoolsScreenStack.Navigator>
  )
}

const ChatScreenStack = createStackNavigator();

function ChatScreenNavigator() {
  return (
    <ChatScreenStack.Navigator
      screenOptions={{headerStyle: {backgroundColor: '#2C7FA3', height: 80}, headerTitleStyle: {color: 'white', fontStyle: 'italic', fontWeight: 'bold'}, headerTintColor: 'white', headerTitleAlign: 'center', headerBackTitleVisible: 'true',}}>
      <ChatScreenStack.Screen
      name='ChatScreen'
      component={ChatScreen}
      options={{ headerTitle: 'Chat' }}/>
    </ChatScreenStack.Navigator>
  )
}

const LibraryScreenStack = createStackNavigator();

function LibraryScreenNavigator() {
  return (
    <LibraryScreenStack.Navigator
      screenOptions={{headerStyle: {backgroundColor: '#2C7FA3', height: 80}, headerTitleStyle: {color: 'white', fontStyle: 'italic', fontWeight: 'bold'}, headerTintColor: 'white', headerTitleAlign: 'center', headerBackTitleVisible: 'true'}}>
      <LibraryScreenStack.Screen
      name='LibraryScreen'
      component={LibraryScreen}
      options={{ headerTitle: 'Your Library' }}/>
    </LibraryScreenStack.Navigator>
  )
}

const CourseScreenStack = createStackNavigator();

function CourseScreenNavigator() {
  return (
    <LibraryScreenStack.Navigator
      screenOptions={{headerStyle: {backgroundColor: '#2C7FA3', height: 80}, headerTitleStyle: {color: 'white', fontStyle: 'italic', fontWeight: 'bold'}, headerTintColor: 'white', headerTitleAlign: 'center', headerBackTitleVisible: 'true'}}>
      <LibraryScreenStack.Screen
      name='LibraryScreen'
      component={LibraryScreen}
      options={{ headerTitle: 'Your Library' }}/>
    </LibraryScreenStack.Navigator>
  )
}


const BottomTab = createBottomTabNavigator ();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator 
    screenOptions={{
      tabBarStyle: { backgroundColor: '#2C7FA3', height: 50, borderTopWidth: 0 },
      tabBarActiveTintColor: 'white', tabBarInactiveTintColor:'#133746',
      headerStyle: { backgroundColor: '#2C7FA3', height: 80 }, headerTitleStyle: { color: 'white', }, 
      headerTintColor: 'white', headerTitleAlign: 'center', headerBackTitleVisible: true,
      headerShown: false   
    }}>

      <BottomTab.Screen name='Home' component={HomeScreenNavigator} options = {{ title: 'Home', tabBarIcon: ({ color}) => <MaterialCommunityIcons name='home' size={35} color={color}/> }}/>

      <BottomTab.Screen name='Schools' component={SchoolsScreenNavigator} options = {{ title: 'Schools', tabBarIcon: ({color}) => <MaterialCommunityIcons name='school' color={color} size={35}/> }}/>

      <BottomTab.Screen name='Chat' component={ChatScreenNavigator} options = {{ title: 'Chat', tabBarIcon: ({ color}) => <MaterialCommunityIcons name='chat' color={color} size={35}/> }}/>


      <BottomTab.Screen name='Library' component={LibraryScreenNavigator} options = {{ title: ' Your Library', tabBarIcon: ({color}) => <MaterialCommunityIcons name='library' color={color} size={35}/> }}/>

    </BottomTab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF7FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
