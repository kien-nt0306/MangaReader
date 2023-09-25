import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import store from "../../redux/stores"
import LoginScreen from "../LoginScreen"
import { useEffect, useState } from "react"
const AccountScreen = ({navigation}) => {
    const [currentUser, setCurrentUser] = useState({})
    store.subscribe(() => {
        console.log('action dispatched')
        setCurrentUser(store.getState())
    })
    useEffect(() => {
        console.log('This is current user')
        console.log(currentUser)

    }, [currentUser])

    return (
        Object.keys(currentUser.user ? currentUser.user : {}).length === 0 ? <LoginScreen></LoginScreen> :
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FFD68A' }}>
                <View style={{ width: '100%', height: 80, backgroundColor: 'orange' }}>


                </View>
                <View style={{ width: 120, aspectRatio: 1, backgroundColor: 'green', borderRadius: 10000, marginTop: -30, alignSelf: 'center' }}>
                    <Image source={{ uri: currentUser.user.user.photo }} style={{ width: '100%', height: '100%', borderRadius: 10000 }}>

                    </Image>

                </View>
                <ScrollView contentContainerStyle={{ marginTop: 20, paddingHorizontal: 40, flex: 1, alignItems: 'center' }}>
                    <View style={{ paddingVertical: 10, width: '100%' }}>
                        <Text style={{ fontSize: 18, width: '40%', fontWeight: '600' }}> User name</Text>
                        <View style={{ backgroundColor: 'white', height: 50, borderRadius: 10, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'orange' }}> {currentUser.user.user.givenName}</Text>
                        </View>
                    </View>

                    <View style={{ paddingVertical: 10, width: '100%' }}>
                        <Text style={{ fontSize: 18, width: '40%', fontWeight: '600' }}> Email</Text>
                        <View style={{ backgroundColor: 'white', height: 50, borderRadius: 10, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'orange' }}> {currentUser.user.user.email}</Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 10, width: '100%' }}>
                        <Text style={{ fontSize: 18, width: '50%', fontWeight: '600' }}> User Full Name</Text>
                        <View style={{ backgroundColor: 'white', height: 50, borderRadius: 10, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'orange' }}> {currentUser.user.user.name}</Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 10, width: '100%' }}>
                        <Text style={{ fontSize: 18, width: '40%', fontWeight: '600' }}> Date of birth</Text>
                        <View style={{ backgroundColor: 'white', height: 50, borderRadius: 10, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'orange' }}> {currentUser.user.user.dob ? currentUser.user.user.dob : 'none'}</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={()=>navigation.navigate('SettingScreen')} style={{ flexDirection: 'row', paddingVertical: 10, width: '80%', justifyContent: 'center', marginTop: 20, backgroundColor: 'orange', borderRadius: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>
                            Settings
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10, width: '80%', justifyContent: 'center', marginTop: 20, backgroundColor: 'orange', borderRadius: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>
                            Log out
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
    )
}
export default AccountScreen