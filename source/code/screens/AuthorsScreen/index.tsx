import { Text, View } from "react-native"
import { SafeAreaView } from "react-navigation"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Authors from "../Authors"
import AuthorInfoScreen from "../AuthorInfoScreen"

const Stack = createNativeStackNavigator()
const AuthorsScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Navigator>
                <Stack.Screen name="Authors" component={Authors} />
                <Stack.Screen name="AuthorInfo" component={AuthorInfoScreen} />
            </Stack.Navigator>
        </SafeAreaView>
    )

}

export default AuthorsScreen