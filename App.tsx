/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './source/code/screens/WelcomeScreen';
import Home from './source/code/screens/Home';
import MangaInfoScreen from './source/code/screens/MangaInfoScreen';
import MangaReaderScreen from './source/code/screens/MangaReaderScreen';
import AccountScreen from './source/code/screens/AccountScreen';
import SearchScreen from './source/code/screens/SearchScreen';
import AuthorsScreen from './source/code/screens/AuthorsScreen';
import AuthorInfoScreen from './source/code/screens/AuthorInfoScreen';
import ChartScreen from './source/code/screens/ChartScreen';
import SaveScreen from './source/code/screens/SaveScreen/SaveScreen';
import DiscoveryScreen from './source/code/screens/DiscoveryScreen';
import FavoriteScreen from './source/code/screens/FavoriteScreen';
import FavoriteAuthorScreen from './source/code/screens/FavoriteAuthorScreen';
import FavoriteGenreScreen from './source/code/screens/FavoriteGenreScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChooseFavoriteGenreScreen from './source/code/screens/ChooseFavoriteGenreScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (

    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={
              {
                headerShown: false
              }
            } />
            <Stack.Screen name="Home" component={Home} options={{
              headerShown: false
            }} />
            <Stack.Screen name="MangaInfoScreen" component={MangaInfoScreen} />
            <Stack.Screen name="MangaReaderScreen" component={MangaReaderScreen} />
            <Stack.Screen name="AccountScreen" component={AccountScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="AuthorsScreen" component={AuthorsScreen} />
            <Stack.Screen name="AuthorInfoScreen" component={AuthorInfoScreen} />
            <Stack.Screen name="ChartScreen" component={ChartScreen} />
            <Stack.Screen name="SaveScreen" component={SaveScreen} />
            <Stack.Screen name="DiscoveryScreen" component={DiscoveryScreen} />
            <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
            <Stack.Screen name="FavoriteAuthorScreen" component={FavoriteAuthorScreen} />
            <Stack.Screen name="FavoriteGenreScreen" component={FavoriteGenreScreen} />
            <Stack.Screen name="ChooseFavoriteGenreScreen" component={ChooseFavoriteGenreScreen} options={{ headerShown: false }} />

          </Stack.Navigator>

        </NavigationContainer>
      </GestureHandlerRootView>

    </SafeAreaProvider>
  );
}


export default App;
