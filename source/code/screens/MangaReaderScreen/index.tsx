import { ActivityIndicator, FlatList, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Image } from "react-native"
import SettingIcon from '../../../assets/svg/setting.svg'
import { Dropdown } from "react-native-element-dropdown"
import React, { useEffect, useState } from "react"
import { Background } from "../../components/pagecurl/Background"
import { Project } from "../../components/pagecurl/Project"
import { useValue } from "@shopify/react-native-skia"
import ReadingOptionModal from "../../components/ReadingOptionModal/ReadingOptionModal"
import axios from "axios"
import { runOnJS, useAnimatedReaction, useSharedValue } from "react-native-reanimated"
import LeftIcon from '../../../assets/svg/left-chevron-svgrepo-com.svg'
import RightIcon from '../../../assets/svg/right-chevron-svgrepo-com.svg'
import CONSTS from "../../Consts/const"

const MangaReaderScreen = ({ route }) => {
    const { mangaid, chapters } = route.params
    const [currentChapter, setCurrentChapter] = useState(null)
    const [totalPage, setTotalPage] = useState(0)
    const [curPageState, setCurPageState] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [IS, setIS] = useState('')
    const [zoom, setZoom] = useState('100%')
    const [PT, setPT] = useState('Turning')
    const [IP, setIP] = useState('')
    const handleSettingChange = ({ IS, IP, Z, PT }) => {
        setIP(IP)
        setPT(PT)
        setZoom(Z)
        setIS(IS)

    }
    // const [currentMangaPage, setCurrentMangaPage] = useState(1)
    const currentMangaPage = useSharedValue(1)

    let projects: Project[] = [

    ];
    const [prj, setPrj] = useState<Project[]>()
    const RenderImage = ({ image }) => {
        return (
            <View style={{ width: '100%', aspectRatio: 12.8 / 18.2, backgroundColor: 'orange' }}>
                <Image style={{ width: '100%', height: '100%' }} source={{ uri: image }}>

                </Image>

            </View>
        )
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(CONSTS.CONSUMENET_BASE_URL + '/manga/mangadex/read/' + currentChapter)
            for (let i = response.data.length - 1; i >= 0; i--) {
                projects.push({
                    picture: response.data[i].img
                })

            }
            setPrj(projects)
            console.log(projects)
            setTotalPage(projects.length)
            console.log(projects.length)

            projects = []


        }
        setIsLoading(true)
        fetchData()
        currentPage.current = 0

        setIsLoading(false)
    }, [currentChapter])


    const [data1, setData1] = useState([])

    useEffect(() => {
        let temp = []
        console.log(chapters)
        chapters.map((item) => {
            temp.push({
                label: item.chapterNumber,
                value: item.id
            })


        })
        setData1(temp)
        setCurrentChapter(temp[0].value)



    }, chapters)







    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'blue',
            padding: 16,
        },
        dropdown: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 8,
            paddingHorizontal: 8,
        },
        icon: {
            marginRight: 5,
        },
        label: {
            position: 'absolute',
            backgroundColor: 'white',
            left: 22,
            top: 8,
            zIndex: 999,
            paddingHorizontal: 8,
            fontSize: 14,
        },
        placeholderStyle: {
            fontSize: 16,
            color: 'grey'
        },
        selectedTextStyle: {
            fontSize: 16,
            color: 'grey'
        },
        iconStyle: {
            width: 20,
            height: 20,
        },
        inputSearchStyle: {
            height: 40,
            fontSize: 16,
        },
    });
    const [modalVisible, setModalVisible] = useState(false);
    const currentPage = useValue(0)
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);





    const handleChangeCurrentPage = (data: number) => {
        'worklet'
        currentPage.current = data
        currentMangaPage.value = data
        console.log(data)
        runOnJS(setCurPageState)(data)
        console.log('change')
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 60, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderTopRightRadius: 2, borderBottomRightRadius: 2 }}>
                        <LeftIcon width={22} height={22} color={'white'}></LeftIcon>
                    </TouchableOpacity>
                    <View style={{ width: 140, height: 40, backgroundColor: '#E1D9D1', borderRadius: 5 }}>
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data1}
                            maxHeight={300}
                            itemContainerStyle={{ height: 40 }}
                            itemTextStyle={{ color: 'red' }}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={currentChapter}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setCurrentChapter(item.value);
                                setIsFocus(false);
                            }}
                            renderItem={(item) => {
                                return (
                                    <View style={{ height: 40, width: '100%', backgroundColor: '#E1D9D1', paddingLeft: 16, justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Text style={{ color: 'grey' }}>
                                            {
                                                'Chapter' + item.label
                                            }
                                        </Text>

                                    </View>
                                )
                            }}

                        />
                    </View>

                    <TouchableOpacity style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', borderTopLeftRadius: 2, borderBottomLeftRadius: 2, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                        <RightIcon width={22} height={22}></RightIcon>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }} style={{ position: 'absolute', right: 10, color: 'orange' }}>
                    <SettingIcon width={32} height={32} fill='grey'>

                    </SettingIcon>
                </TouchableOpacity>


            </View>
            {/* <ScrollView>
                <View>
                    <View style={{ width: '100%', aspectRatio: 12.8 / 18.2, backgroundColor: 'blue' }}>
                        <Image source={require('../../../assets/manga_pannel/Wotakoi.jpg')} style={{ width: '100%', height: '100%' }}>

                        </Image>


                    </View>
                    <View style={{ width: '100%', aspectRatio: 12.8 / 18.2, backgroundColor: 'blue' }}>
                        <Image source={require('../../../assets/manga_pannel/Wotakoi.jpg')} style={{ width: '100%', height: '100%' }}>

                        </Image>


                    </View>
                </View>
            </ScrollView> */}
            <View style={{ width: zoom, aspectRatio: 12.8 / 18.2 }}>
                {
                    isLoading ? <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                        <ActivityIndicator></ActivityIndicator>
                    </View> : PT === 'Turning' ? <Background>
                        {prj?.map((project, index) => {
                            return (
                                <Project
                                    changePageCb={handleChangeCurrentPage}
                                    index={index}
                                    currentPage={currentPage}
                                    key={project.picture}
                                    project={project}
                                />
                            );
                        })}
                    </Background> : <FlatList data={prj} inverted={true}
                        renderItem={(item) => <RenderImage image={item.item.picture}></RenderImage>}
                    >

                    </FlatList>

                }


            </View>
            <View>
                <Text style={{ color: 'black' }}>Page {totalPage - curPageState} / {totalPage}</Text>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <ReadingOptionModal handleCloseModal={() => setModalVisible(!modalVisible)} handleSaveSettings={handleSettingChange}>

                </ReadingOptionModal>
            </Modal>


        </SafeAreaView >
    )
}

export default MangaReaderScreen