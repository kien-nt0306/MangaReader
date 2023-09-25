import { SafeAreaView, Text } from "react-native"
import DragToSortList from "../../components/DragToSortList"
import DragAbleSortList from "../../components/DragAbleSortList"


const FavoriteAuthorScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ width: '100%', height: '100%' }}>
            <DragAbleSortList navigation={navigation}></DragAbleSortList>
        </SafeAreaView>
    )
}
export default FavoriteAuthorScreen