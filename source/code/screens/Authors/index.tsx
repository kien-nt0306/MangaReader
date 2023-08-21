import { SafeAreaView, Text, TouchableOpacity } from "react-native"

type Props = {
    navigation: any
}

const Authors = (props: Props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('AuthorInfo')} style={{ backgroundColor: 'orange' }}>
                <Text>
                    JK Rowling
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Authors