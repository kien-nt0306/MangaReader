import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { MARGIN } from "./Config";
import Tile from "./Tile";
import SortableList from "./SortableList";
import { storage } from "../../mmkv";
import CONSTS from "../../Consts/const";





const Chrome = () => {
  let tiles = JSON.parse(storage.getString(CONSTS.SAVE_KEY)||'[]')
  console.log(tiles)
  useEffect(() => {
    tiles = JSON.parse(storage.getString(CONSTS.SAVE_KEY)||'[]')
    return(()=>{
      storage.set(CONSTS.SAVE_KEY,tiles)
    })

  }, [])
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
            key={tile + "-" + index}
            id={tile + "-" + index}
            uri={tile}
          />
        ))}
      </SortableList>
    </SafeAreaView>
  );
};

export default Chrome;
