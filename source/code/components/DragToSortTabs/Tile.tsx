import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";

import { HEIGHT_SIZE, MARGIN, SIZE } from "./Config";
import { Image, Text } from "react-native";
import axios from "axios";
import CONSTS from "../../Consts/const";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    width: SIZE * 80 / 100,
    height: HEIGHT_SIZE * 80 / 100,
    backgroundColor: 'white',
    borderRadius: 10

  },
});
interface TileProps {
  id: string;
  uri: string;
  onLongPress: () => void;
}

const Tile = ({ uri }: TileProps) => {
  const [mangaInfo, setMangaInfo] = useState({})
  useEffect(() => {
    const fetchInfo = async () => {
      const response = await axios.get(CONSTS.CONSUMENET_BASE_URL + '/manga/mangadex/info/' + uri)
      setMangaInfo(response.data)
    }
    try {
      fetchInfo()
    } catch (err) {
      console.log(err)
    }


  }, [])
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{navigation.navigate('MangaInfoScreen',{mangaid: mangaInfo.id})}}>
        <View style={{ width: '100%', height: '100%' }}>
          <View style={{ height: SIZE * 80 / 100 / 12.8 * 18.2, borderWidth: 0.5, borderColor: 'grey', borderRadius: 10 }}>
            <Image source={{ uri: mangaInfo.image }} style={{ width: "100%", height: '100%', borderRadius: 10 }}>

            </Image>
          </View>
          <View style={{ gap: 5 }}>
            <Text style={{ color: 'orange', fontWeight: '600' }}>
              {
                mangaInfo.title
              }
            </Text>
            <Text style={{ color: 'orange', fontSize: 12 }}>
              Chapter {mangaInfo?.chapters?.length}
            </Text>
          </View>


        </View>
      </TouchableOpacity>



    </View>
  );
};

export default Tile;
