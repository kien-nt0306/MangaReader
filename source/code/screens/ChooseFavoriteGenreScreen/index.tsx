import { SafeAreaView, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import ActionIcon from '../../../assets/svg/Action.svg'
import ComedyIcon from '../../../assets/svg/Comedy.svg'
import DetectiveIcon from '../../../assets/svg/Detective.svg'
import SliceOfLifeIcon from '../../../assets/svg/SliceOfLife.svg'
import MagicIcon from '../../../assets/svg/Magic.svg'
import FantasyIcon from '../../../assets/svg/Fantasy.svg'
import DramaIcon from '../../../assets/svg/Drama.svg'
import RomanceIcon from '../../../assets/svg/Romance.svg'
import HorrorIcon from '../../../assets/svg/Horror.svg'
import IsekaiIcon from '../../../assets/svg/Isekai.svg'
import { useState } from "react"


type Props = {
    navigation: any
}


type ChooseElementProps = {
    isChoosen?: boolean,
    genre: string
}

const ChooseComponent = (props: ChooseElementProps) => {
    return (
        <View style={{ width: 100, height: 100, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                {
                    props.genre
                }

            </Text>


        </View>
    )

}

const ChooseFavoriteGenreScreen = (props: Props) => {
    const LIST_OF_GENRE = [
        [
            'Action',
            'Comedy',
            'Drama'
        ]
        ,
        [
            'Isekai',
            'Magic',
            'SliceOfLife'
        ],
        [
            'Detective',
            'Fantasy',
            'Horror'
        ]
    ]
    const [listChoosen, setListChoosen] = useState<string[]>()
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 30 }}>
            <View style={{ height: '70%', gap: 20, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: 'orange', fontSize: 20 }}>
                        First, Choose your interested genre
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <TouchableOpacity onPress={() => {
                        let temp = listChoosen ? [...listChoosen] : []
                        if (temp.indexOf('Action') !== -1) {
                            temp = temp.filter((genre) => genre != 'Action')
                        } else {
                            temp.push('Action')
                        }
                        setListChoosen(temp)

                    }} style={{ borderColor: listChoosen ? listChoosen.indexOf('Action') !== -1 ? 'orange' : 'black' : 'black', borderWidth: 2, gap: 5, width: 100, height: 100, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'orange' }}>
                            Action

                        </Text>
                        <ActionIcon width={40} height={40}></ActionIcon>


                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        let temp = listChoosen ? [...listChoosen] : []
                        if (temp.indexOf('Comedy') !== -1) {
                            temp = temp.filter((genre) => genre != 'Comedy')
                        } else {
                            temp.push('Comedy')
                        }
                        setListChoosen(temp)

                    }} style={{ borderColor: listChoosen ? listChoosen.indexOf('Comedy') !== -1 ? 'orange' : 'black' : 'black', borderWidth: 2, gap: 5, width: 100, height: 100, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'orange' }}>
                            Comedy

                        </Text>
                        <ComedyIcon width={40} height={40}></ComedyIcon>


                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        let temp = listChoosen ? [...listChoosen] : []
                        if (temp.indexOf('Drama') !== -1) {
                            temp = temp.filter((genre) => genre != 'Drama')
                        } else {
                            temp.push('Drama')
                        }
                        setListChoosen(temp)

                    }} style={{ borderColor: listChoosen ? listChoosen.indexOf('Drama') !== -1 ? 'orange' : 'black' : 'black', borderWidth: 2, gap: 5, width: 100, height: 100, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'orange' }}>
                            Drama

                        </Text>
                        <DramaIcon width={40} height={40}></DramaIcon>


                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <TouchableOpacity onPress={() => {
                        let temp = listChoosen ? [...listChoosen] : []
                        if (temp.indexOf('Isekai') !== -1) {
                            temp = temp.filter((genre) => genre != 'Isekai')
                        } else {
                            temp.push('Isekai')
                        }
                        setListChoosen(temp)

                    }} style={{ borderColor: listChoosen ? listChoosen.indexOf('Isekai') !== -1 ? 'orange' : 'black' : 'black', borderWidth: 2, gap: 5, width: 100, height: 100, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'orange' }}>
                            Isekai
                        </Text>
                        <IsekaiIcon width={40} height={40}></IsekaiIcon>


                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        let temp = listChoosen ? [...listChoosen] : []
                        if (temp.indexOf('Magic') !== -1) {
                            temp = temp.filter((genre) => genre != 'Magic')
                        } else {
                            temp.push('Magic')
                        }
                        setListChoosen(temp)

                    }} style={{ borderColor: listChoosen ? listChoosen.indexOf('Magic') !== -1 ? 'orange' : 'black' : 'black', borderWidth: 2, gap: 5, width: 100, height: 100, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'orange' }}>
                            Magic
                        </Text>
                        <MagicIcon width={40} height={40}></MagicIcon>


                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        let temp = listChoosen ? [...listChoosen] : []
                        if (temp.indexOf('SliceOfLife') !== -1) {
                            temp = temp.filter((genre) => genre != 'SliceOfLife')
                        } else {
                            temp.push('SliceOfLife')
                        }
                        setListChoosen(temp)

                    }} style={{ borderColor: listChoosen ? listChoosen.indexOf('SliceOfLife') !== -1 ? 'orange' : 'black' : 'black', borderWidth: 2, gap: 5, width: 100, height: 100, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'orange' }}>
                            Slice Of Life

                        </Text>
                        <SliceOfLifeIcon width={40} height={40}></SliceOfLifeIcon>


                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <TouchableOpacity onPress={() => {
                        let temp = listChoosen ? [...listChoosen] : []
                        if (temp.indexOf('Detective') !== -1) {
                            temp = temp.filter((genre) => genre != 'Detective')
                        } else {
                            temp.push('Detective')
                        }
                        setListChoosen(temp)

                    }} style={{ borderColor: listChoosen ? listChoosen.indexOf('Detective') !== -1 ? 'orange' : 'black' : 'black', borderWidth: 2, gap: 5, width: 100, height: 100, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'orange' }}>
                            Detective

                        </Text>
                        <DetectiveIcon width={40} height={40}></DetectiveIcon>


                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        let temp = listChoosen ? [...listChoosen] : []
                        if (temp.indexOf('Fantasy') !== -1) {
                            temp = temp.filter((genre) => genre != 'Fantasy')
                        } else {
                            temp.push('Fantasy')
                        }
                        setListChoosen(temp)

                    }} style={{ borderColor: listChoosen ? listChoosen.indexOf('Fantasy') !== -1 ? 'orange' : 'black' : 'black', borderWidth: 2, gap: 5, width: 100, height: 100, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'orange' }}>
                            Fantasy

                        </Text>
                        <FantasyIcon width={40} height={40}></FantasyIcon>



                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        let temp = listChoosen ? [...listChoosen] : []
                        if (temp.indexOf('Horror') !== -1) {
                            temp = temp.filter((genre) => genre != 'Horror')
                        } else {
                            temp.push('Horror')
                        }
                        setListChoosen(temp)

                    }} style={{ borderColor: listChoosen ? listChoosen.indexOf('Horror') !== -1 ? 'orange' : 'black' : 'black', borderWidth: 2, gap: 5, width: 100, height: 100, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'orange' }}>
                            Horror

                        </Text>
                        <HorrorIcon width={40} height={40}></HorrorIcon>



                    </TouchableOpacity>

                </View>


            </View>
            <View>

                <TouchableOpacity disabled={listChoosen ? listChoosen.length === 0 ? true : false : true} style={{ backgroundColor: listChoosen ? listChoosen.length === 0 ? '#FFD580' : 'orange' : '#FFD580', width: 250, justifyContent: 'center', alignItems: 'center', height: 40, marginBottom: 20, borderRadius: 10 }} onPress={() => { props.navigation.navigate('Home') }}>
                    <Text style={{ fontWeight: '900', color: 'white' }}>Continue</Text>

                </TouchableOpacity>
                <TouchableOpacity disabled={listChoosen ? listChoosen.length === 0 ? false : true : false} style={{ backgroundColor: listChoosen ? listChoosen.length === 0 ? 'orange' : '#FFD580' : 'orange', width: 250, justifyContent: 'center', alignItems: 'center', height: 40, borderRadius: 10 }} onPress={() => { props.navigation.navigate('Home') }}>
                    <Text style={{ fontWeight: '900', color: 'white' }}>Skip for now</Text>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default ChooseFavoriteGenreScreen