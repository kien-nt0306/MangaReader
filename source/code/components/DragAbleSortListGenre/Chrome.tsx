import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { MARGIN } from "./Config";
import Tile from "./Tile";
import SortableList from "./SortableList";
import { storage } from "../../mmkv";
import CONSTS from "../../Consts/const";

const tiles = [
  {
    id: "google",
    uri: "https://google.com",
  },

  {
    id: "expo",
    uri: "https://expo.io",
  },
  {
    id: "facebook",
    uri: "https://facebook.com",
  },
  {
    id: "reanimated",
    uri: "https://docs.swmansion.com/react-native-reanimated/",
  },
  {
    id: "github",
    uri: "https://github.com",
  },
  {
    id: "rnnavigation",
    uri: "https://reactnavigation.org/",
  },
  {
    id: "youtube",
    uri: "https://youtube.com",
  },
  {
    id: "twitter",
    uri: "https://twitter.com",
  },
];

const DragAbleSortList = ({ navigation }) => {
  const [data, setData] = useState([])
  let tiles = JSON.parse(storage.getString(CONSTS.GENRE_LIKE_KEY) || '[]')
  useEffect(() => {
    tiles = JSON.parse(storage.getString(CONSTS.GENRE_LIKE_KEY) || '[]')
    return (() => {
      storage.set(CONSTS.GENRE_LIKE_KEY, tiles)
    })

  }, [])

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "black", paddingHorizontal: MARGIN }}
    >
      <SortableList
        editing={true}
        onDragEnd={(positions) =>
          console.log(JSON.stringify(positions, null, 2))
        }
      >
        {[...tiles].map((item, index) => (
          <Tile authorid={item} id={item} navigation={navigation}

          />
        ))}
      </SortableList>
    </SafeAreaView>
  );
};

export default DragAbleSortList;
