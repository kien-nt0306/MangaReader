import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Image } from "react-native"
import SettingIcon from '../../../assets/svg/setting.svg'
import { Dropdown } from "react-native-element-dropdown"
import React, { useState } from "react"

const MangaReaderScreen = () => {
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];
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
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 60, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <View style={{ width: 40, height: 40, backgroundColor: 'orange', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderTopRightRadius: 2, borderBottomRightRadius: 2 }}>

                    </View>
                    <View style={{ width: 140, height: 40, backgroundColor: '#E1D9D1', borderRadius: 5 }}>
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            maxHeight={300}
                            itemContainerStyle={{ height: 40 }}
                            itemTextStyle={{ color: 'red' }}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                            renderItem={(item) => {
                                return (
                                    <View style={{ height: 40, width: '100%', backgroundColor: '#E1D9D1', paddingLeft: 16, justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Text style={{ color: 'grey' }}>
                                            {
                                                'item ' + item.value
                                            }
                                        </Text>

                                    </View>
                                )
                            }}

                        />
                    </View>

                    <View style={{ width: 40, height: 40, backgroundColor: 'orange', borderTopLeftRadius: 2, borderBottomLeftRadius: 2, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>

                    </View>
                </View>
                <SettingIcon style={{ position: 'absolute', right: 10, color: 'orange' }} width={32} height={32} fill='grey'>

                </SettingIcon>


            </View>
            <ScrollView>
                <View style={{ width: '100%', aspectRatio: 12.8 / 18.2, backgroundColor: 'blue' }}>
                    <Image source={require('../../../assets/manga_pannel/Wotakoi.jpg')} style={{ width: '100%', height: '100%' }}>

                    </Image>


                </View>
                <View style={{ width: '100%', aspectRatio: 12.8 / 18.2, backgroundColor: 'blue' }}>
                    <Image source={require('../../../assets/manga_pannel/Wotakoi.jpg')} style={{ width: '100%', height: '100%' }}>

                    </Image>


                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default MangaReaderScreen