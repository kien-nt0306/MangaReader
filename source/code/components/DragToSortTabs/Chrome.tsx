import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { MARGIN } from "./Config";
import Tile from "./Tile";
import SortableList from "./SortableList";
import { storage } from "../../mmkv";
import CONSTS from "../../Consts/const";

import { useIsFocused } from "@react-navigation/native";



const Chrome = () => {
  const [tiles, setTiles] = useState(JSON.parse(storage.getString(CONSTS.LIKE_KEY) || '[]'))
  const isFocused = useIsFocused()
  //let tiles = JSON.parse(storage.getString(CONSTS.LIKE_KEY)||'[]')
  console.log(tiles)
  useEffect(() => {
    //tiles = JSON.parse(storage.getString(CONSTS.LIKE_KEY)||'[]')
    if (isFocused)
      setTiles(JSON.parse(storage.getString(CONSTS.LIKE_KEY) || '[]'))
    console.log('element mounted')

  }, [isFocused])
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#E1D9D1", paddingHorizontal: MARGIN }}
    >
      <SortableList
        editing={true}
        onDragEnd={(positions) =>
          console.log(JSON.stringify(positions, null, 2))
        }
      >
        {[...tiles].map((tile, index) => (
          <Tile
            onLongPress={() => true}
            key={tile}
            id={tile}
            uri={tile}
          />
        ))}
      </SortableList>
    </SafeAreaView>
  );
};

export default Chrome;
