import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { rgbaColor } from "react-native-reanimated"
import { Dropdown } from "react-native-element-dropdown"
import { useState } from "react";

type Props = {
    handleCloseModal: any,
    handleSaveSettings: any
}

const ReadingOptionModal = (props: Props) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'blue',
            padding: 16,
        },
        dropdown: {
            width: 150,
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
    const data_page_turning = [
        { label: 'Scrolling', value: 'Scrolling' },
        { label: 'Turning', value: 'Turning' },

    ];
    const [pageTuring, setPageTurning] = useState('Turning')
    const data_image_preloading = [
        { label: '1 page', value: '1 page' },
        { label: '2 pages', value: '2 pages' },
        { label: '3 pages', value: '3 pages' },
        { label: '4 pages', value: '4 pages' },
        { label: '5 pages', value: '5 pages' },

    ]
    const [dataImagePreloading, setDataImagePreloading] = useState('3 pages')
    const data_zoom = [
        { label: '100%', value: '100%' },
        { label: '125%', value: '125%' },
        { label: '90%', value: '90%' },
        { label: '150%', value: '150%' },

    ]
    const [dataZoom, setDataZoom] = useState('100%')
    const data_image_scaling = [
        { label: 'Fit Horizontal', value: 'Fit Horizontal' },
        { label: 'Fit Vertical', value: 'Fit Vertical' },
        { label: 'Fit Screen', value: 'Fit Screen' },


    ]
    const [dataImageScaling, setDataImageScaling] = useState('Fit Horizontal')
    const [value, setValue] = useState(null);
    const [isFocusPT, setIsFocusPT] = useState(false);
    const [isFocusIP, setIsFocusIP] = useState(false);
    const [isFocusZ, setIsFocusZ] = useState(false);
    const [isFocusIS, setIsFocusIS] = useState(false);
    return (
        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: rgbaColor(0, 0, 0, 0.5) }}>
            <View style={{ width: '80%', gap: 5, height: 300, backgroundColor: 'white', justifyContent: 'center', alignItems: 'stretch', paddingHorizontal: 16 }}>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black' }}>
                        Reader setting
                    </Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'black' }}>
                        Page Turning
                    </Text>
                    <Dropdown
                        style={[styles.dropdown, isFocusPT && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data_page_turning}
                        maxHeight={300}
                        itemContainerStyle={{ height: 40 }}
                        itemTextStyle={{ color: 'red' }}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocusPT ? pageTuring : '...'}
                        searchPlaceholder="Search..."
                        value={pageTuring}
                        onFocus={() => setIsFocusPT(true)}
                        onBlur={() => setIsFocusPT(false)}
                        onChange={item => {
                            setPageTurning(item.value);
                            setIsFocusPT(false);
                        }}
                        renderItem={(item) => {
                            return (
                                <View style={{ height: 40, width: '100%', backgroundColor: '#E1D9D1', paddingLeft: 16, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ color: 'grey' }}>
                                        {
                                            item.value
                                        }
                                    </Text>

                                </View>
                            )
                        }}

                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'black' }}>
                        Image Preloading
                    </Text>
                    <Dropdown
                        style={[styles.dropdown, isFocusIP && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data_image_preloading}
                        maxHeight={300}
                        itemContainerStyle={{ height: 40 }}
                        itemTextStyle={{ color: 'red' }}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocusIP ? dataImagePreloading : '...'}
                        searchPlaceholder="Search..."
                        value={dataImagePreloading}
                        onFocus={() => setIsFocusIP(true)}
                        onBlur={() => setIsFocusIP(false)}
                        onChange={item => {
                            setDataImagePreloading(item.value);
                            setIsFocusIP(false);
                        }}
                        renderItem={(item) => {
                            return (
                                <View style={{ height: 40, width: '100%', backgroundColor: '#E1D9D1', paddingLeft: 16, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ color: 'grey' }}>
                                        {
                                            item.value
                                        }
                                    </Text>

                                </View>
                            )
                        }}

                    />

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'black' }}>
                        Zoom
                    </Text>
                    <Dropdown
                        style={[styles.dropdown, isFocusZ && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data_zoom}
                        maxHeight={300}
                        itemContainerStyle={{ height: 40 }}
                        itemTextStyle={{ color: 'red' }}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocusZ ? dataZoom : '...'}
                        searchPlaceholder="Search..."
                        value={dataZoom}
                        onFocus={() => setIsFocusZ(true)}
                        onBlur={() => setIsFocusZ(false)}
                        onChange={item => {
                            setDataZoom(item.value);
                            setIsFocusZ(false);
                        }}
                        renderItem={(item) => {
                            return (
                                <View style={{ height: 40, width: '100%', backgroundColor: '#E1D9D1', paddingLeft: 16, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ color: 'grey' }}>
                                        {
                                            item.value
                                        }
                                    </Text>

                                </View>
                            )
                        }}

                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'black' }}>
                        Image Scaling
                    </Text>
                    <Dropdown
                        style={[styles.dropdown, isFocusIS && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data_image_scaling}
                        maxHeight={300}
                        itemContainerStyle={{ height: 40 }}
                        itemTextStyle={{ color: 'red' }}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocusIS ? dataImageScaling : '...'}
                        searchPlaceholder="Search..."
                        value={dataImageScaling}
                        onFocus={() => setIsFocusIS(true)}
                        onBlur={() => setIsFocusIS(false)}
                        onChange={item => {
                            setDataImageScaling(item.value);
                            setIsFocusIS(false);
                        }}
                        renderItem={(item) => {
                            return (
                                <View style={{ height: 40, width: '100%', backgroundColor: '#E1D9D1', paddingLeft: 16, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ color: 'grey' }}>
                                        {
                                            item.value
                                        }
                                    </Text>

                                </View>
                            )
                        }}

                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => props.handleSaveSettings({ IP: dataImagePreloading, IS: dataImageScaling, PT: pageTuring, Z: dataZoom })} style={{ width: 120, height: 40, backgroundColor: "orange", justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black' }}>
                            Save
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.handleCloseModal() }} style={{ width: 120, height: 40, backgroundColor: "orange", justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black' }}>
                            Close
                        </Text>

                    </TouchableOpacity>
                </View>




            </View>

        </View>
    )
}
export default ReadingOptionModal