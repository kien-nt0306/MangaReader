import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import React = require('react');
import { Text, TouchableOpacity, View } from 'react-native';
import { Alert } from 'react-native';
import store from '../../redux/stores';
import Actions from '../../redux/actions';
const LoginScreen = () => {
    React.useEffect(() => {
        GoogleSignin.configure({
            webClientId: "84400994775-rva4ev9k669jfgvg3ql0droom73g4fgv.apps.googleusercontent.com",
            offlineAccess: true
        });
    }, [])
    const [user,setUser] = React.useState({})
    const GoogleSingUp = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const result = await GoogleSignin.signIn().then(result => { return result });
            return result
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                Alert.alert('User cancelled the login flow !');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                Alert.alert('Signin in progress');
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert('Google play services not available or outdated !');
                // play services not available or outdated
            } else {
                console.log(error)
            }
        }
    };
    const handleLogin = async () => {
        const result = await GoogleSingUp()
        console.log(result)
        store.dispatch({
            type: Actions.Login.type,
            payload: result
        })

    }
    return (
        <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={handleLogin} style={{ width: 100, height: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'orange' }}>Sign in with Google</Text>
            </TouchableOpacity>
        </View>
    )
}
export default LoginScreen
