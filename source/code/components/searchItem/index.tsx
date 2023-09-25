import axios from "axios"
import { useEffect, useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import CONSTS from "../../Consts/const"
import { withDecay } from "react-native-reanimated"
import { Skeleton } from "@rneui/themed"

type Prop = {
    mangaid: string,
    navigation: any
}

const SearchItem = (props: Prop) => {
    const [mangainfo, setMangainfo] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(CONSTS.CONSUMENET_BASE_URL + '/manga/mangadex/info/' + props.mangaid)
                setMangainfo(response.data)

            } catch (err) {
                console.log(err)
            }
        }
        fetchData()

    }, [])
    return (
        <TouchableOpacity onPress={() => { props.navigation.navigate('MangaInfoScreen', { mangaid: props.mangaid }) }}>
            <View style={{ width: '100%', height: 60, zIndex: 100, backgroundColor: 'rgba(255,255,255,0.8)', paddingHorizontal: 10, flexDirection: 'row', gap: 10 }}>
                {
                    mangainfo?.image ? <Image style={{ height: 50, aspectRatio: 12.8 / 18.2 }} source={{ uri: mangainfo?.image }}>

                    </Image> : <Skeleton height={50} width={50 / 18.2 * 12.8}></Skeleton>
                }

                <View style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.8)', justifyContent: 'space-between', paddingVertical: 5 }}>
                    <View style={{ width: '100%' }}>
                        {
                            mangainfo?.title ?
                                <Text style={{ fontWeight: '900', color: 'orange' }}>
                                    {
                                        mangainfo?.title
                                    }
                                </Text>

                                : <View style={{ gap: 5, width: '100%' }}>
                                    <Skeleton width={'90%'}></Skeleton>
                                    <Skeleton width={'40%'}></Skeleton>
                                </View>
                        }


                    </View>
                    <View style={{ width: '100%' }}>
                        {
                            mangainfo?.chapters ? <Text style={{ fontSize: 10, color: 'orange' }}>

                                {
                                    'Chapter ' + mangainfo?.chapters?.length
                                }
                            </Text> : <Skeleton width={"20%"}>

                            </Skeleton>
                        }


                    </View>
                </View>



            </View>
        </TouchableOpacity>
    )
}
export default SearchItem