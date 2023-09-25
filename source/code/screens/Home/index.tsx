import { Text, View } from "react-native"
import { SafeAreaView } from "react-navigation"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from "../AccountScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import ChartScreen from "../ChartScreen";
import HomeScreen from "../HomeScreen";
import SaveScreen from "../SaveScreen/SaveScreen";
import HomeIcon from '../../../assets/svg/home.svg';
import ChartIcon from '../../../assets/svg/chart.svg';
import SaveIcon from '../../../assets/svg/bookmark.svg';
import AccountIcon from '../../../assets/svg/account.svg';
import LoginScreen from "../LoginScreen";
import store from "../../redux/stores";

const Home = () => {

    const Tab = createBottomTabNavigator();
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: 'orange',
                tabBarStyle: {
                    height: 60
                },
                tabBarShowLabel: false,

            }}>
                <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
                    headerShown: false, tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
                        <HomeIcon width={32} height={32} fill={color} />
                    ), tabBarIconStyle: { width: 40, height: 40 }, tabBarLabelStyle: {

                    }
                }} />
                <Tab.Screen name="ChartScreen" component={ChartScreen} options={{
                    headerShown: false, tabBarLabel: 'Chart', tabBarIcon: ({ color }) => (
                        <ChartIcon width={32} height={32} fill={color} />
                    ), tabBarIconStyle: { width: 40, height: 40 }
                }} />

                <Tab.Screen name="SaveScreen" component={SaveScreen} options={{
                    headerShown: false, tabBarLabel: 'Saved', tabBarIcon: ({ color }) => (
                        <SaveIcon width={32} height={32} fill={color} />
                    ), tabBarIconStyle: { width: 40, height: 40 }
                }} />
                <Tab.Screen name="AccountScreen" component={AccountScreen} options={{
                    headerShown: false, tabBarLabel: 'Account', tabBarIcon: ({ color }) => (
                        <AccountIcon width={32} height={32} fill={color} />
                    ), tabBarIconStyle: { width: 40, height: 40 }
                }} />
            </Tab.Navigator>


        </SafeAreaView>
    )
}

export default Home