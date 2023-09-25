import { SafeAreaView, Text } from "react-native"


type Props = {
    chapter: string
}
const ChapterMangaItem = (props: Props) => {
    return (
        <SafeAreaView style={{ width: '90%', height: 60, backgroundColor: 'orange', borderRadius: 10 }}>
            <Text>
                {
                    props.chapter
                }
            </Text>


        </SafeAreaView>
    )
}
export default ChapterMangaItem