import { center } from "@shopify/react-native-skia"
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import Chrome from "../../components/DragToSortTabs/Chrome"

type Props = {
    navigation: any
}
const Favorite = (props: Props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', height: 200, marginTop: 40, marginBottom: 40 }}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('FavoriteAuthor') }} style={{ backgroundColor: 'teal', flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 10 }}>
                    <Text style={{ fontSize: 28, fontWeight: '800' }}>
                        Favorite Author
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.navigation.navigate('FavoriteGenre') }} style={{ backgroundColor: 'orange', flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 10 }}>
                    <Text style={{ fontSize: 28, fontWeight: '800' }}>
                        Favorite Genre
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <View>
                    <Text style={{ color: 'black', marginLeft: 10, marginVertical: 10, fontSize: 20 }}>
                        Favorite Manga
                    </Text>
                </View>
                <View style={{ backgroundColor: 'green', flex: 1 }}>
                    <Chrome>

                    </Chrome>


                </View>

            </View>


        </SafeAreaView>
    )
}
export default Favorite