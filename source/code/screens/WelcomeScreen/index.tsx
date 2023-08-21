import { Image, Text, Touchable, TouchableOpacity, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { SafeAreaView } from "react-navigation"
const ThumbImage = require('../../../assets/ThumbImage.jpg')

type Props = {
    navigation: any
}

const WelcomeScreen = (props: Props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', }}>
            <View style={{ height: '80%', justifyContent: 'center', paddingHorizontal: 60, borderRadius: 10 }}>
                <View style={{ height: 100, justifyContent: 'center', marginBottom: 60, alignItems: 'flex-start', zIndex: 10, gap: 10 }}>
                    <Text style={{ color: "white", fontSize: 30, fontWeight: '900' }}>
                        Welcome to Manga Reader!
                    </Text>
                    <Text style={{ color: "white", fontSize: 18 }}>
                        Explore, Read, and Enjoy Your Favorite Manga.
                    </Text>
                </View>
                <View style={{ width: '100%', aspectRatio: 1, backgroundColor: 'green', marginBottom: 30 }}>
                    <Image style={{ width: '100%', height: '100%' }} resizeMode={'contain'} source={ThumbImage} />
                </View>
                <View style={{ height: 50, justifyContent: 'center', marginBottom: 10, alignItems: 'flex-end', zIndex: 10, gap: 10 }}>
                    <Text style={{ fontStyle: 'italic' }}>
                        "The world is full of stories, and from time to time, they permit themselves to be told."
                    </Text>
                    <Text>
                        - Osamu Tezuka
                    </Text>

                </View>

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'white', width: '80%', justifyContent: 'center', alignItems: 'center', height: 60, borderRadius: 10 }} onPress={() => props.navigation.navigate('ChooseFavoriteGenreScreen')}>
                    <Text style={{ color: 'orange', fontSize: 18, fontWeight: '700' }}>
                        Get started
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )

}

export default WelcomeScreen