import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MangaItem from "../../components/MangaItem";
import axios from "axios";
import CONSTS from "../../Consts/const";
import { storage } from "../../mmkv";

type Status = 'ongoing' | 'completed' | 'hiatus' | 'cancelled'
type Country = 'ja' | 'ko' | 'en' | 'ch'

const DiscoveryScreen = () => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'blue',
            padding: 16,
        },
        dropdown: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 8,
            paddingHorizontal: 8,
        },
        icon: {
            marginRight: 5,
        },
        label: {
            position: 'absolute',
            backgroundColor: 'white',
            left: 22,
            top: 8,
            zIndex: 999,
            paddingHorizontal: 8,
            fontSize: 14,
        },
        placeholderStyle: {
            fontSize: 16,
            color: 'grey'
        },
        selectedTextStyle: {
            fontSize: 16,
            color: 'grey'
        },
        iconStyle: {
            width: 20,
            height: 20,
        },
        inputSearchStyle: {
            height: 40,
            fontSize: 16,
        },
    });
    const [OrderValue, setOrderValue] = useState('updateAt');
    const [isLiked, setIsLiked] = useState(false)
    const [genreValue, setGenreValue] = useState(null)
    const [isFocus, setIsFocus] = useState(false);
    const [status, setStatus] = useState<Status>('ongoing')
    const [country, setCountry] = useState<Country>('ja')
    const [mangalist, setMangalist] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const data = [
        { label: 'Title', value: 'title' },
        { label: 'Year', value: 'year' },
        { label: 'Upload Date', value: 'createdAt' },
        { label: 'Update Date', value: 'updatedAt' },
        { label: 'Latest Chapter', value: 'latestUploadedChapter' },
        { label: 'Popular', value: 'followedCount' },

    ];
    const [genreList, setGenreList] = useState([])

    useEffect(() => {
        const fetchGenreList = async () => {
            try {
                const response = await axios.get(CONSTS.MANGADEX_BASE_URL + '/manga/tag')
                const genrelistTemp = []
                for (let i = 0; i < response.data.data.length; i++) {

                    genrelistTemp.push({
                        label: response.data.data[i].attributes.name.en,
                        value: response.data.data[i].id
                    })

                }
                setGenreList(genrelistTemp)

            }
            catch (err) {
                console.log(err)

            }
        }
        fetchGenreList()

    }, [])
    useEffect(() => {
        const fetchMangas = async () => {
            try {
                const url = CONSTS.MANGADEX_BASE_URL + '/manga' + `?status[]=${status}&includedTags[]=${genreValue}&originalLanguage[]=${country}&order[${OrderValue}]=desc`
                console.log(url)
                const response = await axios.get(url)
                setMangalist(response.data.data)
                setCurrentPage(0)



            } catch (err) {
                console.log(err)
            }
        }
        fetchMangas()

    }, [genreValue, OrderValue])
    const fetchMangas = async (pagenumber: number) => {
        try {
            const url = CONSTS.MANGADEX_BASE_URL + '/manga' + `?status[]=${status}&includedTags[]=${genreValue}&originalLanguage[]=${country}&order[${OrderValue}]=desc&limit=10&offset=${10 * pagenumber}`
            console.log(url)
            const response = await axios.get(url)

            setMangalist(mangalist.concat(response.data.data))



        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        console.log(genreList)

    }, [genreList])
    useEffect(() => {
        if (!storage.contains(CONSTS.GENRE_LIKE_KEY)) {
            setIsLiked(false)
        }
        else {
            const currentLiked = JSON.parse(storage.getString(CONSTS.GENRE_LIKE_KEY))
            if (currentLiked.includes(getGenreName(genreValue)?.label)) {
                setIsLiked(true)

            } else {
                setIsLiked(false)
            }
        }

    }, [])
    const handleChangeStatus = (status: Status) => {
        setStatus(status)
    }
    const handleChangeCountry = (country: Country) => {
        setCountry(country)
    }
    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };
    const getGenreName = (inputId) => {
        const result = genreList.filter((item) => item.value === inputId);
        return (result[0])
    }
    const handleAddToFavorite = () => {
        if (!storage.contains(CONSTS.GENRE_LIKE_KEY)) {
            const temp = []
            temp.push(getGenreName(genreValue)?.label)
            storage.set(CONSTS.GENRE_LIKE_KEY, JSON.stringify(temp))
            setIsLiked(true)
        }
        else {
            const currentLiked = JSON.parse(storage.getString(CONSTS.GENRE_LIKE_KEY))
            if (currentLiked.indexOf(getGenreName(genreValue)?.label) !== -1) {
                // hande if in array

                const newArray = currentLiked.filter((item: string) => item !== getGenreName(genreValue)?.label);
                storage.set(CONSTS.GENRE_LIKE_KEY, JSON.stringify(newArray))
                setIsLiked(false)

            } else {
                // handle if not in array
                currentLiked.push(getGenreName(genreValue)?.label)
                storage.set(CONSTS.GENRE_LIKE_KEY, JSON.stringify(currentLiked))
                setIsLiked(true)

            }
        }

    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ backgroundColor: "#3b3b3b", flexDirection: 'row', marginHorizontal: 10, marginVertical: 10, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>
                        {
                            getGenreName(genreValue)?.label
                        }

                    </Text>
                    <TouchableOpacity onPress={handleAddToFavorite} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {
                            isLiked ?
                                <Text>Added to favorite</Text> : <Text>Add to favorite</Text>

                        }

                    </TouchableOpacity>


                </View>
                <View style={{ backgroundColor: 'black', marginHorizontal: 10, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10 }}>
                    <View style={{ width: '100%', height: 50, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>
                            Manga Genre
                        </Text>
                        <View style={{ width: 200 }}>
                            <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={genreList}
                                maxHeight={300}
                                itemContainerStyle={{ height: 40 }}
                                itemTextStyle={{ color: 'red' }}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Select item' : '...'}
                                searchPlaceholder="Search..."
                                value={genreValue}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setGenreValue(item.value);
                                    setIsFocus(false);
                                }}
                                renderItem={(item) => {
                                    return (
                                        <View style={{ height: 40, width: '100%', backgroundColor: '#E1D9D1', paddingLeft: 16, justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text style={{ color: 'grey' }}>
                                                {
                                                    item.label
                                                }
                                            </Text>

                                        </View>
                                    )
                                }}

                            />



                        </View>

                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                        <Text>
                            Status
                        </Text>
                        <View style={{ flexDirection: 'row', flex: 1, rowGap: 5, columnGap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => handleChangeStatus('ongoing')} style={{ height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: status === 'ongoing' ? 'orange' : 'black', borderRadius: 10, borderColor: 'orange', borderWidth: 2, paddingHorizontal: 10 }}>
                                <Text>
                                    Ongoing
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleChangeStatus('completed')} style={{ height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: status === 'completed' ? 'orange' : 'black', borderRadius: 10, borderColor: 'orange', borderWidth: 2, paddingHorizontal: 10 }}>
                                <Text>
                                    Completed
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleChangeStatus('hiatus')} style={{ height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: status === 'hiatus' ? 'orange' : 'black', borderRadius: 10, borderColor: 'orange', borderWidth: 2, paddingHorizontal: 10 }}>
                                <Text>
                                    Hiatus
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleChangeStatus('cancelled')} style={{ height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: status === 'cancelled' ? 'orange' : 'black', borderRadius: 10, paddingHorizontal: 10, borderWidth: 2, borderColor: 'orange' }}>
                                <Text>
                                    Cancelled
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                    <View style={{ width: '100%', paddingVertical: 10, flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                        <Text>
                            Country
                        </Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, rowGap: 5, columnGap: 10 }}>
                            <TouchableOpacity onPress={() => handleChangeCountry('ja')} style={{ height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: country === "ja" ? 'orange' : 'black', borderRadius: 10, paddingHorizontal: 10 }}>
                                <Text>
                                    Japan
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleChangeCountry('ko')} style={{ height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: country === "ko" ? 'orange' : 'black', borderRadius: 10, paddingHorizontal: 10 }}>
                                <Text>
                                    Korea
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleChangeCountry('en')} style={{ height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: country === "en" ? 'orange' : 'black', borderRadius: 10, paddingHorizontal: 10 }}>
                                <Text>
                                    United States
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleChangeCountry('ch')} style={{ height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: country === "ch" ? 'orange' : 'black', borderRadius: 10, paddingHorizontal: 10 }}>
                                <Text>
                                    China
                                </Text>
                            </TouchableOpacity>




                        </View>

                    </View>
                    <View style={{ width: '100%', height: 50, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>Sap xep theo</Text>
                        <View style={{ width: 200 }}>
                            <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={data}
                                maxHeight={300}
                                itemContainerStyle={{ height: 40 }}
                                itemTextStyle={{ color: 'red' }}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Select item' : '...'}
                                searchPlaceholder="Search..."
                                value={OrderValue}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setOrderValue(item.value);
                                    setIsFocus(false);
                                }}
                                renderItem={(item) => {
                                    return (
                                        <View style={{ height: 40, width: '100%', backgroundColor: '#E1D9D1', paddingLeft: 16, justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text style={{ color: 'grey' }}>
                                                {
                                                    item.value
                                                }
                                            </Text>

                                        </View>
                                    )
                                }}

                            />

                        </View>

                    </View>

                </View>
                <FlatList onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent)) {
                        fetchMangas(currentPage)
                        setCurrentPage(prv => prv + 1)
                    }
                }} style={{ height: Dimensions.get('window').height * 80 / 100, backgroundColor: 'black', margin: 10, borderRadius: 10 }}
                    data={mangalist}
                    nestedScrollEnabled={true}
                    ListFooterComponent={
                        <View style={{ justifyContent: 'center', width: 380, marginTop: 10, alignItems: 'center' }}>
                            <ActivityIndicator></ActivityIndicator>

                        </View>
                    }
                    renderItem={({ item }) => (

                        <MangaItem name={item?.attributes?.title?.en} id={item.id} key={item.id}>
                            {

                                console.log(item + '---------------------------------------------')
                            }

                        </MangaItem>

                    )}
                    contentContainerStyle={{ width: '100%', flexWrap: 'wrap', flexDirection: 'row', rowGap: 10, paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'space-evenly' }}
                >

                    {/* <View style={{ width: '100%', flexWrap: 'wrap', flexDirection: 'row', rowGap: 10, paddingVertical: 10, paddingHorizontal: 10, justifyContent: 'space-evenly' }}>
                        {
                            mangalist.map((item) => (
                                <MangaItem name={item.attributes.title.en} id={item.id}>

                                </MangaItem>

                            ))
                        }
                    </View> */}





                </FlatList>
            </ScrollView>
        </SafeAreaView>
    )
}
export default DiscoveryScreen