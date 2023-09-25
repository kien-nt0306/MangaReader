//import { View } from "react-native-reanimated/lib/typescript/Animated"
import { SafeAreaView, Text, ScrollView, View, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native"
//import { ScrollView } from "react-native-gesture-handler"
import SearchIcon from '../../../assets/svg/search.svg'
import ExpandIcon from '../../../assets/svg/expand.svg'
import MangaItem from "../../components/MangaItem"
import MangaImage from '../../../assets/manga_pannel/madeinabyss.jpg'
import axios from "axios"

import Swiper from "react-native-swiper"
import { useEffect, useState } from "react"
import CONSTS from "../../Consts/const"
import SearchItem from "../../components/searchItem"
const ListElement = ({ navigation }) => {
    const [mangaList, setMangaList] = useState([{}, {}, {}, {}, {}, {}])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(CONSTS.MANGADEX_BASE_URL + '/manga' + '?limit=6')
                console.log(response.data.data)
                setMangaList(response.data.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()

    }, [])




    return (

        <View style={{ flex: 1 }}>
            <View style={{ height: 32, justifyContent: 'center', paddingLeft: 10 }}>
                <Text style={{ fontSize: 18, color: 'orange', fontWeight: '300' }}>
                    Newly updated
                </Text>
            </View>

            <ScrollView style={{ flexDirection: 'row', backgroundColor: '#E1D9D1' }} contentContainerStyle={{ alignItems: 'center', gap: 20, paddingHorizontal: 20 }} horizontal={true}>
                {
                    mangaList.map((item, index) => (
                        <TouchableOpacity onPress={() => { navigation.navigate('MangaInfoScreen', { mangaid: item.id }) }} key={item.id || index}>
                            <MangaItem id={item.id} name={
                                item.attributes?.title?.en
                            }></MangaItem>
                        </TouchableOpacity>

                    )
                    )
                }


                <View style={{ backgroundColor: 'white', borderRadius: 1000, marginHorizontal: 20 }}>
                    <ExpandIcon width={32} height={32} color={'grey'}>

                    </ExpandIcon>

                </View>

            </ScrollView>

        </View>
    )

}

const ListElementCreated = ({ navigation }) => {
    const [mangaList, setMangaList] = useState([{}, {}, {}, {}, {}, {}])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(CONSTS.MANGADEX_BASE_URL + '/manga' + '?limit=6&order[createdAt]=desc')
                console.log(response.data.data)
                setMangaList(response.data.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()

    }, [])




    return (

        <View style={{ flex: 1 }}>
            <View style={{ height: 32, justifyContent: 'center', paddingLeft: 10 }}>
                <Text style={{ fontSize: 18, color: 'orange', fontWeight: '300' }}>
                    New Manga
                </Text>
            </View>

            <ScrollView style={{ flexDirection: 'row', backgroundColor: '#E1D9D1' }} contentContainerStyle={{ alignItems: 'center', gap: 20, paddingHorizontal: 20 }} horizontal={true}>
                {
                    mangaList.map((item, index) => (
                        <TouchableOpacity onPress={() => { navigation.navigate('MangaInfoScreen', { mangaid: item.id }) }} key={item.id || index}>
                            <MangaItem id={item.id} name={
                                item.attributes?.title?.en
                            }></MangaItem>
                        </TouchableOpacity>

                    )
                    )
                }


                <View style={{ backgroundColor: 'white', borderRadius: 1000, marginHorizontal: 20 }}>
                    <ExpandIcon width={32} height={32} color={'grey'}>

                    </ExpandIcon>

                </View>

            </ScrollView>

        </View>
    )

}
const ListElementPopular = ({ navigation }) => {
    const [mangaList, setMangaList] = useState([{}, {}, {}, {}, {}, {}])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(CONSTS.MANGADEX_BASE_URL + '/manga' + '?limit=6&order[followedCount]=desc')
                console.log(response.data.data)
                setMangaList(response.data.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()

    }, [])




    return (

        <View style={{ flex: 1 }}>
            <View style={{ height: 32, justifyContent: 'center', paddingLeft: 10 }}>
                <Text style={{ fontSize: 18, color: 'orange', fontWeight: '300' }}>
                    Popular Manga
                </Text>
            </View>

            <ScrollView style={{ flexDirection: 'row', backgroundColor: '#E1D9D1' }} contentContainerStyle={{ alignItems: 'center', gap: 20, paddingHorizontal: 20 }} horizontal={true}>
                {
                    mangaList.map((item, index) => (
                        <TouchableOpacity onPress={() => { navigation.navigate('MangaInfoScreen', { mangaid: item.id }) }} key={item.id || index}>
                            <MangaItem id={item.id} name={
                                item.attributes?.title?.en
                            }></MangaItem>
                        </TouchableOpacity>

                    )
                    )
                }


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

const CarouselRNItem = ({ mangaid }) => {
    const [mangInfo, setMangaInfo] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(mangaid)
                console.log('--------------------------------------------------------')
                const response = await axios.get(CONSTS.CONSUMENET_BASE_URL + '/manga/mangadex/info/' + mangaid)


                setMangaInfo(response.data)

            } catch (err) {
                console.log(err)
            }
        }
        fetchData()

    }, [])
    return (
        <View style={styles.carouselItem}>
            <Image source={{ uri: mangInfo?.image }} style={{ width: '100%', height: '100%', borderRadius: 10 }}>

            </Image>
            <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100%', height: '30%', bottom: 0, backgroundColor: '#00000090', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, zIndex: 10 }}>
                <Text>
                    {
                        mangInfo?.title
                    }

                </Text>
            </View>

        </View>
    )
}

