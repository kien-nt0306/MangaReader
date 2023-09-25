import { Image, Text, View } from "react-native"
import TrashIcon from '../../../assets/svg/trash-can.svg'
import { TouchableOpacity } from "react-native-gesture-handler"
import { useEffect, useState } from "react"
import axios from "axios"
import CONSTS from "../../Consts/const"

type Prop = {
    authorid: string,
    navigation: any
}
const AuthorListItem = (props: Prop) => {
    const [authorInfo, setAuthorInfo] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(CONSTS.MANGADEX_BASE_URL + '/author/' + props.authorid)
                setAuthorInfo(response.data.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()

    }, [])
    return (
        <View style={{ width: '100%', height: '100%', flexDirection: 'row' }}>
            <View style={{ height: '100%', borderRadius: 1000, aspectRatio: 1, justifyContent: 'center', alignItems: 'center' }}>



                <Image source={{ uri: authorInfo?.attributes?.imageUrl ? authorInfo?.attributes?.imageUrl : 'https://picsum.photos/200/300' }} style={{ height: '80%', borderRadius: 1000, aspectRatio: 1 }}>


                </Image>

            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                <Text style={{ color: 'orange' }}>
                    {
                        authorInfo?.attributes?.name
                    }

                </Text>
                <TouchableOpacity onPress={() => { props.navigation.navigate('AuthorInfoScreen', { authorid: props.authorid }) }} style={{ zIndex: 10, width: 40, justifyContent: 'center', alignItems: 'center', height: 40 }}>
                    <TrashIcon width={32} height={32}>

                    </TrashIcon>

                </TouchableOpacity>

            </View>

        </View>
    )
}
export default AuthorListItem