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
      <AuthorListItem authorid={authorid} navigation={navigation}>

      </AuthorListItem>

    </View>
  );
};

export default Tile;
