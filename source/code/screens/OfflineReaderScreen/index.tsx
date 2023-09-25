import { useEffect, useState } from "react"
import { Image, SafeAreaView, ScrollView, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import RNFS, { DocumentDirectoryPath } from 'react-native-fs'


const RenderImage = ({ image }) => {
    return (
        <View style={{ width: '100%', aspectRatio: 12.8 / 18.2, backgroundColor: 'orange' }}>
            <Image style={{ width: '100%', height: '100%' }} source={{ uri: 'file://' + image }}>

            </Image>

        </View>
    )
}
type Props = {
    mangaid: string,
    chapter: string
}

const OfflineReaderScreen = ({ route }) => {
    const { mangaid, chapter } = route.params
    const [data, setData] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            const resultFile = await RNFS.readDir(DocumentDirectoryPath + '/manga/' + mangaid + '/' + chapter)
            console.log(resultFile)
            setData(resultFile)
        }
        fetchData()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <FlatList data={data} renderItem={(item) => <RenderImage image={item.item.path}></RenderImage>}>

            </FlatList>

        </SafeAreaView>
    )
}
export default OfflineReaderScreen