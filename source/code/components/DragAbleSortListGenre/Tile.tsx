import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { HEIGHT_SIZE, MARGIN, SIZE } from "./Config";
import AuthorListItem from "../AuthorListItem";
import TrashIcon from '../../../assets/svg/trash-can.svg'

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: HEIGHT_SIZE - 40,
    backgroundColor: '#E1D9D1',
    borderRadius: 10
  },
});
interface TileProps {
  authorid: string,
  navigation: any,
  id: string
}

const Tile = ({ authorid, navigation }: TileProps) => {
  return (
    <View style={styles.container}>

      <View style={{ width: '100%', height: '100%', flexDirection: 'row' }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
          <Text style={{ color: 'orange' }}>
            {
              authorid
            }

          </Text>
          <TouchableOpacity onPress={() => { props.navigation.navigate('AuthorInfoScreen', { authorid: props.authorid }) }} style={{ zIndex: 10, width: 40, justifyContent: 'center', alignItems: 'center', height: 40 }}>
            <TrashIcon width={32} height={32}>

            </TrashIcon>

          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
};

export default Tile;