const CarouselScreen = () => {

    const [carouselItems, setCarouselItems] = useState([[]])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(CONSTS.MANGADEX_BASE_URL + '/manga' + '?limit=9&order[rating]=desc')
                console.log('--------------------------------------------------------')
                console.log(response.data.data)
                let bufer = [[], [], []]
                for (let i = 0; i < response.data.data.length; i++) {
                    bufer[Math.floor(i / 3)].push({
                        id: response.data.data[i].id,
                        text: response.data.data[i].attributes?.title.en
                    })
                }
                setCarouselItems(bufer)

            } catch (err) {
                console.log(err)
            }
        }
        fetchData()

    }, [])

    return (
        <View style={styles.container}>
            <View style={{ height: 40, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: '600', color: 'orange' }}>Recommended top manga</Text>

            </View>
            <Swiper
                loop={true} // Set to true if you want to loop through the elements
                showsPagination={false} // Hide pagination dots
                showsButtons={true}
                autoplay={true}
                 // Show previous and next buttons
            >
                {carouselItems.map(item => (
                    <View style={{ flexDirection: 'row', height: 160, gap: 20, paddingHorizontal: 10 }}>
                        {
                            item.map((i) => (
                                <CarouselRNItem mangaid={i.id}>

                                </CarouselRNItem>
                            ))
                        }
                    </View>


                ))}
            </Swiper>
        </View>
    );
};



const Feeds = ({ navigation }) => {
    const [searchResult, setSearchResult] = useState([])
    const [queryInput, setQueryInput] = useState('')
    const [focus, setFocus] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            if (queryInput.length >= 2) {
                try {

                    const response = await axios.get(CONSTS.MANGADEX_BASE_URL + '/manga?title=' + queryInput)
                    setSearchResult(response.data.data)

                } catch (err) {
                    console.log(err)
                }

            }


        }
        fetchData()

    }, [queryInput])
    useEffect(() => {
        console.log(searchResult)

    }, [searchResult])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView stickyHeaderIndices={[0]}>
                <View>
                    <View style={{ height: 80, backgroundColor: 'white', width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, flexDirection: 'row' }}>
                        <TextInput onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChangeText={(e) => setQueryInput(e)} cursorColor={'orange'} placeholder="Search your favorite manga, author, ..." placeholderTextColor={'gray'} style={{ paddingLeft: 5, color: 'orange', fontSize: 16, backgroundColor: '#E1D9D1', height: 50, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderWidth: 1, borderColor: 'orange', borderRightWidth: 0, flex: 1 }}>

                        </TextInput>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: 50, borderTopRightRadius: 10, borderBottomRightRadius: 10, borderColor: 'orange', borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, backgroundColor: '#E1D9D1' }}>
                            <SearchIcon width={28} height={28} fill='orange'> </SearchIcon>
                        </TouchableOpacity>

                    </View>
                    {
                        focus ? <View style={{ position: 'absolute', width: '100%', paddingHorizontal: 20, marginTop: 80, zIndex: 100 }}>
                            {
                                searchResult.map((item) => (
                                    <SearchItem mangaid={item.id} key={item.id} navigation={navigation}>

                                    </SearchItem>
                                ))

                            }
                        </View> : <></>

                    }

                </View>

                <View style={{ height: 240, backgroundColor: '#E1D9D1' }}>
                    <CarouselScreen></CarouselScreen>

                </View>
                <View style={{ height: 300, backgroundColor: '#E1D9D1' }}>
                    <ListElement navigation={navigation}>

                    </ListElement>



                </View>
                <View style={{ height: 300, backgroundColor: '#E1D9D1' }}>
                    <ListElementCreated navigation={navigation}>

                    </ListElementCreated>



                </View>
                <View style={{ height: 300, backgroundColor: '#E1D9D1' }}>
                    <ListElementPopular navigation={navigation}>

                    </ListElementPopular>



                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default Feeds