import { Text, View } from "react-native"
import { SafeAreaView } from "react-navigation"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from "../AccountScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import ChartScreen from "../ChartScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from "../FavoriteScreen";
import AuthorsScreen from "../AuthorsScreen";
import DiscoveryScreen from "../DiscoveryScreen";
import FeedScreen from "../FeedScreen";

const Drawer = createDrawerNavigator();
const HomeScreen = () => {


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Drawer.Navigator screenOptions={{
                drawerStyle: {
                    backgroundColor: 'white'
                },
                drawerActiveTintColor: 'orange',
                drawerInactiveTintColor: 'orange',
                headerTintColor: 'white'

            }} >
                <Drawer.Screen name='Feed' component={FeedScreen} options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white'
                    }

                }} />
                <Drawer.Screen name="FavoriteScreen" component={FavoriteScreen} options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }
                }} />
                <Drawer.Screen name="Authors" component={AuthorsScreen} options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }
                }} />
                <Drawer.Screen name="Discorvery" component={DiscoveryScreen} options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }
                }} />
            </Drawer.Navigator>



        </SafeAreaView>
    )
}

export default HomeScreen