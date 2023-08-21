import { Image, Text, View, VirtualizedList } from "react-native"

const MangaItem = () => {
    return (
        <View style={{ width: 115, height: 240 }}>
            <View style={{ height: 160, borderWidth: 0.5, borderColor: 'grey' }}>
                <Image source={require('../../../assets/manga_pannel/Wotakoi.jpg')} style={{ width: "100%", height: '100%' }}>

                </Image>
            </View>
            <View style={{ gap: 5 }}>
                <Text style={{ color: 'orange', fontWeight: '600' }}>
                    Wotakoi love is hard for an otaku
                </Text>
                <Text style={{ color: 'orange', fontSize: 12 }}>
                    Chapter : 34
                </Text>
            </View>


        </View>
    )
}
export default MangaItem