import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import TopChartItem from "../../components/TopChartItem"
import { ScrollView } from "react-native-gesture-handler"
import { useEffect, useState } from "react"
import axios from "axios"
import CONSTS from "../../Consts/const"

const ChartScreen = ({navigation}) => {
    const [topdata, setTopdata] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(CONSTS.MANGADEX_BASE_URL + '/manga?order[rating]=desc&limit=10')

            const data = []

            for (let i = 0; i < response.data.data.length; i++) {
                data.push({
                    placement: i + 1,
                    id: response.data.data[i].id
                })
            }
            setTopdata(data)

        }
        fetchData()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ width: '100%', height: 80, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: '600' }}>
                    Top Chart
                </Text>

            </View>
            <ScrollView contentContainerStyle={{ gap: 20, marginVertical: 10, paddingHorizontal: 10 }}>
                {
                    topdata.map((item) => (
                        <TouchableOpacity onPress={() => { navigation.navigate('MangaInfoScreen', { mangaid: item.id }) }}>
                            <TopChartItem id={item.id}
                                placement={item.placement}
                            ></TopChartItem>
                        </TouchableOpacity>
                    ))
                }

            </ScrollView>
        </SafeAreaView>
    )
}

export default ChartScreen