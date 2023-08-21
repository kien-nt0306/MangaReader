import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaView, Text, TouchableOpacity } from "react-native"
import FavoriteAuthorScreen from "../FavoriteAuthorScreen"
import FavoriteGenreScreen from "../FavoriteGenreScreen"
import Favorite from "../Favorite"

const Stack = createNativeStackNavigator()

const FavoriteScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Navigator>
                <Stack.Screen name='Favorite' component={Favorite} />
                <Stack.Screen name="FavoriteAuthor" component={FavoriteAuthorScreen} />
                <Stack.Screen name="FavoriteGenre" component={FavoriteGenreScreen} />
            </Stack.Navigator>

        </SafeAreaView>
    )
}
export default FavoriteScreen