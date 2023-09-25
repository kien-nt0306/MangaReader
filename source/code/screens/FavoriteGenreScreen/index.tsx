import { SafeAreaView, Text } from "react-native"
import DragAbleSortList from "../../components/DragAbleSortListGenre"

const FavoriteGenreScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ width: '100%', height: '100%' }}>
            <DragAbleSortList navigation={navigation}></DragAbleSortList>
        </SafeAreaView>
    )
}
export default FavoriteGenreScreen