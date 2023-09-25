import axios from "axios"
import { useEffect, useState } from "react"
import { Image, Text, View, VirtualizedList } from "react-native"
import CONSTS from "../../Consts/const"
import { Skeleton } from '@rneui/themed';

type Prop = {
    id: string,


}

const MangaItem = (props: Prop) => {
    const [mangaInfo, setMangaInfo] = useState({})
    useEffect(() => {
        try {
            console.log(props.id)
            const fetchMangaInfo = async () => {
                const response = await axios.get(CONSTS.CONSUMENET_BASE_URL + '/manga/mangadex/info/' + props.id)
                console.log(response.data)
                setMangaInfo(response.data)

            }
            fetchMangaInfo()

        } catch (err) {
            console.log(err)

        }


    }, [])
    return (
        <View style={{ width: 115, height: 240 }}>
            {
                mangaInfo.image ? <View style={{ height: 160, borderWidth: 0.5, borderColor: 'grey' }}>
                    <Image source={{ uri: mangaInfo.image }} style={{ width: "100%", height: '100%' }}>

                    </Image>
                </View>
                    : <Skeleton width={"100%"} height={160} circle={false}>

                    </Skeleton>
            }


            <View style={{ gap: 5, marginTop: 5 }}>
                {
                    mangaInfo?.title ? <Text style={{ color: 'orange', fontWeight: '600' }}>
                        {
                            mangaInfo?.title
                        }
                    </Text> : <View style={{ gap: 5 }}>
                        <Skeleton width={'100%'} height={12}></Skeleton>
                        <Skeleton width={'40%'} height={12}></Skeleton>
                    </View>
                }
                {
                    mangaInfo.chapters ?

                        <Text style={{ color: 'orange', fontSize: 12, marginTop: 5 }}>
                            Chapter : {mangaInfo.chapters?.length}
                        </Text> :
                        <Skeleton width={'60%'} height={12}></Skeleton>

                }

            </View>


        </View>
    )
}
export default MangaItem