import { SafeAreaView, Text, TouchableOpacity } from "react-native"
type Props = {
    navigation: any
}
const Favorite = (props: Props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => { props.navigation.navigate('FavoriteAuthor') }} style={{ backgroundColor: 'orange' }}>
                <Text>
                    Favorite Author
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { props.navigation.navigate('FavoriteGenre') }} style={{ backgroundColor: 'orange' }}>
                <Text>
                    Favorite Genre
                </Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}
export default Favorite