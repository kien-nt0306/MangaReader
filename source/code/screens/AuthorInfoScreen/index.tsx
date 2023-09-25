import { center } from "@shopify/react-native-skia"
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native"
import { View } from "react-native"
import MangaItem from "../../components/MangaItem"
import ExpandIcon from '../../../assets/svg/expand.svg'
import { useEffect, useState } from "react"
import axios from "axios"
import CONSTS from "../../Consts/const"
import { storage } from "../../mmkv"

const AuthorInfoScreen = ({ route, navigation }) => {
    const data = [
        'https://picsum.photos/200/300',
        'https://picsum.photos/300/200',
        'https://picsum.photos/600/200'
    ]
    const { authorid } = route.params
    const [isLiked, setIsLiked] = useState(false)
    const [authorInfo, setAuthorInfo] = useState({})
    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await axios.get(CONSTS.MANGADEX_BASE_URL + '/author/' + authorid)
                setAuthorInfo(response.data.data)
            }
            fetchData()

        } catch (err) {
            console.log(err)
        }

    }, [])
    useEffect(() => {
        if (!storage.contains(CONSTS.AUTHOR_LIKE_KEY)) {
            setIsLiked(false)
        }
        else {
            const currentLiked = JSON.parse(storage.getString(CONSTS.AUTHOR_LIKE_KEY))
            if (currentLiked.includes(authorid)) {
                setIsLiked(true)

            } else {
                setIsLiked(false)
            }
        }

    }, [])
    const handleLike = () => {
        if (!storage.contains(CONSTS.AUTHOR_LIKE_KEY)) {
            const temp = []
            temp.push(authorid)
            storage.set(CONSTS.AUTHOR_LIKE_KEY, JSON.stringify(temp))
            setIsLiked(true)
        }
        else {
            const currentLiked = JSON.parse(storage.getString(CONSTS.AUTHOR_LIKE_KEY))
            if (currentLiked.indexOf(authorid) !== -1) {
                // hande if in array

                const newArray = currentLiked.filter((item: string) => item !== authorid);
                storage.set(CONSTS.AUTHOR_LIKE_KEY, JSON.stringify(newArray))
                setIsLiked(false)

            } else {
                // handle if not in array
                currentLiked.push(authorid)
                storage.set(CONSTS.AUTHOR_LIKE_KEY, JSON.stringify(currentLiked))
                setIsLiked(true)

            }
        }

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ width: '95%', borderRadius: 10, height: 80, padding: 10, backgroundColor: 'black', marginVertical: 10, marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 25 }}>
                        {
                            authorInfo?.attributes?.name
                        }
                    </Text>
                    <Text style={{ fontSize: 18 }}>
                        Romance, Horror, Adventure
                    </Text>
                </View>
                <View style={{ paddingVertical: 20, paddingHorizontal: 20, alignItems: 'center', marginHorizontal: 10, marginBottom: 10, backgroundColor: 'black', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{
                        width: '40%',
                        aspectRatio: 2 / 3,
                        justifyContent: 'center',
                        alignSelf: 'flex-start'


                    }}>
                        <Image source={{ uri: authorInfo?.attributes?.imageUrl ? authorInfo?.attributes?.imageUrl : 'https://picsum.photos/200/300' }} style={{ width: '100%', height: '100%' }}>

                        </Image>

                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', gap: 10 }}>

                        <Text style={{ textAlign: 'justify' }}>
                            {
                                authorInfo?.attributes?.biography ? authorInfo?.attributes?.biography?.en : 'This author not have any biography yet'
                            }
                        </Text>
                        <TouchableOpacity onPress={handleLike} style={{ backgroundColor: 'orange', height: 40, width: '100%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>
                                {
                                    isLiked ? ' Added to favorite' : 'Add to favorite'
                                }
                            </Text>

                        </TouchableOpacity>

                    </View>
                </View>
                <Text style={{ color: 'black', marginLeft: 10, marginVertical: 10, fontSize: 20 }}>
                    Known Works
                </Text>
                <ScrollView style={{ flexDirection: 'row', backgroundColor: '#E1D9D1', paddingVertical: 10 }} contentContainerStyle={{ marginLeft: 10, alignItems: 'center', gap: 20, paddingHorizontal: 20 }} horizontal={true}>

                    {
                        authorInfo?.relationships?.map((item) => (
                            item.type == 'manga' ?
                                <TouchableOpacity onPress={() => navigation.navigate('MangaInfoScreen', { mangaid: item.id })}>
                                    <MangaItem id={item.id}></MangaItem>
                                </TouchableOpacity> : <></>

                        ))
                    }

                </ScrollView>
                <Text style={{ color: 'black', marginLeft: 10, marginVertical: 10, fontSize: 20 }}>
                    Photo
                </Text>
                <View style={{
                    width: '40%',
                    aspectRatio: 2 / 3,
                    justifyContent: 'center',
                    alignSelf: 'flex-start',
                    marginLeft: 10


                }}>
                    <Image source={{ uri: authorInfo?.attributes?.imageUrl ? authorInfo?.attributes?.imageUrl : 'https://picsum.photos/200/300' }} style={{ width: '100%', height: '100%' }}>

                    </Image>

                </View>
                <ScrollView horizontal={true} contentContainerStyle={{ marginLeft: 20 }}>



                </ScrollView>
                <Text style={{ color: 'black', marginLeft: 10, marginVertical: 10, fontSize: 20 }}>
                    Personal details
                </Text>
                <View style={{ backgroundColor: 'black', marginHorizontal: 10, borderRadius: 10 }}>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 20, borderBottomColor: 'white', borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>
                            TWITER
                        </Text>
                        <Text>
                            {
                                authorInfo?.attributes?.twitter ? authorInfo?.attributes?.twitter : 'none'
                            }

                        </Text>
                    </View>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 20, borderBottomColor: 'white', borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>
                            PIXIV
                        </Text>
                        <Text>
                            {
                                authorInfo?.attributes?.pixiv ? authorInfo?.attributes?.pixiv : 'none'
                            }
                        </Text>
                    </View>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 20, borderBottomColor: 'white', borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>
                            WEBSITE
                        </Text>
                        <Text>
                            {
                                authorInfo?.attributes?.website ? authorInfo?.attributes?.website : 'none'
                            }
                        </Text>
                    </View>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 20, borderBottomColor: 'white', borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>
                            Create At
                        </Text>
                        <Text>
                            {
                                authorInfo?.attributes?.createdAt ? authorInfo?.attributes?.createdAt : 'none'
                            }
                        </Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default AuthorInfoScreen