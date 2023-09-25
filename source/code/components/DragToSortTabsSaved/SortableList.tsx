import React, { ReactElement, useEffect } from "react";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import Item from "./Item";
import { COL, HEIGHT_SIZE, Positions, SIZE } from "./Config";
import { storage } from "../../mmkv";
import CONSTS from "../../Consts/const";

interface ListProps {
  children: ReactElement<{ id: string }>[];
  editing: boolean;
  onDragEnd: (diff: Positions) => void;
}

const List = ({ children, editing, onDragEnd }: ListProps) => {
  const scrollY = useSharedValue(0);
  const scrollView = useAnimatedRef<Animated.ScrollView>();
  const posFromStorage = JSON.parse(storage.getString(CONSTS.POSITION_MANGA_LIKED) ? storage.getString(CONSTS.POSITION_MANGA_LIKED) : 'null')
  const positions = posFromStorage ? posFromStorage : useSharedValue<Positions>(
    Object.assign(
      {},
      ...children.map((child, index) => ({ [child.props.id]: index }))
    )
  );

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y } }) => {
      scrollY.value = y;
    },
  });
  useEffect(() => {
    return (() => {
      storage.set(CONSTS.POSITION_MANGA_LIKED, JSON.stringify(positions))
    })

  }, [])

  return (
    <Animated.ScrollView
      onScroll={onScroll}
      ref={scrollView}
      contentContainerStyle={{
        height: Math.ceil(children.length / COL) * HEIGHT_SIZE,
      }}
      showsVerticalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={16}
    >
      {children.map((child) => {
        return (
          <Item
            key={child.props.id}
            positions={positions}
            id={child.props.id}
            editing={editing}
            onDragEnd={onDragEnd}
            scrollView={scrollView}
            scrollY={scrollY}
          >
            {child}
          </Item>
        );
      })}
    </Animated.ScrollView>
  );
};

export default List;
