import { Text, View } from "react-native"

const SettingScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'orange', padding: 10, gap: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, height: 50, backgroundColor: 'white', borderRadius: 5 }}>
                <Text style={{ color: 'black' }}>
                    Language

                </Text>
                <Text style={{ color: 'black' }}>
                    English
                </Text>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, height: 50, backgroundColor: 'white', borderRadius: 5 }}>
                <Text style={{ color: 'black' }}>
                    About us
                </Text>
                <Text style={{ color: 'black' }}>
                    Bla bla bla bla
                </Text>
            </View>

        </View>
    )
}
export default SettingScreen