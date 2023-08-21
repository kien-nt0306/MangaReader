import { Image, SafeAreaView, Text, View } from "react-native"
import HeartIcon from '../../../assets/svg/heart.svg'
import SaveIcon from '../../../assets/svg/bookmark.svg'
import { ScrollView } from "react-native"
import { withDecay } from "react-native-reanimated"
import { TouchableOpacity } from "react-native"
import LinearGradient from "react-native-linear-gradient"
const MangaInfoScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ width: '100%', aspectRatio: 12.8 / 18.2, backgroundColor: 'blue' }}>
                <Image source={require('../../../assets/manga_pannel/Wotakoi.jpg')} style={{ width: '100%', height: '100%' }} resizeMode="stretch"></Image>

            </View>
            <View style={{ height: '55%', width: '100%', backgroundColor: '#E1D9D1', bottom: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute', zIndex: 2 }}>
                <View style={{ backgroundColor: '#E1D9D1', borderTopLeftRadius: 20, borderTopRightRadius: 20, height: 40, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: 'orange' }}>
                        Romance
                    </Text>
                    <View>
                        <Text style={{ color: 'orange' }}>
                            12k views


                        </Text>

                    </View>

                </View>
                <ScrollView contentContainerStyle={{ backgroundColor: '#E1D9D1' }}>
                    <View style={{ height: 100, backgroundColor: '#E1D9D1', flexDirection: 'row', marginBottom: 20 }}>

                        <View style={{ flex: 8, backgroundColor: '#E1D9D1', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10 }}>
                            <Text style={{ color: 'orange', fontSize: 30, fontWeight: '600' }}>
                                Wotakoi: Love is hard with Otaku
                            </Text>
                            <Text style={{ color: 'orange', fontSize: 12, fontStyle: 'italic' }}>
                                Chapter : 34 | by Omaza Kanzaki
                            </Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <HeartIcon width={28} height={28} fill={'red'}></HeartIcon>

                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#E1D9D1', paddingHorizontal: 10, paddingBottom: 60 }}>
                        <Text style={{ color: 'orange' }}>
                            Having slept through all four of her alarms, the energetic Narumi Momose finds herself running late for her first day of work at a new office. As she races to catch her train, she makes a promise to herself that none of her coworkers will find out about her dark secret: that she is an otaku and a fujoshi. Her plan goes instantly awry, though, when she runs into Hirotaka Nifuji, an old friend from middle school. Although she tries to keep her secret by inviting him out for drinks after work, her cover is blown when he casually asks her whether or not she will be attending the upcoming Summer Comiket. Luckily for her, the only witnesses—Hanako Koyanagi and Tarou Kabakura—are otaku as well.

                            Later that night, the pair go out for drinks so that they can catch up after all the years apart. After Narumi complains about her previous boyfriend breaking up with her because he refused to date a fujoshi, Hirotaka suggests that she try dating a fellow otaku, specifically himself. He makes a solemn promise to always be there for her, to support her, and to help her farm for rare drops in Monster Hunter. Blown away by the proposal, Narumi agrees immediately. Thus the two otaku start dating, and their adorably awkward romance begins.
                        </Text>

                    </View>
                </ScrollView>
                <LinearGradient colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']} style={{ height: 60, width: '100%', position: 'absolute', gap: 20, bottom: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: 40, width: 40, borderRadius: 10000, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFD580' }} >
                        <SaveIcon width={32} height={32} fill={'orange'}></SaveIcon>
                    </View>
                    <TouchableOpacity onPress={() =>  { navigation.navigate('MangaReaderScreen') } } style={{ width: 180, height: 40, borderRadius: 10, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>

                        <Text style={{ color: 'white', fontWeight: "800" }}>
                            Read this manga
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </SafeAreaView>
    )
}
export default MangaInfoScreen