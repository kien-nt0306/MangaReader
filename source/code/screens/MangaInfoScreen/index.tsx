import { Image, SafeAreaView, Text, View } from "react-native"
import HeartIcon from '../../../assets/svg/heart.svg'
import SaveIcon from '../../../assets/svg/bookmark.svg'
import { ScrollView } from "react-native"
import { withDecay } from "react-native-reanimated"
import { TouchableOpacity } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { useEffect, useState } from "react"
import CONSTS from "../../Consts/const"
import axios from "axios"
import { storage } from "../../mmkv"
import convertToPDF from "../../utils/convertImgLinksToPdf"
import saveImagesFromURLs from "../../utils/saveImageFromUrls"
const MangaInfoScreen = ({ navigation, route }) => {
    const { mangaName, desc, mangaid } = route.params
    
    const [mangaInfo, setMangaInfo] = useState()
    const [isLiked, setIsLiked] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    useEffect(() => {
        try {
            const fetchMangaInfo = async () => {
                const response = await axios.get(CONSTS.CONSUMENET_BASE_URL + '/manga/mangadex/info/' + mangaid)
                console.log(response.data)
                setMangaInfo(response.data)

            }
            fetchMangaInfo()

        } catch (err) {
            console.log(err)

        }


    }, [])
    useEffect(() => {
        if (!storage.contains(CONSTS.LIKE_KEY)) {
            setIsLiked(false)
        }
        else {
            const currentLiked = JSON.parse(storage.getString(CONSTS.LIKE_KEY))
            if (currentLiked.includes(mangaid)) {
                setIsLiked(true)

            } else {
                setIsLiked(false)
            }
        }
        if (!storage.contains(CONSTS.SAVE_KEY)) {
            setIsSaved(false)
        }
        else {
            const currentLiked = JSON.parse(storage.getString(CONSTS.SAVE_KEY))
            if (currentLiked.includes(mangaid)) {
                setIsSaved(true)

            } else {
                setIsSaved(false)
            }
        }
    }, [])

    const handleLike = () => {
        if (!storage.contains(CONSTS.LIKE_KEY)) {
            const temp = []
            temp.push(mangaid)
            storage.set(CONSTS.LIKE_KEY, JSON.stringify(temp))
            setIsLiked(true)
        }
        else {
            const currentLiked = JSON.parse(storage.getString(CONSTS.LIKE_KEY))
            if (currentLiked.indexOf(mangaid) !== -1) {
                // hande if in array

                const newArray = currentLiked.filter((item: string) => item !== mangaid);
                storage.set(CONSTS.LIKE_KEY, JSON.stringify(newArray))
                setIsLiked(false)

            } else {
                // handle if not in array
                currentLiked.push(mangaid)
                storage.set(CONSTS.LIKE_KEY, JSON.stringify(currentLiked))
                setIsLiked(true)

            }
        }

    }
    const handleSave = async () => {
        const list_image_links = []
        console.log()
        for (let i = 0; i < mangaInfo.chapters.length; i++) {
            const response = await axios.get(CONSTS.CONSUMENET_BASE_URL + '/manga/mangadex/read/' + mangaInfo.chapters[i].id)
            const data = response.data
            console.log(data)
            const chapterImage = []

            for (let j = 0; j < data.length; j++) {
                chapterImage.push(data[j].img)
            }
            await saveImagesFromURLs(chapterImage, mangaid, 'chapter_' + i)


        }


        if (!storage.contains(CONSTS.SAVE_KEY)) {
            const temp = []
            temp.push(mangaid)
            storage.set(CONSTS.SAVE_KEY, JSON.stringify(temp))
            setIsSaved(true)
        }
        else {
            const currentLiked = JSON.parse(storage.getString(CONSTS.SAVE_KEY))
            if (currentLiked.indexOf(mangaid) !== -1) {
                // hande if in array

                const newArray = currentLiked.filter((item: string) => item !== mangaid);
                storage.set(CONSTS.LIKE_KEY, JSON.stringify(newArray))
                setIsSaved(false)

            } else {
                // handle if not in array
                currentLiked.push(mangaid)
                storage.set(CONSTS.LIKE_KEY, JSON.stringify(currentLiked))
                setIsSaved(true)

            }
        }

    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ width: '100%', aspectRatio: 12.8 / 18.2, backgroundColor: 'blue' }}>
                <Image source={{ uri: mangaInfo?.image }} style={{ width: '100%', height: '100%' }} resizeMode="stretch"></Image>

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
                                {
                                    mangaInfo?.title
                                }
                            </Text>
                            <Text style={{ color: 'orange', fontSize: 12, fontStyle: 'italic' }}>
                                Chapter :{mangaInfo?.chapters?.length}| by Omaza Kanzaki
                            </Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={handleLike}>
                                <HeartIcon width={28} height={28} fill={isLiked ? 'red' : 'white'}></HeartIcon>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#E1D9D1', paddingHorizontal: 10, paddingBottom: 60 }}>
                        <Text style={{ color: 'orange' }}>
                            {
                                mangaInfo?.description?.en
                            }

                        </Text>

                    </View>
                </ScrollView>
                <LinearGradient colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']} style={{ height: 60, width: '100%', position: 'absolute', gap: 20, bottom: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleSave}>
                        <View style={{ height: 40, width: 40, borderRadius: 10000, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFD580' }} >
                            <SaveIcon width={32} height={32} fill={isSaved ? 'orange' : 'white'}></SaveIcon>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('MangaReaderScreen', { mangaid: mangaid, chapters: mangaInfo.chapters }) }} style={{ width: 180, height: 40, borderRadius: 10, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>

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