import { SafeAreaView } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SearchScreen from "../SearchScreen"
import MangaInfoScreen from "../MangaInfoScreen"
import MangaReaderScreen from "../MangaReaderScreen"
import Feeds from "../Feeds"
const Stack = createNativeStackNavigator()
const FeedScreen = () => {

    return (

        <Stack.Navigator>
            <Stack.Screen name="Feeds" component={Feeds} options={{ headerShown: false }} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MangaInfoScreen" component={MangaInfoScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MangaReaderScreen" component={MangaReaderScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default FeedScreen 