import { useEffect, useState } from "react"
import { SafeAreaView, TouchableOpacity } from "react-native"
import RNFS, { DocumentDirectoryPath } from 'react-native-fs'
import ChapterMangaItem from "../../components/ChapterMangaItem"
import { ScrollView } from "react-native-gesture-handler"

const SavedMangaScreen = ({ route, navigation }) => {
    const { mangaid } = route.params
    const [chapters, setChapters] = useState([])
    useEffect(() => {
        const getChapter = async () => {
            const fileList = await RNFS.readDir(DocumentDirectoryPath + '/manga/' + mangaid)
            console.log(fileList)
            setChapters(fileList)
        }
        getChapter()


    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ alignItems: 'center', gap: 10, paddingVertical: 10 }}>
                {
                    chapters.map((item) => (
                        <TouchableOpacity onPress={()=> navigation.navigate('OfflineReaderScreen',{mangaid:mangaid,chapter:item.name})} style={{ width: '100%', alignItems: 'center' }}>
                            <ChapterMangaItem chapter={item.name}>

                            </ChapterMangaItem>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>

        </SafeAreaView>
    )

}
export default SavedMangaScreen