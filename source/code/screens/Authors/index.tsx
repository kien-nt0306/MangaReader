import { SafeAreaView, SectionList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import SearchIcon from '../../../assets/svg/search.svg'
import { ScrollView } from "react-native-gesture-handler"
import { useEffect, useState } from "react"
import axios from "axios"
import CONSTS from "../../Consts/const"
import AuthorListItem from "../../components/AuthorListItem"
type Props = {
    navigation: any
}

const Authors = (props: Props) => {
    const DATA = [
        {
            title: 'Main dishes',
            data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
            title: 'Sides',
            data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
        {
            title: 'Drinks',
            data: ['Water', 'Coke', 'Beer'],
        },
        {
            title: 'Desserts',
            data: ['Cheese Cake', 'Ice Cream'],
        },
    ];
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            marginHorizontal: 16,
        },
        item: {
            backgroundColor: '#f9c2ff',
            padding: 20,
            marginVertical: 8,
        },
        header: {
            fontSize: 32,
            backgroundColor: '#fff',
        },
        title: {
            fontSize: 24,
        },
    });
    const [searchResult, setSearchResult] = useState([])
    const [queryInput, setQueryInput] = useState('')
    useEffect(() => {

        const fetchData = async () => {
            if (queryInput.length >= 2) {
                try {

                    const response = await axios.get(CONSTS.MANGADEX_BASE_URL + '/author?limit=10&name=' + queryInput)
                    setSearchResult(response.data.data)

                } catch (err) {
                    console.log(err)
                }

            }


        }
        fetchData()

    }, [queryInput])
    return (



        <SafeAreaView style={styles.container}>
            <View style={{ height: 80, backgroundColor: 'white', width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, flexDirection: 'row' }}>
                <TextInput onChangeText={(e) => setQueryInput(e)} cursorColor={'orange'} placeholder="Search your favorite manga, author, ..." placeholderTextColor={'gray'} style={{ paddingLeft: 5, color: 'orange', fontSize: 16, backgroundColor: '#E1D9D1', height: 50, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderWidth: 1, borderColor: 'orange', borderRightWidth: 0, flex: 1 }}>

                </TextInput>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: 50, borderTopRightRadius: 10, borderBottomRightRadius: 10, borderColor: 'orange', borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, backgroundColor: '#E1D9D1' }}>
                    <SearchIcon width={28} height={28} fill='orange'> </SearchIcon>
                </TouchableOpacity>

            </View>
            <ScrollView contentContainerStyle={{ width: '100%', height: '100%' }}>
                {
                    <View style={{ position: 'absolute', width: '100%', paddingHorizontal: 20, marginTop: 0, zIndex: 100 }}>
                        {
                            searchResult.map((item) => (
                                <View style={{ width: '100%', height: 60 }} key={item.id}>
                                    <AuthorListItem navigation={props.navigation} authorid={item.id}>

                                    </AuthorListItem>
                                </View>

                            ))

                        }
                    </View>

                }

            </ScrollView>

        </SafeAreaView>



    )
}

export default Authors