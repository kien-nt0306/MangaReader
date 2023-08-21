//import { View } from "react-native-reanimated/lib/typescript/Animated"
import { SafeAreaView, Text, ScrollView, View, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native"
//import { ScrollView } from "react-native-gesture-handler"
import SearchIcon from '../../../assets/svg/search.svg'
import ExpandIcon from '../../../assets/svg/expand.svg'
import MangaItem from "../../components/MangaItem"
import MangaImage from '../../../assets/manga_pannel/madeinabyss.jpg'
import Swiper from "react-native-swiper"
const ListElement = ({ navigation }) => {
    return (

        <View style={{ flex: 1 }}>
            <View style={{ height: 32, justifyContent: 'center', paddingLeft: 10 }}>
                <Text style={{ fontSize: 18, color: 'orange', fontWeight: '300' }}>
                    Hot manga right now
                </Text>
            </View>

            <ScrollView style={{ flexDirection: 'row', backgroundColor: '#E1D9D1' }} contentContainerStyle={{ alignItems: 'center', gap: 20, paddingHorizontal: 20 }} horizontal={true}>
                <TouchableOpacity onPress={() => { navigation.navigate('MangaInfoScreen') }}>
                    <MangaItem></MangaItem>
                </TouchableOpacity>
                <MangaItem></MangaItem>
                <MangaItem></MangaItem>
                <MangaItem></MangaItem>
                <MangaItem></MangaItem>
                <MangaItem></MangaItem>
                <MangaItem></MangaItem>
                <View style={{ backgroundColor: 'white', borderRadius: 1000, marginHorizontal: 20 }}>
                    <ExpandIcon width={32} height={32} color={'grey'}>

                    </ExpandIcon>

                </View>

            </ScrollView>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        width: '80%',
        borderRadius: 10,
    },
    itemText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

const CarouselScreen = () => {
    const carouselItems = [
        [
            { id: 1, text: 'Element 1' },
            { id: 2, text: 'Element 2' },
            { id: 3, text: 'Element 3' },


        ],
        [
            { id: 4, text: 'Element 1' },
            { id: 5, text: 'Element 2' },
            { id: 6, text: 'Element 3' },


        ],
        [
            { id: 7, text: 'Element 1' },
            { id: 8, text: 'Element 2' },
            { id: 9, text: 'Element 3' },


        ],
        // Add more elements as needed
    ];

    return (
        <View style={styles.container}>
            <View style={{ height: 40, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: '600', color: 'orange' }}>Recommended top manga</Text>

            </View>
            <Swiper
                loop={false} // Set to true if you want to loop through the elements
                showsPagination={false} // Hide pagination dots
                showsButtons={true} // Show previous and next buttons
            >
                {carouselItems.map(item => (
                    <View style={{ flexDirection: 'row', height: 160, gap: 20, paddingHorizontal: 10 }}>
                        {
                            item.map(() => (
                                <View style={styles.carouselItem}>
                                    <Image source={require('../../../assets/manga_pannel/madeinabyss.jpg')} style={{ width: '100%', height: '100%', borderRadius: 10 }}>

                                    </Image>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100%', height: '30%', bottom: 0, backgroundColor: '#00000090', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, zIndex: 10 }}>
                                        <Text>
                                            Made in abyss
                                        </Text>
                                    </View>

                                </View>
                            ))
                        }
                    </View>


                ))}
            </Swiper>
        </View>
    );
};



const Feeds = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView stickyHeaderIndices={[0]}>
                <View>
                    <View style={{ height: 80, backgroundColor: 'white', width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, flexDirection: 'row' }}>
                        <TextInput cursorColor={'orange'} placeholder="Search your favorite manga, author, ..." placeholderTextColor={'gray'} style={{ paddingLeft: 5, color: 'orange', fontSize: 16, backgroundColor: '#E1D9D1', height: 50, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderWidth: 1, borderColor: 'orange', borderRightWidth: 0, flex: 1 }}>

                        </TextInput>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: 50, borderTopRightRadius: 10, borderBottomRightRadius: 10, borderColor: 'orange', borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, backgroundColor: '#E1D9D1' }}>
                            <SearchIcon width={28} height={28} fill='orange'> </SearchIcon>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{ height: 240, backgroundColor: '#E1D9D1' }}>
                    <CarouselScreen></CarouselScreen>

                </View>
                <View style={{ height: 300, backgroundColor: '#E1D9D1' }}>
                    <ListElement navigation={navigation}>

                    </ListElement>



                </View>
                <View style={{ height: 300, backgroundColor: '#E1D9D1' }}>
                    <ListElement>

                    </ListElement>



                </View>
                <View style={{ height: 300, backgroundColor: '#E1D9D1' }}>
                    <ListElement>

                    </ListElement>



                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default Feeds