import { Image, Text, View } from "react-native"
import FireIcon from '../../../assets/svg/fire-svgrepo-com.svg'
import { useEffect, useState } from "react"
import axios from "axios"
import CONSTS from "../../Consts/const"

type Props = {
    placement: number,
    id: string
}

const TopChartItem = ({
    placement,
    id
}: Props
) => {
    const [mangaInfo, setMangaInfo] = useState()

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await axios.get(CONSTS.CONSUMENET_BASE_URL + '/manga/mangadex/info/' + id)
                setMangaInfo(response.data)

            }
            fetchData()

        } catch (err) {
            console.log(err)
        }


    }, [id])
    return (
        <View style={{ width: '100%', height: 80, flexDirection: "row", backgroundColor: '#8B4000', borderRadius: 10 }}>
            <View style={{ width: 80, height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                {
                    placement <= 3 ? <View style={{ position: 'absolute' }}><FireIcon width={64} height={64} fill={'red'}>


                    </FireIcon></View> : <></>

                }
                <Text style={{ fontSize: 25, fontWeight: '900' }}>
                    {
                        placement
                    }
                </Text>

            </View>
            <View style={{ flex: 1, flexDirection: 'row', gap: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ maxWidth: 120 }}>
                    <Text >
                        {
                            mangaInfo?.title
                        }
                    </Text>
                </View>
                <Image source={{ uri: mangaInfo?.image }} style={{ height: '100%', width: '60%' }}>

                </Image>
            </View>
        </View>
    )
}
export default TopChartItem