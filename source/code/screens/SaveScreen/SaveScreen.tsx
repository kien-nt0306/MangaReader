import { SafeAreaView, Text, View } from "react-native"
import DragToSortTabs from "../../components/DragToSortTabsSaved"

const SaveScreen = () => {
    return (
        <SafeAreaView style={{ width: '100%', height: '100%' }}>
            <View style={{ width: '100%', height: 80, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: '900' }}>
                    Library
                </Text>

            </View>
            <DragToSortTabs></DragToSortTabs>
        </SafeAreaView>
    )
}
export default SaveScreen